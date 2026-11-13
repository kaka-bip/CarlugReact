import { Button } from "../components/button";
import Logo from "/public/favicon.png";

export const Nav = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo Do Site"/>
          <h1>Carlug</h1>
        </div>
        <ul className="navlinks">
          <li>
            <a href="#" className="a">
              Home
            </a>
          </li>
          <li>
            <a href="#">Sobre Nós</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Contate-nos</a>
          </li>
        </ul>

        <Button Text="Cadastro" />
      </nav>
    </>
  );
};
