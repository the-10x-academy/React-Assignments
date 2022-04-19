import './App.css';


function App({ employee }) {
  return (
    <div className="container">
      <img className="employeeImg" src={employee.profileImg} alt="employee" />
      <div className="employeeNmae">{employee.name}</div>
      <EmployeeDetails detailName={"Location"}detail={employee.location}/>
      <EmployeeDetails detailName={"Blood Group"}detail={employee.bloodGroup}/>
      <EmployeeDetails detailName={"Age"}detail={employee.age}/>
      
      </div>
);
}

function EmployeeDetails({detailName, detail}){
  return (
    <div className="employeeDetailWrapper">
      <div className="employeeDetailLbl">{detailName}</div>
      <div className="employeeDetail">{detail}</div>
    </div>
  );
}


export default App;
