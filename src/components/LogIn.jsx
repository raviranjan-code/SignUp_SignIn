import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sign_Img from './Sign_Img';
import { NavLink, useNavigate } from 'react-router-dom';

export const LogIn = () => {
    const history=useNavigate()

    const [inputval, setInputVal] = useState({

        email: "",
        password: ""
    })

    const [data, setData] = useState([])
    console.log(inputval)
    const getData = (e) => {
        // console.log(e.target.value)
        const { value, name } = e.target;
        // console.log(value,name)
        setInputVal(() => {
            return {
                ...inputval,
                [name]: value
            }
        })
    }

    const addData = (e) => {
        e.preventDefault()
        const getuserArr=localStorage.getItem("userdetails")
        console.log(getuserArr)

        const { email, password } = inputval

        if (email === "") {
            alert("eamil feild is required")
        } else if (!email.includes("@")) {
            alert("please enter valid email address")

        } else if (password === "") {
            alert("password feild is required")
        } else if (password.length < 5) {
            alert("password should be greater than 5")
        } else {
           if(getuserArr && getuserArr.length){
            const userdata=JSON.parse(getuserArr)
            // console.log(userdata)
            const userlogin=userdata.filter((ele,k)=>{
                return ele.email===email && ele.password===password
            })
            // console.log(userlogin)
            if(userlogin.length===0){
                alert("invalid details")
            }else{
                // alert("user login successfully")

                localStorage.setItem("user_login", JSON.stringify(userlogin))
                history("/details")
            }
           }
        }
    }
    return (
        <>
            <div className="container mt-3" >
                <section className='d-flex justify-content-between'>
                    <div className="left-data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign IN</h3>

                        <Form className="w-100">

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name="email" onChange={getData} placeholder="Enter email" />

                            </Form.Group>


                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name="password" onChange={getData} placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" className='col-lg-6' onClick={addData} type="submit" style={{ background: "rgb(26, 146, 88)" }}>
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Not Have an Account <span><NavLink to="/">Sign Up</NavLink></span></p>

                    </div>
                    <Sign_Img />
                </section>
            </div>
        </>
    )
}
