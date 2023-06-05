import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Component=()=>{
    return(
        <div className="container-fluid text-center ">
             <Navbar/>
             <div className="mt-5 ">
             <h3 className="text-white">Convert</h3>
             <button className="btn btn-lg btn-info mx-2"> <Link to="/component/temperature" className="text-success">Temperature</Link></button> 
            <button className="btn btn-lg btn-info"> <Link to="/component/area" className="text-success">Area</Link></button> 
                
             </div>
            
             
        </div>
     );
}
export default Component;