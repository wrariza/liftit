import React from "react";
import { Cordinate } from '../../domain/models/coordinate.model';
import { ItemMap } from './ItemMap'
import { ICordinate } from "../../domain/interfaces/ICordinate";


export class ListMaps extends React.Component {
    
    styles = { 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingTop: '10px',
        'justify-content': 'space-between'
    }


    routes: ICordinate[] = [
        new Cordinate('Punto 1', 4.8293179395713, -74.06725643633541), // lat log
        new Cordinate('Punto 2', 4.82986054103117, -74.05756710463811),
        new Cordinate('Punto 3', 4.82714752833579, -74.03924781023824),
        new Cordinate('Punto 4', 4.81536530246677, -74.01069658088244),
        new Cordinate('Punto 5', 4.79115489288404, -74.01718197256992),
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