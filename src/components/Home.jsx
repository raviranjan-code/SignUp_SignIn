import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_Img from './Sign_Img';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const[inputval,setInputVal]=useState({
        name:"",
        email:"",
        date:"",
        password:""
    })

    const[data,setData]=useState([])
console.log(inputval)
    const getData=(e)=>{
        // console.log(e.target.value)
        const {value,name}=e.target;
        // console.log(value,name)
        setInputVal(()=>{
            return{
                ...inputval,
                [name]:value
            }
        })
    }

    const addData=(e)=>{
e.preventDefault()

const{name,email,date,password}=inputval

if(name===""){
    alert("name feild is required")
}else if(email===""){
    alert("eamil feild is required")
}else if(!email.includes("@")){
    alert("please enter valid email address")
}else if(date===""){
    alert("date feild is required")
}else if(password===""){
    alert("password feild is required")
}else if(password.length<5){
    alert("password should be greater than 5")
}else{
    // console.log("data added successfully")

    localStorage.setItem("userdetails",JSON.stringify([...data,inputval]))
    alert("You have signed up successfully!");

    setInputVal({
        name: "",
        email: "",
        date: "",
        password: "",
    });
}
    }
  return (
    <>
    <div className="container mt-3" >
        <section className='d-flex justify-content-between'>
            <div className="left-data mt-3 p-3" style={{width:"100%"}}>
                <h3 className='text-center col-lg-6'>Sign UP</h3>
        
      


    <Form className="w-100">
    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        
        <Form.Control type="text" name="name" value={inputval.name} onChange={getData} placeholder="Enter name" />
       
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        
        <Form.Control type="email" name="email" value={inputval.email} onChange={getData}placeholder="Enter email" />
       
      </Form.Group>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
        
        <Form.Control type="date" name="date" value={inputval.date} onChange={getData} />
       
      </Form.Group>

      <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
      
        <Form.Control type="password" name="password" value={inputval.password} onChange={getData} placeholder="Password" />
      </Form.Group>
      
      <Button variant="primary" className='col-lg-6' onClick={addData} type="submit" style={{background:"rgb(26, 146, 88)"}}>
        Submit
      </Button>
    </Form>
    <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIN</NavLink></span></p>
  
        </div>
       <Sign_Img/>
        </section>
    </div>
    </>
  )
}

export default Home