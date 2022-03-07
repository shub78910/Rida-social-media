import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../redux/actions/authAction'
import { GLOBALTYPES } from '../../redux/actions/globalTypes'
import Avatar from '../Avatar'
// import NotifyModal from '../NotifyModal'

const Menu = () => {
    const navLinks = [
        { label: 'Home', icon: 'home', path: '/' },
        { label: 'Message', icon: 'near_me', path: '/message' },
        { label: 'Discover', icon: 'explore', path: '/discover' }
    ]

    const { auth, theme, notify }: any = useSelector(state => state)
    const dispatch = useDispatch()
    const { pathname } = useRouter()

    const isActive = (pn: string) => {
        if (pn === pathname) return 'active'
    }

    return (
        <div className="menu">
            <ul className="navbar-nav flex-row">
                {
                    navLinks.map((link, index) => (
                        <li className={`nav-item px-2 ${isActive(link.path)}`} key={index}>
                            <Link href={link.path}>
                                <a className="nav-link">
                                    <span className="material-icons">{link.icon}</span>
                                </a>
                            </Link>
                        </li>
                    ))
                }

                <li className="nav-item dropdown" style={{ opacity: 1 }} >
                    <span className="nav-link position-relative" id="navbarDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                        <span className="material-icons"
                        // style={{ color: notify.data.length > 0 ? 'crimson' : '' }}
                        >
                            favorite
                        </span>


                    </span>

                    <div className="dropdown-menu" aria-labelledby="navbarDropdown"
                        style={{ transform: 'translateX(75px)' }}>
                        {/* <NotifyModal /> */}
                    </div>

                </li>


                <li className="nav-item dropdown" style={{ opacity: 1 }} >
                    <span className="nav-link dropdown-toggle" id="navbarDropdown"
                        role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <Avatar src={auth.user.avatar} size="medium-avatar" />
                    </span>

                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Link href={`/profile/${auth.user._id}`}>
                            <a className="dropdown-item" >Profile</a>
                        </Link>

                        <label htmlFor="theme" className="dropdown-item"
                            onClick={() => dispatch({
                                type: GLOBALTYPES.THEME, payload: !theme
                            })}>

                            {theme ? 'Light mode' : 'Dark mode'}
                        </label>

                        <div className="dropdown-divider"></div>
                        <Link href="/">
                            <a onClick={() => dispatch(logout())} className="dropdown-item">Logout</a>
                        </Link>
                    </div>
                </li>
            </ul>
        </div>

    )
}

export default Menu
