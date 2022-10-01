import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */} {/* call component */}
      <User></User>
    </div>
  )
}

const User = () => {
  const [users,setUsers] = useState([])
  useEffect(()=>{
    fetch('')
  },[])
  return( 
    <div>
      <h1>Omar Faruk</h1>
    </div>
  )
}

// const Counter = () => {// create counter function
//   const [counter, setTime ]= useState(0)// inport data 
//   const incrice = () =>{ // create function 
//     let newCount = counter+1 // incrice data per click 1
//     setTime(newCount) // set data after incricing
//   }
//   const decrice =()=> setTime(counter-1)
//   return( // return create counter component
//     <div>

//       <h1>Counter {counter}</h1>  {/* set daynamice data */}
//       <button onClick={incrice}>Incrice</button>  {/* add click hendelar */}
//       <button onClick={decrice}>Incrice</button>  {/* add click hendelar */}
//     </div>
//   )
// }

export default App;



// const persons = [
//   {name : 'Omar', age: 21, living :'UK'},
//   {name : 'Mamun', age: 20, living :'USA'},
//   {name : 'Monir', age: 22, living :'Africa'},
//   {name : 'Tanveer', age: 21, living :'UAE'},
//   {name : 'Opu', age: 21, living : 'Qatar'},
// ]

/**
<div className="App">
      {persons.map(person => <Person name={person.name} age={person.age} live={person.living}></Person>)}
    </div> 
*/


/*

function Person(params) {
  return (
    <div>
      <h1>{params.name}</h1>
      <h3>{params.age}</h3>
      <p>{params.live}</p>
    </div>
  )
} 
*/


// function Counter() {
//   const [counter, setCounter] = useState(0)
//   const count = () =>{
//     let newCount = counter+1
//     setCounter(newCount)
//   } 
//   return(
//     <div>
//       <h1>Counter :{counter} </h1>
//       <button onClick={count}>Count</button>
//     </div>
//   )
// }

