import React from 'react';
import styled from 'styled-components'
import Charts from './Charts'
import HeadingTitle from './HeadingTitle'
import { Row, Col } from 'antd'

export default function SectionCharts() {
    return (
        <Wrap>
            <Row>
                <Col lg={{ span: 18, offset: 3 }} xs={{ span: 24, offset: 0 }}>
                    <HeadingTitle
                        title="LINA Token"
                        colorTitle="#fff"
                        subTitle="Budget Allocation"
                        colorSub="#deeeff"
                    />

                </Col>
                <Col lg={{ span: 14, offset: 5 }} xs={{ span: 22, offset: 1 }}>
                    <Charts />
                </Col>
                <Col lg={{ span: 18, offset: 3 }} xs={{ span: 22, offset: 1 }}>
                    <WrapVolumn>
                        <Row>
                            <Col md={8} xs={24} className="volumn volumn-1">
                                <h4>TotalVolumn</h4>
                                <div><span>900,000,000</span> LINA</div>
                            </Col>
                            <Col md={8} xs={24} className="volumn volumn-2">
                                <h4>TotalVolumn</h4>
                                <div><span>900,000,000</span> LINA</div>
                            </Col>
                            <Col md={8} xs={24} className="volumn volumn-3">
                                <h4>TotalVolumn</h4>
                                <div><span>900,000,000</span> LINA</div>
                            </Col>

                        </Row>
                    </WrapVolumn>
                </Col>
            </Row>
        </Wrap>
    )
}
const WrapVolumn = styled.div`
    margin-top:50px;
    .volumn{
        text-align:center;
        padding:35px 15px 25px;
        color:#fff;
        background:#071c5f;
        border:1px solid #2a469e;
        h4{
            color: #fff;
            font-family: Montserrat;
            font-weight: 400;
            font-style: inherit;
            font-size: 14px;
            text-transform: uppercase;
        }
        div{
            font-size: 26px;
            font-weight: 600;
            span{
                color:#08c9f3
            }
        }
        &.volumn-1{
            border-radius: 10px 0 0 10px;
            border-right:0;
        }
        &.volumn-2{
            
        }
        &.volumn-3{
            border-radius: 0 10px 10px 0;
            border-left:0;
        }
        
    }
`;
const Wrap = styled.div`
    padding:100px 0 140px;
    background:#10297a;
`;