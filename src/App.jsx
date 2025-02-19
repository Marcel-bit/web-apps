import { useState } from 'react'
import { apiCallCalculate } from './modules.js';
import Header from './components/Header.jsx';
import InputArea from './components/InputArea.jsx';


function App() {

  
//   async function apiCallCalculate(data){
//     try{
//         // fetch returns a promise
//         console.log(data.inputAmount, 'before response')
//         const response = await fetch('http://127.0.0.1:5000/test', {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             method: "POST",
//             body: JSON.stringify({ 
//                 'inputAmount': data.inputAmount                  
//                 })

//         });
//         console.log('after response')
//         if(!response.ok) {
//           console.log('bad response')
//             throw new Error(`Response status: ${response.status}`)
//         }
//         console.log('before await')
//         const json = await response.json();
//         console.log('before log json')
//         console.log(json);
//     }
//     catch(error){
//       console.log('at error')
//         console.error(error);
//     }
// }

  

  return (
    <>
      <Header/>
      <InputArea></InputArea>
      <p>hello</p>
    </>
  )
}

export default App
