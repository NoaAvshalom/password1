import './App.css';
import { useState } from 'react';
import Password from './Password';


function App() {
  const [password ,setPassword] = useState('')
  const [preventSubmit,setPreventSubmit]= useState(true)
  
  
  function handlePassword(event){
    setPassword(event.target.value)
  }
   
  return (
    <div className="App">
      <h1>Welcome</h1>  
      <p><h3>Please enter password:</h3></p>
      <input tayp = "password" value = {password} onChange = {handlePassword} />
      <button disabled= {preventSubmit}> Submit</button>
      <Password password={password} prevent={setPreventSubmit}></Password>

      

    </div>
  );
}
  
export default App;