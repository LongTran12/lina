import React from 'react'
import HeadingTitle from './HeadingTitle';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import logo1 from '../assets/images/logo-30.png';
import logo2 from '../assets/images/logo-38.png';
import logo3 from '../assets/images/logo-tuoitre.jpg';

export default function SectionMedia() {
    return (
        <WrapMedia>
            <Row>
                <Col lg={{ span: 18, offset: 3 }} xs={{ span: 24, offset: 0 }}>
                    <HeadingTitle title="Media Mentions" subTitle="Let's see what media talks about us" />
                    <Row>

                        {
                            dataImage.map((index, i) => (
                                <Col xl={6} lg={8} >
                                    <img src={index.image} alt="" />
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
    padding:100px 0;
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
        image: logo1
    },
    {
        image: logo2
    },
    {
        image: logo3
    },
]