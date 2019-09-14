import React from 'react'
import { FaFacebookF,FaTelegram,FaMediumM,FaTwitter } from "react-icons/fa";
import styled from 'styled-components';
export default function Social() {
   const IconS = styled.a`
   color:#fff;
   margin:0 15px;
   font-size:2.5em;
   :hover{
       color:#fff;
   }
   `;
   const WrapSocial = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
   `;
    return (
        <>
        <WrapSocial>
            <IconS href="#1">  <FaFacebookF></FaFacebookF></IconS>        
                 <IconS href="#2"><FaTelegram></FaTelegram></IconS>
                 <IconS href="#3"><FaMediumM></FaMediumM></IconS>
                 <IconS href="#4"><FaTwitter></FaTwitter></IconS> 
           </WrapSocial>
        </>
    )
}
