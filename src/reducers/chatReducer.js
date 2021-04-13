import { UPDATE_INPUT_MESSAGE, ADD_MESSAGE, CLOSE_SETTINGS } from 'src/actions/chat';

import { getHighestId } from 'src/utils';

const initialState = {
  messages: [
    {
      id: 1,
      username: 'Super Chat',
      content: 'Salut ça va ?',
    },
    {
      id: 2,
      username: 'Super Chat',
      content: 'T\'as pas des super croquettes ?',
    },
    {
      id: 3,
      username: 'Super Chat',
      content: 'Stp',
    },
  ],
  // contenu de l'input pour saisir un message
  inputMessage: '',
  closeSettings: true,
};

function nameForTheReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_INPUT_MESSAGE:
      return {
        ...state,
        inputMessage: action.newValue,
      };

    // accolades pour limiter la portée de la variable messagesCopy au case, sinon
    // ce serait tout le switch
    case ADD_MESSAGE: {
      // on construit un nouveau message

      // calcul du prochain id (cf todo-list)
      const nextId = getHighestId(state.messages) + 1;

      const newMessage = {
        id: nextId,
        username: 'Super Chat',
        content: state.inputMessage,
      };

      return {
        ...state,

        // on crée un tableau dans lequel on déverse tous les messages actuels, et
        // on ajoute notre nouveau message
        messages: [...state.messages, newMessage],
        // c'est l'équivalent de
        // const messagesUpdated = [state.messages[0], state.messages[1], etc, newMessage]

        // on en profite pour vider l'input
        inputMessage: '',
      };
    }

    default:
      return state;

    case CLOSE_SETTINGS:
      return {
        ...state,
        closeSettings: state.true,
      };
  }
}

export default nameForTheReducer;
