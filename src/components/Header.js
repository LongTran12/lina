import React, { useContext, useState } from 'react';
import logo from "../assets/images/logo-lina-1.png";
import usa from "../assets/images/64.png";
import vn from "../assets/images/641.png";
import styled from 'styled-components';
import { Row, Col, Icon } from 'antd';
import { FaCaretDown } from "react-icons/fa";
import { SiteContext } from '../contexts/siteContext';
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const { getLang, setLang, lang } = useContext(SiteContext)
    const [isOpen, setisOpen] = useState(false);
    const [isMenu, setisMenu] = useState(true)
    return (
        <WrapHeader>
            <Row type="flex" justify="center" align="middle">
                <Col span={11}>
                    <Link to="/" title="logo"><img src={logo} alt="logo" width="50px" height="72px" /></Link>
                </Col>
                <Col span={11}>
                    <MenuList>
                        <button className="menu-btn" onClick={() => setisMenu(!isMenu)}><Icon type="align-right" /></button>
                        {isMenu && <><ul>
                            <li><a href="#1">{getLang('news')}</a></li>
                            <li><NavLink activeClassName="active" to="/q&a">{getLang('q&a')}</NavLink></li>
                            <li>
                                <button className="parent-menu">{getLang('whitepaper')}
                                    <span><FaCaretDown></FaCaretDown></span>
                                    <ul className="menu-child">
                                        <li>
                                            <a href="#2">English</a>

                                        </li>
                                        <li>
                                            <a href="#3">VietNam</a>
                                        </li>
                                    </ul>
                                </button>


                            </li>
                            <li><NavLink activeClassName="active" to="/contact">{getLang('contact')}</NavLink></li>
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
                            <div className="wrap-close" onClick={() => setisMenu(false)} />
                        </>

                        }
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
        .menu-btn{
            display:none;
        }      
        >ul{
            list-style:none;
            display:flex;
            align-items:center;
            flex-flow:row-wrap;
            justify-content:flex-end;
            >li{
                position:relative;
                padding:0 25px;
                >a{
                     font-family: 'Montserrat', sans-serif;
                    font-size:18px;
                    font-weight:bold;
                    color:#fff;
                    text-transform: capitalize;
                    .menu-child{
                        position:absolute;
                        top:24px;
                        right:0;
                        transform:translateY(-20px);
                        background:#fff;
                        color:#202020;
                        list-style:none;
                        padding:0;
                        transition:transform 0.5s ease;
                        visibility:hidden;
                        text-align:center;
                        left:0;
                        z-index:9999;
                        li{
                            padding:10px 30px;
                            a{
                                text-align:center;
                                text-decoration:none;
                            }
                        } 
                    }                   
                    :hover{
                        color:#e8a236;
                        text-decoration:none;
                        .menu-child{
                            transform:translateY(0);  
                            visibility:visible; 
                        }
                    }
                    &.active{
                        color:#ffc23e;
                    }
                }  
            }
            .parent-menu{
                 font-family: 'Montserrat', sans-serif;
                font-size:18px;
                font-weight:bold;
                color:#fff;
                text-transform: capitalize;
                border:0;
                background:transparent;
                .menu-child{
                    position:absolute;
                    top:24px;
                    right:0;
                    transform:translateY(-20px);
                    background:#fff;
                    color:#202020;
                    list-style:none;
                    padding:0;
                    transition:transform 0.5s ease;
                    visibility:hidden;
                    text-align:center;
                    left:0;
                    z-index:9999;
                    li{
                        padding:10px 30px;
                        a{
                            text-align:center;
                            text-decoration:none;                           
                        }
                    } 
                }
                :hover{
                color:#e8a236;
                text-decoration:none;
                    .menu-child{
                        transform:translateY(0);  
                        visibility:visible; 
                    }
                }
                &.active{
                    color:#ffc23e;
                }
            }  
        }
        
        @media (max-width:1200px){
             .menu-btn{
                display:block;
                position:absolute;
                right:20px;
                top:0;    
                z-index:2;
                font-size:30px;
                background:transparent;
                border:0;
                color:#fff;
             }
             >ul{
                flex-flow: column;
                position: fixed;
                right: 0;
                background: #111;
                height: 100vh;
                top: 0;
                justify-content: center;
                z-index:12;
                >li{
                   padding:15px 25px;
                } 
            }
            .wrap-close{
                    background: rgba(0,0,0,.34);
                    position: fixed;
                    width: 100vw;
                    height: 100vh;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    z-index:5;
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