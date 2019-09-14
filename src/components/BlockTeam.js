import React from 'react';
import styled from "styled-components";
import {Col} from 'antd';

export default function BlockTeam({imgAvatar,company,social,description,name,width}) {
    return (
        
           <Col span={width}>
               <WrapBlock>
            <div className="team-avatar">
                <img src={imgAvatar} alt=""/>
            </div>
            <div className="team-info">
                <h3>{name}</h3>
                <div className="company">{company}</div>
                <p className="text-left">{description}</p>
                <div className="socials">{social}</div>
            </div>
            </WrapBlock>
           </Col>
        
    )
}
const WrapBlock = styled.div`
    text-align:center;
    padding:30px 20px;
    .team-avatar{
        img{
            border-radius:30px;
        }
    }
`;
