export class ItemData{
    public city:string
    public temperature:number
    public humidity:number
    public wind:number
    public description:string

    constructor(city: string, temperature:number, humidity:number, wind:number, description:string){
        this.city = city
        this.temperature = temperature
        this.humidity = humidity
        this.wind = wind
        this.description = description
    }
}