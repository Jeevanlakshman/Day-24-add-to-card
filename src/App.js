
import { Badge, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  
  const data = [
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Fancy Product",
      price:"$40.00 - $80.00",
      rating: " ",
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Special Item",
      rating:" ⭐⭐⭐⭐⭐" ,
      price: " $18.00",
      
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Sale Item",
      price: "$25.00"
      
    },
    {
      productImage:
        "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
      productName: "Popular Item",
      price: "$40.00",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      productImage:
      "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName: "Sale Item",
    price: "$25.00",
   
    },
    {
      productImage:
      "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName: "Fancy Product",
    price:"$120.00 - $280.00",
   
    },
    {
      productImage:
      "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName: "Special Item",
    price: "$18.00",
    rating: "⭐⭐⭐⭐⭐",
    },
    {
      productImage:
      "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    productName: "Popular Item",
    price:"$40.00",
    rating:"⭐⭐⭐⭐⭐" ,
    
    },


  ];

  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <div className="cart-value">
      <Badge bg="success">
        CART {count}
      </Badge>
      </div>

     <div className="card-container">
      {data.map((prod, idx)=> <Cards
      idx = {idx}
      prod = {prod}
      setCount= {setCount}
      count = {count}
      />)}
     
      </div>
    </div>
  );
}

export default App;

function Cards({prod, idx, setCount, count}){
  const [show, setShow] = useState(false);

  function addToCart(){
    setShow(!show)
    setCount(count + 1)
  }

  function removeFromCart(){
    setShow(!show)
    setCount(count - 1)
  }

  return (
      <Card key = {idx} style={{ width: "18rem" }}>
        <Card.Img variant="top" src={prod.productImage} />
        <Card.Body>
        
          <Card.Title>{prod.productName}</Card.Title>
          <Card.Text>{prod.rating} </Card.Text>
          <Card.Text>{prod.price} </Card.Text>
          
          
      

         {!show ? <Button
           variant="primary"
           onClick={addToCart}
           >Add cart</Button> : ""}


           {show ? <Button 
           variant="danger"
           onClick={removeFromCart}
           >remove cart</Button> : ""}

        </Card.Body>
      </Card>
  )
}

