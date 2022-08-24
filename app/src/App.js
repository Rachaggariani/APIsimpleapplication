
import './App.css';
import React,{useState,useEffect}from"react";
import axios from "axios";
function App() {
  const axios = require('axios').default;
  const [users,setusers]=useState({name:"",email:"",id:""});
  useEffect(()=>{
    axios.get('http://jsonplaceholder.typicode.com/users').then((res)=>{
      setusers(res.data);
    })
    .catch((err)=>{
     alert(err);
    });
  },[]);
  return (
    <div className="App">{ users.length>0 ?
    users.map((el)=>{
<div key={el.id}>
  <h1>{el.name}</h1>
  <h1>{el.email}</h1>
</div>
    }):(<h1>loading</h1>)};
   
    </div>
  );
}

export default App;
