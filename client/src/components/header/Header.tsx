import Link from 'next/link'
import Menu from './Menu'
import Search from './Search'

const Header = () => {

    return (
        <div className="header bg-light">
            <nav className="navbar navbar-expand-lg navbar-light 
            bg-light justify-content-between">

                <Link href="/" >
                    <a className="logo" >
                        <h1 className="navbar-brand text-uppercase p-0 m-0"
                            onClick={() => window.scrollTo({ top: 0 })}>
                            Rida
                        </h1>
                    </a>
                </Link>

                <Search />

                <Menu />
            </nav>
        </div>
    )
}

export default Header
