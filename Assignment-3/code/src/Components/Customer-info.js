
function CustomerInfo(props) {
    const{object}=props
    return (
        <div className="CustomerInfo">
            <div className="text"><b>Appointment</b>: {object.Appointment}</div>
            <div className="text"><b>Email</b>: {object.email}</div>
            <div className="text"><b>Phone</b>: {object.phone}</div>
        </div>
      );
    }
export default CustomerInfo;