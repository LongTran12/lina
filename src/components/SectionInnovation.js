import React, { useContext } from 'react'
import styled from "styled-components";
import mainImage from "../assets/images/main-slider-bg.jpg";
import HeadingTitle from "./HeadingTitle";
import { Row, Col } from "antd";
import SliderInnovation from './SliderInnovation';
import { SiteContext } from '../contexts/siteContext'

export default function SectionInnovation() {
    const { getLang } = useContext(SiteContext)
    return (
        <WrapInno>
            <Row >
                <Col xxl={{ span: 22, offset: 1 }} md={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
                    <HeadingTitle
                        title={getLang("INNOVATION")}
                        colorTitle="#fff"
                        subTitle={getLang("What make LINA.REVIEW special?")}
                        colorSub="#deeeff" />
                    <SliderInnovation />
                </Col>
            </Row>

        </WrapInno>

    )
}
const WrapInno = styled.div`
    padding:100px 0;
    background-image:url(${mainImage});
`;