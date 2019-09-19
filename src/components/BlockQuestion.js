import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { SiteContext } from '../contexts/siteContext';

export default function BlockQuestion({ id, title, content, children }) {
    const [isOpen, setisOpen] = useState(false);
    const { getLang } = useContext(SiteContext)
    return (
        <WrapBlock>
            <div className="block-title">
                <h3><span>{id}</span>{title}</h3>
                <button
                    onClick={() => setisOpen(!isOpen)}
                >
                    {isOpen ? getLang("Hide Answer") : getLang("Show Answer")}
                </button>
            </div>
            {isOpen && <div className="block-content">
                <div className="content">
                    {content}
                    {children}
                </div>
            </div>
            }
        </WrapBlock>
    )
}
const WrapBlock = styled.div`
    padding:20px 30px;
    .block-title{
        display:flex;
        justify:center;
        align-items:center;
        margin-bottom:20px;
        flex-flow:row wrap;
        h3{
            position: relative;          
            margin-bottom: 0;
            font-weight: 600;
            font-size: 20px;
            font-family: Montserrat;
            font-style: inherit;
            color: #202020;
            span{
                margin-right:20px;
            }
        }
        button{
            padding: 9px 15px;
            white-space: nowrap;
            margin-left: auto;
            background: -webkit-gradient(linear, right top, left top, color-stop(0.3, #068ca9), color-stop(0.7, #08c9f3));
            overflow: hidden;
            border-radius: 8px;
            border:0;
            color:#fff;
            :focus,:hover{
                transform: translate3d(0, -2px, 0);
                box-shadow:0 5px 40px -5px rgba(47, 232, 249, 0.45), 0 5px 20px -5px rgba(21, 118, 230, 0.5);
                background:-webkit-gradient(linear, right top, left top, color-stop(0.1, #068ca9), color-stop(0.2, #08c9f3));
            }
        }
    }
    .block-content{
        background: #fff;
        box-shadow: 0 3px 16px -2px rgba(0, 0, 0, 0.15);
        padding: 30px;
        border-radius: 10px;
        margin-bottom: 30px;
        position: relative;
        line-height:1.7em;
    }
    @media (max-width:1024px){
        .block-title{
            align-items: flex-start;
            flex-flow: column wrap;
            button{
                margin-left:30px;
                margin-top:25px;
            }
        }   
    }
`;