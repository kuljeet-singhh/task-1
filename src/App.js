
import './App.css';
import { useState } from 'react';

function App() {
// state to store input 
  const [input,setInput ] = useState("");
// state to store list items
  const [items , setItems] = useState([]);
// state to store validation message 
  const [message , setMessage] = useState("");
// state to track  if input is valide 
  const [isValide , setIsValide] = useState("false");

const validateInput=(value)=>{
// check space 
if(value!==value.trim()){
  setMessage("no spaces allowed")
  setIsValide(false)
  return;
}
// minimum length check 
if( value.length<3){
  setMessage("Mimimum 3 characters required")
  setIsValide(false)
  return;
}

// number check
 if (/\d/.test(value)) {
      setMessage("Numbers are not allowed");
      setIsValide(false);
      return;
    }

    //if all validations pass 
    setMessage("look good ")
    setIsValide(true)
 
}
//handle input change 
const handleChange =(e)=>{

  const value =e.target.value;
  
  setInput(value);
  validateInput(value);
}
const handleAdd=()=>{
  console.log("check add is valid ", isValide)
  if (!isValide) return;
   setItems([...items, input]);
   setInput("")
   setMessage("")
   setIsValide(false)
}

  return (
    <div className="App">
        <div style={{ maxWidth: "400px", margin: "40px auto" }} >
            <h2>Message</h2>
            <input 
            type='text'
            value={input}
            onChange={handleChange}
            placeholder='Enter message'
              style={{ width: "100%", padding: "8px" }}
            />
           {message&&(
              <p style={{ color: isValide ? "green" : "red" }} >{message}</p>
            )}
            <button 
             onClick={handleAdd}
            disabled={!isValide} 
                style={{ marginTop: "10px" }}
            >
              Add
            </button>
           
{/* item count */}
            <h4>total items : {items.length}</h4>


            
            {items.length===0 ?(<p > No items added yet</p>)
            :
            (
              <ul>
                {items.map((item,index)=>(
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
    </div>
  );
}

export default App;








