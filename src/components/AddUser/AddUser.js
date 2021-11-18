import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')

    const handleAddUser = (e) => {
        e.preventDefault()
        const name = nameRef.current.value;

        const email = emailRef.current.value;
        console.log(name, email)
        const newUser = { name, email }
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('user added successfully')
                    e.target.reset()
                }
            })
    }
    return (
        <div>
            <h2>Please Add an User</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" ref={nameRef} placeholder="name" />
                <input type="email" ref={emailRef} placeholder="email" />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddUser;