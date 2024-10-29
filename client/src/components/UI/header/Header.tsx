import styled from "styled-components";
import ButtonContacts from "../button/ButtonContacts";

const HeaderComponent = styled.header `
        position: fixed;
        left: 0;
        right: 0;
        width: 65vw;
    `
    const WrapperHeader = styled.main `
        
    `
    const Title = styled.h5 `

        margin: 20px;
    `

const Header = () => {
    
    return (
        <HeaderComponent>
            <WrapperHeader>
                <Title>
                    Some Company
                </Title>
                <ButtonContacts 
                    title="Contact us"/>
            </WrapperHeader>
        </HeaderComponent>
    );
};

export default Header;