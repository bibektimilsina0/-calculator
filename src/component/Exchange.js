import { useState, useEffect } from "react";
import Currency from "./Currency";
import Navbar from "./Navbar";
const BASE_URL = "https://api.freecurrencyapi.com/v1/latest?apikey=97KB51r4Qhiyn1dZlrkpPWD9K75G0vYcZlfOPUfk";
const Exchange = () => {
  const [rates, setRates] = useState({});
  const[fromcurrency,setFromcurrency]=useState('USD');
  const[tocurrency,setTocurrency]=useState('USD');
  const [amount, setAmount]=useState();
  const [result, setResult]=useState();

 

  useEffect(() => {
    
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRates(data.data)
      })
  }, []);

  
  const convert=(fromcurrency ,tocurrency,amount)=>{
   
    const fromrate=rates[fromcurrency];
    const torate=rates[tocurrency];
    
    const convert1=(amount/fromrate)* torate;

    setResult(convert1);
  }

  return (
    <div className="text-center text-white">
        <Navbar/>
      <h1>convert</h1>
      <form action="" >
        <input type="number" value={amount}    onChange={(e)=>{
            e.preventDefault();
            setAmount(e.target.value)
          convert(fromcurrency,tocurrency,amount)} }     />
        <select  value={fromcurrency} onChange={(e)=>setFromcurrency(e.target.value)}>
        
        {
          Object.keys(rates).map((currency)=>{
            return(
            <option key={currency} value={currency}>{currency}</option>
            )
          })
        }

        </select>
        <div>=</div>
       
        <input type="number"  value={result}         />
        <select value={tocurrency} onChange={(e)=>setTocurrency(e.target.value)}>
        {
          Object.keys(rates).map((currency)=>{
            return(
            <option key={currency} value={currency}>{currency}</option>
            )
          })
        }
        </select>
        
      </form>
      <Currency/>
    </div>
  )

}
export default Exchange;