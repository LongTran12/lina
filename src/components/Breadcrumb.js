import React from 'react'
import styled from 'styled-components'
import img from '../assets/images/main-banner-bg.png'

export default function Breadcrumb({ title }) {
    return (
        <Wrap>
            <h1>{title}</h1>
        </Wrap>
    )
}
const Wrap = styled.div`
    background:url(${img});
    padding:200px 0;
    background-repeat:no-repeat;
    h1{
        font-family: Montserrat;
        font-weight: 700;
        font-style: inherit;
        font-size: 60px;
        text-align:center;
        color:#fff;
    }
`;
