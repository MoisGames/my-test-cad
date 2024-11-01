import styled from "styled-components"
import { borderLine } from "../../../styles/baseLayout";

const FooterComponent = styled.footer `
        width: 62.5vw;
        ${borderLine}
        @media (max-width: 768px) {
            width: 100%;
        }
    `
    const WrapperFooter = styled.section `
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const Text = styled.h5 `
        display: flex;
        margin: 50px;
    `

const Footer = () => {
    
    return (
        <FooterComponent>
            <WrapperFooter>
                <Text>Some Company 2024</Text>
            </WrapperFooter>
        </FooterComponent>
    );
};

export default Footer;