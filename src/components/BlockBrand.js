import React from 'react'
import styled from 'styled-components';
import { Col } from "antd";

export default function BlockBrand({ nameBrand, logoBrand }) {
    return (
        <Col xxl={6} xl={6} lg={8} md={8} sm={12} xs={24}>
            <WrapBlock>
                <div className="logo-brand">
                    <img src={logoBrand} alt={nameBrand} />
                </div>
                <div className="name-brand">
                    <h3><a href="#1">{nameBrand}</a></h3>
                </div>
            </WrapBlock>
        </Col>

    )
}
const WrapBlock = styled.div`
    display:flex;
    border-radius:15px;
    transition:transform 0.7s ease;
    flex-flow: column;
    background: #f4fbff;
    margin-bottom:30px;
    height:calc(100% - 25px);
    :hover{
        transform:translateY(-5px);
    }
    .logo-brand{
        background:#fff;
        text-align:center;
        border-top-left-radius:15px;
        border-top-right-radius:15px;
        img{
            padding:40px 0 20px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
            width:100%;
        }
    }
    .name-brand{
        padding:25px 30px 40px;
        background:#
        a{
            font-weight: 600;
            font-size: 18px;
            font-family: Montserrat;
            font-style: inherit;
            color: #202020;
            transition:color 0.5s ease;
            text-decoration:none;
            line-height:1.3em;
            :hover{
                color:#32e9f9;
            }
        }
    }
`;