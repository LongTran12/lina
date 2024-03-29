import React, { useContext } from 'react'
import backgr from "../assets/images/main-banner-bg.png";
import styled from "styled-components";
import { Row, Col } from 'antd';
import { IoIosSend } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaRedditAlien, FaMediumM } from "react-icons/fa";
import imgsl from '../assets/images/main-banner-sl.png'
import { SiteContext } from '../contexts/siteContext';

export default function SectionSlider() {
    const { getLang } = useContext(SiteContext);
    return (
        <>
            <WrapSlide>
                <Row >
                    <Col xxl={{ span: 10, offset: 2 }} md={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
                        <ButtonStyle>
                            {getLang('LINA NETWORK')}
                        </ButtonStyle>
                        <BlockSlider>
                            <h1>{getLang('Network Platform')}</h1>
                            <p>{getLang('Ecosystem with Review, Supplychain, Healthcare, Identity and more, powered and connected by')} <span>{getLang('BLOCKCHAIN')}</span></p>
                            <WrapCommunity>
                                <h4>{getLang('International Commmunity')}</h4>
                                <ButtonCommunity><IoIosSend></IoIosSend>{getLang('JOIN TELEGRAM')}</ButtonCommunity>
                                <ButtonCommunity><FaFacebookF></FaFacebookF></ButtonCommunity>
                                <ButtonCommunity><FaTwitter></FaTwitter></ButtonCommunity>
                                <ButtonCommunity><FaRedditAlien></FaRedditAlien></ButtonCommunity>
                                <ButtonCommunity><FaMediumM></FaMediumM></ButtonCommunity>
                            </WrapCommunity>
                            <SpanDot></SpanDot>
                            <WrapCommunity>
                                <h4>{getLang('Vietnam Commmunity')}</h4>
                                <ButtonCommunity><IoIosSend></IoIosSend>{getLang('JOIN TELEGRAM')}</ButtonCommunity>
                                <ButtonCommunity><FaFacebookF></FaFacebookF></ButtonCommunity>
                            </WrapCommunity>
                        </BlockSlider>
                    </Col>
                    <Col xxl={{ span: 11, offset: 0 }} md={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}
                    >
                        <img src={imgsl} alt="slide" width="100%" />
                    </Col>
                </Row>
            </WrapSlide>
        </>
    )

}
const SpanDot = styled.div`
    width:40px;
    height:6px;
    background:linear-gradient(90deg, rgb(255, 185, 89) 0%, rgb(255, 148, 0) 100%);
    border-radius:3px;
    margin:35px 0;
`;
const ButtonStyle = styled.button`
    font-size:17px;
    line-height:17px;
    border-radius:3px;
    border:2px solid rgb(255, 174, 59);
    padding:15px 20px;
    background:transparent;
    font-weight:700;
    letter-spacing:2px;
    margin-bottom:45px;
    :hover{
        background:rgb(255, 174, 59);
    }
`;
const WrapCommunity = styled.div`
      h4{
        font-size: 18px;
        line-height: 20px;
        font-weight: 700;
         color: rgb(255, 255, 255);
        margin-bottom:20px;
      }

`;
const ButtonCommunity = styled.button`
    background-color:rgb(255, 174, 59);
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    color: rgb(255, 255, 255);
    letter-spacing: 2px;
    margin-right:15px;
    margin-bottom:10px;
    border:0;
    border-radius:3px;
    padding:21px 24px;
    svg{
        font-size:24px;
       
    }
`;
const WrapSlide = styled.div`
        background-image:url(${backgr});
        padding-top:300px;
        padding-bottom:100px;
        color:#fff;
        background-size:cover;
        overflow:hidden;
    `;
const BlockSlider = styled.div`
        h1{
            font-size:80px;
            line-height:80px;
            font-weight:600;
            margin-bottom:45px;
            color:#fff;
        }
        p{
            font-size:18px;
            line-height:30px;
            margin-bottom:60px;
            span{
                font-weight:bold;
            }
            
        }
    `;
