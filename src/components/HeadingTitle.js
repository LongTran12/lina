import React from 'react'
import styled from 'styled-components';
export default function HeadingTitle({ title, subTitle, colorTitle, colorSub, props }) {
    return (
        <>
            <div className="text-center">
                <Titlehead color={colorTitle}>{title}</Titlehead>
                <Titlesub color={colorSub}>{subTitle}</Titlesub>
            </div>
        </>
    )
}
const Titlehead = styled.div`
    color:${props => props.color ? props.color : "inherit"};
    font-family: Montserrat;
    font-weight: 700;
    font-style: inherit;
    font-size: 40px;
    @media (max-width:480px){
        font-size:26px;
    }
`;

const Titlesub = styled.h3`
    color:${props => props.color ? props.color : 'inherit'};
    font-family: Montserrat;
    font-size: 20px;
    margin-bottom: 60px;
`;