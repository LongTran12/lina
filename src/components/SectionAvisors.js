import React, { useContext } from 'react'
import { Row, Col } from 'antd';
import HeadingTitle from './HeadingTitle';
import styled from 'styled-components';
import BlockTeam from "./BlockTeam";
import member1 from '../assets/images/member-a1.jpg';
import member2 from '../assets/images/member-a2.jpg';
import member3 from '../assets/images/member-a3.jpg';
import member4 from '../assets/images/member-a4.jpg';
import member5 from '../assets/images/member-a5.jpg';
import member6 from '../assets/images/member-a6.jpg';
import member7 from '../assets/images/member-a7.jpg';
import member8 from '../assets/images/member-a8.jpg';
import member9 from '../assets/images/member-a9.jpg';
import member10 from '../assets/images/member-a10.jpg';
import member11 from '../assets/images/member-a11.png';
import member12 from '../assets/images/member-a12.jpg';
import member13 from '../assets/images/member-a13.jpg';
import { SiteContext } from '../contexts/siteContext';

export default function SectionAvisors() {
    const { getLang } = useContext(SiteContext)
    const data = [
        {
            id: 1,
            imgAvatar: member1,
            name: "Greg (Zvi) Kushnir",
            company: getLang("Advisor"),
            linkLinked: "https://www.facebook.com/",
            description: getLang(`He is co-founded 8 big companies and is a Strategic Investor, member of the Board of Directors with a number of new companies. Greg is a seasoned manager with top technology team, creating products and providing marketing strategies. He is a specialist in Blockchain, Cloud Computing, Peer Network, Online Marketing and Sudden Innovation.`),
        },
        {
            id: 2,
            imgAvatar: member2,
            name: "Leigh Flounders",
            company: getLang("Advisor"),
            linkLinked: "https://www.facebook.com/",
            linkFace: "https://www.facebook.com/",
            description: getLang(`Leigh attended technology events from London to America. He hosted the China Fintech conference in Shanghai in 2017. He has 22 years of experience in the financial services industry, including 10 years with the leading role of “Data and Financial Technology”. He has served as the Managing Director of two leading Fintech companies in New Zealand for five years, having worked with Tencent, Baidu, JD.com, Alipay and major Chinese banks.`),
        },
        {
            id: 3,
            imgAvatar: member3,
            name: "Thuc Vu",
            company: getLang("Advisor"),
            linkLinked: "https://www.facebook.com/",
            description: getLang(`Doctor at Stanford University, in the field of Computer Science. Co-founder / CEO at Kambria, an open robot platform powered by blockchain and cryptoomyonomics. Co-founder of Ohmnilabs, developing useful and affordable personal robots to improve everyday life.`),
        },
        {
            id: 4,
            imgAvatar: member4,
            name: "Pro. Dr. Ralf Wandmacher",
            company: getLang("Advisor"),
            linkLinked: "https://www.facebook.com/",
            description: getLang(`Professor of Finance and Entrepreneurship at accadis University in Germany. Expert of Blockchain Finance, Cryptocurrencies, Trading, Structuring, ResearchIndexation, Asset Management, ICOs, Asset to Token PhD in Finance about Implied Volatility theories from the University of Cape Town.Master in Business Administration (Diplom-Kaufmann) from the University of Goettingen with a master thesis about Neural Networks.Advisor`),
        },
        {
            id: 5,
            imgAvatar: member5,
            name: "DR. Prayoon Akaraborworn",
            company: getLang("Advisor"),
            linkLinked: "https://www.facebook.com/",
            description: getLang(`(Political Science) Ramkhamhaeng University, Thailand. Northeastern Illinois University, USA. (International Affairs).Northeastern Illinois University, USA.`),
        },
        {
            id: 6,
            imgAvatar: member6,
            name: "Assoc. Prof. Ph.D Kultgawut Bhumirat",
            company: getLang("Advisor"),
            linkLinked: "https://www.facebook.com/",
            description: getLang(`Bachelor of Laws, Ramkhamhaeng University. Member of Thai Bar Association. In 1994-1997 was the judge of the Chomphon Provincial Court. In the year 1997-2006 was the judge of the Samut Sakhon Provincial Court`),
        },
        {
            id: 7,
            imgAvatar: member7,
            name: "Assic. Prof. Dr. Gomes Kwanmuang",
            company: getLang("Project Director"),
            linkLinked: "https://www.facebook.com/",
            description: getLang(`Bachelor of Laws. First Class Honor, France. Former member of House of Commons Surat Thani (1988-1991). Former Member of the Constitution of the Kingdom of Thailand 1997. Dean of Faculty of Law, Tapae University (2003-2015).`),
        },
        {
            id: 8,
            imgAvatar: member8,
            name: "Nisit Palipote",
            company: getLang("Advisor"),
            linkLinked: "https://www.facebook.com/",
            description: getLang(`Secretary Manager, The Thai Sugar Trading Corporation Ltd. (1977-1988). Manager of Thai Sugar Trading Association (1988-1991). CEO of INN news agency and Ruam Duay Chuay Kan Radio (1991-2001)`),
        },
        {
            id: 9,
            imgAvatar: member9,
            name: "Aphisit Techanitisawad",
            company: getLang("Advisor"),
            linkLinked: "https://www.facebook.com/",
            description: getLang(`Advisor of Thailand Fisheries association – Board of Federation of Thailand’s fishing industry – Board of Economic Committee, Thai Chamber of Commerce – Board of small and medium-sized enterprises, Thai Chamber of Commerce. – Thai fishermen HIV- Behavior encouragement project committee, Samutsakhon – Advisory Committee of Fisheries and Livestock – Juvenile and Family Court Associate Judge – Council of Agriculture luminaries`),
        },
        {
            id: 10,
            imgAvatar: member10,
            name: "Takeshi Ba",
            company: getLang("Advisor"),
            linkLinked: "https://www.facebook.com/",
            description: getLang(`Upon graduating from Sophia University (Tokyo, Japan) with a Bachelor of Business Management/Marketing, he started his first career in Recruit Holdings Co., Ltd. which is the company manages the most influential web matching platforms among individuals and businesses in the fields of recruiting, education, housing, travel, automobiles, marriage, cuisine, beauty, and lifestyle.`),
        },
        {
            id: 11,
            imgAvatar: member11,
            name: "Hiroshi Matsumoto",
            company: getLang("Advisor"),
            linkLinked: "https://www.facebook.com/",
            description: getLang(`Hiroshi Matsumoto is a Japanese company manager. He is currently President and CEO of Air Consultants Corporation and Outside Director of Benesse Corporation. He was vice president of National Steel Company of US. Advent · International Tokyo office representative. He is also founder of KVH Telecom Co., Ltd. (presently Colt Technology Service Co., Ltd.) Alpha Pearce Co., Ltd.`),
        },
        {
            id: 12,
            imgAvatar: member12,
            name: "Kumi Naruse",
            company: getLang("Advisor"),
            linkLinked: "https://www.facebook.com/",
            description: getLang(`She is a Philanthropist, Producer, Thinker, Bilingual MC and Journalist. A powerful women in business industry who is CEO Eternel Beaute and Founder of Hospitality Foundation of Japan and many business related to.`),
        },
        {
            id: 10,
            imgAvatar: member13,
            name: "Kiyoyuki Tsujimura",
            company: getLang("Advisor"),
            linkLinked: "https://www.facebook.com/",
            description: getLang(`Mr Tsujimura currently serves as Chief Strategic Advisor of DOCOMO CS Inc and Representative Director and CEO of CarpeDiem Inc. More than 30 years, He has held many key positions including Managing Director of NTT America, Managing Director of the Corporate Strategy and Planning Department of NTT Mobile Communications Network (which became NTT DOCOMO), Managing Director of the Global Business Department of NTT DOCOMO, Managing Director of the Corporate Strategy and Planning Department of NTT DOCOMO, member of the NTT DOCOMO Board of Directors, and Managing Director of the Products and Services Division of NTT DOCOMO.`),
        },
    ]
    return (
        <WrapTeam>
            <Row>
                <Col xxl={{ span: 18, offset: 3 }} lg={{ span: 22, offset: 1 }} md={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
                    <HeadingTitle title={getLang("Advisor")} colorTitle="#fff" subTitle={getLang("We're always looking for talented people joun our team")} colorSub="#fff" />
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
    overflow:hidden;
    padding:100px 0;
    background:linear-gradient(135deg, #1c49df 0%, #1c49df 0%, #03e8f8 100%);
    .team-info *{
        color:#fff !important;
    }
`;
