import React from 'react'

const ProfilItem = ({todo}) => {
    return (
        <div>
             <h1> User Profile  </h1>
        <div style={{textAlign: "center" , boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)" , background:"white" , maxWidth: "300px"  , margin: "auto"}}>
            <h3 >{todo.imgSrc}</h3>
            <h3 >{todo.fullName}</h3>
            <h3 >{todo.pio}</h3>
            <h3 >{todo.Profession}</h3>
        </div>
        </div>
    )
}

export default ProfilItem
