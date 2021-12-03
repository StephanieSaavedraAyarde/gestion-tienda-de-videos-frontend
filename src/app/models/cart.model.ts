import {FilmModelServer} from "./film.model";

export interface CartModelServer {
  total: Number;
  data: [{
    film: any,
    numInCart: Number
  }]
}

export interface CartModelPublic {
  total: Number;
  filmData: [{
    id: Number,
    incart: Number
  }]
}