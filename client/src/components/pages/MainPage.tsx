import styled from 'styled-components';
import { borderLine } from '../../styles/baseLayout';

const Main = styled.main `
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 65vw;
        overflow: hidden;
        ${borderLine}
    `

const MainPage = () => {

    return (
        <Main>
             
        </Main>
    );
};

export default MainPage;