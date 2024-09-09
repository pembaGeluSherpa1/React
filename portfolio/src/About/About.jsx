import './About.css';

export default function About(){
    return (<>
    <div className="about">
        <div className='box'>ABOUT ME</div>
        <div className="box-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque laudantium, doloremque natus dolores quas cum officia ipsam? Hic, consectetur ullam!</div>
        <div className="explore">EXPLORE</div>
        <div className="box-img">
            <img src="https://portfolio-web-sand-kappa.vercel.app/images/separatorBlack%201.png"/>
        </div>
        <div className="about-container">
            <div className="child"><span>DEVELOPMENT</span>
            <p>I can design the site based on your needs and suggestions. I can
            also design the site from scratch and consult you during the job.</p></div>
            <div className="child"><span>MAINTENANCE</span>
            <p>I can design the site based on your needs and suggestions. I can
            also design the site from scratch and consult you during the job.</p></div>
        </div>
        <div className="box-img">
            <img src="https://portfolio-web-sand-kappa.vercel.app/images/separatorBlack%201.png"/>
        </div>
    </div>
    
    </>);
}