
import React from 'react'
import Movies from '../assets/movies'
import { Link, useParams } from 'react-router-dom'

const moviesPage = ({data}) => {
  const{id}=useParams();
  console.log(id)

    // let data[id] = Movies.id
    // console.log(data[id][id])
  return (
    <>
    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundImage: `url(${require(data[id].imageUrl)})`,
                width:"100%", height:"290px"}}>
                    <h1 style={{color:"#B2F3F3"}}>{data[id].title}</h1>
      </div>
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"#B2F3F3"}}>
      <h1>{data[id].title}</h1>
        <h3>Director: {data[id].director}</h3>
        <p>Year:{data[id].year}</p>
        <h3>Genre: {data[id].genre}</h3>
        <p>{data[id].description}</p>
        <h3>Rating: {data[id].rating}</h3>
      </div>

      <Link to=".."><button style={{color:"whitesmoke",background:"black", position:"absolute",bottom:"90px",left:"8px"}}>Back to Movies</button></Link>
    </>
  )
}

export default moviesPage
