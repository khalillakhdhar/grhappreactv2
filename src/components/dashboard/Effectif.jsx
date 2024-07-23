import axios from 'axios'
import React, { useEffect, useState } from 'react'
export default function Effectif() {
  const [users,setUsers]=useState([])
  const [search,setSearch]=useState("")
  const fetchUsers= async ()=>
  {
    try{
      const response= await axios.get("https://662e208ca7dda1fa378c2077.mockapi.io/users")
      setUsers(response.data);
      }
        catch(error)
        {
          console.error("users fetched unsuccessfully")

        }
  }
  useEffect(()=>{
    fetchUsers();
  },[])
  const filteredUsers= users.filter(user=>
    user.firstName.toLowerCase().includes(search.toLowerCase()) || user.lastName.toLowerCase().includes(search.toLowerCase())
    || user.adress.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div><h2>Liste des utilisateurs</h2>
    <input type='text' className='form-control mb-3' value={search} onChange={(e)=>setSearch(e.target.value)}></input>
    <table className='table table-bordered table-responsive'>
      <thead>
        <tr>
          <th>name</th>
          <th>email</th>
          <th>adress</th>
          <th>action</th>

        </tr>
      </thead>
      <tbody>
        {
          filteredUsers.map((user)=>
          {
            <tr key={user.id}>
            <td>{user.firstName } {user.lastName}</td>
            <td>
              {user.email}
            </td>
            <td>
              {user.adress}
            </td>

            </tr>
          }
          )
        }

      </tbody>
    </table>
    
    
    </div>
  )
}
