import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import './LandingPage.css';

const LandingPage = () => {
  const [searchText,setSearchText]=useState('');
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/weather/${searchText.replaceAll(" ","+")}`);
  };

  

  return (
    <div className="App">
        <div className="Container">
          <form onSubmit={handleSearch}>
          <h1 className='landing-title'>Weather Api</h1>
          <input className="input" placeholder='Location' onChange={(e)=>setSearchText(e.target.value)}></input>
          <button className='landing-btn'>Search</button>
          </form>
        </div>
    </div>
  )
}

export default LandingPage