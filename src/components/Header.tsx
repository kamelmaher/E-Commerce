type HeaderProps = {
    show: (x:boolean)=> void
}
function Header({show}:HeaderProps) {
    return (
        <header>
                <nav className="navbar navbar-expand-md bg-body-tertiary fixed-top">
                    <div className="container">
                        <a className="navbar-brand fw-bold text-primary fs-3" href="#">
                            My Store
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li onClick={()=> {
                                    show(false)
                                }} className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Shop
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Contact
                                    </a>
                                </li>
                                <li onClick={(() => show(true))} className="nav-item">
                                    <a className="nav-link" href="#">
                                        Cart
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        </header>
    );
}

export default Header;
