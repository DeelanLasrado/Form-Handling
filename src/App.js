// import logo from './logo.svg';
// import './App.css';

// // 
// import React, { useState } from 'react';

// const LoveCalculator = () => {
//   const [name1, setName1] = useState('');
//   const [name2, setName2] = useState('');
//   const [score, setScore] = useState(0);
//   const [message, setMessage] = useState('');

//   const calculateScore = () => {
//     // calculate a score based on the names entered
//     const name1Array = name1.toLowerCase().split('');
//     const name2Array = name2.toLowerCase().split('');
//     const allLetters = [...name1Array, ...name2Array];
//     const letterCount = allLetters.reduce((acc, letter) => {
//       acc[letter] = acc[letter] ? acc[letter] + 1 : 1;
//       return acc;
//     }, {});
//     const score = Object.values(letterCount).reduce((acc, count) => acc + count);

//     setScore(score % 101); // set the score (0-100)
//     setMessage(`Your love score is ${score % 101}%`);
//   };

//   return (
//     <div>
//       <h1>Love Calculator</h1>
//       <form>
//         <label>
//           Your Name:
//           <input type="text" value={name1} onChange={e => setName1(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Partner's Name:
//           <input type="text" value={name2} onChange={e => setName2(e.target.value)} />
//         </label>
//       </form>
//       <br />
//       <button onClick={calculateScore}>Calculate Score</button>
//       <br />
//       <h2>{message}</h2>
//     </div>
//   );
// };


   


import { useState } from "react"
const App=()=>{
    const [ffname, setFFname]=useState({
      Mname:"",
      age:"",
      email:"",
      phone:""
    })     
    const [newffname, setNewffname]=useState("")
    const ChangeHandler=(e)=>{
      let name1=e.target.name
      let val=e.target.value
      setFFname({...ffname, [name1]:val})
  }
  const SubmitHandler=(e)=>{
    e.preventDefault()  
    setNewffname(ffname)
  }
  return(
    <>
        <h2>Form Handling Demo</h2>
        <hr></hr>
        <form onSubmit={SubmitHandler}>
          <label>My Name: </label>
          <input type="text" name="mname" onChange={ChangeHandler}/><br></br>    
          
          <label>Age: </label>
          <input type="text" name="age" onChange={ChangeHandler}/><br></br>    
          
          <label>Email: </label>
          <input type="text" name="email" onChange={ChangeHandler}/><br></br>    

          <label>phone: </label>
          <input type="text" name="phone" onChange={ChangeHandler}/><br></br>    

          <button type="submit">submit</button>
        </form>
        <hr></hr>
       <div style={{backgroundColor:"greenyellow", width:"50%"}}>
       {newffname.mname}<br></br>
       {newffname.age} <br></br>
       {newffname.email}<br></br>
       {newffname.phone}<br></br>

       </div>
        
    </>
  )}
export default App;

