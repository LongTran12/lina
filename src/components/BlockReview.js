import React, { useState } from 'react';
import styled from 'styled-components';
import { Col } from 'antd';
import { FaYoutube } from 'react-icons/fa';
import Modal from './Modal';

export default function BlockReview({ imageReview, linkReview, textReview }) {
    const [isShow, setIsShow] = useState(false);
    return (
        <Col xxl={6} md={8} sm={12} xs={24}>
            <WrapReview>
                <div className="modal-video">
                    <img src={imageReview} alt="" />
                    <button className="btn-video" onClick={() => setIsShow(!isShow)}>
                        <FaYoutube />
                    </button>
                </div>
                <div className="text-intro">
                    {textReview}
                </div>
                {isShow &&
                    < Modal isClose={() => setIsShow(false)}>
                        <div className="video">
                            <iframe width="900px" height="800px" src={linkReview} frameborder="0" title="video"></iframe>
                        </div>
                    </Modal>
                }
            </WrapReview>
        </Col >
    )
}

const WrapReview = styled.div`
    border-radius:10px;
    margin-bottom:25px;
    position:relative;
    border-radius:15px;
    overflow:hidden;
    
    :before{
        content:'';
        background: linear-gradient(transparent, rgba(0, 0, 0, 0.75));
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 60%;
        border-radius:15px;
    }
    img{
        border-radius:15px;
        width:100%;
        transform:scale(1);
        transition:all 0.5s ease;
    }
    .btn-video{
        speak: none;
        line-height: 1;
        font-size: 52px;
        position: absolute;
        top: 50%;
        left: 50%;
        vertical-align: middle;
        transform: translate(-50%, -50%);
        transition: all 500ms ease;
        text-align: center;
        color: #ff2905;
        z-index: 1;
        background:transparent;
        border:0;
    }
    .text-intro{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 20px;
        letter-spacing: 0;
        line-height: 1.3;
        text-align: left;
        color: #f1f1f1;
        z-index: 2;
        font-size: 16px;
    }
    :hover{
        img{
            transform:scale(1.15);
        }
        
    }
`;
