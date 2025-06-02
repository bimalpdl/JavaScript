import '../App.css';
import insta from '../assets/insta.png';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import tiktok from '../assets/tiktok.png';
import user from '../assets/user.png';
function TopNav() {
    return (
      <nav className="topNav">
        <div className="firstContainer">
            <p>
            Call center number: 01-5970113 /  Toll Free(NTC User): 166001-10013 
            </p>
        </div>
        <ul className="secondContainer">
            <li className='customerLogin'><a href="#" >
                <img src={user} alt="facebook logo" title='Click to navigate to instagram' />
                <p style={{display: "inline-block", marginTop:0}}>Customer login |</p>
                </a>
                
                </li>
                <li><a href="#">
                <img src={facebook} alt="insta logo" title='Click to navigate to instagram' /></a>
                </li>
                <li><a href="#">
                <img src={linkedin} alt="linkedin logo" title='Click to navigate to instagram' /></a>
                </li>
                <li><a href="#">
                <img src={github} alt="whatsApp logo" title='Click to navigate to instagram' /></a>
                </li> 
                <li><a href="#">
                <img src={tiktok} alt="youtube logo" title='Click to navigate to instagram' /></a>
                </li> 
                <li><a href="#">
                <img src={insta} alt="insta logo" title='Click to navigate to instagram' /></a>
                </li> 

        </ul>
      </nav>
    );
}


export { TopNav };
