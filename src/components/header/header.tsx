import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './header.scss'

export function Header(){

    return (<>
        <header className='headerContainer'>
            <div className="LogoContainer">
                <img src={Logo} alt="Logo" />
            </div>
            <nav className='navContainer'>
                <NavLink to='/userList'>Users</NavLink>
                <NavLink to='/createUser'>Add User</NavLink>
            </nav>
            <div className="empty"></div>
        </header>
    </>)
}