import { Casino } from "./casino";
import { JuegoCasino } from "./juegoCasino";
import { TragaMoneda } from "./tragaMonedas";
import { Ruleta } from "./Ruleta";

//public constructor(nombre: string, usuarios: number, premioMaximo: number, premioMinimo: number, girarRuleta: boolean, casillero: number){
// public constructor(nombre: string, usuarios: number, premioMaximo: number, premioMinimo: number, girarRodillos: boolean)
const ruleta = new Ruleta('Ruleta', 10, 100000, 500, true, 79 );
const tragaCoin = new TragaMoneda('Zumma', 1, 50000, 10000, true);

const casino = new Casino('copacabana', 'VIP')
casino.setCasinoGames(ruleta);
casino.setCasinoGames(tragaCoin);

casino.getInfo();