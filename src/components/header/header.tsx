import { Link } from 'react-router-dom'
import './header.scss'

export function Header(){

    return (<>
        <header>
            <nav>
                <Link to='/chatList'>Users</Link>
                <Link to='/chatList'>Add User</Link>
            </nav>
        </header>
    </>)
}