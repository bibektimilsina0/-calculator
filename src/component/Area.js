import { useState } from "react";
import Navbar from "./Navbar";

const Area = () => {
   let[result, setResult]=useState();
   let[number,setNumber]=useState();
   let[option1,setOption1]=useState('square inch');
   let[option2,setOption2]=useState('square inch');
  
   const convert=(e)=>{
   
      e.preventDefault();
      // const form=event.target;
      // const formData=new FormData(form);
      if(option1==="square inch"&& option2==="square inch"){
         setResult(number);
         
      }
      if(option1==="square inch"&& option2==="square foot"){
         console.log("bibek");
         let nm=number*0.00694444;
         setResult(`${nm} ft²`);
         
      }
      if(option1==="square inch"&& option2==="square yard"){
         console.log("bibek");
         let nm=number*0.000771605;
         setResult(`${nm} yd²`);
         
      }
      if(option1==="square inch"&& option2==="square mile"){
        
         let nm=number*2.491e-10;
         setResult(`${nm} mi²`);
         
      }
      if(option1==="square inch"&& option2==="square meter"){
       
         let nm=number*0.00064516;
         setResult(`${nm} m²`);
         
      }
      if(option1==="square inch"&& option2==="square kilometer"){
       
         let nm=number*6.4516e-10;
         setResult(`${nm} km²`);
         
      }
      if(option1==="square inch"&& option2==="square foot"){
       
         let nm=number*0.00694444;
         setResult(`${nm} ft²`);
         
      }
      if(option1==="square meter"){
         if( option2==="square meter"){
            let nm=number;
            setResult(`${nm} m²`);
         }
         if( option2==="square kilometer"){
            let nm=number*1e-6;
            setResult(`${nm} km²`);
         }
         if( option2==="square mile"){
            let nm=number*3.861e-7;
            setResult(`${nm} mi²`);
         }
         if( option2==="square inch"){
            let nm=number*1550;
            setResult(`${nm} in²`);
         }
         if( option2==="square yard"){
            let nm=number*1.19599;
            setResult(`${nm} yd²`);
         }
         if( option2==="square foot"){
            let nm=number*10.7639;
            setResult(`${nm} ft²`);
         }
      }else   if(option1==="square yard"){
         if( option2==="square meter"){
            let nm=number*0.836127;
            setResult(`${nm} m²`);
         }
         if( option2==="square kilometer"){
            let nm=number*8.3613e-7;
            setResult(`${nm} km²`);
         }
         if( option2==="square mile"){
            let nm=number*3.2283e-7;
            setResult(`${nm} mi²`);
         }
         if( option2==="square inch"){
            let nm=number*1296;
            setResult(`${nm} in²`);
         }
         if( option2==="square yard"){
            let nm=number;
            setResult(`${nm} yd²`);
         }
         if( option2==="square foot"){
            let nm=number*9;
            setResult(`${nm} ft²`);
         }
      } if(option1==="square foot"){
         if( option2==="square meter"){
            let nm=number*0.092903;
            setResult(`${nm} m²`);
         }
         if( option2==="square kilometer"){
            let nm=number*9.2903e-8;
            setResult(`${nm} km²`);
         }
         if( option2==="square mile"){
            let nm=number*3.587e-8;
            setResult(`${nm} mi²`);
         }
         if( option2==="square inch"){
            let nm=number*144;
            setResult(`${nm} in²`);
         }
         if( option2==="square yard"){
            let nm=number*0.111111;
            setResult(`${nm} yd²`);
         }
         if( option2==="square foot"){
            let nm=number;
            setResult(`${nm} ft²`);
         }
      }else   if(option1==="square mile"){
         if( option2==="square meter"){
            let nm=number*2.59e+6;
            setResult(`${nm} m²`);
         }
         if( option2==="square kilometer"){
            let nm=number*2.58999;
            setResult(`${nm} km²`);
         }
         if( option2==="square mile"){
            let nm=number;
            setResult(`${nm} mi²`);
         }
         if( option2==="square inch"){
            let nm=number*4.014e+9;
            setResult(`${nm} in²`);
         }
         if( option2==="square yard"){
            let nm=number*3.098e+6;
            setResult(`${nm} yd²`);
         }
         if( option2==="square foot"){
            let nm=number*2.788e+7;
            setResult(`${nm} ft²`);
         }
      }else   if(option1==="square kilometer"){
         if( option2==="square meter"){
            let nm=number*1e+6;
            setResult(`${nm} m²`);
         }
         if( option2==="square kilometer"){
            let nm=number;
            setResult(`${nm} km²`);
         }
         if( option2==="square mile"){
            let nm=number*0.386102;
            setResult(`${nm} mi²`);
         }
         if( option2==="square inch"){
            let nm=number*1.55e+9;
            setResult(`${nm} in²`);
         }
         if( option2==="square yard"){
            let nm=number*1.196e+6;
            setResult(`${nm} yd²`);
         }
         if( option2==="square foot"){
            let nm=number*1.076e+7;
            setResult(`${nm} ft²`);
         }
      }


      
   }
   return (
      <div className="container text-center">
      <Navbar/>
         <form  className="mt-3" id="CalculatorForm" name="CalculatorForm" onSubmit={convert}>
            <div className="calculatorTitle">Convert Area</div>
            <div className="calculatorInputs">
               <div className="calculatorInputGroup mb-2">
                  <label className="mx-2" htmlFor="input">From:</label> 
                  <select name="input" id="input" size="1" value={option1} onChange={(e)=>setOption1(e.target.value)}>
                     <option value="square inch">square inch (in²)</option>
                     <option value="square foot">square foot (ft²)</option>
                     <option value="square yard">square yard (yd²)</option>
                     <option value="square mile">square mile (mi²)</option>
                     <option value="square meter" >square meter (m²)</option>
                     <option value="square kilometer">square kilometer (km²)</option>
                  </select>
               </div>
               <div className="calculatorInputGroup">
                  <label  className="mx-2" htmlFor="output">To:&nbsp;&nbsp;&nbsp;&nbsp;</label>
                  <select name="output" id="output"  value={option2}  onChange={(e)=>setOption2(e.target.value)}>
                     <option value="square inch">square inch (in²)</option>
                     <option value="square foot" >square foot (ft²)</option>
                     <option value="square yard">square yard (yd²)</option>
                     <option value="square mile">square mile (mi²)</option>
                     <option value="square meter">square meter (m²)</option>
                     <option value="square kilometer">square kilometer (km²)</option>
                  </select>
               </div>
               <div className="calculatorInputGroup mt-3">
                  <label htmlFor="input_value">Value to Convert</label>
                  <br />
                  <input id="input_value" name="input_value"  onChange={(e)=>setNumber(e.target.value)} className="nmbr_real real" type="text" inputMode="decimal"  required="" />
               </div>
               <div className="mt-2">
                  <button type="submit" className="btn btn-md btn-secondary" >Convert</button>
               </div>
            </div>
            <div id="calculatorAnswer"> Answer:
               <br />
               <div id="answer"><br /><div className="alignCenter"></div><br />{result}</div>

            </div>

         </form>
      </div>
   );
}
export default Area;