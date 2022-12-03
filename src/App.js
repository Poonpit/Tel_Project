import Transaction from "./componants/Transaction.js"
import FormComponent from "./componants/FormComponent.js";
import './App.css'
import { useState } from "react";


const Title =()=><h1>เบอร์โทรศัพท์สมาชิก</h1>

function App() {
  const [Items,setItem] = useState([])

  const onAddNewItem = (newItem)=>{
    setItem((prevItem)=>{
      return [newItem,...prevItem]
    })
  }
  return (
      <div className="container">
        <Title/>
        <FormComponent onAddItem={onAddNewItem}/>
        <Transaction Items={Items}/>
      </div>
  );
}

export default App;

