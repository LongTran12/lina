import React from 'react'
import HeadingTitle from "./HeadingTitle";
import { WhatSlider } from "./WhatSlider";
import styled from 'styled-components';
import bglina from '../assets/images/bg-top-lina.jpg';
import { Row, Col } from "antd";
import Subcribe from "./Subcribe";


export default function SectionWhat() {
    return (
        <>
            <WrapWhat>
                <Row type="flex" align="middle" justify="center">
                    <Col span={18}>
                        <HeadingTitle title="What is LINA" subTitle="" color="#202020" />
                        <WhatSlider />
                        <Subcribe></Subcribe>
                    </Col>
                </Row>
            </WrapWhat>

        </>
    )
}
const WrapWhat = styled.div`
    background-image:url(${bglina});
    padding:100px 0;
    background-size:cover;
`;
