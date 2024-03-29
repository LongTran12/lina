import React, { useContext } from 'react'
import BlockBrand from "./BlockBrand";
import styled from "styled-components";
import img_back from "../assets/images/bg-partners.jpg";
import { Row, Col } from "antd";
import HeadingTitle from "./HeadingTitle";
import logo1 from "../assets/images/logo-01.png";
import logo2 from "../assets/images/logo-02.png";
import logo3 from "../assets/images/logo-03.png";
import logo4 from "../assets/images/logo-04.png";
import logo5 from "../assets/images/logo-05.png";
import logo6 from "../assets/images/logo-06.png";
import logo7 from "../assets/images/logo-07.png";
import logo8 from "../assets/images/logo-08.png";
import logo9 from "../assets/images/logo-09.png";
import { SiteContext } from '../contexts/siteContext';

export default function SectionStragic() {
    const { getLang } = useContext(SiteContext)
    const dataBrand = [
        {
            nameBrand: 'AIM THAI INTERTRADE',
            logoBrand: logo1
        },
        {
            nameBrand: 'S.A.P. SIAM FOOD INTERNATIONAL CO.LTD.',
            logoBrand: logo2
        },
        {
            nameBrand: 'FARM CHOKHAI',
            logoBrand: logo3
        },
        {
            nameBrand: 'MINISTRY OF SCIENCE AND TECHNOLOGY OF LAOS',
            logoBrand: logo4
        },
        {
            nameBrand: 'INTERNATIONAL DIGITAL CURRENCY MARKETS',
            logoBrand: logo5
        },
        {
            nameBrand: 'INFINITY BLOCKCHAIN LABS',
            logoBrand: logo6
        },
        {
            nameBrand: 'KOMATSU BUSSAN COMPANY LIMITED',
            logoBrand: logo7
        },
        {
            nameBrand: 'BUSINESS SUPPORT ORGANIZATION',
            logoBrand: logo8
        },
        {
            nameBrand: 'WORLD LEADER IN CONSULTING AND TECHNOLOGY SERVICES',
            logoBrand: logo9
        }
    ]
    return (
        <WrapBrand>
            <Row>
                <Col xxl={{ span: 18, offset: 3 }} xl={{ span: 18, offset: 3 }} lg={{ span: 22, offset: 1 }} md={{ span: 22, offset: 1 }} sm={{ span: 20, offset: 2 }} xs={{ span: 20, offset: 2 }}>
                    <HeadingTitle title={getLang("Strategic Partners")} colorTitle="#fff" />
                    <Row className="brand" gutter={40}>
                        {dataBrand.map((index, i) => (
                            <BlockBrand key={i} {...index} />
                        ))
                        }
                    </Row>
                </Col>
            </Row>
        </WrapBrand >
    )
}
const WrapBrand = styled.div`
    background-image:url(${img_back});
    padding:100px 0;
    overflow:hidden;
    .brand{
        display:flex;
        flex-flow: row wrap;
        width: auto;
        justify-content: center;
    }
`;
