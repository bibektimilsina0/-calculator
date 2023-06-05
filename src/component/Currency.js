
import { useState } from "react";

const Currency =()=>{
   let[result, setResult]=useState();
   let[number,setNumber]=useState();
   let[option1,setOption1]=useState('nepal');
   let[option2,setOption2]=useState('nepal');
   const currrencycalc = (e) => {
      e.preventDefault();
      if(option1==="nepal"){
         let nm;
         if(option2==="nepal"){
         nm=number;
         setResult(`${nm} NPR`);
         }
         if(option2==="usd"){
            nm=number*0.0076;
            setResult(`${nm} USD`);
         }
         if(option2==="inr"){
            nm=number*0.625;
            setResult(`${nm} INR`);
         }
         if(option2==="euro"){
            nm=number*0.0071;
            setResult(`${nm} EUR`);
         } if(option2==="jpn"){
            nm=number*0.9993;
            setResult(`${nm} JPY`);
         }
      }else if(option1==="usd"){
         let nm;
         if(option2==="nepal"){
         nm=number*132.35;
         setResult(`${nm} NPR`);
         }
         if(option2==="usd"){
            nm=number;
            setResult(`${nm} USD`);
         }
         if(option2==="inr"){
            nm=number*82.715;
            setResult(`${nm} INR`);
         }
         if(option2==="euro"){
            nm=number*0.9371;
            setResult(`${nm} EUR`);
         } if(option2==="jpn"){
            nm=number*132.26;
            setResult(`${nm} JPY`);
         }
      }else if(option1==="inr"){
         let nm;
         if(option2==="nepal"){
         nm=number*1.6001;
         setResult(`${nm} NPR`);
         }
         if(option2==="usd"){
            nm=number*0.0121;
            setResult(`${nm} USD`);
         }
         if(option2==="inr"){
            nm=number;
            setResult(`${nm} INR`);
         }
         if(option2==="euro"){
            nm=number*0.0113;
            setResult(`${nm} EUR`);
         } if(option2==="jpn"){
            nm=number*1.5988;
            setResult(`${nm} JPY`);
         }
      }else if(option1==="euro"){
         let nm;
         if(option2==="nepal"){
         nm=number*141.2222;
         setResult(`${nm} NPR`);
         }
         if(option2==="usd"){
            nm=number*1.0671;
            setResult(`${nm} USD`);
         }
         if(option2==="inr"){
            nm=number*88.1149;
            setResult(`${nm} INR`);
         }
         if(option2==="euro"){
            nm=number;
            setResult(`${nm} EUR`);
         } if(option2==="jpn"){
            nm=number*141.12;
            setResult(`${nm} JPY`);
         }
      }else if(option1==="jpn"){
         let nm;
         if(option2==="nepal"){
         nm=number*1.0007;
         setResult(`${nm} NPR`);
         }
         if(option2==="usd"){
            nm=number*0.0076;
            setResult(`${nm} USD`);
         }
         if(option2==="inr"){
            nm=number*0.6255;
            setResult(`${nm} INR`);
         }
         if(option2==="euro"){
            nm=number*0.0071;
            setResult(`${nm} EUR`);
         } if(option2==="jpn"){
            nm=number;
            setResult(`${nm} JPY`);
         }
      }
   }
 return(
    <div className="text-center text-white
    ">
        
         <form className="currrencycalc" onSubmit={currrencycalc}>
            <div className="fs-3  mt-2 mb-3">Convert Currency</div>
            <div className="currencyInputs">
                <div className="mb-2">
                    <label className="mx-2" htmlFor="input">From:</label>
                    <select name="input" id="input" size="1" value={option1} onChange={(e) => setOption1(e.target.value)}>
                        <option value="nepal">Nepalese Rupee</option>
                        <option value="usd">United States Dollar</option>
                        <option value="inr">Indian Rupee</option>
                        <option value="euro">Euro</option>
                        <option value="jpn">Japanese Yen</option>
                    </select>
                </div>
                <div className="currencyInputGroup">
                    <label  className="mx-2" htmlFor="output">To:&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <select name="output" id="output" value={option2} onChange={(e) => setOption2(e.target.value)}>

                    <option value="nepal">Nepalese Rupee</option>
                        <option value="usd">United States Dollar</option>
                        <option value="inr">Indian Rupee</option>
                        <option value="euro">Euro</option>
                        <option value="jpn">Japanese Yen</option>
                    </select>
                </div>
                <div className="currencyInputGroup">
                  <label className="mb-2" htmlFor="input_value">Value to Convert</label>
                  <br />
                  <input id="input_value" name="input_value"  onChange={(e)=>setNumber(e.target.value)} className="nmbr_real real" type="text" inputMode="decimal"  required="" />
               </div>
               <div>
                  <button className="mt-2" type="submit" >Convert</button>
               </div>
            </div>
            <div id="currencyAnswer"> Answer:
               <br />
               <div id="answer"><br /><div className="alignCenter"></div><br />{result}
               </div>
               </div>
            </form>
          
    </div>
 )
}
export default Currency;