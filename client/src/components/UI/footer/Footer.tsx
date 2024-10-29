import styled from "styled-components"
import { borderLine } from "../../../styles/baseLayout";

const FooterComponent = styled.footer `
        position: fixed;
        left: 0;
        bottom: 0;
        width: 65vw;
        ${borderLine}
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