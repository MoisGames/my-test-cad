import styled from "styled-components"
import { borderLine } from "../../../styles/baseLayout";

const Footer = () => {
    const Footer = styled.footer `
        position: fixed;
        left: 0;
        bottom: 0;
        width: 65vw;
        ${borderLine}
    `
    const WrapperFooter = styled.article `
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const Text = styled.h5 `
        display: flex;
        margin: 50px;
    `
    return (
        <Footer>
            <WrapperFooter>
                <Text>Some Company 2024</Text>
            </WrapperFooter>
        </Footer>
    );
};

export default Footer;