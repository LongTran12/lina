import React from 'react';
import { Row, Col } from "antd";
import styled from 'styled-components';
import BlockReview from './BlockReview';
import HeadingTitle from './HeadingTitle';
import img1 from "../assets/images/review-1.jpg";
import img2 from "../assets/images/review-2.jpg";
import img3 from "../assets/images/review-3.jpg";

export default function SectionReview() {
    return (
        <WrapReview>
            <Row>
                <Col xl={{ span: 18, offset: 3 }} xs={{ span: 24, offset: 0 }}>
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
        textReview: "TAMAO Chanel"
    },
    {
        imageReview: img2,
        linkReview: "https://www.youtube.com/embed/GG8hQ6-Pi-4",
        textReview: "TAMAO Chanel Hello world in the. what is your name?"
    },
    {
        imageReview: img3,
        linkReview: "https://www.youtube.com/embed/GG8hQ6-Pi-4",
        textReview: "TAMAO Chanel"
    },
    {
        imageReview: img1,
        linkReview: "https://www.youtube.com/embed/GG8hQ6-Pi-4",
        textReview: "TAMAO Chanel"
    },
    {
        imageReview: img2,
        linkReview: "https://www.youtube.com/embed/GG8hQ6-Pi-4",
        textReview: "TAMAO Chanel"
    },

    {
        imageReview: img2,
        linkReview: "https://www.youtube.com/embed/GG8hQ6-Pi-4",
        textReview: "TAMAO Chanel"
    }
]