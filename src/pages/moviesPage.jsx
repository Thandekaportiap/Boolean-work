
import React from 'react'
import Movies from '../assets/movies'

const moviesPage = () => {
    let data = {
        id: 8,
        title: "Shadows of the Past",
        director: "Isabella Cortez",
        year: 2022,
        genre: "Thriller",
        rating: 8.4,
        description: "A retired detective is forced to confront her darkest case when a copycat killer emerges after 20 years.",
        imageUrl: "https://images.pexels.com/photos/7319346/pexels-photo-7319346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }
  return (
    <>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundImage: `url(${require(data.imageUrl)})`,
                width:"100%", height:"290px"}}>
                    <h1 style={{color:"#B2F3F3"}}>{data.title}</h1>
      </div>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#B2F3F3"}}>
      <h1>{data.title}</h1>
        <h3>Director: {data.director}</h3>
        <p>Year:{data.year}</p>
        <h3>Genre: {data.genre}</h3>
        <p>{data.description}</p>
        <h3>Rating: {data.rating}</h3>
      </div>

      <button style={{color:"whitesmoke",background:"black", position:"absolute",bottom:"90px",left:"8px"}}>Back to Movies</button>
    </>
  )
}

export default moviesPage
