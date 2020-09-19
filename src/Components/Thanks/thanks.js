import React from 'react';
import './style.scss';

const Thanks = () => (
  <div className="thanks">
    <header className="thanks__header">
      <h1>MERCI</h1>
      <h2>Nous vous avertirons dès que l'appli sera disponible</h2>
    </header>
    <section>
      <h3>En attendant, rendez-vous sur</h3>
      <a href="#">
        <button>www.ville-ostwald.fr</button>
      </a>
    </section>
    <footer>
    © 2013 Ville d'Oswald
    </footer>
  </div>
);

export default Thanks;
