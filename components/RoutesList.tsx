import React from 'react';
import { Cordinate } from '../domain/models/coordinate.model';



export class RoutesList extends React.PureComponent { 
    
    styles = { background: 'blue', color: 'white', listStyle: 'none' }
    
    routes = [
        new Cordinate(-74.06725643633541, 4.8293179395713, 'blue'),
        new Cordinate(-74.05756710463811, 4.82986054103117,'red'),
        new Cordinate(-74.03924781023824, 4.82714752833579, 'peru'),
        new Cordinate(-74.01069658088244, 4.81536530246677, 'yellow'),
        new Cordinate(-74.01718197256992, 4.79115489288404, 'orange'),
    ]

    createRoute(){
        return this.routes.map((cordinate: Cordinate) => {
           return  <li>{cordinate.lat} {cordinate.log}  </li>
        })
    } 

    render() {
        return (
            <ul style={this.styles}>
                {this.createRoute()}
            </ul>
        );
    }
}
