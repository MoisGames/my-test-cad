import styled from "styled-components";
import ButtonContacts from "../button/ButtonContacts";
import { adaptiveMaketColumn } from "../../../styles/baseLayout";

const HeaderComponent = styled.header `
        display: flex;
        flex-wrap: wrap;
        height: 10vh;
        width: 62.5vw;
        @media (max-width: 768px) {
            ${adaptiveMaketColumn};
        }
    `
    const WrapperHeader = styled.section `
        display: flex;
        justify-content: space-between;
        width: 62.5vw;
        @media (max-width: 768px) {
            ${adaptiveMaketColumn}
        }
    `
    const Title = styled.span `
        font-size: 18px;
        font-weight: 900;
        margin: 30px 30px 30px 20px;
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