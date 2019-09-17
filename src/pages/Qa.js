import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import styled from 'styled-components'
import Subcribe from '../components/Subcribe'

export default function Qa({ match }) {
    return (
        <Wrap>
            <Breadcrumb title="Q&A" />
            <Subcribe />
        </Wrap>
    )
}
const Wrap = styled.div`

`;
