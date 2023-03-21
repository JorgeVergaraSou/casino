import { JuegoCasino } from "./juegoCasino";

export class Casino{
    private nombre: string;
    private salon: string;
    private JuegoCasino: JuegoCasino[];

    public constructor(nombre: string, salon: string){
        this.nombre = nombre;
        this.salon = salon;
        
        this.JuegoCasino = [];
    };

    public getInfo(): Casino{
        console.log(this);
        
        return this;
    }

    public setCasinoGames(games: JuegoCasino){
        this.JuegoCasino.push(games);
    }   


}