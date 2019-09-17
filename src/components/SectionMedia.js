import React from 'react'
import HeadingTitle from './HeadingTitle';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import logo1 from '../assets/images/logo-10.png';
import logo2 from '../assets/images/logo-11.png';
import logo3 from '../assets/images/logo-12.png';
import logo4 from '../assets/images/logo-13.png';
import logo5 from '../assets/images/logo-14.png';
import logo6 from '../assets/images/logo-15.png';
import logo7 from '../assets/images/logo-26.png';
import logo8 from '../assets/images/logo-30.png';




export default function SectionMedia() {
    return (
        <WrapMedia>
            <Row>
                <Col lg={{ span: 18, offset: 3 }} xs={{ span: 24, offset: 0 }}>
                    <HeadingTitle title="Media Mentions" subTitle="Let's see what media talks about us" />
                    <Row gutter={40}>
                        {
                            dataImage.map((index, i) => (
                                <Col key={i} xl={6} lg={8} >
                                    <WrapImage>
                                        <img src={index.image} alt="" width="100%" />
                                    </WrapImage>
                                </Col>
                            ))
                        }

                    </Row>
                </Col>
            </Row>
        </WrapMedia>
    )
}
const WrapMedia = styled.div`
    position:relative;
    padding:100px 0;
    :before{
        content:'';
        width:75%;
        height:1px;
        background:#ebebeb;
        position:absolute;
        left:50%;
        transform:translateX(-50%);
        bottom:0;
    }
`;
const WrapImage = styled.div`
    border-radius:10px;
    box-shadow:1px 1px 10px rgba(0,0,0,0.15);
    margin-bottom:25px;
    text-align:center;
    padding:10px;
    :hover{
        img{
            filter:grayscale(1);
             transition:all 0.5s ease;
        }
    }
`;
const dataImage = [
    {
        image: logo1
    },
    {
        image: logo2
    },
    {
        image: logo3
    },
    {
        image: logo4
    },
    {
        image: logo5
    },
    {
        image: logo6
    },
    {
        image: logo7
    },
    {
        image: logo8
    },
]