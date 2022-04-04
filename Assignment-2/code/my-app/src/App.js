import './App.css'

import './index.css';



function App(props) {
 const {employee}=props;
 

    
return(

  <div className="container">
    <img className='img1' src={employee.profileImg} alt='profileimg' />
    <div className='name'>{employee.name}</div>
    <p className='static'>Location</p>
    <div className='dynamic'>{employee.location}</div>
    <p className='static'>BloodGroup</p>
    <div className='dynamic'>{employee.bloodGroup}</div>
    <p className='static'>Age</p>
    <div className='dynamic'>{employee.age}</div>
  {/* Start your React code here */}
</div>

  
  
)
}



export default App;
