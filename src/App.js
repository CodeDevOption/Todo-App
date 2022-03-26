import  React,{ useState,useEffect } from 'react';
import './App.css';
import { Button,TextField  } from '@material-ui/core';
import TodoList from './TodoList';
import {   collection, onSnapshot, addDoc,orderBy, query, serverTimestamp} from "firebase/firestore";
import db from './firebase';


function App() {
  const collectionRef =  collection(db,"Todo");
  const text="";
  const [todos,setTodos] = useState([]); //Todo list array 
  const [input, setInput] = useState(''); //input Value
 
//when the app loads, we need to listen to the database and feach  new todos as they get added /removed   
   useEffect (()=> {
// Theis code here.. fires when the app.js load
  const q = query(collectionRef,orderBy('timestamp','desc'))
onSnapshot(q, (snapshot) => {
   setTodos( snapshot.docs.map((doc) => doc.data().text));


    //  onSnapshot(doc(db, "Todo"), (doc) => {
    // console.log("Current data: ", doc.data());
// });
});
  }
   ,[]);

  

  console.log(input);
  // Button Click Event
  const addTodo = (event)=>{
  //   await setDoc(doc(db, "Todo"), {
  //     text: "Los Angeles",
     
  //   });
    event.preventDefault(); // this is not refesh Click submit button 
  
    const data = {text:input,timestamp:serverTimestamp()}
        addDoc(collectionRef,data);
    setTodos([...todos,input]); // send input state data to todos state array
    setInput('');
  }
  return (
    <div className="App">
        <h1>{text}</h1>
        {/* Get Inputs from User */}
        <form >
           <TextField value={input} onChange={event => setInput(event.target.value)} id="standard-basic" label="Todo List" />
            {/* <input  value={input} onChange={event => setInput(event.target.value)} /> */}
            <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">Add Todo</Button>
            {/* <button type="submit" onClick={addTodo} >Add Todo</button> */}

        </form>

          <ul>
            {todos.map(to =>(<TodoList TodoText ={to} />))} {/*Get userstate array values and Display list*/}
         
          </ul>
    </div>
  );
}

export default App;
