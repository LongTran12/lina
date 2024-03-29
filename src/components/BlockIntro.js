import React, { useState } from 'react';
import styled from "styled-components";
import { Row } from "antd";
import { FaYoutube } from "react-icons/fa";
import Modal from './Modal'

export default function BlockIntro({ wrapBackgr, textIntro, colorText, discription, right, order, imageLink, youtubeLink, isButton, href }) {
    const [isShow, setIsShow] = useState(false);
    return (
        <WrapBlock background={wrapBackgr} right={right} order={order}>
            <Row>
                <WrapVideo >
                    <div className="modal-video">
                        {href ? <a href={href} target="_blank" rel="noopener noreferrer"><img src={imageLink} alt="" width="100%" /></a>
                            : <img src={imageLink} alt="" width="100%" />
                        }
                        {isButton && <button className="btn-video" onClick={() => setIsShow(!isShow)}>
                            <FaYoutube />
                        </button>
                        }
                        {isShow && <Modal
                            isClose={() => setIsShow(false)}
                        >
                            <iframe width="900px" height="800px" src={youtubeLink} frameBorder="0" title="video"></iframe>
                        </Modal>
                        }

                    </div>
                    <div className="text-intro">
                        {href ?
                            <a href={href} target="_blank" rel="noopener noreferrer"><TitleIntro colorText={colorText}>{textIntro}</TitleIntro></a>
                            : <TitleIntro colorText={colorText}>{textIntro}</TitleIntro>
                        }
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
    flex-flow:row wrap;
    .modal-video{
        order:2;
        position:relative;
        width:50%;
        >button{
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
        padding:20px 40px;
        width:50%;
    }
    @media (max-width:1400px){
        .modal-video{
            width:40%;
        }
        .text-intro{
            width:60%;
        }
    }
      @media (max-width:1024px){
        .modal-video{
            width:100%;
        }
        .text-intro{
            width:100%;
        }
        @media (max-width:600px){
       
        .text-intro{
           padding:20px;
        }
    }
`;
const Descrip = styled.div`
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
        *{
           font-family: Montserrat;
        }
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
       @media (max-width:576px){
           padding:25px;
            .text-intro{
                text-align:center;
                h3{
                    font-size:25px;
                    text-align:center;
                    margin-top:15px;
                    :before{
                        left:50% !important;
                        right:auto !important;
                        transform:translateX(-50%);
                    }
                }
            }
       }
`;


