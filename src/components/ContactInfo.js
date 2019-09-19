import React, { useContext } from 'react'
import styled from 'styled-components'
import { SiteContext } from '../contexts/siteContext';

export default function ContactInfo() {
    const { getLang } = useContext(SiteContext)
    return (
        <Wrap>
            <h3>{getLang('Contact info')}</h3>
            <p>{getLang('Join our worldwide reviewer community unlike any others.Accelerate your products via collaboration opportunities with top reviewer,influencer, specific industry professionals and networking events')}</p>
            <div className="info address">
                <h5>{getLang('Address')}</h5>
                <p>{getLang('1435 Nguyen Van Linh Street,  Tan Phong Ward, District 7, Ho Chi Minh City')}</p>
            </div>
            <div className="info phone">
                <h5>{getLang('Phone')}</h5>
                <p>(+84) 213 321 2314</p>
            </div>
            <div className="info email">
                <h5>Email</h5>
                <p>Support@lina.network</p>
            </div>
        </Wrap>
    )
}
const Wrap = styled.div`
    padding:50px 60px;
    background:linear-gradient(135deg, #1c49df 0%, #1c49df 0%, #03e8f8 100%);
    *{
        color:#fff;
        font-family: Montserrat;

    }
    h3{
        font-weight:bold;
        font-size:30px;
        margin-bottom:30px;
    }
    h5{
        font-weight:bold;
        font-size:14px;
        margin-bottom:10px;
    }
    p{
        margin-bottom:35px;
        font-size:14px;
        line-height:26px;
    }
`;
