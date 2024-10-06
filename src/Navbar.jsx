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
                        <button>Home</button>
                    </li>
                    <li>
                    <button>Home</button>
                    </li>
                    <li>
                    <button>Home</button>
                    </li>
                    <li>
                    <button>Home</button>
                    </li>
                </ul>
                

            </div>
            </div>
            <div className='user-menu'>
            <ul className='user'>
                    <li>
                    <button>LogIn</button>
                    </li>
                    <li>
                    <button>SignUp</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar