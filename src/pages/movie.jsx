import React from 'react'
import MovieData from '../components/movieData'


const movie = ({mData}) => {
  return (
    <>
    <div style={{display:"grid",gridTemplateColumns: "repeat(3, 0fr)",gap:"10px", justifyContent:"center",}}>
     {mData.map(item => (
            <MovieData key={item.id} mData={item}/>
          ))}
     </div>
    </>
  )
}

export default movie
