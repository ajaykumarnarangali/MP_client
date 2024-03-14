import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Link to='/'>
            <Navbar.Brand href="#home">
              <i className='fa-solid fa-upload fa-bounce fa-xl me-3'></i>
              Media-Player
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
