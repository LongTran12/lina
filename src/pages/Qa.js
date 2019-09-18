import React, { useState } from 'react'
import Breadcrumb from '../components/Breadcrumb';
import styled from 'styled-components'
import SectionQA from '../components/SectionQA';
import BlockQuestion from '../components/BlockQuestion'
import { Row, Col } from 'antd';

export default function Qa({ match }) {
    const [open, setopen] = useState('1');
    const getOpen = (e) => {
        setopen(e);
    }

    return (
        <Wrap>
            <Breadcrumb title="Q&A" />
            <Row>
                <Col xxl={{ span: 18, offset: 3 }} xl={{ span: 20, offset: 2 }} md={{ span: 20, offset: 2 }} xs={{ span: 22, offset: 1 }}>
                    <div className="a" onClick={() => getOpen('1')}>
                        <SectionQA
                            date=" 19th - 24th, 2019"
                        >
                            {open === '1' && data1.map((index, i) =>
                                <BlockQuestion key={i} {...index} />
                            )}
                        </SectionQA>
                    </div>

                    <div className="a" onClick={() => getOpen('2')}>
                        <SectionQA
                            date=" 19th - 24th, 2019"
                        >
                            {open === '2' && data1.map((index, i) =>
                                <BlockQuestion key={i} {...index} />
                            )}
                        </SectionQA>
                    </div>


                    <div className="a" onClick={() => getOpen('3')}>
                        <SectionQA
                            date=" 19th - 24th, 2019"
                        >
                            {open === '3' && data1.map((index, i) =>
                                <BlockQuestion key={i} {...index} />
                            )}
                        </SectionQA>
                    </div>

                </Col>
            </Row>
        </Wrap>
    )
}
function Dara1() {
    return (
        <div class="post-content text-justify">
            <p>We have planned the implementation of the Supply Chain with criterias for each corporation as below:</p>
            <p>-Costs will be reduded by 12% within 3 years, administrative costs can be reduced by 15-30%.

            <br></br>
                -The system will be more focused and always ready to set up strategic plans, enhance the reputation of quality products and services for customers.
            <br></br>
                -Synchronization data management for corporations to bring full compatibility with LINA’s Blockchain management system. Corporations or businesses can manage or completely coordinate their business on the Blockchain platform.
            </p>
        </div>
    );
}
const Wrap = styled.div`
    
`;
const data1 = [
    {
        id: 1,
        title: "What are KPIs when deploying LINA Supplychain into each corporation? ",
        content: <Dara1 />
    },
    {
        id: 2,
        title: "Why trading volume of LINA so low?             ",
        content: `Almost investors hold large amounts of LINA token, they appreciate the potential of the project and therefore rare to sell. As a result, the volume of Token being traded on the market is not high, that why Lina’s volume is not high.`,
    },
    {
        id: 3,
        title: "Why LINA announces many good events but still not popular in Vietnam ? ",
        content: `Since LINA focuses on building products and informational sites. Now, LINA will focus on building the entire community.`,
    }
]
