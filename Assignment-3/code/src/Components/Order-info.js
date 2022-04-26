function OrderInfo(props) {
    const{object}=props
    return (
      <div className="OrderInfo">
          <div className="status">
            <div><b>Status</b></div>
            <div><span>&#9679;</span>{object.Status}</div> 
          </div>
          <div className="door">
            <div><b>Door</b></div>
            <div>{object.Door}</div> 
          </div>
          <div className="time">
            <div><b>Time</b></div>
            <div>{object.time}</div> 
          </div>
      </div>
    );
  }
export default OrderInfo;