

/*
===== Código de TypeScript =====
*/

let habilidades: string[] = ['corre', 'camina', 'come'];
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre: '',
    hp: 100,
    habilidades: ['corre', 'camina', 'come']
}

personaje.puebloNatal = 'Pueblo nuevo';

console.table(personaje);