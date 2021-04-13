import React from 'react';
// import PropTypes from 'prop-types';
// react-feather : bibliothèque légère d'icônes sous forme de composants React
import { XCircle } from 'react-feather';

// import './form.scss';

const Settings = () => (
  <form className="settings">
    <button type="submit" className="form-submit">
      <XCircle size={50} />
    </button>
    <input
      id="emailAddress"
      className="sett-input"
      type="email"
      placeholder="Email"
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
