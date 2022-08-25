import HeroImage from 'src/Images/HeroImage.png'
import Logo from '../Images/Logo';
import 'src/styles/App.scss'

const Hero = () => {
    return (
        <div className="hero-image">
            <Logo />
            <img src={HeroImage} />
        </div>
    );
}
 
export default Hero;