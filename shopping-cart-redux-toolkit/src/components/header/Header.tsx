import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export class Header extends React.Component {
  state = {
    toggle: false,
  };
  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    const { toggle } = this.state;

    return (
      <header>
        <div className='menu' onClick={this.menuToggle}>
          <i className='fas fa-bars'></i>
        </div>
        <div className='logo'>
          <h1>
            <Link to='/'>Nike</Link>
          </h1>
        </div>
        <nav>
          <ul className={toggle ? 'toggle' : ''}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li className='close' onClick={this.menuToggle}>
              <i className='fas fa-times'></i>
            </li>
          </ul>
          <div className='nav-cart'>
            {/* <span>0</span> */}
            <Link to='/cart'>
              <i className='fas fa-shopping-cart'></i>
            </Link>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
