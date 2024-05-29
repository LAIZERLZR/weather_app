import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import heart from '../../assets/heart.svg';
import './header.css';

const Header = () => {
  return (
    <header className="w-full flex px-20 py-4 bg-dark_gray_one shadow-md gap-20">
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="w-14" />
        </Link>
      </div>
      <nav className=" flex gap-10 text-white p-3 h-full  items-center px-10">
        <Link className="text-lg text-gradient-underline" to="/countries">
          Города
        </Link>
        <Link className="text-lg text-gradient-underline" to="/">
          Помощь
        </Link>
        <Link className="text-lg text-gradient-underline" to="/">
          О нас
        </Link>
      </nav>
      <div className="flex justify-center ml-auto items-center">
        <div>
          <img src={heart} alt="heart" className="w-8" />
        </div>
      </div>
    </header>
  );
};

export default Header;
