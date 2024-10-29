import styled from 'styled-components';
import { borderLine } from '../../styles/baseLayout';

const MainPage = () => {
    const Main = styled.main `
        ${borderLine}
    `
    return (
        <Main>
            MAINPAGE
        </Main>
    );
};

export default MainPage;