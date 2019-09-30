import React, { useState } from 'react';
import { ICordinate } from '../../domain/interfaces/ICordinate';
import { GOOGLE_MAP_API } from '../../domain/constants/google_map_api';
import GoogleMapReact from 'google-map-react';

const styleContainer = {
    padding:' 5px',
    background: '#a7ceea',
    borderRadius: '5px'
}


export const ItemMap = (props: ICordinate) => {
    const [center] = useState({ lat: props.lat, lng: props.log });
    const [zoom] = useState(11);
    const selectItemMap = () => {
        console.log('asdsdasd')
    }
    return (
        <section key={props.market} style={styleContainer}>
            <div style={{ height: '180px', width: '250px' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: GOOGLE_MAP_API }}
                    defaultCenter={center}
                    defaultZoom={zoom}
                    draggable={false}
                    onClick={selectItemMap}
                >
                    <Marker 
                        lat={props.lat} 
                        lng={props.log} 
                        marker={props.market}/>
                </GoogleMapReact>
            </div>
        </section>
    );
}

const styleMarket = {
    'padding':' 15px',
    'fontSize':'9px',
    'text-align': 'center',
    'display': 'flex',
    'height': '5px',
    'justify-content': 'center',
    'width': '5px',
    'alignItems': 'center',
    'borderRadius': '50%',
    'backgroundColor': 'rgb(0, 108, 150)',
    'margin': '0px'
}

const Marker = (props: any) => {
    return <div style={styleMarket}>{props.marker}</div>
}

export default ItemMap