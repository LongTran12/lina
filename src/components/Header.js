import React, { useContext, useState } from 'react';
import logo from "../assets/images/logo_buster.png";
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
    const [isMenu, setisMenu] = useState(false)
    return (
        <WrapHeader>
            <Row>
                <Col span={11} offset={1}>
                    <Link to="/" title="logo"><img src={logo} alt="logo" height="130px" /></Link>
                </Col>
                <Col span={11} offset={1}>
                    <MenuList>
                        <button className="menu-btn" onClick={() => setisMenu(!isMenu)}><Icon type="align-right" /></button>
                        <ul className={`menu-desktop ${isMenu === true ? "menu-on" : "menu-off"}`}>
                            <li><NavLink activeClassName="active" to="/">{getLang('Home')}</NavLink></li>
                            <li><NavLink activeClassName="active" to="/invest">{getLang('Invest')}</NavLink></li>
                            <li><NavLink activeClassName="active" to="/login">{getLang('Login')}</NavLink></li>
                            <li>
                                <DropMenu>
                                    <button className="dropdown-menu-child">
                                        {getLang('Game')}
                                        <span><FaCaretDown></FaCaretDown></span>
                                    </button>
                                    <ul className="ul-lang">
                                        <li><NavLink activeClassName="active" to="/exchange">

                                            {getLang('Exchange')}</NavLink></li>
                                        <li><a href="https://erc20buster.com/">{getLang('Number Lucky Lottery')}</a></li>
                                        <li><NavLink activeClassName="active" to="/ecosystem">{getLang('Ecosytem')}</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/statistic">{getLang('Statistic')}</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/q&a">{getLang('Q&A')}</NavLink></li>
                                        <li><a href="https://drive.google.com/file/d/1KiOe9PWq9fFGoAYWwdo4HjoyPl97G-pP/edit" >{getLang('LINA TOKEN')}</a></li>
                                        <li><NavLink activeClassName="active" to="/contact">{getLang('Contact')}</NavLink></li>
                                        <li>
                                            <button className="parent-menu">{getLang('About Us')}
                                                <span><FaCaretDown></FaCaretDown></span>
                                                <ul className="dropmenu-child">
                                                    <li>
                                                        <a href="https://www.youtube.com/channel/UCMpqXYP-w8rUO5WPfbeYa3g/featured">{getLang('Youtube')}</a>
                                                    </li>
                                                    <li>
                                                        <a href="https://t.me/erc20linavietnam">{getLang('Telegram')}</a>
                                                    </li>
                                                    <li>
                                                        <NavLink to="/">{getLang('Contract')}</NavLink>
                                                    </li>

                                                </ul>
                                            </button>
                                        </li>
                                    </ul>
                                </DropMenu>
                            </li>
                            <li>
                                <DropMenu>
                                    <button className="dropdown-menu-child">
                                        {getLang('Help')}
                                        <span><FaCaretDown></FaCaretDown></span>
                                    </button>
                                    <ul className="ul-lang">
                                        <li><NavLink activeClassName="active" to="/">{getLang('English Documents')}</NavLink></li>
                                        <li><a href="https://erc20buster.com/" >{getLang('Chinese Documents')}</a></li>
                                        <li><NavLink activeClassName="active" to="/">{getLang('Japanese Documents')}</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/">{getLang('Korean Documents')}</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/">{getLang('Russian Documents')}</NavLink></li>
                                        <li><NavLink activeClassName="active" to="/">{getLang('Indonesian Documents')}</NavLink></li>
                                        <li><a href="#1" >{getLang('BusterFund Contract')}</a></li>
                                        <li><NavLink activeClassName="active" to="/" >{getLang('FTB Contract')}</NavLink></li>
                                    </ul>


                                </DropMenu>
                            </li>

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
                        <div className={`wrap-close  ${isMenu === true ? 'on' : 'off'}`} onClick={() => setisMenu(!isMenu)} />

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
            margin-top:40px;
            list-style:none;
            display:flex;
            align-items:center;
            flex-flow:row wrap;
            justify-content:flex-end;
            
            >li{
                position:relative;
                padding:0 20px;
                margin-bottom:10px;
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
                    min-width:175px;
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
        
        @media (max-width:1024px){
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
                top: -40px;
                justify-content: center;
                z-index:12;
                overflow-y:auto;
                padding-left:0;
                min-width:70vw;
                >li{
                   padding:15px 25px;
                } 
                 &.menu-on{
                    right:0;
                }
                &.menu-off{
                    right:-100%;
                }
                .parent-menu{
                    .menu-child{
                        top:45px;
                    }
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
            .wrap-close{
                &.off{
                    width:0;
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
        display:flex;
        align-items:center;
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
const DropMenu = styled.div`
    @keyframes mymove {
        from {top: 20px;}
        to {top: 40px;}
    }
    position:relative;
    .dropdown-menu-child{
        border:0;
        font-size:18px;
        font-weight:bold;
        background:transparent;
        color:#fff;
        text-transform: capitalize;
        display:flex;
        align-items:center;
    }
    >ul{
        padding:0;
        position:absolute;
        right:0;
        top:40px;
        background:#fff;
        animation:mymove 1s ease;
        min-width:270px;
        z-index:99;
        visibility: hidden;
        >li{                
            display:flex;  
            border-bottom:1px solid #ebebeb;
            justify-content:flex-end;
            a{
                z-index:2;
                font-size:16px;
                padding:10px 20px;
                text-align:right;
                color:#222;
                width: 100%;
            }
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
            :last-child{
                border-bottom:0;
            }
            :hover{
                background:#fbfbfb;
                background-color:#ebebeb;
            }
            >button.parent-menu{
                z-index:2;
                font-size:16px;
                padding:10px 20px;
                text-align:right;
                color:#222;
                position: relative;
                width: 100%;
                :hover{
                    .dropmenu-child{
                        visibility:visible;
                    }
                }
                .dropmenu-child{
                    position:absolute;
                    top:17px;
                    transform:translateY(-20px);
                    background:#fff;
                    color:#202020;
                    list-style:none;
                    padding:0;
                    transition:transform 0.5s ease;
                    visibility:hidden;
                    text-align:center;
                    right:100%;
                    z-index:9999;
                    min-width:175px;
                    li{
                        padding:10px 30px;
                        a{
                            text-align:center;
                            text-decoration:none;                           
                        }
                        :hover{
                            background-color:#ebebeb;
                        }
                    } 
                }
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
            z-index:1;
        }
       
    }  
    :hover{
        >ul{
            visibility: visible;
            transition:all 0.5s ease;
            top:30px;
        }
    }  
    @media (max-width:1024px){
        >ul{
            left:50%;
            right:auto;
            transform:translateX(-50%);
            :before{
                height:0;
            }
            >li{
                justify-content:center;
                a{
                    text-align:center;
                }
                >button.parent-menu{
                    text-align:center;
                    .dropmenu-child{
                        top:64px;
                        min-width:100%;
                        right:0;
                    }
                }
            }
        }
    }
`;