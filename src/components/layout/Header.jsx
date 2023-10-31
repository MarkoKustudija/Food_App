import logoImg from "../../assets/logo.jpg";
import Button from "../UI/Button";

function Header() {
  const openCart = () => {};

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button onClick={openCart}> Cart (0) </Button>
      </nav>
    </header>
  );
}

export default Header;
