import React from 'react'
// import Movie from '../components/Movie'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchFilms } from '../actions/FilmActions'

class Films extends React.Component {
    fetchAllFilms = () => {
        const apiUrl = `https://ghibliapi.herokuapp.com/films`
        try {
            fetch(apiUrl)
                .then(res => res.json())
                .then(data => this.props.fetchFilms(data))
        } catch (err) {
            console.log('Error: ', err)
        }
    }

    componentDidMount() {
        this.fetchAllFilms()
    }

    render() {
        return (
            <div>
                <h1>Films</h1>
                <ul>
                    {
                        this.props.film.movie.length > 0 ?
                            this.props.film.movie.map(mov => <Link to={`/films/${mov.id}`} ><li>{mov.title}</li></Link>)
                            : null
                    }
                </ul>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFilms: data => dispatch(fetchFilms(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Films)


// const Films = (props) => {
//     const [movie, setMovie] = useState('s')

//     const fetchAllFilms = () => {
//         const apiUrl = `https://ghibliapi.herokuapp.com/films`
//         // try {
//             fetch(apiUrl)
//             .then(res => res.json())
//             // .then(data => setMovie(data))
//         // } catch(err) {
//         //     console.log('Error: ', err)
//         // }
//     }

//     // useEffect(() => {
//     //     fetchAllFilms()
//     // }, [])

//     return (
//         <div>
//             <h1>Films</h1>
//             <button onClick={fetchAllFilms}>Get</button>
//         </div>
//     )
// }
