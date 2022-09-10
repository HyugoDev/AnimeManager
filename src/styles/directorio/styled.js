import styled from 'styled-components'
import { KeyboardArrowLeft } from '@styled-icons/material-twotone/KeyboardArrowLeft'
import { KeyboardArrowRight } from '@styled-icons/material-twotone/KeyboardArrowRight'

//--------------------------------------------------------------------------------
export const ArrowLeft = styled(KeyboardArrowLeft)`
    color: white;
    width: 50px;
`
export const Left = styled.button`
    background: transparent;
    border: none;
    justify-content: left;
`

// --------------------------------------------------------------------------------
export const Right = styled.button`
    background: transparent;
    border: none;
    justify-content: right;
`
export const ArrowRight = styled(KeyboardArrowRight)`
    color: white;
    width: 50px;
`
// --------------------------------------------------------------------------------

export const Middle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Contenedor = styled.section`
    margin-top: 15px;
    display: flex;
    align-items: center;

    @media (max-width: 424px) {
        flex-direction: column;
    }
    


`