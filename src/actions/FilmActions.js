import { GET_FILMS } from "./actionTypes";

export const fetchFilms = (data) => {
    return { type: GET_FILMS, payload: data };
};