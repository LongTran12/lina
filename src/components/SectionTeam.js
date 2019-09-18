import React from 'react'
import { Row, Col } from 'antd';
import HeadingTitle from './HeadingTitle';
import styled from 'styled-components';
import BlockTeam from "./BlockTeam";
import member1 from '../assets/images/member-1.jpg';

export default function SectionTeam() {
    return (
        <WrapTeam>
            <Row>
                <Col xxl={{ span: 18, offset: 3 }} lg={{ span: 22, offset: 1 }} md={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
                    <HeadingTitle title="Team" subTitle="We're always looking for talented people joun our team" colorSub="#808080" />
                    <Row gutter={40} >
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
`;
const data = [
    {
        id: 1,
        width: "6",
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
        width: "6",
        imgAvatar: member1,
        name: "Michell Pham",
        company: "co-founder",
        linkLinked: "https://www.facebook.com/",
        linkFace: "https://www.facebook.com/",
        description: `He graduated from Bach Khoa University (formerly Ho Chi Minh City University of Technology)`,
    },
    {
        id: 2,
        width: "6",
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
        width: "6",
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
        width: "6",
        imgAvatar: member1,
        name: "Michell Pham",
        company: "co-founder",
        linkLinked: "https://www.facebook.com/",
        description: `He graduated from the University of Natural Sciences specialized in 
        Information Technology and then completed the Enterprise Administration Course according to the 
        Training program in the Federal Republic of Germany. He has over 5 years of experience in`,
    }
]