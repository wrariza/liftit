import React from "react";
import { Cordinate } from '../../domain/models/coordinate.model';
import { ItemMap } from './ItemMap'

export class ListMaps extends React.Component {

    styles = { 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        'padding-top': '10px',
        'justify-content': 'space-between'
    }


    routes = [
        new Cordinate(4.8293179395713, -74.06725643633541), // lat log
        new Cordinate(4.82986054103117, -74.05756710463811),
        new Cordinate(4.82714752833579, -74.03924781023824),
        new Cordinate(4.81536530246677, -74.01069658088244),
        new Cordinate(4.79115489288404, -74.01718197256992),
    ]

    createRoute() {
        return this.routes.map((cordinate: Cordinate) => {
            return <ItemMap {...cordinate}>  </ItemMap>
        })
    }

    render() {
        return (
            <section style={this.styles}>
               {this.createRoute()}
           </section>
        );
    }
}