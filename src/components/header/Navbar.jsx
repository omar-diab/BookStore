import { Link } from "react-router-dom"

const Navbar = ({toggle , setToggle}) => {
  const handleLink = () => {
    setToggle(prev => !prev)
  }

  return (
    <nav style={{left: toggle && '0'}}className="navbar">
        <ul className="navbar-links">
            <Link to='/' onClick={handleLink}className="navbar-link">Home</Link>
            <Link to='/authors' onClick={handleLink}className="navbar-link">Authors</Link>
            <Link to='/about-us' onClick={handleLink}className="navbar-link">About Us</Link>
            <Link to='/contact-us' onClick={handleLink}className="navbar-link">Contact Us</Link>
        </ul>
    </nav>
  )
}

export default Navbar