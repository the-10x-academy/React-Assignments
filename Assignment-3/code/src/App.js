import React from "react"
import "./App.css";

const arrow="<"

const App = (props)=>{
  const {information} = props
  const {Name,EmployeeID,Time,date,Email,Phone,Status,Door,time2} = information;
  return (
    <div className="site-container">
    {/* Start Your code here */}
      <nav className='child' id='customer-row'>
        <span className='arrow'>{arrow}</span>
        <span>
          <p><strong>{Name}</strong></p>
          <p style={{color:'gray'}}>{EmployeeID}</p>
        </span>
        <button>Print</button>
      </nav>

      <div className='child' id='customer-info'>
        <p><strong>Appointment{' '}</strong>{Time} ({date}) </p>
        <p><strong>Email {' '}</strong>{Email}</p>
        <p><strong>Phone {' '}</strong>{Phone}</p>
      </div>

      <div className='child' id='order-info'>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Door</th>
              <th>Time</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td><span id='bullet'>bull</span> {Status}</td>
              <td>{Door}</td>
              <td>{time2} <span style={{color:'gray'}}>({date})</span> </td>
            </tr>
            </tbody>
        </table>
      </div>

      <div className='child' id='product-list'>
        <button></button>
        <img src='https://www.w3schools.com/howto/img_avatar.png' alt=''/>
        <span>
        <h3>Commodi provident</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vitae inventore illo laudantium aliquid culpa totam fuga esse ab itaque minus, nemo, non quidem officia. Quisquam placeat officiis, natus exercitationem perspiciatis excepturi ipsa vitae explicabo nulla voluptates. Perferendis, cupiditate fugit.</p>
        </span>
        <p className='arr'>{'>'}</p>
      </div>
    </div>
  );

}


export default App;
