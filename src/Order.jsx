import React from 'react';
import './Order.css';
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from 'react-currency-format';

function Order({ order }) {
  if (!order || !order.data) return <p>Error: Invalid order data</p>;

  const created = order.data.created ?? 0;
  const basket = Array.isArray(order.data.basket) ? order.data.basket : [];
  const amount = typeof order.data.amount === 'number' ? order.data.amount : 0;

  return (
    <div className='order'>
      <h2>Order</h2>
      <p>{created ? moment.unix(created).format("MMMM Do YYYY, h:ma") : "No date"}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>

      {basket.map(item => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
}

export default Order;
