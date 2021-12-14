import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
     <div className="content-block"> 
   <img className="avatar" src={employee.profileImg} alt={employee.name} />
 </div>
 <div className="content-block"> 
   <label className="jumbotron">{employee.name}</label>
 </div>
 <div className="content-block"> 
 <p className="labels">Location: </p>
 <label>{employee.location}</label>
</div>
<div className="content-block"> 
   <p className="labels">Blood Group: </p>
   <label>{employee.bloodGroup}</label>
 </div>
 <div className="content-block"> 
 <p className="labels">Age: </p>
 <label>{employee.age}</label>
</div>
</div>
)
}



export default App;
