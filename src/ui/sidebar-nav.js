 const SidebarNav=()=> {
    return (
        <nav className="main-nav">
            <ul className="bodyNav nav nav-tabs flex-column" role="tablist">
                <li className="nav-item " role="presentation">
                    <a role="tab" data-bs-toggle="tab" data-bs-target="#dashboard" className=" nav-link active py-3 "
                        aria-current=" page" href="#dashboard">Dashboard</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a role="tab" data-bs-toggle="tab" data-bs-target="#drug-inventory" className="nav-link py-3"
                        href="#drug-inventory">Drug inventory</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a role="tab" data-bs-toggle="tab" data-bs-target="#e-prescription" className="nav-link py-3"
                        href="#e-prescription">E-prescription</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a role="tab" data-bs-toggle="tab" data-bs-target="#online-orders" className="nav-link py-3"
                        href="#online-orders">Online orders</a>
                </li>
            </ul>
        </nav>
    )
}
export default SidebarNav;