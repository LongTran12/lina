import React, { useContext, Suspense } from 'react'
import HeadingTitle from "./HeadingTitle";
// import { WhatSlider } from "./WhatSlider";
import styled from 'styled-components';
import bglina from '../assets/images/bg-top-lina.jpg';
import { Row, Col } from "antd";
import { SiteContext } from '../contexts/siteContext'
const WhatSlider = React.lazy(() => import('./WhatSlider'));
const Subcribe = React.lazy(() => import('./Subcribe'));
export default function SectionWhat() {
    const { getLang } = useContext(SiteContext)
    return (
        <>

            <WrapWhat>
                <Row >
                    <Col xxl={{ span: 18, offset: 3 }} lg={{ span: 22, offset: 1 }} md={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
                        <HeadingTitle title={getLang('What is LINA')} color="#202020" />

                        <Suspense fallback={<div>Loading....</div>}>
                            <WhatSlider />
                            <Subcribe></Subcribe>
                        </Suspense>
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
    overflow:hidden;
`;
