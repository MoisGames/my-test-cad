import styled from "styled-components";

const Header = () => {
    const Header = styled.header `
        display: flex;
    `
    const Title = styled.h5 `
        margin: 20px;
    `
    return (
        <Header>
            <Title>
                Some Company
            </Title>
        </Header>
    );
};

export default Header;