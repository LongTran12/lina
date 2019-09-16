import React, { useContext } from 'react'
import lina1 from "../assets/images/icon_lina1.png";
import lina2 from "../assets/images/icon_lina2.png";
import lina3 from "../assets/images/logo-lina-icon.png";
import lina4 from "../assets/images/icon_lina4.png";
import lina5 from "../assets/images/icon_lina5.png";
import styled from 'styled-components';
import 'antd/dist/antd.css';
import Slider from "react-slick";
import { SiteContext } from "../contexts/siteContext";

export function WhatSlider() {
    const { getLang } = useContext(SiteContext);
    const data = [
        {
            id: 1,
            image: lina1,
            title: getLang('review'),
            details: getLang('The platform based on blockchain technology, data will be guaranteed immutability and transparency.'),
            backgr: "bg_oranger",
        },
        {
            id: 2,
            image: lina2,
            title: "Supply Chain",
            details: "Apply traditional supply chain on blockchain. As a result, companies that partner with LINA can rebuild their supply chain management more efficiently and reduce expenses.",
            backgr: "bg_pink",
        },
        {
            id: 3,
            image: lina3,
            title: "LINA",
            details: "An infinite ecosystem on Crypto platforms",
            backgr: "bg_purple",
        },
        {
            id: 4,
            image: lina4,
            title: "Healthcare",
            details: "Create history data of patient, hospitals where patients were in in the past transparently and accurately.",
            backgr: "bg_blue",
        },
        {
            id: 5,
            image: lina5,
            title: "E-Government",
            details: "Provide new technology for government management. Cumbersome administrative procedures will be removed, saving time and money.",
            backgr: "bg_green",
        }
    ]

    return (
        <WrapSlider>
            <Slider {...setting}>
                {
                    data.map((index, i) =>
                        <DataSlider key={i} className={"slider-what " + index.backgr} >
                            <WrapH>
                                <div className="s-image">
                                    <ImageLu src={index.image} alt={index.title} />
                                </div>
                                <div className="s-title">
                                    <h3>{index.title}</h3>
                                </div>
                                <div className="s-detail">
                                    <p>{index.details}</p>
                                </div>
                            </WrapH>
                        </DataSlider>
                    )
                }

            </Slider>

        </WrapSlider>
    )

}
const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}


const WrapH = styled.div`
   display: flex;
      height: auto;
      align-items: center; 
      justify-content: center; 
          flex-flow: column;
    height: 100%;
`;
const ImageLu = styled.img`
    display: inline-block !important;
    width:80px;
    margin-bottom:45px;
`;
const WrapSlider = styled.div`
    margin-bottom:60px;
    .slick-slide {
        padding:5px 15px;
        position:relative;
        :hover{
            transform:translateY(-5px);
            transition:all 0.7s cubic-bezier(0.2, 1, 0.22, 1);
        }
    }
`;
const DataSlider = styled.div`
    color:#fff;
    text-align:center; 
    padding: 50px 20px;
    border-radius:15px;
    height:100%;
    &.bg_oranger{
        background:linear-gradient(135deg, #f6c342 30%, #d06b23 100%)
    }
    &.bg_pink{
       background:linear-gradient(135deg, #e75a5c 30%, #9c2ead 100%)
    }
    &.bg_purple{
       background:linear-gradient(135deg, #b431e0 30%, #6639cf 100%)
    }
    &.bg_blue{
       background:linear-gradient(135deg, #8a6bfa 30%, #40a2d0 100%)
    }
    &.bg_green{
        background:linear-gradient(135deg, #69b43a 30%, #75ddbe 100%)
    }
    .s-title{
        h3{
            font-weight: 600;
            font-size: 24px;
            font-family: Montserrat;
            color:#fff;
            margin-bottom:15px;
        }
    }
    .s-detail{
        p{
            font-size: 14px;
            font-family: Montserrat;
            color:#fff;
            line-height:26px;
        }
    }
`;