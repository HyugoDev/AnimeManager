import Styled from 'styled-components'
import { KeyboardArrowLeft } from '@styled-icons/material-twotone/KeyboardArrowLeft'
import { KeyboardArrowRight } from '@styled-icons/material-twotone/KeyboardArrowRight'


export const ArrowLeft = Styled(KeyboardArrowLeft)`
    color: white;
    width: 50px;
`

export const Left = Styled.button`
    display: absolute;
    justify-content: left;
    background-color: transparent;
    border: none;
`

export const Right = Styled.button`
    display: absolute;
    justify-content: right;
    background-color: transparent;
    border: none;
`

export const ArrowRight = Styled(KeyboardArrowRight)`
    color: white;
    width: 50px;
`

export const Middle = Styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Contenedor = Styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 20px;
    margin-bottom: 40px;



    @media (max-width: 365px) {
        flex-direction: column;
    }
    

    
`
