import './Navbar.css'
import img from './assets/img.png'

function Navbar(){
    return(
        <div className='navbar'>
            <div className='left-cont'>
            <img className='img-logo' src={img} alt="Logo" />
            <div className='links-container'>
                <ul className='links'>
                    <li>
                        Home
                    </li>
                    <li>
                        Page2
                    </li>
                    <li>
                        Page3
                    </li>
                    <li>
                        Page4
                    </li>
                </ul>
                

            </div>
            </div>
            <div className='user-menu'>
            <ul className='user'>
                    <li>
                        Login
                    </li>
                    <li>
                        signup
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar