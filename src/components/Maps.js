import React from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import styled from 'styled-components';
const mapStyles = {
    width: '100%',
    height: '60vh',
};
export function Maps(props) {
    return (
        <Wrap>
            <Map
                google={props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 10.8696387, lng: 106.3766298 }}
            >
                <Marker position={{ lat: 10.8696387, lng: 106.3766298 }} />
            </Map>
        </Wrap>
    )
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyBNIqGGevABDc2nB6RbR8pa-VPQKhN1VFA'
})(Maps);
const Wrap = styled.div`
    display:block;
    height:60vh;
`;