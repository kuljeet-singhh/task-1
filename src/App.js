import "./App.css";
import { useState } from "react";
// import Name from './Name';

function App() {
  // state to store input
  const [input, setInput] = useState("");
  // state to store list items
  const [items, setItems] = useState([]);
  // state to store validation message
  const [message, setMessage] = useState("");
  // state to track  if input is valide
  const [isValide, setIsValide] = useState("false");

  const [editIndex, setEditIndex] = useState(null);

  const validateInput = (value) => {
    // check space
    if (value !== value.trim()) {
      setMessage("no spaces allowed");
      setIsValide(false);
      return;
    }
    // minimum length check
    if (value.length < 3) {
      setMessage("Mimimum 3 characters required");
      setIsValide(false);
      return;
    }

    // number check
    if (/\d/.test(value)) {
      setMessage("Numbers are not allowed");
      setIsValide(false);
      return;
    }

    const exists = items.some(
      (item) => item.toLowerCase() === value.toLowerCase()
    );

    if (exists) {
      setIsValide(false);
      setMessage("Item already exists");
      return;
    }

    //if all validations pass
    setMessage("");
    setIsValide(true);
  };
  //handle input change
  const handleChange = (e) => {
    const value = e.target.value;

    setInput(value);
    validateInput(value);
  };
  const handleAdd = () => {
    console.log("check add is valid ", isValide);
    if (!isValide) return;
    if (editIndex !== null) {
      // Update existing item
      const updatedItems = [...items];
      updatedItems[editIndex] = input.trim();
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      // Add new item
      setItems([...items, input.trim()]);
    }

    setInput("");
    setMessage("");
    setIsValide(false);
  };
  const hendleDelete = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  const handleEdit = (index) => {
    setInput(items[index]);
    setEditIndex(index);
    validateInput(items[index]);
  };

  return (
    <div className="App">
      <div className="main" style={{ maxWidth: "400px", margin: "40px auto" }}>
        <h2>Message</h2>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Enter message"
          style={{ width: "100%", padding: "8px" }}
        />

        <button
          className="add-button"
          onClick={handleAdd}
          disabled={!isValide}
          style={{
            marginTop: "10px",
            background: isValide ? "rgba(26, 151, 26, 0.98)" : "",
          }}
        >
          Add
        </button>
        {message && (
          <p style={{ color: isValide ? "green" : "red" }}>{message}</p>
        )}

        {/* item count */}
        <h4>total items : {items.length}</h4>

        {items.length === 0 ? (
          <p> No items added yet</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index} id={index}>
                <div className="items">
                  <div>{item}</div>

                  <div>
                    <button
                      className="Edit-btn"
                      onClick={() => handleEdit(index)}
                     
                    >
                      Edit
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() => hendleDelete(index)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
