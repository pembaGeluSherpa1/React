import './Contact.css';

export default function Contact(){
    return(
        <>
        <div className="form">
        <div className="header-info">
            <h4>CONTACT</h4>
        </div>
        <form>
            <div><input type="text" placeholder='Enter Your Name' /></div>
            <div><input type="email" placeholder='Enter Your Email' /></div>
            <div><input type="number" placeholder='Enter Your Number' /></div>
            <div className='msg'><input type="text" placeholder='Enter Your Message' /></div>
            <button>Submit</button>
        </form></div>
        <footer>
            <p>
                © Designed and developed by Pemba Gelu Sherpa, inspired by a Figma portfolio template for a clean and modern user experience.
            </p>
        </footer>
        </>
    );
}