import logo from './logo.svg';
import './App.css';



function App(props) {
  const {employee}=props;
    
return(
  <div className="container">
  {

  /* Start your React code here */ 
  <div className="box">

    <div className="image">
      <img src={employee.profileImg} alt= "" className= "profile-image"></img>
    </div>

    <div className="main_name">
      <p className="name">{employee.name}</p>
    </div>

    <div className="Address">
      <p>Location</p>
      <h3>{employee.location}</h3>
    </div>

    <div className="BloodGroup">
      <p>Blood Group</p>
      <h3>{employee.bloodGroup}</h3>
    </div>

    <div className="age">
      <p>Age</p>
      <h3>{employee.age}</h3>
    </div>
    
    </div>


  }
</div>

)

}



export default App;
