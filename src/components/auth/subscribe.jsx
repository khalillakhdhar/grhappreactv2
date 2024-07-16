import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Subscribe = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Logic for handling registration
    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log("Address: ", address);
  };

  return (
    <div className="container mt-5">
      <h2>Inscription</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="firstName">Prénom</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Nom</label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Adresse</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
