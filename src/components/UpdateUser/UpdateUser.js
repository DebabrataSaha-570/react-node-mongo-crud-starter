import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router'

const UpdateUser = () => {
    const [user, setUser] = useState({})


    const { id } = useParams()
    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUser(data)
            })
    }, [])
    //update user 
    const handleNameChange = (e) => {
        console.log(e.target.value)
        const updatedName = e.target.value;
        const updatedUser = { name: updatedName, email: user.email }
        setUser(updatedUser)



    }
    const handleEmailChange = (e) => {
        const updatedEmail = e.target.value;
        const updatedUser = { ...user }
        updatedUser.email = updatedEmail;
        setUser(updatedUser)
    }
    const handleUpdateUser = () => {

    }
    return (
        <div>
            <h2>Update User : {user.name} || {user.email}</h2>
            <form onSubmit={handleUpdateUser}>
                <input type="text" onChange={handleNameChange} value={user.name || ''} />
                <input type="email" onChange={handleEmailChange} value={user.email || ''} name="" id="" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UpdateUser;