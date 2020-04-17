export class WeatherItem {
    public city: string;
    public temperature: number;
    public rh: string;
    public wind_spd: string;

    constructor(city: string, temperature: number, rh:string, wind_spd?:string) {
        this.city = city;
        this.temperature = temperature;
        this.rh = rh;
        this.wind_spd = wind_spd;
    }
}