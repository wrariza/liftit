import React, { useState } from 'react';
import { ICordinate } from '../../domain/interfaces/ICordinate';
import { GOOGLE_MAP_API } from '../../domain/constants/google_map_api';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react';

export const ItemMap = (props: ICordinate) => {
    const [center] = useState({ lat: props.lat, lng: props.log });
    const [zoom] = useState(11);
    return (
        <div style={{ height: '180px', width: '250px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: GOOGLE_MAP_API }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                <Marker></Marker>
            </GoogleMapReact>
        </div>
    );
}

export default ItemMap