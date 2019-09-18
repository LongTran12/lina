import React from 'react'
import styled from "styled-components";
import { Row, Col } from "antd";
import HeadingTitle from "./HeadingTitle";
import BlockIntro from "./BlockIntro";
import img1 from '../assets/images/image-lina.jpg';
import img2 from '../assets/images/image-supply.jpg';
import img3 from '../assets/images/image-review.jpg';
import img4 from '../assets/images/image-healthy.jpg';
import img5 from '../assets/images/image_gorverment-1.jpg';


export default function SectionIntro() {
    return (
        <WrapIntro>
            <Row>
                <Col xxl={{ span: 18, offset: 3 }} md={{ span: 22, offset: 1 }} xs={{ span: 22, offset: 1 }}>
                    <HeadingTitle title="Introduction to LINA" colorTitle="#fff" subTitle="Get to know more about LINA" colorSub="#fff" />
                    {data.map((index, i) =>
                        <BlockIntro key={i} {...index} />
                    )}
                </Col>
            </Row>
        </WrapIntro>
    )
}
const data = [
    {
        id: 1,
        wrapBackgr: "#071c5f",
        textIntro: "LINA",
        colorText: "#9b34da",
        discription: `LINA NETWORK specializes in Blockchain technology,a multinational Corporations in Zurich, Switzerland.`,
        imageLink: img1,
        youtubeLink: "https:////www.youtube.com/embed/4uzQdRgmpOQ?autoplay=1"
    },
    {
        id: 2,
        right: "right",
        textIntro: "Supply Chain",
        colorText: "#ce4b77",
        order: "1",
        discription: `Supply chain includes system of organizations, people, activities, information and resources related to the transfer of products or services from the suppliers to the consumers.
                          With internet platform, managers of supply chain management privately can change information such
                           as the source, manufacturing processes when a product has a problem. Traceability of products is 
                           not really accurate and transparent./n LINA awared of these issues and provided a solution
                            by management supply chain on Blockchain – where information is more secure
                            and transparent. Hence, the process of producing raw materials to transporting
                            the product to the end-user is stored on Blockchain. The information in each process
                            or warehouse – where the product is stored will be stored at the node on the Blockchain network.
                            Consequently, users can access product origins faster, more accurately and transparently than traditional 
                            supply chain.`,
        imageLink: img2,
        youtubeLink: "https:////www.youtube.com/embed/4uzQdRgmpOQ?autoplay=1"
    },
    {
        id: 3,
        wrapBackgr: "#071c5f",
        textIntro: "Review",
        colorText: "#ffae3b",
        discription: `The current Review platform has left too many deficiences, especially lack of transparency and accuracy, it has lost the trust of users when they’re watching the online reviews.The solution for the reputation companies is cooperate with LINA.REVIEW and using LINA.REVIEW platform.On this platform, consumers who use the products/ services of those companies can become reviewers, LINA.REVIEW also is a platform where the third party can’t remove the comments / reviews of any users, thus ensuring the accuracy and transparency of the evaluation of the products / services.

                            To make the difference and increase user credibility by letting users evaluate transparently and accurately using LINA.REVIEW, large companies will use LINA.REVIEW for evaluating their products / services.As a result, you or anyone else experiencing their products / services can become a Reviewer on LINA.REVIEW.Accurate evaluations will receive votes from other users, when you get a vote you will receive LINA token as a reward.In case your reviews receive high ratings from the community, you will become an Expert on LINA.REVIEW, that means the reward for each of your reviews will get high appreciation than other users.Your reviews also has more impact on other users.`,
        imageLink: img3,
        youtubeLink: "https:////www.youtube.com/embed/4uzQdRgmpOQ?autoplay=1"
    },
    {
        id: 4,
        right: "right",
        textIntro: "Healthcare",
        colorText: "#ce4b77",
        order: "1",
        discription: `
Blockchain will help revolutionize the healthcare sector by providing permanent, trustable and accessible medical records, privacy and faster payments.We can apply blockchain technology to securely store health records and maintain a single version of the truth.Doctors, hospitals, laboratories, pharmacists and health insurers can request permission to access a patient’s record to serve their purpose and record transactions on the distributed ledger.Medical records should be stored on a distributed ledger and shared to the government.In this case, the government acts as the regulator.
All the medical information related to the patient such as past and present ailments, treatments, family history of medical problems will be stored in the blockchain.This will make every record permanent, transferable and prevent the medical records from being lost or modified.Through a mobile application, the patients will sign up and will be provided a unique address and a password for logging in and another unique address will be provided.When information is required, the healthcare provider or insurer will send a request along with the details of information to be viewed.The patient will authorize access to the information.This will protect the privacy of patients and make them the owners of their information.This prevents medical identity theft(which is also used for billing patients for unrendered treatments.)`,
        imageLink: img4,
        youtubeLink: "https:////www.youtube.com/embed/4uzQdRgmpOQ?autoplay=1"
    },
    {
        id: 5,
        wrapBackgr: "#071c5f",
        textIntro: "E-Goverment",
        colorText: "#70cd8b",
        discription: `Blockchain will help revolutionize the healthcare sector by providing permanent, trustable and accessible medical records, privacy and faster payments.We can apply blockchain technology to securely store health records and maintain a single version of the truth.Doctors, hospitals, laboratories, pharmacists and health insurers can request permission to access a patient’s record to serve their purpose and record transactions on the distributed ledger.Medical records should be stored on a distributed ledger and shared to the government.In this case, the government acts as the regulator.
All the medical information related to the patient such as past and present ailments, treatments, family history of medical problems will be stored in the blockchain.This will make every record permanent, transferable and prevent the medical records from being lost or modified.Through a mobile application, the patients will sign up and will be provided a unique address and a password for logging in and another unique address will be provided.When information is required, the healthcare provider or insurer will send a request along with the details of information to be viewed.The patient will authorize access to the information.This will protect the privacy of patients and make them the owners of their information.This prevents medical identity theft(which is also used for billing patients for unrendered treatments.`,
        imageLink: img5,
        youtubeLink: "https:////www.youtube.com/embed/4uzQdRgmpOQ?autoplay=1"
    }
]
const WrapIntro = styled.div`
    background: #10297a;
padding: 100px 0;
`;