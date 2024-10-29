import styled from "styled-components";
import { centeringStyle, colorButtonContacts } from '../../../styles/baseLayout';


const Button = styled.button `
    ${centeringStyle}
    padding: 10px;
    ${colorButtonContacts}
    color: white;
    border-radius: 5px;
    border: none;
    height: 35px;
    width: 15vw;
    margin: 20px 20px 20px 40px;
    cursor: pointer;
`
const Text = styled.span `
    font-size: 12px;
    font-family: "Inter",;
`
interface PropsButtonSubmit {
    text: string,
    onClick?: () => {}
}
const ButtonSubmit = (props: PropsButtonSubmit  ) => {
    
    return (
        <Button
            onClick={props.onClick}>
            <Text>{props.text}</Text>
        </Button>
    );
};

export default ButtonSubmit;