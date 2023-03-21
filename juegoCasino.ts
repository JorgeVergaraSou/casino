export class JuegoCasino{
    nombre: string;
    usuarios: number;
    premioMaximo: number;
    premioMinimo: number;

    constructor(nombre: string, usuarios: number, premioMaximo: number, premioMinimo: number){
        this.nombre = nombre;
        this.usuarios = usuarios;
        this.premioMaximo = premioMaximo;
        this.premioMinimo = premioMinimo;
    }


    public getInfo(): JuegoCasino {
        return this;
      }
}