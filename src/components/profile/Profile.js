import React from 'react'
import ProfilItem from '../profilItem/ProfilItem'

const Profile = ({Person}) => {
    return (
        <div>
            {Person.map(el => <ProfilItem todo={el}/>)}
        </div>
    )
}

export default Profile

