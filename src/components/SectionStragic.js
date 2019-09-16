import React from 'react'
import BlockBrand from "./BlockBrand";
import styled from "styled-components";
import img_back from "../assets/images/bg-partners.jpg";
import { Row, Col } from "antd";
import HeadingTitle from "./HeadingTitle";
import logo1 from "../assets/images/logo-01.png";
import logo2 from "../assets/images/logo-02.png";
import logo3 from "../assets/images/logo-03.png";
import logo4 from "../assets/images/logo-04.png";

export default function SectionStragic() {
    return (
        <WrapBrand>
            <Row>
                <Col lg={{ span: 18, offset: 3 }} md={{ span: 24, offset: 0 }} xs={{ span: 24, offset: 0 }}>
                    <HeadingTitle title="Strategic Partners" colorTitle="#fff" />
                    <Row className="brand" gutter={40}>
                        {dataBrand.map((index, i) => (
                            <BlockBrand  {...index} />
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
    padding:100px;
    .brand{
        display:flex;
        flex-flow: row wrap;
        width: auto;
        justify-content: space-between;
    }
`;
const dataBrand = [
    {
        nameBrand: 'aim thai intertrade',
        logoBrand: logo1
    },
    {
        nameBrand: 'WORLD LEADER IN CONSULTING AND TECHNOLOGY SERVICES',
        logoBrand: logo2
    },
    {
        nameBrand: 'INTERNATIONAL DIGITAL CURRENCY MARKETS',
        logoBrand: logo3
    },
    {
        nameBrand: 'BUSINESS SUPPORT ORGANIZATION',
        logoBrand: logo4
    },
    {
        nameBrand: 'aim thai intertrade',
        logoBrand: logo1
    },
    {
        nameBrand: 'WORLD LEADER IN CONSULTING AND TECHNOLOGY SERVICES',
        logoBrand: logo2
    },
    {
        nameBrand: 'INTERNATIONAL DIGITAL CURRENCY MARKETS',
        logoBrand: logo3
    },
    {
        nameBrand: 'BUSINESS SUPPORT ORGANIZATION',
        logoBrand: logo4
    }
]