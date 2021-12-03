export interface FilmModelServer {
    id: Number;
    title: String;
    description: String;
    quantity: Number;
}
  
  
  export interface serverResponse  {
    count: number;
    films: FilmModelServer[];
  };