import React, { useContext } from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Maps from '../components/Maps'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import ContactInfo from '../components/ContactInfo'
import ContactMails from '../components/ContactMails'
import { SiteContext } from '../contexts/siteContext'

export default function Contact() {
    const { getLang } = useContext(SiteContext)
    return (
        <Wrap>
            <Breadcrumb title={getLang("Contact Us")} />
            <Row>
                <Col>
                    <Maps />
                </Col>
            </Row>

            <Row className="block-contact">

                <Col xxl={{ span: 16, offset: 4 }} xl={{ span: 20, offset: 2 }} md={{ span: 20, offset: 2 }} xs={{ span: 22, offset: 1 }}>
                    <div className="absolute-row">
                        <Row>
                            <Col xl={{ span: 10 }} xs={{ span: 24 }}>
                                <ContactInfo />
                            </Col>
                            <Col xl={{ span: 14 }} xs={{ span: 24 }}>
                                <ContactMails />
                            </Col>
                        </Row>
                    </div>
                </Col>

            </Row>

        </Wrap>
    )
}
const Wrap = styled.div`
    .absolute-row{
        transform: translateY(-40%);
        box-shadow: 0 0 50px -3px rgba(0, 0, 0, 0.1);
        position: relative;
        z-index: 1;
        overflow: hidden;
        background:#fff;
        border-radius:15px;
    }
    @media (max-width:1400px){
        .absolute-row{
            transform:translateY(-40px);
        }    
    }
    @media (max-width:1024px){
        .block-contact{
            padding:40px 0;
        }
        
        .absolute-row{
            transform:translateY(0);
        }    
    }
`;
