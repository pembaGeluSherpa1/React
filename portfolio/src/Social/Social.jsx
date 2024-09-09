import linked from '../Logo/linked.png';
import insta from '../Logo/insta.png';
import github from '../Logo/github.png';
import './Social.css';

export default function Social() {
    return (
        <>
        <div className="social">
        <ul>
            <li><a href='https://www.linkedin.com/in/pemba-gelu-sherpa-3925b6285/' target='_blank'><img src={linked} alt="LinkedIn" /></a></li>
            <li><a href='https://www.instagram.com/mr__pemba__1/' target='_blank'><img src={insta} alt="insta" /></a></li>
            <li><a href='https://github.com/pemba1234' target='_blank'><img src={github} alt="GitHub" /></a></li>
        </ul>
        </div>
        </>
    );
}