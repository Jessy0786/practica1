import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private heroes: Heroe [] = [
    {
      nombre: 'Aquaman',
      bio: 'Aquaman es el gobernante de Atlántida. Recibe el nombre de Arthur Curry entre humanos, mientras que para su reino soberano es conocido como Orin. También es considerado uno de los miembros fundadores de la Liga de la Justicia.',
      img: 'assets/img/aquaman.png',
      aparicion: '1941-11-01',
      casa: 'DC'
    },
    {
      nombre: 'Batman',
      bio: 'Batman es la identidad secreta de Bruce Wayne, un empresario multimillonario, galán y filántropo. Presenció el asesinato de sus padres cuando era niño lo marcó profundamente y lo llevó a entrenarse en la perfección física e intelectual para ponerse un disfraz de murciélago con el fin de combatir el crimen',
      img: 'assets/img/batman.png',
      aparicion: '1939-05-01',
      casa: 'DC'
    },
    {
      nombre: 'Daredevil',
      bio: 'Aunque el personaje es ciego tras el accidente que sufrió cuando era solo un niño, sus "cuatro" sentidos restantes funcionan con una precisión y sensibilidad sobrehumanas, lo que le otorga habilidades más allá de los límites de una persona vidente. Pocos personajes saben que el héroe no puede ver. Daredevil desarrolló un sentido de radar,12​que es similar a la ecolocación, habilidad que le permite percibir las formas y los objetos o personas que le rodean.',
      img: 'assets/img/daredevil.png',
      aparicion: '1964-04-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Hulk',
      bio: 'El hijo de un padre abusivo, Bruce Banner creció tímido e introvertido, pero un genio científico. De joven, gracias a su destacado trabajo en el campo de la física nuclear, atrajo la atención del Ejército de los Estados Unidos. accidentalmente fue expuesto a una bomba de rayos gamma, convirftiendose en un monstruo de forma humanoide de piel verde que posee una fuerza, resistencia y velocidad sobrehumanas casi ilimitadas, además de poseer un factor de curación y regeneración sumamente eficientes los cuales incrementan su poder a medida que su furia aumenta.',
      img: 'assets/img/hulk.png',
      aparicion: '1962-05-01',
      casa: 'Marvel'
    },
    {
      nombre: 'Linterna Verde',
      bio: 'Hal Jordan. Es el primer humano en ser parte de la Corporación de Green Lanterns. Este es también el Lantern más poderoso de todos los tiempos y el más valeroso. Hal también ha tenido sus caidas como cuando fue Parallax pero aún así ha podido volver a ser un gran héroe.',
      img: 'assets/img/linterna-verde.png',
      aparicion: '1940-06-01',
      casa: 'DC'
    },
    {
      nombre: 'Spiderman',
      bio: 'Dispone de poderes especiales para enfrentar y derrotar a sus enemigos: fuerza, rapidez, reflejos y la capacidad de adhesión a las superficies como tienen las arañas, es capaz de trepar como nadie inmensas alturas y para ello además se vale de telarañas que creó él mismo a través de su impactante inteligencia.',
      img: 'assets/img/spiderman.png',
      aparicion: '1962-08-10',
      casa: 'Marvel'
    },
    {
      nombre: 'Wolverine',
      bio: 'Es un mutante que posee sentidos afinados a los animales, capacidades físicas mejoradas, poderosa capacidad de regeneración conocida como un factor de curación, y tres garras retráctiles en cada mano.',
      img: 'assets/img/wolverine.png',
      aparicion: '1974-11-01',
      casa: 'Marvel'
    }
  ];
  constructor() { }

  getHeroes(): Heroe[]{
    return this.heroes;
  }

  getHeroeDetalleId(id: number){
    return this.heroes[id];
  }

  buscadorHeroe(termino: string){
    let heroeItem: Heroe[] = [];
    termino = termino.toLowerCase();
    for (const heroe of this.heroes){
      const nombre = heroe.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0 ){
        heroeItem.push(heroe);
      }
    }
    return heroeItem;
  }
}

export interface Heroe{
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
}
