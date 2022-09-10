import Styled from 'styled-components';
import React from 'react';
import { ViewHide , ViewShow } from '@styled-icons/zondicons';
import { TaskListAdd, TaskListRtl } from '@styled-icons/fluentui-system-filled'
// import { createVisto } from '../../../api/visto.js';



const Listado = ({Visto, anime, id_anime, Ver}) => {


 // cuando se hace click en el icono de visto se hacer una llamada a la api para cambiar el estado de visto a no visto
    const handleClick = async () => { 
        const { data } = await createVisto(id_anime, anime.title, anime.img)
        console.log(data)
    }


    

    return(
    <Container>
        <button>
            {
                Visto === "true" ?  <Vistoicon /> : <NVistoicon onClick={handleClick} />
            }
            
        </button>

        <button>
            {
                Ver === "true" ?  <EnListIncon /> : <AddListIcon />
            }
        </button>

    </Container>
    )
}


export default Listado;


const NVistoicon = Styled(ViewHide)`
    color: #ff0000;
    margin-right: 10px;
    width: 30px;

`

const Vistoicon = Styled(ViewShow)`
    color: #00ccff;
    margin-right: 10px;
    width: 30px;
`;

const AddListIcon = Styled(TaskListAdd)`
    color: #ff0000;
    margin-right: 10px;
    width: 30px;
`;

const EnListIncon = Styled(TaskListRtl)`
    color: #00ccff;
    margin-right: 10px;
    width: 30px;
`;


const Container = Styled.div`
    

    button {
        background: none;
        border: none;
        outline: none;
        cursor: pointer;
        width: 30px;
        border-radius: 50%;
        margin-right: 1rem;
    }
`;