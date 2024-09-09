import Yo from '../Img/yo.png';
import './Hero.css';
import Bg from '../Img/bg.png';
import Social from '../Social/Social';

function Hero(){
    return(
        <>
    <div className="hero-img">
      <img src={Bg} alt="" />
    </div>
    <div className="main-container">
    <div className="container">
    <div className="text">
      <h2>
        Hi, I am
      </h2>
      <h1>Pemba</h1>
      <p>Front-end Developer</p>
      <div className="logo">
        <Social />
      </div>
    </div>
    <div className="img">
      <img src={Yo} alt="" />
    </div>
    </div>
    <div className="text1">
      <span>IT BERRIES</span><br />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates molestias explicabo ut nostrum illo culpa, corporis accusamus at iure, voluptate consequuntur reiciendis dolorum maxime doloremque in dignissimos officiis ipsam aperiam expedita laudantium alias quisquam. Enim molestias, consectetur ea quas facilis numquam non fuga neque velit perspiciatis rem ipsum assumenda at, ipsam sequi magni ab, ex aperiam mollitia optio suscipit ipsa? Quis commodi delectus nihil maxime ipsa natus repellat quod! Tempora laboriosam, pariatur maiores voluptate atque enim animi expedita ea alias odit </p>
    </div></div>
        </>
    );
}

export default Hero;