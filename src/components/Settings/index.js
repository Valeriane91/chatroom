import React from 'react';
// import PropTypes from 'prop-types';
// react-feather : bibliothèque légère d'icônes sous forme de composants React
import { XCircle } from 'react-feather';

import './settings.scss';

const Settings = (value, setSettings) => (
  <form className="settings">

    <button type="submit" className="form-submit">
      <XCircle size={46} />
    </button>
    <input
      value={value}
      id="emailAddress"
      className="sett-input"
      type="email"
      placeholder="Email"
      onChange={(event) => {
        // console.log('change, nouvelle valeur :', event.target.value);
        setSettings(event.target.value);
    />
    <input type="password" id="pass" name="password" className="sett-pass" />
    <input type="submit" value="Envoyer" className="sett-submit" />
  </form>
);

/** Form.propTypes = {
  value: PropTypes.string.isRequired,
  // paramètre : nouvelle valeur
  setValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}; */

export default Settings;
