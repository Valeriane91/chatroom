// == Import npm
import React from 'react';

// == Import
import Form from 'src/containers/Form';
import Messages from 'src/containers/Messages';
import Settings from 'src/components/Settings';

/*
Mise en place d'un champ contrôlé avec un store redux
x avoir un emplacement dans le state pour stocker la valeur du champ (initialState
  dans le reducer)
x contrôle en lecture, l'input lit la valeur dans le state et l'utilise pour son
attribut value => mise en place d'un container et utilisation de mapStateToProps
pour transmettre la valeur.
A ce stade, on ne peut pas saisir de caractères dans l'input, et c'est normal
d'avoir un warning You provided a `value` prop to a form field without an `onChange` handler",
il disparaîtra à l'étape suivante
Pour vérifier : changer temporairement la valeur dans le state => l'input doit
afficher cette valeur
x contrôle en écriture : écouteur d'événement "change" sur l'input, qui doit aller
modifier dans le state. On ajoute une prop de type func sur le composant, et dans le
container on injecte une fonction dans cette prop. La fonction dispatch une action
vers le store.
*/

import './styles.scss';

// == Composant
const Chatroom = () => (
  <div className="chatroom">
    <Messages />
    <Form />
    <Settings />
  </div>
);

// == Export
export default Chatroom;
