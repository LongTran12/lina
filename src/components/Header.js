import React from 'react';
import logo from "../assets/images/logo-lina-1.png";
import usa from "../assets/images/64.png"
import styled from 'styled-components';
import { Row, Col } from 'antd';
import {FaCaretDown} from "react-icons/fa";
export default function Header() {
    
    return (
        <WrapHeader>
        <Row type="flex" justify="center" align="middle">
            <Col span={11}>
                    <img src={logo} alt="logo" width="50px" height="72px"/>
            </Col>
            <Col span={11}>
                <MenuList>
                    <ul>
                        <li><a href="#1">News</a></li>
                        <li><a href="#1">Q&A</a></li>
                        <li><a href="#1">Whitepaper</a></li>
                        <li><a href="#1">Contact</a></li>
                        <li>
                            <DropLang>
                                <a className="language" href="#1" onClick={(e)=>e.preventDefault}>
                                    <img src={usa} alt="lang_usa" width="16px" height="11px"/>
                                    English
                                    <span><FaCaretDown></FaCaretDown></span>
                                </a>    
                            </DropLang>    
                        </li>
                    </ul>
                </MenuList>
          </Col>     
        </Row>
        </WrapHeader>
    )
}
const WrapHeader = styled.div`
        position:absolute;
        left:0;top:0;right:0;
        padding:10px 0;
    `;
    const MenuList = styled.div`
     
        ul{
            list-style:none;
            display:flex;
            align-items:center;
            flex-flow:row-wrap;
            justify-content:flex-end;
            li{
                padding:0 20px;
                a{
                     font-family: 'Montserrat', sans-serif;
                    font-size:18px;
                    font-weight:bold;
                    color:#fff;
                    :hover{
                        color:#e8a236;
                    }
                }
            }
        }
    `;
    const DropLang = styled.div`
        
        a.language{
            border:1px solid #999;
        border-radius:5px;
            font-size:14px;
            font-family:"Poppins";
            font-weight:normal;
            padding:5px 15px;
            img{
                padding-right:5px;
            }
        }
    `;