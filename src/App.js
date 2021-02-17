import React,{ useState } from 'react';


function App() {


  const [Name,changeName]=useState(true)  
  
  let My='';
  
const ToggleChange =() =>
{
let myName=Name;
changeName(!myName);
}
if(Name)
{
My=(
<div>
  <h1>Hello, This Is Nishant</h1>
</div>


);
}


  return (
    <div >

     
<button onClick={ToggleChange}>Toggle Button</button>
    </div>
  );
}

export default App;
