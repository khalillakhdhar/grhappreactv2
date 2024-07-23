import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Subscribe = () => {
  const [form,setForm]=useState(
    {
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      address:''
    }
  )

  const handleChange = (e) => {
    //e.preventDefault();
    // Logic for handling registration
    setForm(
      {...form,
        [e.target.name]:e.target.value
      }
    )
  };
  const handleSubmit= async(e)=> {
    e.preventDefault();
    try
    {
      await axios.post("https://662e208ca7dda1fa378c2077.mockapi.io/users",form)
      alert("subscribed successfully")
    }
    catch(error)
    {
      console.error("error during registration",error)
    }
  }
  return (
    <div className="container mt-5">
      <h2>Inscription</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            
            value={form.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Adresse</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">S'inscrire</button>
      </form>
      <p className="mt-3">Déjà un compte ? <Link to="../">Se connecter</Link></p>
    </div>
  );
};

export default Subscribe;
