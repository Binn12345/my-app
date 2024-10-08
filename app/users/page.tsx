import React from 'react'

const UsersPage = async() => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users', {cache: 'no-store'});
   const users = await res.json();
  return (
    // <div>
    //   UsersPage
    // </div>
    <>
        <p>{new Date().toLocaleTimeString()}</p>
        <table className='table'>
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {users.map(user => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
            ))}
        </tbody>
        </table>
    </>
  )
}

export default UsersPage
