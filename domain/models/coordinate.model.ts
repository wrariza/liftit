export class Cordinate {
    constructor(lat: number, log: number, color: string)  {
        this.lat = lat
        this.log = log
        this.color = color
    }

    lat: number
    log: number
    color: string = 'blue'
}