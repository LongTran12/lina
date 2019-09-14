import React from 'react'
import inno1 from "../assets/images/icon_innova1.png";
import inno2 from "../assets/images/icon_innova2.png";
import inno3 from "../assets/images/icon_innova3.png";
import inno4 from "../assets/images/icon_innova4.png";
import inno5 from "../assets/images/icon_innova5.png";
import inno6 from "../assets/images/icon_innova6.png";

import styled from 'styled-components';
import Slider from "react-slick";

export default function WhatSlider() {
    return (
        <WrapSlider>
            <Slider { ...setting }>
            {
                data.map((index,i)=>
                    <DataSlider key={i} className={"slider-what " + index.backgr} >
                       <WrapH>
                            <div className="s-image">
                            <ImageLu src={index.image} alt={index.title}/>
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
      slidesToShow: 6,
      slidesToScroll: 1,
      
}

const data = [
    {
        id:1,
        image:inno1,
        title:"Transparency",
        details:"The Review and Rating results are completely transparent to the users and everyone can verify it.",
    },
    {
        id:2,
        image:inno2,
        title:"Monetizing Ability",
        details:"Reviewers and Helpers (Expert) can earn LINA token basing on the quality of their contribution, judged by the community.",
    },
    {
        id:3,
        image:inno3,
        title:"Specific Criteria",
        details:"LINA.REVIEW has introduced a set of criteria applied to more than 20 fields ranging from technological products to medical services.",
    },
    {
        id:4,
        image:inno4,
        title:"Hybrid Architecture",
        details:"Introduces a hybrid architecture approach, bridging between public Ethereum chain (mainnet) and a high performance, scalable private side-blockchain transaction services.",
    },
    {
        id:5,
        image:inno5,
        title:"Large Helpers Network",
        details:"We have built a large and expanding community of professionals all around the world. Everyone are welcome to join.",
    },
     {
        id:6,
        image:inno6,
        title:"Can not be manipulated",
        details:"The assessment and rating score is decentralized so it cannot be faked or manipulated by any third party.",
    }
]
const WrapH= styled.div`
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
const WrapSlider =styled.div`
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
    padding: 30px 20px;
    border-radius:15px;
    height:100%;
    background:#fff;
    
   
    .s-title{
        h3{
            font-weight: 600;
            font-size: 24px;
            font-family: Montserrat;
            color:#202020;
            margin-bottom:15px;
        }
    }
    .s-detail{
        p{
            font-size: 14px;
            font-family: Montserrat;
            color:#808080;
            line-height:26px;
        }
    }
`;