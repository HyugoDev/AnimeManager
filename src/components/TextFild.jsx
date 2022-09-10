import { useField } from "formik";
import Styled from "styled-components";

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
    <Container>
        <Body>
            <Label>{label}</Label>
            <Text {...field} {...props}/>
        </Body>
        {meta.touched && meta.error ? ( <div className="error">{meta.error}</div>) : null}  
    </Container>
    );
};

export default TextField;

const Text = Styled.input`
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    margin: 10px;
    padding: 10px;
    width: 300px;


    &:focus {
        outline: none;
    }
`;

const Label = Styled.label`
    font-size: 1rem;
    text-align: center;
    width: 89px;
`;

const Body = Styled.div`
    display: flex;
    gap: 10px ; 
    
    align-items: center;
`;


const Container = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .error{
        font-size: 0.8rem;
        color: #ffffff;
    }
`;