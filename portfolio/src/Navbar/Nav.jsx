import './Nav.css';
import {Link} from 'react-router-dom';

export default function Nav(){
    return(
        <>
        <div className="navbar">
            <nav>
                <ul>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link to='/about' >About me</Link></li>
                    <li><Link to='/skills' >Skills</Link></li>
                    <li><Link to='projects' >Projects</Link></li>
                    <li className='contact'><Link to='/contact' >Contact me</Link></li>
                </ul>
            </nav>
        </div>
        </>
    );
}