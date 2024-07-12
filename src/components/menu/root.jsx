import { Link, Outlet } from 'react-router-dom';

export default function Root() {
    return (
      <>
         <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid"> 
        <Link to="./accueil" className="navbar-brand" >Accueil</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
           
            <li className="nav-item">
              < Link to='./profile' className="nav-link" >Profile</Link>
            </li>
            <li className="nav-item">
              < Link to="./effectif" className="nav-link" >Effectif</Link>
            </li>
            <li className="nav-item">
              < Link to="./conges" className="nav-link" >Congés</Link>
            </li>
            <li className="nav-item">
              < Link to="../" className="nav-link" >déconnexion</Link>
            </li>
        
          </ul>
        </div>
      </div>
    </nav>
    <div className='container'>
      <Outlet></Outlet>
    </div>
      </>
    );
  }