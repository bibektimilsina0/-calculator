import { useState } from "react";
import Navbar from "./Navbar";
const Temperature = () => {
    let[result, setResult]=useState();
    let[number,setNumber]=useState();
    let[option1,setOption1]=useState('celc');
    let[option2,setOption2]=useState('celc');
    const tempcalc = (e) => {
        e.preventDefault();
        if(option1==="celc"){
            if(option2==="celc"){
                let tm=number;
                setResult(`${tm} °Celsius `);
            
            }
            if(option2==="fren"){
                let tm=(number*9/5)+32;
                setResult(`${tm} °Fahrenheit`);
            
            }
            if(option2==="kelvin"){
                let tm=number+273.15;
                setResult(`${tm} Kelvin `);
            
            }
        }else  if(option1==="fren"){
            if(option2==="celc"){
                let tm=((number-32)*(5/9));
                setResult(`${tm} °Celsius `);
            
            }
            if(option2==="fren"){
                let tm=number;
                setResult(`${tm} °Fahrenheit`);
            
            }
            if(option2==="kelvin"){
                let tm=((number-32)*(5/9))+273.15;
                setResult(`${tm} Kelvin `);
            
            }
    }else  if(option1==="kelvin"){
        if(option2==="celc"){
            let tm=number-273.15;
            setResult(`${tm} °Celsius `);
        
        }
        if(option2==="fren"){
            let tm=(number-273.15)*9/5+32;
            setResult(`${tm} °Fahrenheit`);
        
        }
        if(option2==="kelvin"){
            let tm=number;
            setResult(`${tm} Kelvin `);
        
        }
}
}
    return (
        <div className="container-fluid text-center text-white">
            <Navbar/>
            <div className="mt-3">
            <form className="tempcalc" onSubmit={tempcalc}>
            <div className="fs-4 pb-3">Convert Temperature</div>
            <div className="tempInputs">
                <div className="tempInputGroup mb-1">
                    <label className="mx-2" htmlFor="input">From:</label>
                    <select name="input" id="input" size="1" value={option1} onChange={(e) => setOption1(e.target.value)}>
                        <option value="celc">°Celsius</option>
                        <option value="fren">°Fahrenheit</option>
                        <option value="kelvin">°Kelvin</option>
                    </select>
                </div>
                <div className="tempInputGroup">
                    <label  className="mx-2 mb-2" htmlFor="output">To:&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <select name="output" id="output" value={option2} onChange={(e) => setOption2(e.target.value)}>

                        <option value="celc">°Celsius</option>
                        <option value="fren">°Fahrenheit</option>
                        <option value="kelvin">°Kelvin</option>
                    </select>
                </div>
                <div className="tempInputGroup mb-2">
                  <label htmlFor="input_value">Value to Convert</label>
                  <br />
                  <input id="input_value" name="input_value"  onChange={(e)=>setNumber(e.target.value)} className="nmbr_real real" type="text" inputMode="decimal"  required="" />
               </div>
               <div>
                  <button type="submit" className="btn btn-md btn-secondary">Convert</button>
               </div>
            </div>
            <div id="calculatorAnswer"> Answer:
               <br />
               <div id="answer"><br /><div className="alignCenter"></div><br />{result}
               </div>
               </div>
            </form>
            </div>
        </div>
    )
    
}
export default Temperature;