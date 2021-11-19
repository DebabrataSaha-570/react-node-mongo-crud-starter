import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])
    // delete an user 
    const handleDeleteUser = (id) => {
        // console.log(id)
        const proceed = window.confirm('Are yo sure, you want to delete?')
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount === 1) {
                        alert('deletd successfully')
                        // window.location.reload()
                        const remainingUsers = users.filter(user => user._id !== id)
                        setUsers(remainingUsers)
                    }
                })
        }


    }
    return (
        <div>
            <h2>Users Available : {users.length}</h2>
            <ul>
                {
                    users.map(user => <li key={user._id}> {user.name} :: {user.email}
                        <Link to={`/users/update/${user._id}`}>
                            <button>Update</button>

                        </Link>
                        <button onClick={() => handleDeleteUser(user._id)}>X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Users;