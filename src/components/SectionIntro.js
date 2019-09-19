import React, { useContext } from 'react'
import styled from "styled-components";
import { Row, Col } from "antd";
import HeadingTitle from "./HeadingTitle";
import BlockIntro from "./BlockIntro";
import img1 from '../assets/images/image-lina.jpg';
import img2 from '../assets/images/image-supply.jpg';
import img3 from '../assets/images/image-review.jpg';
import img4 from '../assets/images/image-healthy.jpg';
import img5 from '../assets/images/image_gorverment-1.jpg';
import { SiteContext } from '../contexts/siteContext';

export default function SectionIntro() {
    const { getLang } = useContext(SiteContext)
    const data = [
        {
            id: 1,
            wrapBackgr: "#071c5f",
            textIntro: getLang("LINA"),
            colorText: "#9b34da",
            discription: <DataDes1 />,
            imageLink: img1,
            isButton: true,
            youtubeLink: "https:////www.youtube.com/embed/4uzQdRgmpOQ?autoplay=1"
        },
        {
            id: 2,
            right: "right",
            textIntro: getLang('Supply Chain'),
            colorText: "#ce4b77",
            order: "1",
            discription: <DataDes2 />,
            imageLink: img2,
            isButton: true,
            youtubeLink: "https:////www.youtube.com/embed/KuOq-q8Ae4c?autoplay=1"
        },
        {
            id: 3,
            wrapBackgr: "#071c5f",
            textIntro: getLang("Review"),
            colorText: "#ffae3b",
            discription: <DataDes3 />,
            imageLink: img3,
            isButton: true,
            youtubeLink: "https:////www.youtube.com/embed/FOXVOnVIjTc?autoplay=1"
        },
        {
            id: 4,
            right: "right",
            textIntro: getLang("Healthcare"),
            colorText: "#ce4b77",
            order: "1",
            discription: <DataDes4 />,
            imageLink: img4,
            isButton: true,
            youtubeLink: "https:////www.youtube.com/embed/FOXVOnVIjTc?autoplay=1"
        },
        {
            id: 5,
            wrapBackgr: "#071c5f",
            textIntro: getLang("E-Goverment"),
            colorText: "#70cd8b",
            discription: <DataDes5 />,
            imageLink: img5,
            isButton: true,
            youtubeLink: "https:////www.youtube.com/embed/FOXVOnVIjTc?autoplay=1"
        },
        {
            id: 6,
            textIntro: getLang("What is ABS Guarantee?"),
            colorText: "#9b34da",
            order: "1",
            discription: <DataDes6 />,
            imageLink: img5,
            isButton: true,
            youtubeLink: "https:////www.youtube.com/embed/j3XSZ6J8brM?autoplay=1"
        },
        {
            id: 7,
            wrapBackgr: "#071c5f",
            textIntro: getLang("Game Daap Number Lucky"),
            colorText: "#ce4b77",
            discription: <DataDes7 />,
            imageLink: img5,
            isButton: false,
        },
        {
            id: 8,
            textIntro: getLang("What is OTC Exchange"),
            colorText: "#ce4b77",
            order: "1",
            discription: <DataDes8 />,
            imageLink: img5,
            isButton: false,
        },
        {
            id: 9,
            wrapBackgr: "#071c5f",
            textIntro: getLang("What is LINA BUSTER?"),
            colorText: "#70cd8b",
            discription: <DataDes9 />,
            imageLink: img5,
            isButton: false,
        },
    ]
    return (
        <WrapIntro>
            <Row>
                <Col xxl={{ span: 18, offset: 3 }} md={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
                    <HeadingTitle title={getLang("Introduction to LINA")} colorTitle="#fff" subTitle={getLang("Get to know more about LINA")} colorSub="#fff" />
                    {data.map((index, i) =>
                        <BlockIntro key={i} {...index} />
                    )}
                </Col>
            </Row>
        </WrapIntro>
    )
}
function DataDes1() {
    const { getLang } = useContext(SiteContext)
    return (
        <p>{getLang('LINA NETWORK specializes in Blockchain technology,a multinational Corporations in Zurich, Switzerland.')}</p>
    );
}
function DataDes2() {
    const { getLang } = useContext(SiteContext)
    return (
        <>
            <p>{getLang('Supply chain includes system of organizations, people, activities, information and resources related to the transfer of products or services from the suppliers to the consumers. With internet platform, managers of supply chain management privately can change information such as the source, manufacturing processes when a product has a problem. Traceability of products is not really accurate and transparent.')}</p>
            <p>{getLang('LINA awared of these issues and provided a solution by management supply chain on Blockchain – where information is more secure and transparent. Hence, the process of producing raw materials to transporting the product to the end-user is stored on Blockchain. The information in each process or warehouse – where the product is stored will be stored at the node on the Blockchain network. Consequently, users can access product origins faster, more accurately and transparently than traditional supply chain.')}</p>
        </>
    );
}
function DataDes3() {
    const { getLang } = useContext(SiteContext)
    return (
        <>
            <p>{getLang('The current Review platform has left too many deficiences, especially lack of transparency and accuracy, it has lost the trust of users when they’re watching the online reviews. The solution for the reputation companies is cooperate with LINA.REVIEW and using LINA.REVIEW platform. On this platform, consumers who use the products/services of those companies can become reviewers, LINA.REVIEW also is a platform where the third party can’t remove the comments/reviews of any users, thus ensuring the accuracy and transparency of the evaluation of the products/services.')}</p>
            <p>{getLang('To make the difference and increase user credibility by letting users evaluate transparently and accurately using LINA.REVIEW, large companies will use LINA.REVIEW for evaluating their products/ services. As a result, you or anyone else experiencing their products/services can become a Reviewer on LINA.REVIEW. Accurate evaluations will receive votes from other users, when you get a vote you will receive LINA token as a reward. In case your reviews receive high ratings from the community, you will become an Expert on LINA.REVIEW, that means the reward for each of your reviews will get high appreciation than other users. Your reviews also has more impact on other users.')}</p>
        </>
    );
}
function DataDes4() {
    const { getLang } = useContext(SiteContext)
    return (
        <>
            <p>{getLang('Blockchain will help revolutionize the healthcare sector by providing permanent, trustable and accessible medical records, privacy and faster payments. We can apply blockchain technology to securely store health records and maintain a single version of the truth. Doctors, hospitals, laboratories, pharmacists and health insurers can request permission to access a patient’s record to serve their purpose and record transactions on the distributed ledger. Medical records should be stored on a distributed ledger and shared to the government. In this case, the government acts as the regulator.')}</p>
            <p>{getLang('All the medical information related to the patient such as past and present ailments, treatments, family history of medical problems will be stored in the blockchain. This will make every record permanent, transferable and prevent the medical records from being lost or modified. Through a mobile application, the patients will sign up and will be provided a unique address and a password for logging in and another unique address will be provided. When information is required, the healthcare provider or insurer will send a request along with the details of information to be viewed. The patient will authorize access to the information. This will protect the privacy of patients and make them the owners of their information. This prevents medical identity theft (which is also used for billing patients for unrendered treatments.')}</p>
        </>
    );
}
function DataDes5() {
    const { getLang } = useContext(SiteContext)
    return (
        <>
            <p>{getLang('Electronic identity is unification of citizen’s documents and personal information through a unique ID number or security code by which the system will automatically presents the basic personal information of a citizen such as name, age, gender, address…Therefore, when citizens come to the authorities to carry out administrative procedures, they only have to fill out the application, bring ID card without other documents or they can even perform those tasks online with no need to go in person. With the combination of the decentralized blockchain principle and a comprehensive system for verifying identity, it has been suggested that a digital ID can be created for each online user to serve as digital watermark affixed to all transactions carried out by the user. Blockchain gives people the control of their identity so that they can manage and share it more proactively as and when required.')}</p>
            <p>{getLang('As the information only works on some unique digital ledgers, other parties can participate very easily in the system. Lina can associate with the authorities competent of verifying the information to ensure the accuracy of the entered identity information. Nobody has the right to change that information except the owner of the information, so the identity information on the Lina system will have a very high credibility.')}</p>
        </>
    );
}
function DataDes6() {
    const { getLang } = useContext(SiteContext)
    return (
        <>
            <p>{getLang('Guarantee is the insurance program of ABS combined with partner exchanges for investors to buy and hold Lina token on ABS website. ABS Guarantee insures investors\' benefits regardless of market volatility.')}</p>
            <p>{getLang('Investors will get back at least 30% profit after 6 months signing a Guarantee contract on ABS Guarantee website.')}</p>
            <p>{getLang('Investors will be able to cancel Guarantee contract anytime with 10% fee.')}</p>
            <p>{getLang('A great promotion for inviting new member through your referral link and earn up to 5% total settlement of your ref member.')}</p>
        </>
    );
}
function DataDes7() {
    const { getLang } = useContext(SiteContext)
    return (
        <>
            <p>{getLang('Game played on Trust Wallet Platform')}</p>
            <p>{getLang('Game have 4 sizes: 10-20-50-100')}</p>
            <p>{getLang('Each person selects a number, when the 100th person has selected, the system will randomly pick out the lucky number from 1 to  99.')}</p>
            <h5 style={{ color: '#fff', marginBottom: 20, marginTop: 40 }}><strong>{getLang('Pool share:')}</strong></h5>
            <p><em>{getLang('70% wallet for those who guess correctly.')}</em></p>
            <p><em>{getLang('5% wallet for the person who introduces the winner.')}</em></p>
            <p><em>{getLang('10% wallet for referrals to play.')}</em></p>
            <p><em>{getLang('15% wallet dividend for LinaFund.')}</em></p>
            <h5 style={{ color: '#fff', marginBottom: 20, marginTop: 40 }}><strong>{getLang('Fee: 10%')}</strong></h5>
        </>
    );
}
function DataDes8() {
    const { getLang } = useContext(SiteContext)
    return (
        <>
            <p>{getLang('OTC LINA Exchange is a P2P exchange, allowing you to use Vietnam Dong (VND) or Tether (USDT) to buy and sell LINA Token without setting the maximum and minimum amount for transactions, suitable for newbie and people who need to buy and sell LINA in bulk')}</p>
            <p>{getLang('OTC Exchange belongs to LINA FUND OTC LINA Exchange is considered a reputable, safe and cheapest platform to buy LINA Token in Vienam')}</p>
        </>
    );
}
function DataDes9() {
    const { getLang } = useContext(SiteContext)
    return (
        <>
            <p>{getLang('As a LINA Token Investment Fund on DAAP Smart Contract - used on TRUST WALLET wallet platform.')}</p>
            <p>{getLang('Operating in the field of game investment on Smart Contrac platform')}</p>
            <p>{getLang('It is also the provider of OTC Exchange LINA TOKEN trading floor for LINA investors Partner in association with Thailand Insurance Group ABS Guarantee')}</p>
            <h5 style={{ color: '#fff', marginBottom: 20, marginTop: 40 }}><strong>{getLang('Packagers of Investment:')}</strong></h5>
            <p>{getLang('We have 5 investment packages: Bronze - Silver - Gold - Platinum - Diamond')}</p>
            <p><em>{getLang('Investors can withdraw at any time Dividend will automatically return to individual wallets Min average 0.5 - 1%  / month')}</em></p>
        </>
    );
}

const WrapIntro = styled.div`
    background: #10297a;
padding: 100px 0;
`;