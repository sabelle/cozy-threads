import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  return (
    <nav>
      <ul className='nav-bar'>
        <li>
          <Link to ='/' className='nav-page'>home</Link>
        </li>
        <li>
          <Link to ='/cart' className='nav-page'>cart</Link>
        </li>
      </ul>
    </nav>
  );

}

export default Navigation