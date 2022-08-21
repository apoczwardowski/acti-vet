import {Link} from 'react-router-dom'
import SvgArrow from '../Images/SvgArrow.js'
import '../styles/Navbar.scss'


const Navbar = () => {
    return(
        <div>
            <div className="navbar">
                <div className='menu-left'>
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="menu-right">
                    <Link to="/appointment">
                        <p>Appointment</p>
                        <SvgArrow />
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar