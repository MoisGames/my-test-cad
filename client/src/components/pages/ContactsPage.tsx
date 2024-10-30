import styled from "styled-components";
import { 
    backgroundLightGrey, 
    centeringStyle, 
    standartWidth } from "../../styles/baseLayout";
import { FormGroup, Input, InputLabel,} from "@mui/material";
import ButtonSubmit from "../UI/button/ButtonSubmit";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { sendData } from "../../htttp/testAPI";

const Main = styled.main `
    ${centeringStyle};
    flex-direction: column;
    ${backgroundLightGrey};
    ${standartWidth};
    height: 87vh;
    @media (max-width: 768px) {
            width: 100%;
        }
`

const ContactsHead = styled.h1 `
    margin: 40px;
`
const WrapperForm = styled.div `
    ${centeringStyle};
    border: 1px solid grey;
    border-radius: 5px;
    padding: 20px;
    margin: 20px;
`
const MessageWrapper = styled.span `
    font-size: 30px;
    font-weight: 900;
    margin: 20px;
`
const FormWrapper = styled.div `
`
const ContactsPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [show,setShow] = useState(true)
    const [messageServer, setMessageServer] = useState('')
    
    const [value, setValue] = useState('');
    
    const debounced = useDebouncedCallback(
      (value) => {
        setValue(value);
      },

      1000
    );

    const sendingData = () => {
        
        const formData = {
            name: name,
            email: email,
            message: message
        }

        if(name && email && message !== '') {
            sendData(formData).then(data => setMessageServer(data));
            setShow(false)
        } else {
            alert('Пустых значений в форме быть не должно. Введите заново')
        }
    }

    return (
        <Main>
            { show ?
            <FormWrapper>
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
            </FormWrapper>
            :
            <MessageWrapper>
                {messageServer}
            </MessageWrapper>}
        </Main>
    );
};

export default ContactsPage;