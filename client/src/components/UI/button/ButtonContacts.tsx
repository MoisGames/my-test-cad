import * as React from 'react'
import {useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { centeringStyle, colorButtonContacts } from '../../../styles/baseLayout';

export interface PropsButtonInterface
        extends React.HTMLAttributes<HTMLDivElement> {
        title: string
        children?: React.ReactNode
    }

const Button = styled.button `
    ${centeringStyle}
    padding: 10px;
    ${colorButtonContacts}
    color: white;
    border-radius: 5px;
    border: none;
    height: 25px;
    width: 10vw;
    margin: 20px 20px 20px 40px;
    cursor: pointer;
    @media (max-width: 768px) {
            width: 25vw;
            padding: 15px;
            height: 2vh;
            margin: 10px;
        }
`
const Text = styled.span `
    font-size: 12px;
    font-family: "Inter",;
`

const ButtonContacts = (props: PropsButtonInterface ) => {
    const navigate = useNavigate()
    
    return (
        <Button
            onClick={() => navigate('contacts', { replace: false })}>
            <Text>{props.title}</Text>
        </Button>
    );
};

export default ButtonContacts;