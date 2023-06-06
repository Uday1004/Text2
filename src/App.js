import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alerts from './components/Alerts';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,

//   Route,
//   Link
// } from "react-router-dom";


function App() {
  const [alert, setalert] = useState(null);
  const showAlert = (type, message) => {
    setalert({
      type: type,
      message: message
    })
  }

  // this content is added by me (from self knowledge), 
  // in this i add the dark mode in full display except text area and inner about us 

  // const [Style ,setStyle]=useState({
  //   color:'Black',
  //   backgroundColor:'White'
  // })
  // const[text,setText]=useState('Dark Mode!');

  // const Black =()=>{
  //   if(Style.color=='Black'){
  //     setStyle({
  //       color:'White',
  //       backgroundColor:'Black'
  //     })
  //     setText("Light Mode!");

  //   }
  //   else{
  //     setStyle({
  //       color:'Black',
  //       backgroundColor:'White'
  //     })
  //     setText("Dark Mode!");

  //   }

  // }

  const [mode, setmode] = useState('light'); //whether the dark mode is available or not
  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'black' //this line is used to set the all body color 
      showAlert('Success', 'Dark mode is Enabled!')
      document.title = 'TextUtils-Dark Mode'
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white' //this line is used to set the all body color 
      document.title = 'TextUlits-Home'
    }
  }
  return (
    <>
    {/* <Router>  */}
      <div className='big-container' /*style={Style}*/>
        <Navbar title='textUtils' about='About' mode={mode} togglemode={togglemode}></Navbar>
        {/* this is button 👇for above code  */}
        {/* <div className='text-right'>
       <button onClick={Black} type='button' className='btn btn-primary btn-sm float-end my-2 mx-2 '>Dark Mode!</button>
      </div> */}
        <Alerts alert={alert} />
        {/* <TextForm showAlert={showAlert} title='Text Area' mode={mode}/> */}
        {/* i romove about properties'(props) for lecture purpose */}
        {/* <Switch> */}
          {/* <Route path="/about"> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route path="/"> */}
        <TextForm showAlert={showAlert} title='Text Area' mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}
        {/* <div>
          <About Team='TextUtils.Com' Developers='udaysolanki530@gmail.com' />
        </div> */}
      </div>
      {/* </Router> */}
    </>
        
      
          
      
            
          


  )
}




export default App;
 

