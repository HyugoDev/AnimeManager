import Styled from 'styled-components'


export const Episodio = Styled.h4`
    text-align: center;
`

export const Name = Styled.h4`
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    margin: 0px 5px 0px 15px;
    color: ${props => props.existe ? 'red' : '#fff'};

    @media (max-width: 365px) {
      font-size: 12px;
    }
`


export const CardContent = Styled.div`
  position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    padding: 20px;

    background-image: linear-gradient(to bottom, rgba(0,0,0,0.4) 0%,rgba(0,0,0,2.5) 100%) ; 

    display: flex;
    flex-direction: column;
    justify-content: center;

    
    border-radius: 10px 10px 0 0;

    transform: translateY(100%);
    transition: all 0.3s ease-in-out;
    text-align: center;
`;

export const Card = Styled.article`
  position: relative;
  width: 245px;
  height: 100%;
  border-radius: 15% 15% 2px 2px;
  background: none;

  margin: 5px;

  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  div {
    height: 150px;
    border-radius: 10%  10% 0 0;
    overflow: hidden;
  }


  &:hover ${CardContent} {
        transform: translateY(0px);

    }

    &:hover ${Name} {
      display: none;
    }

    @media (max-width: 365px) {
      width: 150px;
      
      div {
        height: 100px;
      }

      
    }

`

