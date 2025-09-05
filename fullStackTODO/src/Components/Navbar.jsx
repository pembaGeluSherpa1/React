import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">FullStack ToDo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <Link to='/addUser'>
                    <button className='btn btn-outline-primary'>
                        Add User
                    </button></Link>
                    </div>
            </nav>
        </>
    )
}
