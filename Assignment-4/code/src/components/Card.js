function Header(props) {
    const{"name","location","likes","description","PostImage","date"}=props
    return (
      <div className="Header">
        <div className="name">{object.name}</div>
        <div className="id">{object.EmployeeID}</div>
        <div className="arrow">
        <span>{object.arrow}</span>
        </div>
        <div className="btn">
        <button>Print</button>
        </div>   
      </div>
    );
  }
export default Header;