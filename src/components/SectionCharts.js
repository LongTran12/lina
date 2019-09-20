import React, { useContext } from 'react';
import styled from 'styled-components'
import Charts from './Charts'
import HeadingTitle from './HeadingTitle'
import { Row, Col } from 'antd'
import { SiteContext } from '../contexts/siteContext';

export default function SectionCharts() {
    const { getLang } = useContext(SiteContext)
    return (
        <Wrap>
            <Row>
                <Col lg={{ span: 18, offset: 3 }} xs={{ span: 24, offset: 0 }}>
                    <HeadingTitle
                        title={getLang("LINA Token")}
                        colorTitle="#fff"
                        subTitle={getLang("Budget Allocation")}
                        colorSub="#deeeff"
                    />

                </Col>
                <Col xxl={{ span: 14, offset: 5 }} xl={{ span: 14, offset: 5 }} lg={{ span: 20, offset: 2 }} md={{ span: 20, offset: 2 }} sm={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
                    <Charts />
                </Col>
                <Col xxl={{ span: 18, offset: 3 }} xl={{ span: 18, offset: 3 }} lg={{ span: 20, offset: 2 }} sm={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
                    <WrapVolumn>
                        <Row>
                            <Col xxl={8} xl={8} lg={24} md={24} sm={24} xs={24} className="volumn volumn-1">
                                <h4>{getLang('TotalVolumn')}</h4>
                                <div><span>900,000,000</span> LINA</div>
                            </Col>
                            <Col xxl={8} xl={8} lg={24} md={24} sm={24} xs={24} className="volumn volumn-2">
                                <h4>{getLang('ICO VOLUME')}</h4>
                                <div><span>300,000,000</span> LINA</div>
                            </Col>
                            <Col xxl={8} xl={8} lg={24} md={24} sm={24} xs={24} className="volumn volumn-3">
                                <h4>{getLang('BLOCKED BY SMART CONTRACT')}</h4>
                                <div><span>600,000,000</span> LINA</div>
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
    @media (max-width:1200px){
        .volumn{
            &.volumn-1{
                border-radius: 10px 10px 0 0;
                border-right:1px solid #2a469e;
            }
            &.volumn-2{
                border-top:0;
                border-bottom:0;
            }
            &.volumn-3{
                border-radius: 0 0 10px 10px;
                border-left:0;
                border-left:1px solid #2a469e;
            } 
        }
    }
`;
const Wrap = styled.div`
    padding:100px 0 140px;
    background:#10297a;
    height:100%;
    overflow:hidden;
`;