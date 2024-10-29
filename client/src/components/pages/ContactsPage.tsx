import styled from "styled-components";
import { 
    backgroundLightGrey, 
    centeringStyle, 
    standartWidth } from "../../styles/baseLayout";
import { FormGroup, Input, InputLabel,} from "@mui/material";
import ButtonSubmit from "../UI/button/ButtonSubmit";
import { useState } from "react";

const Main = styled.main `
    ${centeringStyle};
    flex-direction: column;
    ${backgroundLightGrey};
    ${standartWidth};
    height: 87vh;
`
const ContactsHead = styled.h1 `
    margin: 40px;
`
const WrapperForm = styled.div `
    ${centeringStyle};
    border: 1px solid grey;
    border-radius: 5px;
    padding: 20px;
`
const ContactsPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    
    const debounce = (fn: Function, ms = 300) => {
        let timeoutId: ReturnType<typeof setTimeout>;
        return function (this: any, ...args: any[]) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => fn.apply(this, args), ms);
        };
      };

    return (
        <Main>
            <ContactsHead>Only CTA on the page</ContactsHead>
            <WrapperForm>
                <FormGroup>
                        <InputLabel>Name</InputLabel>
                        <Input 
                            placeholder="Value" 
                            autoFocus={true}
                            value={name}
                            onChange={e => debounce(() => 
                                {setName(e.target.value)}, 500)}
                            />
                        <InputLabel>Email</InputLabel>
                        <Input 
                            placeholder="Value" 
                            autoFocus={true}
                            value={email}
                            onChange={e => debounce(() => 
                                {setEmail(e.target.value)}, 500)}                            />
                        <InputLabel>Message</InputLabel>
                        <Input 
                            placeholder="Value" 
                            autoFocus={true}
                            value={message}
                            onChange={e => debounce(() => 
                                {setMessage(e.target.value)}, 500)}                            />
                        <ButtonSubmit text="Submit"/>
                </FormGroup>
            </WrapperForm>
        </Main>
    );
};

export default ContactsPage;