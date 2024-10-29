import styled from "styled-components";
import ButtonContacts from "../button/ButtonContacts";

const HeaderComponent = styled.header `
        display: flex;
        width: 65vw;
    `
    const WrapperHeader = styled.section `
        display: flex;
        justify-content: space-between;
        width: 65vw;
    `
    const Title = styled.h1 `
        font-size: 18px;
        margin: 20px;
    `

const Header = () => {
    
    return (
        <HeaderComponent>
            <WrapperHeader>
                <Title>
                    Some Company
                </Title>
                <nav>
                    <ButtonContacts 
                        title="Contact us"/>
                </nav>
            </WrapperHeader>
        </HeaderComponent>
    );
};

export default Header;