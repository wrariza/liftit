import GoogleMapReact from "google-map-react";
import { useState } from "react";
import { GOOGLE_MAP_API } from "../../domain/constants/google_map_api";

export const MainMap = () => {
    const [center] = useState({ lat: 4.8293179395713, lng:-74.06725643633541});
    const [zoom] = useState(11);
    return (
        <div style={{ height: '350px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: GOOGLE_MAP_API }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
            </GoogleMapReact>
        </div>
    );
}

export default MainMap