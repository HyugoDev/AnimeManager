import React, { useState, useEffect } from 'react'
import { Nav, MenuButton, IconMenu, MenuList, Offcanvas, CloseButton, IconClose, MenuItem, Userdiv, User } from '../../styles/Navbar/styled.js'
import Logo from './Logo.jsx'
import Search from './Search.jsx'



const Navbar = () => {
  const [open, setOpen] = useState(false)

  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = window.localStorage.getItem("TokenUser");
    if (data) {
      setUser(JSON.parse(data));
    }
  }, []);



  return (
    <Nav>
      <Logo />
      <MenuButton onClick={() => setOpen(!open)} open={open}>
        <IconMenu />
      </MenuButton>
      <MenuList open={open}>
        <Offcanvas>
          <CloseButton onClick={() => setOpen(!open)}>
            <IconClose />
          </CloseButton>
        </Offcanvas>
        <MenuItem to="/directorio">Directorio</MenuItem>
        <MenuItem to="/directorio/futuro">Directorio Futuro</MenuItem>
        <Search />
        {/* <Userdiv>
          {
            user ?
              <User>
                <p>{user.name}</p>
                <button onClick={() => { window.localStorage.removeItem("TokenUser"); setUser(null) }}>Cerrar Sesión</button>
              </User>
                :
              <div>
                <MenuItem to="/login">Login</MenuItem>
                <MenuItem to="/registro">Register</MenuItem>
              </div>

          }
          
        </Userdiv> */}
      </MenuList>
    </Nav>
  )
}

export default Navbar