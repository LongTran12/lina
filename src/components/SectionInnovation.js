import React from 'react'
import styled from "styled-components";
import mainImage from "../assets/images/main-slider-bg.jpg";
import HeadingTitle from "./HeadingTitle";
import {Row,Col} from "antd";
import SliderInnovation from './SliderInnovation';

export default function SectionInnovation() {
    return (
        <WrapInno>
            <Row type="flex" align="middle" justify="center">
                <Col md={23}>
                    <HeadingTitle
                    title="INNOVATION" 
                    colorTitle="#fff"
                    subTitle="What make LINA.REVIEW special?"
                    colorSub="#deeeff"/>
                    <SliderInnovation/>
                </Col>
            </Row>
            
        </WrapInno>
            
    )
}
const WrapInno = styled.div`
    padding:100px 0;
    background-image:url(${mainImage});
`;