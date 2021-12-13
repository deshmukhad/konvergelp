import './App.css';
import Login from './Components/Login';
import Welcome from './Components/Welcome';
import { loginContext, loginTextContext, menuContext } from './Components/GenContext';
import React,{useState, useEffect} from 'react';
import AppMenu from './Components/AppMenu';
import AdminPage from './Components/AdminPage'
import Courses from './Components/Courses'
import Reports from './Components/Reports'
import SignUp from './Components/SignUp';
import SessionList from './Components/SessionList';
// import PlayVideo from './Components/PlayVideo';

function App() {

  /* let state 
  if(sessionStorage.getItem('loginState')){
    state = <Welcome/>
  }else{
    state = <Login/>
  }
 */
  const [loginstatus, setLoginStatus] = useState(false)
  const [menuopt, setMenuopt] = useState(0)
  const [loginBtnText, setLoginBtnText] = useState('Login')
  const courseid = sessionStorage.getItem('courseid') 
  //const [courseid, setCourseid] = useState(0)
  // const sessionid = sessionStorage.getItem('sessionid')
  // const videolink = sessionStorage.getItem('videolink') //videolink of particular session
  

  const discomponent = () =>
  {
    switch(menuopt)
    {
      case 0: return <Login />;
      case 1: return <Welcome />;
      case 2: return <AdminPage />;
      case 3: return <Courses />;
      case 4: return <Reports />;
      case 5: return <Login  />;
      case 15: return <SignUp />;
      case 21: return <SignUp />;
      case 31: return <SessionList courseid= {courseid}/>;
      // case 41: return <PlayVideo sessionid={sessionid} videolink={videolink}/>
      default: return <Login />
    }
  }

  // const discomponent1 = () =>{
  //   switch(menuopt){
  //     //case 0: return <Login menuopt ={menuopt} setMenuopt={setMenuopt} />;
  //     case 0: return <Login />;
  //     case 1: return <Welcome />;
  //     case 2: return <AdminPage />;
  //     case 3: return <Courses />;
  //     case 4: return <Reports />;
  //     case 5: return <Login menuopt ={menuopt} setMenuopt={setMenuopt} />;
  //     case 15: return <SignUp menuopt ={menuopt} setMenuopt={setMenuopt} />;
  //     case 21: return <SignUp menuopt ={menuopt} setMenuopt={setMenuopt} />;
  //     default: return <Login menuopt ={menuopt} setMenuopt={setMenuopt}/>
  //   }
  // }
  
  
  /* let discomponent 
  if(loginstatus){

    if(menuopt === 1){
      discomponent = <AdminPage />
    }
    if(menuopt === 2){
      discomponent = <Courses />
    }
    if(menuopt === 3){
      discomponent = <Reports />
    }
    if(menuopt === 0){
      discomponent = <Welcome />
    }
    
  }
  else{
    if(menuopt === 15){
      //console.log(`hi from app${menuopt}`)
      discomponent = <SignUp />
    }else{
    
    discomponent = <Login menuopt ={menuopt} setMenuopt={setMenuopt} />}
  } 
 */
  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail')
    const pwd = localStorage.getItem('pwd')
    if(userEmail && pwd){
      setLoginStatus(true)
    }else{
      //setLoginStatus(false)
      //alert("No Login Credentials")
    }
  })  


  return (
    <div className="App">
      
      <loginContext.Provider value={[ loginstatus, setLoginStatus ]} >
        <menuContext.Provider value ={[ menuopt, setMenuopt ]} >
          <loginTextContext.Provider value={[ loginBtnText, setLoginBtnText]}>
            {/* <courseContext.Provider value ={[ courseid, setCourseid ]}> */}
              <AppMenu/>
              <div> {discomponent()} </div>
            {/* </courseContext.Provider> */}
          </loginTextContext.Provider>
       </menuContext.Provider>
      </loginContext.Provider>

      {/* {state} */}  
      {/* {sessionStorage.getItem('loginState') ? <Welcome/> : <Login/>} */}

    </div>
  );
}

export default App;
