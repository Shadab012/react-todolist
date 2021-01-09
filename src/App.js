import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ToDoList from './ToDoList';

function App() {
const [inputList , setinputList]= useState();
const [items , setitems] = useState([]);

const inputEvent =(event)=>{
 setinputList(event.target.value);
}
 const listofItems =()=>{
   setitems( (oldval) =>{
    return [...oldval , inputList];
   })
   setinputList("");
 }

const deleteItems = (id)=>{
   setitems(
     (oldval)=>{
       return oldval.filter(
       (arrElem, index)=>{
         return index!== id;
       });

     });
}

  return (
    <>
    <div className="App">
      <div className="main">
        <h1>Todo-List</h1>
        <input type="text" placeholder="add items" value={inputList} onChange={inputEvent}/>
        <button onClick={listofItems}> + </button>
        <ol>
          {
            items.map( (itemval, index) => {
              return <ToDoList 
              key={index}
              id={index}
              text = {itemval} 
              onSelect={deleteItems}
              />
            })
          }
        </ol>

      </div>
    </div>
    </>
  );
}

export default App;
