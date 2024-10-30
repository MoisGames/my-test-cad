import styled from 'styled-components';
import { 
            backgroundLightGrey, 
            borderLine, 
            centeringStyle, 
            colorLightGrey,
            standartWidth} from '../../styles/baseLayout';
import ButtonContacts from '../UI/button/ButtonContacts';
import LiteYoutubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const Main = styled.main `
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        ${standartWidth}
        overflow: hidden;
        ${borderLine}
        @media (max-width: 768px) {
            width: 100%;
        }
    `
const SectionVideo = styled.section `
    display: flex;
    justify-content: space-between;
    padding: 25px 20px 20px 35px;
    font-size: 30px;
    ${backgroundLightGrey};
    @media (max-width: 768px) {
            flex-direction: column;
            flex-wrap: wrap;
            width: 100%;
            height: 70vh;
            justify-content: start;
        }
`
const BlockText = styled.article `
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 30vh;
    @media (max-width: 768px) {
            width: 100%;
        }
`
const MainHead = styled.h1` 

`
const MinorText = styled.span `
    display: flex;
    font-size: 13px;
    font-weight: 100;
    margin-top: 20px;
`
const VideoFrame = styled.div `
    width: 25vw;
    height: 12vh;
    @media (max-width: 768px) {
            width: 100%;
        }
`
const SectionParagraph = styled.section `
    ${centeringStyle}
    flex-direction: column;
    margin-top: 35px;
`
const TwoMainHead = styled.h2 `
    
`
const ParagraphWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin-top: 80px;
    width: 60vw;
    height: 40vh;
    @media (max-width: 768px) {
            width: 100%;
            height: 100%;
        }
`
const ParagraphCard = styled.article `
    display: flex;
    flex-direction: column;
    width: 24%;
    height: 10vh;
    margin: 40px;
    @media (max-width: 768px) {
            width: 100%;
        }
`
const CardTitle = styled.h4 `
    font-size: 19px;
    margin-bottom: 10px;
`

const CardDesc = styled.span `
    font-size: 13px;
    ${colorLightGrey};
`
const SectionParagraphTwo = styled.section `
    ${centeringStyle}
    flex-direction: column;
    height: 30vh;
    ${backgroundLightGrey}
`
const ThreeHead = styled.h3 `
    
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
                <VideoFrame>
                    <LiteYoutubeEmbed
                        id="dQw4w9WgXcQ"
                        title="Youtube Video"
                    />
                </VideoFrame>
            </SectionVideo>
            <SectionParagraph>
                <TwoMainHead>Also very important title</TwoMainHead>
                <ParagraphWrapper>
                    {listItems}
                </ParagraphWrapper>
                <ButtonContacts 
                    title='Contact us'/>
            </SectionParagraph>
            <SectionParagraphTwo>
                <ThreeHead>
                    Less important title
                </ThreeHead>
                <ButtonContacts 
                    title='Contact us'
                    />
            </SectionParagraphTwo>
        </Main>
    );
};

export default MainPage;