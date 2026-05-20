import React, { useState, useEffect } from 'react';
import './Orders.css';
import { db } from './firebase';
import { useStateValue } from "./StateProvider";
import Order from './Order';
import {
  collection,
  doc,
  query,
  orderBy,
  onSnapshot
} from 'firebase/firestore';

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      const userOrdersRef = collection(db, 'users', user.uid, 'orders');
      const q = query(userOrdersRef, orderBy('created', 'desc'));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        setOrders(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });

      // Cleanup on unmount
      return () => unsubscribe();
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className='orders'>
      <h1>Your Orders</h1>

      {/* 🔍 Debug output */}
      <pre style={{ fontSize: '10px', color: 'gray' }}>
        {JSON.stringify(orders, null, 2)}
      </pre>

      <div className="orders__order">
        {orders?.map(order => (
          <Order key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
