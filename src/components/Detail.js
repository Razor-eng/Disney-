import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import db from "../firebase"

const Detail = (props) => {
    const { id } = useParams();
    const [detailData, setDetailData] = useState({});

    useEffect(() => {
        db.collection("movies").doc(id).get().then((doc) => {
                if (doc.exists) {
                    setDetailData(doc.data());
                } else {
                    console.log("no such data");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    },[id]);


    return (
        <Container>
            <Background>
                <img src={detailData.backgroundImg} alt={detailData.title} />
            </Background>
            <ImageTitle>
                <img src={detailData.titleImg} alt={detailData.title} />
            </ImageTitle>
            <ContentMeta>
                <Controls>
                    <Player>
                        <img src="/images/play-icon-black.png" alt="play" />
                        <span>Play</span>
                    </Player>
                    <Trailer>
                        <img src="/images/play-icon-white.png" alt="play" />
                        <span>Trailer</span>
                    </Trailer>
                    <AddList>
                        <span />
                        <span />
                    </AddList>
                    <GroupWatch>
                        <div>
                            <img src="/images/group-icon.png" alt="group" />
                        </div>
                    </GroupWatch>
                </Controls>
                <SubTitle>
                {detailData.subTitle}
                </SubTitle>
                <Description>
                {detailData.description}
                </Description>
            </ContentMeta>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;
    padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    opacity: 0.8;
    z-index: -1;

    img{
        width: 100vw;
        height: 100vh;

        @media (max-wifth: 768px){
            width: initial;
        }
    }
`;

const ImageTitle = styled.div`
    align-items: flex-end;
    display: flex;
    -webkit-box-pack: start;
    justify-content: flex-start;
    min-height: 170px;
    height: 30vw;
    margin: 0px auto;
    padding-bottom: 24px;
    width: 100%;

    img{
        max-width: 600px;
        min-width: 200px;
        width: 35vw;
    }
`;

const ContentMeta = styled.div`
    max-width: 874px;
`;

const Controls = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0px;
    min-height: 56px;
`;

const Player = styled.button`
    align-items: center;
    justify-content: center;
    letter-spacing: 1.8;
    display: flex;
    cursor: pointer;
    border-radius: 4px;
    height: 56px;
    padding: 0px 24px;
    margin: 0px 22px 0px 0px;
    font-size: 15px;
    text-align: center;
    text-transform: uppercase;
    background: rgb(249, 249, 249);
    border: none;
    color: rgb(0, 0, 0);

    img{
        width: 32px;
    }

    &:hover{
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px){
        height: 45px;
        padding: 0px 12px;
        font-size: 12px;
        margin: 0px 10px 0px 0px;

        img{
            width: 25px;
        }
    }
`;

const Trailer = styled(Player)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`;

const AddList = styled.div`
    margin-left: 16px;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    border: 2px solid white;
    cursor: pointer;

    span{
        background-color: rgb(249, 249, 249);
        display: inline-block;

        &:first-child{
            height: 2px;
            transform: translate(1px, 0px) rotate(0deg);
            width: 16px;
        }

        &:nth-child(2){
            height: 16px;
            transform: translate(-8px) rotate(0deg);
            width: 2px;
        }
    }
`;

const GroupWatch = styled.div`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background: white;
    margin-left: 16px;

    div{
        height: 40px;
        width: 40px;
        background: rgb(0, 0, 0);
        border-radius: 50%;

        img{
            width: 100%;
        }
    }
`;

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;

    @media (max-wifth: 768px){
        font-size: 12px;
    }
`;

const Description = styled.div`
    color: rgb(249, 249, 249);
    font-size: 20px;
    line-height: 1.4;
    padding: 16px 0px;

    @media (max-wifth: 768px){
        font-size: 14px;    
    }
`;

export default Detail