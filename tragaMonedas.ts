import { JuegoCasino } from "./juegoCasino";

export class TragaMoneda extends JuegoCasino{
   
public girarRodillos: boolean;

/* ESTO SE HEREDA DE LA CLASE JUEGO CASINO */
    public constructor(nombre: string, usuarios: number, premioMaximo: number, premioMinimo: number, girarRodillos: boolean){
        super(nombre, usuarios, premioMaximo, premioMinimo);
        this.girarRodillos = girarRodillos;
    }

    public getInfo(): TragaMoneda{
        return this;
    }
}