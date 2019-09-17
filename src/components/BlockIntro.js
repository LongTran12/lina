import React, { useState } from 'react';
import styled from "styled-components";
import { Row } from "antd";
import { FaYoutube } from "react-icons/fa";
import Modal from './Modal'

export default function BlockIntro({ wrapBackgr, textIntro, colorText, discription, right, order, imageLink, youtubeLink }) {
    const [isShow, setIsShow] = useState(false);
    return (
        <WrapBlock background={wrapBackgr} right={right} order={order}>
            <Row>
                <WrapVideo >
                    <div className="modal-video">
                        <img src={imageLink} alt="" />
                        <button className="btn-video" onClick={() => setIsShow(!isShow)}>
                            <FaYoutube />
                        </button>
                        {isShow && <Modal
                            isClose={() => setIsShow(false)}
                        >
                            <iframe width="900px" height="800px" src={youtubeLink} frameborder="0" title="video"></iframe>
                        </Modal>
                        }
                    </div>
                    <div className="text-intro">
                        <TitleIntro colorText={colorText}>{textIntro}</TitleIntro>
                        <Descrip>{discription}</Descrip>
                    </div>
                </WrapVideo>
            </Row>
        </WrapBlock>
    )
}

const WrapVideo = styled.div`
    display:flex;
    position:relative;
    align-items:center;
    .modal-video{
        order:2;
        position:relative;
        button{
            font-size: 70px;
            color: red;
            position:absolute;
            background:transparent;
            border:0;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
        }
    }
    .text-intro{
        
        padding-left:40px;
        padding-right:40px;
        
    }
`;
const Descrip = styled.p`
    color:#fff;
    font-family: Montserrat;
    font-weight: 400;
    font-size: 14px;
    line-height:26px;
`;
const TitleIntro = styled.h3(props => ({
    "color": props.colorText,
    "font-size": "40px",
    "font-weight": "600",
    "position": "relative",
    "padding-bottom": "15px",

}))

const WrapBlock = styled.div`
       background-color :${props => (props.background ? props.background : "transparent")};
       padding:40px;
       border-radius:15px;
       .text-intro{
            order:${props => (props.order ? props.order : '3')};
            h3{
                 text-align: ${props => (props.right ? "right" : "left")};
                 position:relative;
                 margin-bottom:50px;
                 :before{
                     content:'';
                    position:absolute;
                    top:100%;
                    ${props => (props.right ? "right" : "left")}:0;              
                    width: 40px;
                    height: 6px;
                    border-radius: 10px;
                    background:-webkit-gradient(linear, right top, left top, color-stop(0.3, #06c4d5), color-stop(0.7, #2fe8f9));
                 }
            }
       }
       margin-bottom:30px;
`;


