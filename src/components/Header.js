import React, { useContext, useState } from 'react';
import logo from "../assets/images/logo-lina-1.png";
import usa from "../assets/images/64.png";
import vn from "../assets/images/641.png";
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { FaCaretDown } from "react-icons/fa";
import { SiteContext } from '../contexts/siteContext'

export default function Header() {
    const { getLang, setLang, lang } = useContext(SiteContext)
    const [isOpen, setisOpen] = useState(false);

    return (
        <WrapHeader>
            <Row type="flex" justify="center" align="middle">
                <Col span={11}>
                    <a href="/" title="logo"><img src={logo} alt="logo" width="50px" height="72px" /></a>
                </Col>
                <Col span={11}>
                    <MenuList>
                        <ul>
                            <li><a href="#1">{getLang('news')}</a></li>
                            <li><a href="#1">{getLang('q&a')}</a></li>
                            <li><a href="#1">{getLang('whitepaper')}</a></li>
                            <li><a href="#2">{getLang('contact')}</a></li>
                            <li>
                                <DropLang>
                                    <button className="language" onClick={() => setisOpen(!isOpen)}>
                                        <img src={lang === 'en' ? usa : vn} alt="lang_usa" width="16px" height="11px" />
                                        {lang === "en" ? "English" : 'VietNam'}
                                        <span><FaCaretDown></FaCaretDown></span>
                                    </button>
                                    {isOpen && <ul className="ul-lang">
                                        <li>
                                            <button className="child-language" onClick={() => {
                                                setLang('en');
                                                setisOpen(false)
                                            }
                                            }>
                                                <img src={usa} alt="lang_usa" width="16px" height="11px" />
                                                English
                                            </button>

                                        </li>
                                        <li>
                                            <button className="child-language" onClick={() => {
                                                setLang('vi')
                                                setisOpen(false)
                                            }}>
                                                <img src={vn} alt="lang_usa" width="16px" height="11px" />
                                                VietNam
                                            </button>
                                        </li>
                                    </ul>
                                    }

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
        >ul{
            list-style:none;
            display:flex;
            align-items:center;
            flex-flow:row-wrap;
            justify-content:flex-end;
            >li{
                padding:0 25px;
                >a{
                     font-family: 'Montserrat', sans-serif;
                    font-size:18px;
                    font-weight:bold;
                    color:#fff;
                        text-transform: capitalize;
                    :hover{
                        color:#e8a236;
                    }
                }
                
            }
        }
    `;
const DropLang = styled.div`
        @keyframes mymove {
            from {top: 20px;}
            to {top: 40px;}
        }
        position:relative;
        .language{
            border:1px solid #999;
            border-radius:5px;
            font-size:14px;
            font-family:"Poppins";
            font-weight:normal;
            padding:5px 15px;
            background:transparent;
            color:#fff;
            text-transform: capitalize;
            img{
                padding-right:5px;
            }
        }
            ul{
                padding:0;
                position:absolute;
                right:0;
                top:40px;
                background:#fff;
                animation:mymove 1s ease;
                li{                
                    display:flex;
                    .child-language{
                        display:flex;
                        font-size:14px;
                        font-family:"Poppins";
                        font-weight:normal;
                        padding:10px 30px;
                        background:transparent;
                        color:#202020;
                        text-transform: capitalize;
                        border:0;
                        background:transparent;
                        align-items:center;
                        width:100%;
                        img{
                            padding-right:5px;
                        }                
                    }
                    :first-child{
                        border-bottom:1px solid #ebebeb;
                    }
                    :hover{
                        background:#fbfbfb;
                    }
                }
                :before{
                    content:'';
                    width:20px;
                    height:10px;
                    background:#fff;
                    position:absolute;
                    top:0;
                    right:0;
                    transform:rotate(45deg);
                }
            }
        
    `;