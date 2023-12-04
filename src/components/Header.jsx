import { Container, GlobalStyle } from './GlobalStyle';
import { BotaoMenu, ContainerMenu, H1, Nav } from './headerStyle';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Sobre } from '../pages/Sobre/Sobre';
import { Projetos } from '../pages/Projetos/Projetos';
import { Contato } from '../pages/Contato/Contato';
import { useState } from 'react';
import { RiMenu3Line } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';




export const Header = () => {
  const jc = '<janiele/>';
  const [menu, setMenu] = useState(<RiMenu3Line />);
  const [isOpen, setOpen] = useState(false)

  const MenuOpen = () => {
    setMenu((prevMenu) => {
      if (prevMenu.type === RiMenu3Line) {
        return <IoMdClose />;
      } else {
        return <RiMenu3Line />;
      }
    });
  };

  const closeMenu = () => {
    setMenu(<RiMenu3Line />);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Nav>
          <H1>{jc}</H1>
          <ul>
            <li>
              <Link to="/home" onClick={closeMenu}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/sobre" onClick={closeMenu}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/projetos" onClick={closeMenu}>
                Projetos
              </Link>
            </li>
            <li>
              <Link to="/contato" onClick={closeMenu}>
                Contato
              </Link>
            </li>
          </ul>
          <BotaoMenu onClick={MenuOpen}>{menu}</BotaoMenu>
        </Nav>
      </Container>
      <ContainerMenu>
      {menu.type === IoMdClose && <Sidebar closeMenu={closeMenu} />}
      </ContainerMenu>
      
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </>
  );
};

const Sidebar = ({ closeMenu }) => {
  return (
    <ul>
      <li>
        <Link to="/home" onClick={closeMenu}>
          Inicio
        </Link>
      </li>
      <li>
        <Link to="/sobre" onClick={closeMenu}>
          Sobre
        </Link>
      </li>
      <li>
        <Link to="/projetos" onClick={closeMenu}>
          Projetos
        </Link>
      </li>
      <li>
        <Link to="/contato" onClick={closeMenu}>
          Contato
        </Link>
      </li>
    </ul>
  );
};
