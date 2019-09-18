import React from 'react'
import { Select, Row, Col } from 'antd';
import styled from 'styled-components';
import imgusa from '../assets/images/640.png';
import imgvn from '../assets/images/641.png';
import { FaCaretDown } from 'react-icons/fa';

const { Option } = Select;
export default function Subcribe() {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    return (
        <Row>
            <Col xxl={{ span: 10, offset: 0 }} lg={{ span: 10, offset: 0 }} md={{ span: 22, offset: 1 }}>
                <WrapSelect>
                    <Select
                        defaultValue={<LangDefault />}
                        showArrow style={{ width: "100%" }}
                        onChange={handleChange}
                        suffixIcon={<FlagLang />}
                    >
                        {
                            option.map((index, i) =>
                                <Option key={i} value={index.value}>
                                    {index.name}<StyleOption>({index.location})</StyleOption>
                                    <span style={sty} className="flag_lang"><img alt="" src={index.imglocation} width="35px" /></span>
                                </Option>
                            )
                        }
                    </Select>
                </WrapSelect>
            </Col>

            <Col xxl={{ span: 14, offset: 0 }} lg={{ span: 14, offset: 0 }} md={{ span: 22, offset: 1 }}>
                <FormStyle>
                    <input type="email" placeholder="ENTER YOUR EMAIL" />
                    <button>SUBCRIBE NEWLETTER</button>
                </FormStyle>
            </Col>

        </Row>
    )
}
function LangDefault() {
    return (
        <span className="flag_lang">
            DOWNLOAD WHITEPAPERS  <img alt="" src={imgusa} width="35px" />
        </span>
    );
}
function FlagLang() {
    return (
        <span className="dropdown-text">

            <FaCaretDown />
        </span>
    )
}
const sty = {
    "margin-left": "auto",
}
const FormStyle = styled.form`
     font-family: Montserrat;
    display:flex;
    flex-flow:row wrap;
    position:relative;
    border:2px solid #ccc;
    input[type="email"]{
        padding:28px 45px;
        font-size:16px;
        border:0;
        flex-basis:100%;
        ::placeholder{
            color:#202020;
        }
    }
    button{
        position:absolute;
        right:0;
        border:0;
        background:transparent;
        color:#08c9f3;
        padding:28px 45px;
        font-size:16px;
        :hover{
            color:#202020;
        }
    }
`;
const WrapSelect = styled.div`
    font-family: Montserrat;
    .ant-select-selection-selected-value{
        font-size:16px;
        color:#202020;
        width: 100%;
        .flag_lang img{
            float:right;
        }
    }
    .ant-select-selection--single{
        height:100%;
        padding:25px 15px 25px 25px;
        border:2px solid #ccc;
        border-right:0;
        margin-right:-2px;
    }
    .ant-select-arrow{
        margin-top:0;
        transform:translateY(-50%);
    }
    @media (max-width:992px){
        .ant-select-selection--single{
            border-right:2px solid #ccc;
            margin-bottom:20px;
        }    
    }
    
`;
const option = [
    {
        name: "Whitepapers",
        value: 'white-vn',
        location: 'vn',
        imglocation: imgusa
    },
    {
        name: "Whitepapers",
        value: 'white-usa',
        location: 'usa',
        imglocation: imgvn
    }
]
const StyleOption = styled.span`
    color:#08c9f3;
    padding-left:5px;
`;
