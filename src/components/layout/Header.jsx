import logoImg from "../../assets/logo.jpg";

function Header() {
  const openCart = () => {};

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <button onClick={openCart}> Cart (0) </button>
      </nav>
    </header>
  );
}

export default Header;
