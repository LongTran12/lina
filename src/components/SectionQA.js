import React from 'react'
import styled from 'styled-components'

export default function SectionQA({ date, children, classa }) {
    return (
        <Wrap>
            <div className={`date-qa ${classa}`} >
                <h3 >{date}</h3>
            </div>
            {
                children
            }
        </Wrap>
    )
}
const Wrap = styled.div`
     box-shadow:0 9px 20px -3px rgba(182, 182, 182, 0.19);
     margin:40px 0;
    .date-qa{
        background:-webkit-gradient(linear, right top, left top, color-stop(0.3, #2fe8f9), color-stop(0.7, #08b1de));
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        h3{
            color: #ffffff;
            display: block;
            padding: 28px 35px;
            position: relative;
            text-align: center;
            font-weight: 600;
            font-size: 20px;    
            font-family: Montserrat; 
            line-height:1.7em;
            cursor: pointer;
            width:100%;
        }
    }
`;
