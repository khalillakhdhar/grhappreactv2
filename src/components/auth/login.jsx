import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'; // pour ajouter du style

const Login = () => {
  const [form,setForm]=useState(
    {
      email:'',
      password:'',

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


  const handleLogin = async (e) => {
    e.preventDefault();
    // Logic for handling login
    try
    {
      const response= await axios.get("https://662e208ca7dda1fa378c2077.mockapi.io/users")
      console.log("users",response)
      const user=response.data.find(user=> user.email===form.email && user.password=== form.password)
      if(user)
      {
        localStorage.setItem("currentUser",JSON.stringify(user))
        window.location.replace("http://localhost:3000/dashboard/profile")
      }
      else
      {
        alert("email or password incorrect")
      }

    }
    catch(error)
    {
      console.error("error of login",error)
    }

  };

  return (
    <div className="login-container">
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            type="text"
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
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-button">Se connecter</button>
      </form>
      <p>Pas encore de compte ? <Link to="/register">S'inscrire</Link></p>
    </div>
  );
};

export default Login;
