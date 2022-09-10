import Styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Menu } from 'styled-icons/boxicons-regular'
import { Close } from 'styled-icons/evaicons-solid'


export const Nav = Styled.nav`
    background-color: linear-gradient(to top , #001A2C, #002945);
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`
export const MenuButton = Styled.button`
      transition: visibility linear 0.3s;
      visibility: ${props => props.open ? 'hidden' : 'visible'};
`
export const IconMenu = Styled(Menu)`
    color: #fff;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    background-image: linear-gradient(to top , #001A2C, #002945);

`

export const MenuList = Styled.div`
      visibility: ${props => props.open ? 'visible' : 'hidden'};
      position: fixed;
      top: 0;
      right: 0;
      width: 300px;
      bottom: 0;  
      z-index: 1045;
      outline: 0;

      display: flex;
      flex-direction: column;
      transform: ${props => props.open ? 'translateX(0)' : 'translateX(100%)'};
      
      background-image: linear-gradient(to top , #002945, #001A2C);
      opacity: 0.9;


      transition: all 0.3s linear;
`
export const MenuItem = Styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
      background-color: #132264;
      color: #fff;
      opacity: 0.8;
    }
`
export const CloseButton = Styled.button`
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 50px;
    background: transparent;
`

export const IconClose = Styled(Close)`
    color: #fff;
    width: 2rem;
    height: 2rem;
    cursor: pointer;

`

export const Offcanvas = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    margin: 5px;
  `


export const Userdiv = Styled.div`

`;

export const User = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    p {
      font-size: 18px;
      font-weight: bold;
      margin: 0;
    }

    button {
      background-color: transparent;
      border: none;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      cursor: pointer;
      margin: 1rem;
    }
`;