import logo from '../assests/pharmacy-logo1.png';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning ">
                <div className="container-fluid">

                    <a className="navbar-brand"><img src={logo} className="img img-fluid"
                        alt="logo" ></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="headNav nav nav-tabs navbar-nav ms-auto mb-2 mb-lg-0" role="tablist">
                            <li className="nav-item " role="presentation">
                                <a role="tab" data-bs-toggle="tab" data-bs-target="#dashboard"
                                    className=" nav-link active  " aria-current=" page" href="#dashboard">Dashboard</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a role="tab" data-bs-toggle="tab" data-bs-target="#drug-inventory" className="nav-link "
                                    href="#drug-inventory">Drug inventory</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a role="tab" data-bs-toggle="tab" data-bs-target="#e-prescription" className="nav-link "
                                    href="#e-prescription">E-prescription</a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a role="tab" data-bs-toggle="tab" data-bs-target="#online-orders" className="nav-link "
                                    href="#online-orders">Online orders</a>
                            </li>
                        </ul><em className="navbar-text">
                            “Always laugh when you can. It is cheap medicine.”
                        </em>
                    </div>
                </div>
            </nav>
        </header>
    );
}
export default Header;