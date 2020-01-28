import React from 'react'

const Movie = (prop) => {
    return (
        <div>
            <h1>{prop.title}</h1>
            <h3>{prop.producer}</h3>
            <p>{prop.description}</p>
        </div>
    )
}

export default Movie;