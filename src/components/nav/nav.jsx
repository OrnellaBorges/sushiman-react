export const Nav = () => {
  return (
    <ul className="nav__container">
      <li className="nav__items">
        <a href="#menu">Menu</a>
      </li>
      <li className="nav__items">
        <a href="#food">Food</a>
      </li>
      <li className="nav__items">
        <a href="#services">Services</a>
      </li>
      <li className="nav__items">
        <a href="#about">About us</a>
      </li>
      <li className="nav__items">
        <img src="src/assets/search.svg" alt="search" />
      </li>
    </ul>
  );
};
