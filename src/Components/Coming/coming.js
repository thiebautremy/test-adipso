import React from 'react';
import {Image} from 'semantic-ui-react';
import phone from './Picture/Phone.webp'
import './style.scss';

const Coming = () => (
  <div className="coming">
    <header className="coming__header">
      <p>
        Recevez l'<strong>Appli d'Ostwald</strong> en avant première
      </p>
        <article className="coming__header__article">
          <p>Disponible sur les plate-formes iOS et Android</p>
      </article>
    </header>
    <Image src={phone} size='large'/>
    <form action="" className="coming__form">
      <p className="coming__form__title">
      Inscrivez vous pour être averti dès que l'appli est disponible
      </p>
      <input type="email" placeholder="Adresse email"/>
      <button type="submit">Valider</button>
    </form>
  </div>
);

export default Coming;
