import React from 'react';
import './App.css';
import CustomerInfo from './Components/Customer-info';
import OrderInfo from './Components/Order-info';
import ProductList from './Components/Product-list';
import Header from './Components/Header';

const details ={
  name: "Alan Ford",
  EmployeeID:"00005152",
  email:"alan.form@email.nl",
  phone: "+31123456789",
  Appointment: "9:00 (24-05-2016)",
  Status: "In progress",
  Door: "Mark",
  time: "10:30 (25-05-2016)",
  image: "https://www.w3schools.com/howto/img_avatar.png",
  product_name: "Boltart Bosbessen",
  product_description:"This is some random description about the product mentioned above",
}
var arrow="<"
function App() {
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <Header object={details}/>
    <CustomerInfo object={details} />
    <OrderInfo object={details} />
    <ProductList object={details} />
    <arrow object={arrow}></arrow>
    </div>
  );
}

export default App;
