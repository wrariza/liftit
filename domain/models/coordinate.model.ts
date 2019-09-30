export class Cordinate {
    constructor(market: string, lat: number, log: number)  {
        this.market = market
        this.lat = lat
        this.log = log
    }

    market: string
    lat: number
    log: number
}