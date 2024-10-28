import styled from "styled-components";
import ButtonContacts from "../button/ButtonContacts";

const Header = () => {
    const Header = styled.header `
        display: flex;
        width: 60vw;
        position: fixed;
        justify-content: space-between;
    `
    const Title = styled.h5 `

        margin: 20px;
    `
    return (
        <Header>
            <Title>
                Some Company
            </Title>
            <ButtonContacts 
                title="Contact us"/>
        </Header>
    );
};

export default Header;