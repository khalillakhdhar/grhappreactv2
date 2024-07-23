/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
export default function Conge() {
  const [conges,setConges]= useState([]);
  const fetchConges=async ()=>{
    try 
    {
      const response= await axios.get("https://662e208ca7dda1fa378c2077.mockapi.io/conges")
      console.table(response)
      setConges(response.data)

    }
    catch(error)
    {
      console.error("erreur de lecture",error);
    }
  }
  useEffect(()=>{
    fetchConges();   

  },
  [])

  
const handleDecision= async (id,decision)=>{
  try{
    await axios.put(`https://662e208ca7dda1fa378c2077.mockapi.io/conges/${id}`,{etat:decision});
    setConges(conges.map(cong=>cong.id=== id ? {...cong,etat:decision}:
      cong
  ))

  }
  catch(error)
  {
    console.error("erreur lors de la mise à jours")
  }
}

  return (
    <div>
      <p className='text-center'><h2>Congés</h2></p>
      <table className='table table-bordered table-responsive'>
        <thead>
        <tr>  <th>
            titre
          </th>
          <th>
            debut
          </th>
          <th>fin</th>
          <th>cause</th>
          <th>état</th>
          <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {conges.map((cong)=>
          (
          <tr  key={cong.id}>
            <td>{cong.titre}</td>
            <td>{cong.debut}</td>
            <td>{cong.fin}</td>
            <td>{cong.cause}</td>
            <td>{cong.etat}</td>
            <td><button onClick={()=>handleDecision(cong.id,"Accepté")} className='btn btn-success'>Accepter</button> &nbsp;<button onClick={()=>handleDecision(cong.id,"Refusé")} className='btn btn-danger'>Refuser</button></td>
          </tr>
          ))
          }
        </tbody>

      </table>



    </div>
  )
}
