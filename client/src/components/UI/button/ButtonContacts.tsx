import * as React from 'react'
import styled from "styled-components";

export interface PropsButtonInterface
        extends React.HTMLAttributes<HTMLDivElement> {
        title: string
        children?: React.ReactNode
    }

const ButtonContacts = (props: PropsButtonInterface ) => {
    
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
    return (
        <Button>
            <Text>{props.title}</Text>
        </Button>
    );
};

export default ButtonContacts;