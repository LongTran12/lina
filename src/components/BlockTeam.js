import React from 'react';
import styled from "styled-components";
import { Col } from 'antd';
import { FaLinkedinIn, FaFacebookF } from 'react-icons/fa';

export default function BlockTeam({ imgAvatar, company, description, name, linkLinked, linkFace }) {
    return (

        <Col xxl={6} md={12} sm={12} xs={24} className="mb-30">
            <WrapBlock>
                <div className="team-avatar">
                    <img src={imgAvatar} alt="" width="100%" />
                </div>
                <div className="team-info">
                    <h3 title={name}><a href="#1">{name}</a></h3>
                    <div className="company">{company}</div>
                    <p className="text-des">{description}</p>
                    <Social linkLinked={linkLinked} linkFace={linkFace} />
                </div>
            </WrapBlock>
        </Col>

    )
}
function Social({ linkFace, linkLinked }) {
    return (
        <WrapSocial className="social-team">
            {linkLinked &&
                <a href={linkLinked} target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                </a>
            }

            {linkFace &&
                <a href={linkFace} target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </a>
            }
        </WrapSocial>
    );
}
const WrapSocial = styled.div`
    a{
        padding:0 5px;
        color:#808080;  
    }
`;
const WrapBlock = styled.div`
    overflow:hidden;
    position:relative;
    top:0;
     min-height:430px;
    text-align: center;
    padding:0 20px 30px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: column;
    height: 100%;
    margin-bottom:20px;
    .team-avatar{
        overflow:hidden;
        img{
            border-radius:30px;
            transform:scale(1);
            width:262px;
            height:262px;
        }
    }
    .team-info{
       h3{
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
            margin:15px 0 10px;
            a{
                color:#202020;
                text-decoration:none;
            }
       }
       .company{
           font-style:italic;
           color:#808080;
           font-family:"Montserrat";
       }
       .text-des{
            transform:translateY(-30px);
           margin-top:20px;
           opacity:0;
           display:none;
           max-height:12em;
            text-overflow: ellipsis;
            word-wrap: break-word;
            overflow: hidden;
            text-align:center;
           
       }
    }
    :hover{
        justify-content: center;
        transition:all 0.8s ease;
        background:#10297a;
        border-radius:30px;
        *{
            color:#fff;
        }
       
        .team-avatar{
            transform:scale(0);
            height:0;
        }
        .team-info{
            h3{
                a{
                    color:#fff;
                }
            }
            .company{
                color:#08c9f3;
            }
            .text-des{
               transform:translateY(0);
               opacity:1;
               visibility:visible;
               display:inline-block;
               
           }
           .social-teame{
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
           }
        }
    }
`;
