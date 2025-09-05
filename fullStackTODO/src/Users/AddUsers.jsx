import React, { useEffect, useState } from 'react'

export default function AddUsers() {

    const [user,setUser] = useState({
        name:"",
        username:"",
        email:""
    })

    const{name,username,email} = user;

    const inputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center offset-md-3 border rounded p-4 mt-2 shadow">
                        <h2 className='text-center m-4'>Register user</h2>
                        <div className="mb-3">
                            <label htmlFor="Name" className='form-label'>
                                Name
                            </label>
                            <input type={"text"}
                            className='form-control'
                            placeholder='Enter your name'
                            name="name"
                            value={name}
                            onChange={(e)=>inputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className='form-label'>
                                User Name
                            </label>
                            <input type={"text"}
                            className='form-control'
                            placeholder='Enter your username'
                            name="username"
                            value={username}
                            onChange={(e)=>inputChange(e)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Name" className='form-label'>
                                Email
                            </label>
                            <input type={"email"}
                            className='form-control'
                            placeholder='Enter your email'
                            name="email"
                            value={email}
                            onChange={(e)=>inputChange(e)}
                            />
                        </div>
                        <button type='Submit' className='btn btn-outline-primary '>submit</button>
                        <button type='Submit' className='btn btn-outline-danger'>cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}
