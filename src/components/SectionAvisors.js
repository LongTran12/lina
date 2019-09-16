import React from 'react'
import { Row, Col } from 'antd';
import HeadingTitle from './HeadingTitle';
import styled from 'styled-components';
import BlockTeam from "./BlockTeam";
import member1 from '../assets/images/member-1.jpg';

export default function SectionAvisors() {
    return (
        <WrapTeam>
            <Row>
                <Col md={18} offset={3}>
                    <HeadingTitle title="Advisor" colorTitle="#fff" subTitle="We're always looking for talented people joun our team" colorSub="#fff" />
                    <Row gutter={80} type="flex" justify="center">
                        {data.map((index, i) =>
                            <BlockTeam key={i} {...index} />
                        )}
                    </Row>
                </Col>
            </Row>
        </WrapTeam>
    )
}
const WrapTeam = styled.div`
    padding:100px 0;
    background:linear-gradient(135deg, #1c49df 0%, #1c49df 0%, #03e8f8 100%);
    .team-info *{
        color:#fff !important;
    }
`;
const data = [
    {
        id: 1,
        imgAvatar: member1,
        name: "Michell Pham",
        company: "co-founder",
        linkFace: "facebook",
        linkLinked: "https://www.facebook.com/",
        description: `He graduated from the University of Natural Sciences specialized in 
        Information Technology and then completed the Enterprise Administration Course according to the 
        Training program in the Federal Republic of Germany. He has over 5 years of experience in`,
    },
    {
        id: 2,
        imgAvatar: member1,
        name: "Michell Pham",
        company: "co-founder",
        linkLinked: "https://www.facebook.com/",
        linkFace: "https://www.facebook.com/",
        description: `He graduated from Bach Khoa University (formerly Ho Chi Minh City University of Technology)`,
    },
    {
        id: 2,
        imgAvatar: member1,
        name: "Michell Pham",
        company: "co-founder",
        linkLinked: "https://www.facebook.com/",
        description: `He graduated from the University of Natural Sciences specialized in 
        Information Technology and then completed the Enterprise Administration Course according to the 
        Training program in the Federal Republic of Germany. He has over 5 years of experience in`,
    },
    {
        id: 2,
        imgAvatar: member1,
        name: "Michell Pham",
        company: "co-founder",
        linkLinked: "https://www.facebook.com/",
        description: `He graduated from the University of Natural Sciences specialized in 
        Information Technology and then completed the Enterprise Administration Course according to the 
        Training program in the Federal Republic of Germany. He has over 5 years of experience in`,
    },
    {
        id: 2,
        imgAvatar: member1,
        name: "Michell Pham",
        company: "co-founder",
        linkLinked: "https://www.facebook.com/",
        description: `He graduated from the University of Natural Sciences specialized in 
        Information Technology and then completed the Enterprise Administration Course according to the 
        Training program in the Federal Republic of Germany. He has over 5 years of experience in`,
    },
    {
        id: 2,
        imgAvatar: member1,
        name: "Michell Pham",
        company: "co-founder",
        linkLinked: "https://www.facebook.com/",
        description: `He graduated from the University of Natural Sciences specialized in 
        Information Technology and then completed the Enterprise Administration Course according to the 
        Training program in the Federal Republic of Germany. He has over 5 years of experience in`,
    },
    {
        id: 2,
        imgAvatar: member1,
        name: "Michell Pham",
        company: "co-founder",
        linkLinked: "https://www.facebook.com/",
        description: `He graduated from the University of Natural Sciences specialized in 
        Information Technology and then completed the Enterprise Administration Course according to the 
        Training program in the Federal Republic of Germany. He has over 5 years of experience in`,
    }

]