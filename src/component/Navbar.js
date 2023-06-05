import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
    <div className="" >
      <header >
        <h1 className="text-white">Calculator</h1>
      </header>
      <div className="d-flex justify-content-center px-1">
       
        <button className="btn btn-light mx-2  "><Link to="/">=</Link></button>
        <button className="btn btn-light mx-2"><Link to="/component">Convert</Link></button>
        <button className="btn btn-light mx-2"><Link to="/currency">$</Link></button>
      </div>
      
    </div>
    )
}
export default Navbar;