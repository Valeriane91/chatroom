import React from 'react';
import PropTypes from 'prop-types';
// react-feather : bibliothèque légère d'icônes sous forme de composants React
import { Send } from 'react-feather';

import './form.scss';

const Form = ({ value, setValue, handleSubmit }) => (
  <form
    className="form"
    onSubmit={(event) => {
      event.preventDefault();
      handleSubmit();
    }}
  >
    <input
      value={value}
      type="text"
      className="form-input"
      placeholder="Saisissez votre message..."
      onChange={(event) => {
        // console.log('change, nouvelle valeur :', event.target.value);
        setValue(event.target.value);
      }}
    />
    <button type="submit" className="form-submit">
      <Send size={46} />
    </button>
  </form>
);

Form.propTypes = {
  value: PropTypes.string.isRequired,
  // paramètre : nouvelle valeur
  setValue: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
