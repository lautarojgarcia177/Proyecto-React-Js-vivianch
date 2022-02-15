import './CartWidget';
import { CartWidget } from './CartWidget';
export const NavBar = () =>{
    return(
      <nav className="navbar navbar-dark bg-dark fixed-top">
  <div className="container-fluid">
      <CartWidget/>
    <a className="navbar-brand" href="#">VIVIANCH</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">VIVIANCH</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body bg-dark">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contácto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Sale</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    )
}
