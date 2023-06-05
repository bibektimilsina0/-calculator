import { useState } from "react";
import Navbar from "./component/Navbar";

const Home = () => {
    let [calc, setCalc] = useState("");
    const update = (event) => {
   
        setCalc(calc.concat(event.target.value))
    

    }
    const clear=()=>{
       setCalc(calc.slice(0,calc.length-1));

    }
    const clearAll=()=>{
        setCalc("");
        
    }
    const calculate=()=>{
        try{
         
            setCalc(eval(calc).toString());
        }catch(err){
            setCalc("Error")
        }
     

    }
    return (
        <div className="container-fluid text-primary text-center  ">
            <Navbar/>
            <div className=" border border-warning position-absolute top-50 start-50 translate-middle px-2 py-2 mt-1 bg-light " >
            <div className=" ">
        
                <form >
                <input className="text-end" type="text" placeholder="0" value={calc} />
                </form>
               
            </div>
            <div>
                <div className="my-2">
                    <button className="btn btn-md btn-danger text-light mx-1"  onClick={clearAll}>AC</button>
                    <button className="btn btn-md btn-danger text-light mx-1" onClick={clear}>C</button>
                    <button className="btn btn-md btn-secondary text-light mx-1" value={'%'} onClick={update}>%</button>
                    <button className="btn btn-md btn-secondary text-light mx-1" value={'/'} onClick={update}>&divide;</button>
                </div>
                <div className="my-2">
                    <button className="btn btn-md btn-secondary text-light mx-1" value={7} onClick={update}>7</button>
                    <button className="btn btn-md btn-secondary text-light mx-1" value={8} onClick={update}>8</button>
                    <button className="btn btn-md btn-secondary text-light mx-1" value={9} onClick={update}>9</button>
                    <button className="btn btn-md btn-secondary text-light mx-1" value={'*'} onClick={update}>&times;</button>
                </div>
                <div className="my-2">
                    <button className="btn btn-md btn-secondary text-light mx-1" value={4} onClick={update}>4</button>
                    <button className="btn btn-md btn-secondary text-light mx-1" value={5} onClick={update}>5</button>
                    <button className="btn btn-md btn-secondary text-light mx-1" value={6} onClick={update}>6</button>
                    <button className="btn btn-md btn-secondary text-light mx-1" value={'-'} onClick={update}>-</button>
                </div>
                <div className="my-2">
                    <button className="btn btn-md btn-secondary text-light mx-1" value={1} onClick={update}>1</button>
                    <button className="btn btn-md btn-secondary text-light mx-1" value={2} onClick={update}>2</button>
                    <button className="btn btn-md btn-secondary text-light mx-1" value={3} onClick={update}>3</button>
                    <button className="btn btn-md btn-secondary text-light mx-1" value={'+'}  onClick={update}>+</button>
                </div>
                <div className="my-2">
                    <button className="btn btn-md btn-secondary text-light mx-1" value={0} onClick={update}>0</button>
                    <button className="btn btn-md btn-secondary text-light mx-1" value={'.'} onClick={update}>.</button>
                    {/* <button  className="btn btn-md btn-secondary text-light mx-1"></button> */}
                  
                    <button className="btn btn-lg btn-primary text-light mx-1" value={'='}  onClick={calculate}>=</button>
              
                </div>
            </div>
            </div>
        </div>
    )
}
export default Home;