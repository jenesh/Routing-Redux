import { GET_FILMS } from '../actions/actionTypes'

export default (state = {movie: []}, action) => {
    const copyState = {...state}
    console.log(action.payload)
    switch(action.type) {
        case (GET_FILMS):
            copyState.movie = action.payload
            break
        default:
            break
    }
    return copyState
}