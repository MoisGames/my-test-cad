import styled from "styled-components";
import { 
    backgroundLightGrey, 
    centeringStyle, 
    standartWidth } from "../../styles/baseLayout";
import { FormGroup, Input, InputLabel,} from "@mui/material";
import ButtonSubmit from "../UI/button/ButtonSubmit";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";

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
    
    const [value, setValue] = useState('');
    
    const debounced = useDebouncedCallback(
      (value) => {
        setValue(value);
      },

      1000
    );

    const sendingData = () => {
        const formData = new FormData()

        if(name && email && message !== '') {
            formData.append('name', name)
            formData.append('email', email)
            formData.append('message', message)
        } else {
            alert('Пустых значений в форме быть не должно. Введите заново')
        }
    }

    return (
        <Main>
            <ContactsHead>Only CTA on the page</ContactsHead>
            <WrapperForm>
                <FormGroup>
                        <InputLabel>Name</InputLabel>
                        <Input 
                            placeholder="Value" 
                            autoFocus={true}
                            onChange={(e) => debounced(setName(e.target.value))}
                            type="text"
                            name="name"
                            />
                        <InputLabel>Email</InputLabel>
                        <Input 
                            placeholder="Value" 
                            onChange={(e) => debounced(setEmail(e.target.value))}
                            type="text"
                            name="email"                          />
                        <InputLabel>Message</InputLabel>
                        <Input 
                            placeholder="Value" 
                            onChange={(e) => debounced(setMessage(e.target.value))}
                            type="text"
                            name="message"                            />
                        <ButtonSubmit text="Submit" onClick={() => sendingData()}/>
                </FormGroup>
            </WrapperForm>
        </Main>
    );
};

export default ContactsPage;