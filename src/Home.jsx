import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src="public/dist/black friday sale.avif"alt=""/>
        <div className="home_row">
           <Product
           id="12345"
           title="the lean startup "
           price={29.99}
           image="https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg"
           rating={3}
           />
             <Product
             id="1234"
           title="the lean startup"
           price={29.99}
           image="https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL.jpg"  
           rating={3}
           />
        </div>
        <div className="home_row">
        <Product
           id="123"
           title="the lean startup"
           price={29.99}
           image="https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL.jpg" 
           rating={3}
           />
          <Product
          id="12"
           title="the lean startup"
           price={29.99}
           image="https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg"
           rating={3}
           />
          <Product
          id="19"
           title="the lean startup"
           price={29.99}
           image="https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg" 
           rating={3}
           />
            </div>
            <div className="home_row">
            <Product
            id="18"
           title="the lean startup"
           price={29.99}
           image="https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg
"

           rating={3}
           />
            </div>
      </div>
    </div>
  )
}

export default Home
