import "./header.css";
import Logo from '../../assets/Images/Northbluemedia_logo.png';

const Header = () => {
    return (
        <div className='container custom-bg-color'>
            <div className='row'>
                <div className='col'>
                    <img src={Logo} className="rounded-circle" alt="..." />
                </div>
                <div className='col'>
                    {/* Other content here */}
                </div>
            </div>
        </div>
    );
}

export default Header;