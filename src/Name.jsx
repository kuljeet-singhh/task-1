  import { useState } from "react"
function Name (){
    const [value,setValue]= useState("");
     const [Display, setDisplay]= useState(false);

    const handleChange= (e)=>{
 const item =e.target.value
 setValue(item)
 setDisplay(false)

    }
     const hendleClick=()=>{
      if(value===" ") return;
      setDisplay(true)
     }
    return(
        <div style={{ maxWidth: "400px", margin: "40px auto" }}>
                      <input
                      placeholder="Enter name "
                      value={value}
                      onChange={handleChange}
                       style={{ width: "100%", padding: "8px" }}
                      />
                      <button 
                      onClick={hendleClick}
                        style={{ marginTop: "10px" }}
                      >Add</button>

                      {value=== ("") ?
                      (<p>Enter your name</p>):
                     Display&& (<h4>Hello {value}</h4>)
                      }
        </div>
    )
}
export default Name