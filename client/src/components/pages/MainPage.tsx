import styled from 'styled-components';
import { 
    backgroundDarkGrey,
            backgroundLightGrey, 
            borderLine, 
            colorLightGrey} from '../../styles/baseLayout';
import ButtonContacts from '../UI/button/ButtonContacts';

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
    margin-top: 35px;
`
const TwoMainHead = styled.h2 `
    
`
const ParagraphWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 62.5vw;
    margin-top: 80px;
    width: 60vw;
    height: 40vh;
`
const ParagraphCard = styled.article `
    display: flex;
    flex-direction: column;
    width: 24%;
    height: 10vh;
    margin: 40px;
`
const CardTitle = styled.h4 `
    font-size: 19px;
    margin-bottom: 10px;
`

const CardDesc = styled.span `
    font-size: 13px;
    ${colorLightGrey};
`
interface CardInfo {
    id: number,
    title: string,
    description: string,
}
const cardInfoArr: CardInfo[] = [
    {
    'id': 1,
    'title': 'Title',
    'description': 
        `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. 
        Aliquam mattis, leo et condimentum`,
    },
    {
        'id': 2,
        'title': 'Title',
        'description': 
            `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. 
            Aliquam mattis, leo et condimentum`,
    },
    {
        'id': 3,
        'title': 'Title',
        'description': 
            `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. 
            Aliquam mattis, leo et condimentum`,
    },
    {
        'id': 4,
        'title': 'Title',
        'description': 
        `Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. 
        Aliquam mattis, leo et condimentum`,
    },
    {
        'id': 5,
        'title': 'Title',
        'description': 
            `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. 
            Aliquam mattis, leo et condimentum`,
    },
    {
        'id': 6,
        'title': 'Title',
        'description': 
            `Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. 
            Aliquam mattis, leo et condimentum`,
    },]

const listItems = cardInfoArr.map((el) => 
    <ParagraphCard
        key={el.id}
        >
        <CardTitle>
            {el.title}
        </CardTitle>
        <CardDesc>
            {el.description}
        </CardDesc>
    </ParagraphCard>
) 

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
                    {listItems}
                </ParagraphWrapper>
                <ButtonContacts 
                    title='Contact us'/>
            </SectionParagraph>

        </Main>
    );
};

export default MainPage;