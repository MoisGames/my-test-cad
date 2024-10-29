import * as React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import styled from "styled-components";

export interface PropsButtonInterface
        extends React.HTMLAttributes<HTMLDivElement> {
        title: string
        children?: React.ReactNode
    }

const Button = styled.button `
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: black;
    color: white;
    border-radius: 10px;
    border: none;
    height: 25px;
    width: 10vw;
    margin: 20px 20px 20px 40px;
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