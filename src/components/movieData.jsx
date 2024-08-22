import React from 'react'


const movieData = ({mData}) => {
    console.log(mData);
  return (
    
        <div  style={{
             width:"300px",
             height: "80vh",
             borderRadius: "6px 6px 0 0",
             display:"flex", 
             flexDirection:"column",
             padding: " 12px" ,
             backgroundColor:"#B2F3F3",
             borderRadius: "15px",
             boxShadow: "0 4px 8px 4px grey", 
        }}>  
        <img src={mData.imageUrl} alt="" style={{width:"100%", height:"150px",borderRadius:"10px", objectFit:"cover"}}/>
        
         <span style={{fontWeight:"bold",fontSize:"30px" }}>{mData.title}</span>
         <span style={{fontSize:"20px"}}>Director: {mData.director}</span>
         <span  style={{fontSize:"30px"}}>Year: {mData.year}</span>
         <p>{mData.description}</p>
            <p>Rating:<span style={{fontWeight:"bold",fontSize:"20px" }}>{mData.rating}</span></p>
            <button style={{backgroundColor:"#00FFFF"}}>Read More</button>
            

      </div>

  )
}

export default movieData
