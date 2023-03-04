import React,{useState} from 'react';
import './LandingPage.css';

const LandingPage = () => {
  const [searchText,setSearchText]=useState('');

  const handleClick=()=>{
    console.log(searchText);
  }

  return (
    <div className="App">
        <h1>Weather Api</h1>
        <input placeholder='Location' onChange={(e)=>setSearchText(e.target.value)}></input>
        <button onClick={handleClick}>Search</button>
    </div>
  )
}

export default LandingPage