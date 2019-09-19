import React, { useState, useContext } from 'react'
import Breadcrumb from '../components/Breadcrumb';
import styled from 'styled-components'
import SectionQA from '../components/SectionQA';
import BlockQuestion from '../components/BlockQuestion'
import { Row, Col } from 'antd';
import { SiteContext } from '../contexts/siteContext';

export default function Qa({ match }) {
    const [open, setopen] = useState('1');
    const getOpen = (e) => {
        setopen(e);
    }
    const { getLang } = useContext(SiteContext)
    const data1 = [
        {
            id: 1,
            title: getLang("What are KPIs when deploying LINA Supplychain into each corporation? "),
            content: <Dara1 />
        },
        {
            id: 2,
            title: getLang("Why trading volume of LINA so low?"),
            content: <Dara2 />,
        },
        {
            id: 3,
            title: getLang("Which stage are other LINA’s projects at? When will those applications be implemented?"),
            content: <Dara3 />
        },
        {
            id: 4,
            title: getLang("Why LINA announces many good events but still not popular in Vietnam ?"),
            content: <Dara4 />
        },
        {
            id: 5,
            title: getLang("After releasing mainnet, does LINA Token switch to another blockchain? Why?"),
            content: <Dara5 />
        },
        {
            id: 6,
            title: getLang("Would LINA NETWORK cooperate with Government of Vietnam to apply Blockchain into state management?"),
            content: <Dara6 />
        },
        {
            id: 7,
            title: getLang("When LINA’s Supplychain applied to corporations, how compatible of it into the corporate system?"),
            content: <Dara7 />
        },
        {
            id: 8,
            title: getLang("Does LINA’s Supplychain definitely reduce costs and increase revenues for corporations?"),
            content: <Dara8 />
        },
        {
            id: 9,
            title: getLang("LINA’s platform runs on Ethereum, so if the Ethereum platform crashed, what would happen to LINA’s platform?"),
            content: <Dara9 />
        },
    ]
    const data2 = [
        {
            id: 1,
            title: getLang("What make LINA NETWORK become attractive with corporations or even governments, such as Aim Thai, Japanese companies or LAOS ?"),
            content: getLang('Blockchain technology is growing very fast. However, the number of businesses that can produce real products very little and LINA NETWORK is among of them.  That why these governments and companies after research and collaboration with us, they has seen the right development orientation as well as the ability to apply to practice of LINA NETWORK. Therefore, we have agreed on long-term cooperation plans.'),

        },
        {
            id: 2,
            title: getLang("Who are LINA NETWORK’s core team ?"),
            content: <Data22 />

        },
        {
            id: 3,
            title: getLang("How does the Blockchain technology that LINA NETWORK applied into the Supply Chain differ from its competitors?"),
            content: getLang('Presently, LINA’s supply chain based on the Blockchain is the first one in the world, there is no other competitor to be able to make specific comparisons.')

        },
        {
            id: 4,
            title: getLang("Why LINA token does not list on Binance Exchange ?"),
            content: getLang('LINA NETWORK’s next strategy is listing on the 10 exchange of the top global 20. Binance will also be in this.')

        },
        {
            id: 5,
            title: getLang("LINA.REVIEW and LINA NETWORK are related?"),
            content: <Data25 />

        },
        {
            id: 6,
            title: getLang("Why does not LINA sign contract with any Vietnamese company?"),
            content: getLang('Because it is still in the process of work, when we have official information, we will inform to community.')

        },
        {
            id: 7,
            title: getLang("What could LINA’s Supplychain solve?"),
            content: <Data27 />

        },
        {
            id: 8,
            title: getLang("Where is LINA’s Team Code Office?"),
            content: getLang('With a Blockchain technology company such as LINA NETWORK, the Team code team is the most important. Currently, LINA NETWORK’s code team works online under the direct guidance of technical director Vu Thach Tam and chief architect Ha Duc Long.')

        },
        {
            id: 9,
            title: getLang("Presently, how many partner of LINA all over the world?"),
            content: getLang('Over 20 partners from Thailand, Laos, Japan, Korea, Indo, ….')

        },
    ]
    const data3 = [
        {
            id: 1,
            title: getLang("Currently, how many representative offices LINA NETWORK have ?"),
            content: getLang("LINA NETWORK’s headquartered in Switzerland and Vietnam. There are representative offices throughout the continent of the world such as Israel, Thailand, Dubai, Newzealand, India and are constantly expanding in the future."),
        },
        {
            id: 2,
            title: getLang("What is the target customer that LINA NETWORK aiming ? business or personal?"),
            content: getLang('The ecology that LINA built aiming these objects: government, organizations, corporations, universities, individuals. Therefore, our client field is very wide.')
        },
        {
            id: 3,
            title: getLang("What stage is LINA.REVIEW project at? Its has been about 9 months, still no information for community ?"),
            content: getLang('LINA.REVIEW is running  to launch the Mainnet in November 2018 and the progress is getting faster than announcement in the WhitePaper.')
        },
        {
            id: 4,
            title: getLang("What is real value of LINA token?"),
            content: getLang('The actual value of a service product is different for each individual, according to each criterion. For Cryptocurrency, value will be evaluated by the ecosystem. For LINA, our ecosystem widely ranging from review, supplychain, identity, healthcare and more, then the real value of LINA will be determined by this ecosystem.')

        },
        {
            id: 5,
            title: getLang("Is LINA NETWORK a Vietnam or an abroad company ?"),
            content: getLang('LINA NETWORK is a member of corporation Smart Link Swiss, based in Geneva, Switzerland.')

        },
        {
            id: 6,
            title: getLang("How LINA token applied into LINA’s ecosystem?"),
            content: <Data36 />

        },
        {
            id: 7,
            title: getLang("Does LINA NETWORK have a development orientation in education field ?"),
            content: getLang('In the coming time, when application of Blockchain of LINA increasingly interested in businesses and widely deployed. If only rely on LINA’s staff for development, it will not be able to meet all of needs. Therefore, LINA has teamed up with the top 100 universities to set up Blockchain Hub, in charge of training human resources for Blockchain projects.')

        },
        {
            id: 8,
            title: getLang("How much are the ICO and Private sale Price?"),
            content: getLang('The price of ICO is $ 1, Private sale had been alternated through 3 rounds are $ 0.1, $ 0.3 and $ 0.6')

        },
        {
            id: 9,
            title: getLang("What exchange is LINA Token being traded?"),
            content: getLang('LINA has been trading at Cryptopia.co.nz and Yobit.io')

        },
        {
            id: 10,
            title: getLang("What field does LINA NETWORK operate on ?"),
            content: getLang('LINA NETWORK currently operates in four major areas: Review, Supplychain, Healthcare and E-Government.')

        },
        {
            id: 11,
            title: getLang("Which platform LINA token running on?"),
            content: getLang('LINA Token is based on the ERC-20 platform')

        },
    ]
    return (
        <Wrap>
            <Breadcrumb title={getLang("Q&A")} />
            <Row>
                <Col xxl={{ span: 18, offset: 3 }} xl={{ span: 20, offset: 2 }} md={{ span: 20, offset: 2 }} xs={{ span: 22, offset: 1 }}>
                    <div className="a" onClick={() => getOpen('1')}>
                        <SectionQA
                            date="Nov 19th - 24th, 2018"
                        >
                            {open === '1' && data1.map((index, i) =>
                                <BlockQuestion key={i} {...index} />
                            )}
                        </SectionQA>
                    </div>

                    <div className="a" onClick={() => getOpen('2')}>
                        <SectionQA
                            date="Nov 12th - 17th, 2018"
                        >
                            {open === '2' && data2.map((index, i) =>
                                <BlockQuestion key={i} {...index} />
                            )}
                        </SectionQA>
                    </div>


                    <div className="a" onClick={() => getOpen('3')}>
                        <SectionQA
                            date="Nov 5th - 10th, 2018"
                        >
                            {open === '3' && data3.map((index, i) =>
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
    const { getLang } = useContext(SiteContext)
    return (
        <div class="post-content text-justify">
            <p>{getLang('We have planned the implementation of the Supply Chain with criterias for each corporation as below:')}</p>
            <p>-{getLang('Costs will be reduded by 12% within 3 years, administrative costs can be reduced by 15-30%.')}

                <br></br>
                -{getLang('The system will be more focused and always ready to set up strategic plans, enhance the reputation of quality products and services for customers.')}
                <br></br>
                -{getLang('Synchronization data management for corporations to bring full compatibility with LINA’s Blockchain management system. Corporations or businesses can manage or completely coordinate their business on the Blockchain platform.')}
            </p>
        </div>
    );
}
function Dara2() {
    const { getLang } = useContext(SiteContext)
    return (
        <div class="post-content text-justify">
            <p>{getLang('Almost investors hold large amounts of LINA token, they appreciate the potential of the project and therefore rare to sell. As a result, the volume of Token being traded on the market is not high, that why Lina’s volume is not high.')}</p>
        </div>
    );
}
function Dara3() {
    const { getLang } = useContext(SiteContext)
    return (
        <div class="post-content text-justify">
            <p>{getLang('LINA’s projects have been implemented as roadmap, even supplychain products have been launched before the roadmap, the roadmap for the following products as below:')}</p>
            <p>– {getLang('LINA Review releases the mainnet in November 2018')}

                <br></br>
                – {getLang('LINA Supplychain has launched the first product, then continues to expand partners around the world.')}
                <br></br>
                – {getLang('LINA Identity has been in the research stage and do pre-feasibility study with the Department of Science and Technology Lao.')}
                <br></br>
                – {getLang('LINA Healthcare has been also in the research stage and collaborate with the University of Medicine and Pharmacy HCM.')}
                <br></br>
                – {getLang('LINA Education has been researching the optimal solution with Stanford University and University of Manhidol in Thailand.')}
                <br></br>
                – {getLang('Moreover, LINA has made great strides in the field of Fintech, signing with several major partners from Japan, Indo and India. Specifically, on October 31, LINA has signed MOU with the Korean Fintech Association with the aiming of promoting cooperation and expanding relations.')}
            </p>
        </div>
    );
}
function Dara4() {
    const { getLang } = useContext(SiteContext)
    return (
        <div class="post-content text-justify">
            <p>{getLang('Since LINA focuses on building products and informational sites. Now, LINA will focus on building the entire community.')}</p>

        </div>
    );
}
function Dara5() {
    const { getLang } = useContext(SiteContext)
    return (
        <div class="post-content text-justify">
            <p>{getLang('Mainnet LINA has been launched this time as Mainnet of Private Chain Lina, Token LINA is used for payment on public chain still running on ERC-20 platform, so it will not change to another Blockchain. However, after launching the Mainnet of Private Chain, if any platform has better transaction processing speed than ERC-20, Token LINA will be able to switch to it (This will be notified in details)')}</p>

        </div>
    );
}
function Dara6() {
    const { getLang } = useContext(SiteContext)
    return (
        <div class="post-content text-justify">
            <p>{getLang('LINA NETWORK is currently focusing on building the LINA Identity platform for the Laos government under the previous contract. Once completed, LINA NETWORK will apply the advantages, as well as efforts to overcome the existing shortcomings to apply to other governments later.')}</p>
            <p>– {getLang('Chairman of LINA NETWORK has shared this foundation for a nation of more than 90 million people like Vietnam, it would be a big issue to mobilize a lot of resources. However, it is likely that LINA NETWORK will move in the direction applying this platform for a specific province in Vietnam, after completion with the Lao government.')}</p>
        </div>
    );
}
function Dara7() {
    const { getLang } = useContext(SiteContext)
    return (
        <div class="post-content text-justify">
            <p>{getLang('When designing Blockchain technology application into Supplychain Management, LINA tried to build in line with common standards of most Supplychain models in the world. So when bringing the application into the corporation, it has achieved relatively high compatibility. However, the remaining difficulties include many factors such as:')}</p>
            <p>– {getLang('LINA’s Supplychain model builds on a common foundation when applied into specific corporations or companies that will have to change, adapt to specific country, sector or standards and requirements also different.')}

                <br></br>
                – {getLang('Corporations using different management softwares which are not synchronized so there is no close linkage.')}
                <br></br>
                – {getLang('Technology constraints, such as corporations operating in agriculture and seafood. The area of harvested agricultural and marine products in remote, near mountain or border areas, offshore. Most of the data is stored on paper, and identified by Excel file, not recognized by the transition management software.')}
            </p>

        </div>
    );
}
function Dara8() {
    const { getLang } = useContext(SiteContext)
    return (
        <div class="post-content text-justify">
            <p>{getLang('Building blockchain into the first supplychain management has aligned the whole process of the corporation / company to reduce operating costs, along with increasing the trust of customers in the product / brand value. That is the immediate benefit brought to the corporations.')}</p>
        </div>
    );
}
function Dara9() {
    const { getLang } = useContext(SiteContext)
    return (
        <div class="post-content text-justify">
            <p>{getLang('LINA Platform will use Hybrid Architecture, which connects main public network Ethereum (mainnet) with a private, high-performance blockchain service system that is responsible for providing LINA Token is built on the ERC20 platform of Ethereum.')}</p>
            <p>{getLang('If the Ethereum system has trouble, it will only affect the LINA payment and all other lina operations will be handled on the private chain so it will not be affected')}
            </p>

        </div>
    );
}
function Data22() {
    const { getLang } = useContext(SiteContext)
    return (
        <div class="post-content text-justify">
            <p>{getLang('Core Team LINA currently includes:')}</p>
            <p>-{getLang('Mr. Vu Truong Ca (Co-founder – Chairman)')}</p>
            <p>-{getLang('Mr. Mitchell Pham (Co-founder)')}</p>
            <p>-{getLang('Mr. Nguyen Dang Trieu Thien (CEO)')}</p>
            <p>-{getLang('Mr. Ha Duc Long (Leader Project)')}</p>
            <p>-{getLang('Mr. Vu Thach Tam (CTO)')}</p>
            <p>-{getLang('Mr. Vu Duy Thuc (Advisor)')}</p>
            <p>-{getLang('Mr. Fleigh Flounder (Advisor)')}</p>
            <p>-{getLang('Mr. Greg Kushnir (Advisor)')}</p>
        </div>
    );
}
function Data25() {
    const { getLang } = useContext(SiteContext)
    return (
        <div class="post-content text-justify">
            <p>{getLang('LINA.REVIEW is a project of Smart Links Swiss group, in Switzerland , where Co-founder is Mr. Vu Truong Ca, Lina Review is building evaluation platform based on Blockchain technology.')}</p>
            <p>-{getLang('LINA NETWORK is a member of Smart Links Swiss in Vietnam. Mr. Vu Truong Ca is chairman of Lina Network. This company has operated in the field of application development based on Blockchainsuch as Supply Chain, Healthcare, Identity or Education.')}</p>
        </div>
    );
}
function Data27() {
    const { getLang } = useContext(SiteContext)
    return (
        <div class="post-content text-justify">
            <p>{getLang('Supplychain of LINA solves the problem of transparency and “blindness” in the traditional supplychain.')}</p>
            <p>-{getLang('Benefits when applying Blockchain on Supplychain:')}</p>
            <p>
                -{getLang('Reduce or even remove fraud')}
                <br></br>
                -{getLang('Reduce cost, delayed time related to paperwork')}
                <br></br>
                -{getLang('Increase the trust of users and partners')}
                <br></br>
                -{getLang('Clearly delegation')}
                <br></br>
                -{getLang('Help farmers easily reaching customers')}
                <br></br>
                -{getLang('Create an ecosystem that revolves around food safety')}
                <br></br>
                -{getLang('Easy for management of gorvernment')}
                <br></br>
                -{getLang('Increase inventory management capabilities')}
                <br></br>
                -{getLang('Detect faster when a problem occurs')}
                <br></br>
                -{getLang('The partners will easily participate in the system')}
                <br></br>
                -{getLang('Highly security')}
                <br></br>
                -{getLang('Easy on-shelf food control (Shelf Life)')}
                <br></br>
                -{getLang('Improve national image')}
                <br></br>
                -{getLang('Improve consumer health by using clean food')}
                <br></br>
            </p>
        </div>
    );
}
function Data36() {
    const { getLang } = useContext(SiteContext)
    return (
        <div class="post-content text-justify">
            <p>{getLang('It’s the internal Token of LINA Platform. LINA token is built on Ethereum, the platform for building distributed applications on Blockchain that allows the applications work exactly as it is programmable without being cheated, as well as intervented by third parties.')}</p>
            <p>-{getLang('In LINA’s ecosystem, such as LINA review, Supplychain,… LINA Token will be the only payment currency for all transactions involving all participants.')}</p>
        </div>
    );
}
const Wrap = styled.div`
    *{
        font-family: Montserrat;
    }
    p{
        font-size:14px;
        margin-bottom:20px;
        br{
            height:20px;
        }
    }
`;

