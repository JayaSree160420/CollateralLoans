import React,{useState} from "react";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser={
    email:"admin@gmail.com",
    password:"admin123"
  }

  const [user,setUser]=useState({name:"",email:""});
  const [error,setError]=useState("");

  const Login=details=>{
    //console.log(details);

    if(details.email==adminUser.email && details.password==adminUser.password)
    {
      console.log("Logged in");
      setUser({
        name:details.name,
        email:details.email,
      
      });
    }
    else{
      //console.log("Details do not match");
      setError("Details do not match");
    }
  }

  const Logout=()=>{
    setUser({name:"",email:""});
    setError("");
  }

  return (
    
    <div className="App">

      {(user.email!="") ? (
        <div>
        <div className="welcome">
          <h2>Welcome,<span>{user.name}</span></h2>
          <button className="btn">View Loan Details</button>
          <button className="btn">Save Collaterals</button>
          <button className="btn">View Collaterals</button>
          <button className="btn">View Risks</button>
          
          </div>
          <button onClick={Logout} className="btn2" >Logout</button>
            </div>
      ):(
        <LoginForm Login={Login} error={error} /> 
      )}
    </div>
  );
}

export default App;
