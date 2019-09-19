import React from 'react';
import { Row, Col } from "antd";
import styled from 'styled-components';
import BlockReview from './BlockReview';
import HeadingTitle from './HeadingTitle';
import img1 from "../assets/images/review-1.jpg";
import img2 from "../assets/images/review-2.jpg";
import img3 from "../assets/images/review-3.jpg";
import img4 from "../assets/images/review-4.jpg";
import img5 from "../assets/images/review-5.jpg";
import img6 from "../assets/images/review-6.jpg";
import img7 from "../assets/images/review-7.jpg";
import img8 from "../assets/images/review-8.jpg";
import img9 from "../assets/images/review-9.jpg";

export default function SectionReview() {
    return (
        <WrapReview>
            <Row>
                <Col xxl={{ span: 18, offset: 3 }} lg={{ span: 22, offset: 1 }} md={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
                    <HeadingTitle title="What reviewers say" />
                    <Row gutter={40} type="flex">
                        {
                            dataReview.map((index, i) =>
                                <BlockReview key={i} {...index} />
                            )
                        }
                    </Row>
                </Col>
            </Row>
        </WrapReview>
    )
}
const WrapReview = styled.div`
    padding:100px 0;
`;
const dataReview = [
    {
        imageReview: img1,
        linkReview: "https://www.youtube.com/embed/GG8hQ6-Pi-4",
        textReview: "SANEM AVCIL Channel"
    },
    {
        imageReview: img2,
        linkReview: "https://www.youtube.com/embed/25YihGuLwUc",
        textReview: "CoinVlog Channel"
    },
    {
        imageReview: img3,
        linkReview: "https://www.youtube.com/embed/I6SocLGany8",
        textReview: "MOONRADIUS Channel"
    },
    {
        imageReview: img4,
        linkReview: "https://www.youtube.com/embed/JCUzc1ygxd8",
        textReview: "AnhreviewICO Channel"
    },
    {
        imageReview: img5,
        linkReview: "https://www.youtube.com/embed/Wa3AhOc6g4I",
        textReview: "Bounty ICO Channel"
    },

    {
        imageReview: img6,
        linkReview: "https://www.youtube.com/embed/xRPg2lsyoNg",
        textReview: "TRADING-IG Channel "
    },
    {
        imageReview: img7,
        linkReview: "https://www.youtube.com/embed/E23sIJfZP7Q",
        textReview: "The first supply chain management based on Blockchain Platform "
    },
    {
        imageReview: img8,
        linkReview: "https://www.youtube.com/embed/RpdlrTvIKiU",
        textReview: "Parliament Television of Viet Nam"
    },

    {
        imageReview: img9,
        linkReview: "https://www.youtube.com/embed/grDWdjkcjQI",
        textReview: "Lina Review on VTV1"
    }
]