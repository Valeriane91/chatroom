// === action types
export const UPDATE_INPUT_MESSAGE = 'UPDATE_INPUT_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CLOSE_SETTINGS = 'CLOSE_SETTINGS';

// === action creators
export const updateInputMessage = (newValue) => ({
  type: UPDATE_INPUT_MESSAGE,
  newValue: newValue,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const closeSettings = () => ({
  type: CLOSE_SETTINGS,
  newValue: false,
})
