import alianza from "../assets/images/sponsors/alianza.png";
import local from "../assets/images/sponsors/local.png";
import torta from "../assets/images/sponsors/torta.png";
import decoracion from "../assets/images/sponsors/decoracion.png";
import decoracion2 from "../assets/images/sponsors/decoracion2.png";
import foto_video from "../assets/images/sponsors/default.png";
import sonido from "../assets/images/sponsors/sonido.png";
import ministerio from "../assets/images/sponsors/ministerio.png";
import invitacion from "../assets/images/sponsors/invitacion.png";
import centro_mesa from "../assets/images/sponsors/centro_mesa.png";
import suvenirs from "../assets/images/sponsors/suvenirs.png";
import belleza from "../assets/images/sponsors/belleza.png";

import g1 from "../assets/images/gallery/g1.png";
import g2 from "../assets/images/gallery/g2.png";
import g3 from "../assets/images/gallery/g3.png";
import g4 from "../assets/images/gallery/g4.png";
import g5 from "../assets/images/gallery/g5.png";

type Sponsor = {
  id: number;
  title: string;
  names: string[];
  image: string;
  imagePosition: "left" | "right";
};
type GalleryImage = {
  src: string;
  alt?: string;
};

export const CONFIG: {
  couple: string;
  dateLabel: string;
  timeLabel: string;
  churchName: string;
  churchAddress: string;
  churchMapsUrl: string;
  venueName: string;
  venueAddress: string;
  venueMapsUrl: string;
  songTitle: string;
  sponsors: Sponsor[];
  gallery: GalleryImage[];
} = {
  couple: "José Luis & Norma",
  dateLabel: "Sábado 19 de diciembre de 2026",
  timeLabel: "19:00 h",

  // Dirección de la iglesia
  churchName: "Iglesia Asamblea de Dios — Rayo de Sol",
  churchAddress: "Calle Ceibo 1506, Glew, Buenos Aires, Argentina (CP 1856)",
  churchMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Calle+Ceibo+1506%2C+Glew%2C+Buenos+Aires%2C+Argentina+1856",

  // Dirección del salón
  venueName: "Local Nor Cinti",
  venueAddress:
    "Calle Manuel Gálvez 4050, Glew, Buenos Aires, Argentina (CP 1856)",
  venueMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Local+Nor+Cinti%2C+Calle+Manuel+Galvez+4050%2C+Glew%2C+Buenos+Aires%2C+Argentina+1856",

  songTitle: "Nuestra canción",
  sponsors: [
    {
      id: 1,
      title: "Padrinos de alianza",
      names: ["Medrin Villca", "Elsa Alvarado"],
      image: alianza,
      imagePosition: "right",
    },
    {
      id: 2,
      title: "Padrinos de local",
      names: ["Delfin Quispe", "Esilda Otondo"],
      image: local,
      imagePosition: "left",
    },
    {
      id: 3,
      title: "Padrinos de torta",
      names: ["Nicolás Mancilla", "Lourdes Villca"],
      image: torta,
      imagePosition: "right",
    },
    {
      id: 4,
      title: "Padrinos de decoracion",
      names: ["Walter Moscoso", "Rosalia Mollo"],
      image: decoracion,
      imagePosition: "left",
    },
    {
      id: 5,
      title: "Padrinos de decoracion",
      names: ["Moises Moscoso", "Delia Villca"],
      image: decoracion2,
      imagePosition: "right",
    },
    {
      id: 6,
      title: "Padrinos de foto y video",
      names: ["Nicolás Mancilla", "Lourdes Villca"],
      image: foto_video,
      imagePosition: "left",
    },
    {
      id: 7,
      title: "Padrinos de sonido",
      names: ["Reynaldo Villca", "Nancy Pascuale"],
      image: sonido,
      imagePosition: "right",
    },
    {
      id: 8,
      title: "Padrinos de ministerio de alabanza",
      names: ["Braulio Porco Estrada", "Cirila Mamamni Acuña"],
      image: ministerio,
      imagePosition: "left",
    },
    {
      id: 9,
      title: "Padrinos de invitacion",
      names: ["Heriberto Mamani Acuña", "Delfina Villca Moscoso"],
      image: invitacion,
      imagePosition: "right",
    },
    {
      id: 10,
      title: "Padrinos de centro de mesa",
      names: ["Tito Vera", "Rosilda Otondo"],
      image: centro_mesa,
      imagePosition: "left",
    },
    {
      id: 11,
      title: "Padrinos de suvenirs",
      names: ["Cristian Villca Cruz", "Ana Maria Acarapi"],
      image: suvenirs,
      imagePosition: "right",
    },
    {
      id: 12,
      title: "Madrina de belleza",
      names: ["Yanet Otondo"],
      image: belleza,
      imagePosition: "left",
    },
  ],
  gallery: [
    { src: g1, alt: "Imagen 1" },
    { src: g2, alt: "Imagen 2" },
    { src: g3, alt: "Imagen 3" },
    { src: g4, alt: "Imagen 4" },
    { src: g5, alt: "Imagen 5" },
  ],
};
