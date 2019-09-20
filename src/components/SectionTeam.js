import React, { useContext } from 'react'
import { Row, Col } from 'antd';
import HeadingTitle from './HeadingTitle';
import styled from 'styled-components';
import BlockTeam from "./BlockTeam";
import member1 from '../assets/images/member-t1.jpg';
import member2 from '../assets/images/member-t2.jpg';
import member3 from '../assets/images/member-t3.jpg';
import member4 from '../assets/images/member-t4.jpg';
import member5 from '../assets/images/member-t5.jpg';
import member6 from '../assets/images/member-t6.jpg';
import member7 from '../assets/images/member-t7.jpg';
import member8 from '../assets/images/member-t8.jpg';
import { SiteContext } from '../contexts/siteContext'

export default function SectionTeam() {
    const { getLang } = useContext(SiteContext)
    const data = [
        {
            id: 1,
            imgAvatar: member1,
            name: "Vu Truong Ca",
            company: getLang("Chairman (Co-Founder)"),
            linkLinked: "https://www.facebook.com/",
            description: getLang(`He graduated from the University of Natural Sciences specialized in Information Technology and then completed the Enterprise Administration Course according to the Training program in the Federal Republic of Germany. He has over 5 years of experience in`),
        },
        {
            id: 2,
            imgAvatar: member2,
            name: "Michell Pham",
            company: getLang("Co-Founder"),
            linkLinked: "https://www.facebook.com/",
            linkFace: "https://www.facebook.com/",
            description: getLang(`He started his career in 1993, when he co-founded Augen Software Group, expanding 11 high-tech companies, including a wide range of software products and services, to provide financial, medical services and many other industries. He was Chairman of New Zealand Technology Association, NZ Association (NZTech) and Financial Organization, Association of Technology and Innovation (FinTechNZ), KEA Global’s New Zealander, Member of International Strategic Alliance of VN, Young Global Leader of the World Economic Forum. He is proud to be the Co-founder of Smart Link Swiss – Switzeland and the Lina platform.`),
        },
        {
            id: 3,
            imgAvatar: member3,
            name: "Nguyen Dang Trieu Thien",
            company: getLang("Chief Executive Officer"),
            linkLinked: "https://www.facebook.com/",
            description: getLang(`He graduated from Bach Khoa University (formerly Ho Chi Minh City University of Technology.`),
        },
        {
            id: 4,
            imgAvatar: member4,
            name: "Vu Van An",
            company: getLang("Chief Executive Officer"),
            linkLinked: "https://www.facebook.com/",
            description: getLang(`He graduated from the Ho Chi Minh City University of Social Sciences and Humanities with International Relations major. Besides, he is an expert in the field of Business Management and Supply Chain Automation in Germany and Japan. After many Studies and Market Research with his experts team, his desire is still to bring Vietnam’s intellectual products to the world. Currently he is one of the founding members of Lina Network, contributing to the development and implementation of Lina Network’s Blockchain applications to the world.`),
        },
        {
            id: 5,
            imgAvatar: member5,
            name: "Huynh Nhat Duat",
            company: getLang("Supplychain Project Director"),
            linkLinked: "https://www.facebook.com/",
            description: getLang(`With nearly 10 years of experience in the FMCG Group, with last position is Continuous Improvement Manager in FrieslandCampina, a member of the ongoing global improvement program at FrieslandCampina, which started in the Netherlands and then expanded to include Vietnam, Malaysia, Thailand, Indonesia, Philippines, Pakistan. He is also a specialist in guiding, connecting, training, coaching and managing the success of the ongoing improvement program at FrieslandCampina with the goal of creating a standardized, Innovative environment on all the worldwide FrieslandCampina outlet. `),
        },
        {
            id: 6,
            imgAvatar: member6,
            name: "Manjul Sabherwal",
            company: getLang("Strategic Technical Partners"),
            linkLinked: "https://www.facebook.com/",
            description: getLang(`A visionary who knows the art of developing a business that reaches all miles possible, oversees all aspects of Axtrics’ global technical operations and strategy building. Along with over 19 years of experience in digital business, technology, strategy and delivery; he also has wide industry exposure including Banking, Finance, Maritime Industry & Healthcare to his credit.  The Microsoft Certified Professional started his career in 1995 and has witnessed the Internet revolution closely. He is an executive technologist with extensive experience and a proven track record in data analytics and building large-scale ERP systems. `),
        },
        {
            id: 7,
            imgAvatar: member7,
            name: "Ha Duc Long",
            company: getLang("Project Director"),
            linkLinked: "https://www.facebook.com/",
            description: getLang(`Mr. Ha Duc Long graduated from HaNoi University of Science and Technology (2003 – 2008), specialized in IT. He has 7 years + of IT experience: E-commerce, Big data and develop platform systems and 2 years of experience in research and development Blockchain platform especially apply Blockchain in Supply chain, Identity for E-governance, Healthcare. . . He is also a experience trader in crypto currency. He also has 3 years + experience in developing government reuglations & policies. He is also Chief Of Architect of Lina Network and Chief of leaders in Smart Link Swiss – Switzerland. He together with the team in Lina Network is researching and developing Lina Platform which using 2 chains Technology. Now, he is Chief of leaders conduct 02 projects`),
        },
        {
            id: 8,
            imgAvatar: member8,
            name: "Vu Thach Tam",
            company: getLang("Technical Director"),
            linkLinked: "https://www.facebook.com/",
            description: getLang(`Mr. Vu Thach Tam graduated from HaNoi University of Science and Technology (2003 – 2008), specialized in IT. He has 10 years + of IT experience: E-commerce, Big data and develop platform systems and 1,5 years of experience in research and development Blockchain platform. He is also a Technical Director of Lina Network and one of leaders in Smart Link Swiss – Switzerland. He and his team in Lina Network is researching and developing Lina Platform which using 2 chains Technology – it is highly appreciated from international Blockchain experts.`),
        },
    ]
    return (
        <WrapTeam>
            <Row>
                <Col xxl={{ span: 18, offset: 3 }} lg={{ span: 22, offset: 1 }} md={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
                    <HeadingTitle title={getLang("Team")} subTitle={getLang("We're always looking for talented people joun our team")} colorSub="#808080" />
                    <Row gutter={40} type="flex" justify="center">
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
    overflow:hidden;
`;
