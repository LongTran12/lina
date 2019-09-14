import React from 'react'
import { Row, Col } from 'antd';
import Social from "./Social";
import logo from "../assets/images/logo-lina-1.png";
import styled from 'styled-components';
export default function Footer() {
    const BackWrapper = styled.div`
         background:linear-gradient(135deg, #1c49df 0%, #1c49df 0%, #03e8f8 100%);
         padding-top:70px;
         padding-bottom:70px;
    `;
    const SpanInline = styled.span`
        color:#fff;
        padding-left:40px;
    `;

   const UlFooter = styled.ul`
    display:flex;
    align-items:center;
    justify-content:flex-end;
    list-style:none;
    li{
        padding:0 10px;
        position:relative;
        :before{
           content: '';
            width: 1px;
            height: 12px;
            background: #fff;
             position: absolute;
            right: 0;
            top: 5px;
        }
        a{
            color:#fff;
            :hover{
                color:#202020;
            }
        }
        &:last-child{
            :before{
                width:0;
            }
        }
    }
   `;

    return (
        <>
        <BackWrapper>
      <Row type="flex" justify="center" align="middle">
      <Col  md={6} xs={24}>
          <div className="logo-left d-flex align-items-center">
          <img src={logo} alt="logo" width="64px" height="92"/>
           <SpanInline> LINA.NETWORK © Copyright 2018.</SpanInline>
          </div>
       </Col>
      <Col  md={6} xs={24}>
        <Social></Social>
      </Col>
      <Col  md={6} xs={24}>
          <UlFooter>
              <li><a href="#1">Terms</a></li>
              <li><a href="#1">Privacy Policy</a></li>
              <li><a href="#1">Cookie Policy</a></li>
          </UlFooter>
      </Col>
    </Row>
    </BackWrapper>
        </>
    )
}
