import styled from 'styled-components';
import { 
    backgroundDarkGrey,
            backgroundLightGrey, 
            borderLine } from '../../styles/baseLayout';

const Main = styled.main `
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 62.5vw;
        overflow: hidden;
        ${borderLine}
    `
const SectionVideo = styled.section `
    display: flex;
    justify-content: space-between;
    padding: 25px 20px 20px 35px;
    font-size: 30px;
    ${backgroundLightGrey};
`
const BlockText = styled.article `
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 30vh;
`
const MainHead = styled.h1` 

`
const MinorText = styled.span `
    display: flex;
    font-size: 13px;
    font-weight: 100;
    margin-top: 20px;
`
const VideoContent = styled.iframe `
    width: 30vw;
    height: 25vh;
    ${backgroundDarkGrey}
`
const SectionParagraph = styled.section `
    
`
const MainPage = () => {

    return (
        <Main>
            <SectionVideo>
                <BlockText>
                    <MainHead>Most important title on the page</MainHead>
                    <MinorText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Aliquam mattis, leo et condimentum ultricies, 
                        sem urna convallis metus, vel suscipit nibh lacus 
                        tincidunt ante
                    </MinorText>
                </BlockText>
                <VideoContent 
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=ySH8ELQ1T58ATguy" 
                    title="YouTube Video" 
                    allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share" 
                    ></VideoContent>
            </SectionVideo>

        </Main>
    );
};

export default MainPage;