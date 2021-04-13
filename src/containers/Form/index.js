import { connect } from 'react-redux';

import { updateInputMessage, addMessage } from 'src/actions/chat';

// on importe le composant de présentation
import Form from 'src/components/Form';

// === mapStateToProps
// si on a besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  value: state.inputMessage,
});

// === mapDispatchToProps
// si on a besoin de dispatcher des actions vers le store (modifier le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  setValue: (newValue) => {
    // console.log('dispatch, nouvelle valeur:', newValue);
    const action = updateInputMessage(newValue);
    dispatch(action);
  },
  handleSubmit: () => {
    // console.log('submit');
    const action = addMessage();
    dispatch(action);
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Form);

/*
c'est un peu l'équivalent de :
const FormContainer = () => (
  return <Form
    value={state.inputMessages}
    setValue={() => { traitement }}
    handleSubmit={() => { traitement }}
  />
)
*/
