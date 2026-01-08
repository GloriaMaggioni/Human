// INTERFACCIA PER LA EVENT CARD CON I PARAMETRI DA PRENDERE

import { Interface } from "readline"

export interface Card {
  image: string,
  title: string,
  day: string,
  startHour: string,
  finishHour: string,
  location: string,
  description: string,
  city: string
  category: string,
}

