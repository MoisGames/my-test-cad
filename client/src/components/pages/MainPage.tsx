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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 35px;
`
const TwoMainHead = styled.h2 `
    
`
const ParagraphWrapper = styled.div `
    margin-top: 20px;
    width: 60vw;
    height: 40vh;
    border: 3px solid violet;
`
const ParagraphCard = styled.article `
    
`
interface CardInfo {
    id: number,
    title: string,
    description: string,
}
const cardInfoObj: CardInfo[] = [
    {
    'id': 1,
    'title': 'afas',
    'description': 
        `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. 
        Aliquam mattis, leo et condimentum`,
    },
    {
        'id': 2,
        'title': 'afas',
        'description': 
            `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. 
            Aliquam mattis, leo et condimentum`,
    },
    {
        'id': 3,
        'title': 'afas',
        'description': 
            `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. 
            Aliquam mattis, leo et condimentum`,
    },
    {
        'id': 4,
        'title': 'afas',
        'description': 
        `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. 
        Aliquam mattis, leo et condimentum`,
    },
    {
        'id': 5,
        'title': 'afas',
        'description': 
            `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. 
            Aliquam mattis, leo et condimentum`,
    },
    {
        'id': 6,
        'title': 'afas',
        'description': 
            `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. 
            Aliquam mattis, leo et condimentum`,
    },]
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
            <SectionParagraph>
                <TwoMainHead>Also very important title</TwoMainHead>
                <ParagraphWrapper>
                    <ParagraphCard></ParagraphCard>
                </ParagraphWrapper>
            </SectionParagraph>

        </Main>
    );
};

export default MainPage;