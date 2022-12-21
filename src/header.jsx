import "./header.css"

function Header() {
  return (
    <header>
      <h1>header</h1>
      <nav className="nav">
        <a className="nav__item" href="#">
          home
        </a>
        <a className="nav__item" href="#">
          about
        </a>
        <a className="nav__item" href="#">
          contact
        </a>
      </nav>
      <button className="btn">login</button>
    </header>
  )
}
export default Header
