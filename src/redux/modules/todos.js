const ADD_TEXT = "ADD_TEXT";
const DELETE_TEXT = "DELETE_TEXT";
const CHANGE_DONE = "CHANGE_DONE";
const MAKE_DETAIL = "MAKE_DETAIL";

export const addtext = (payload) => {
  return { type: ADD_TEXT, payload: payload };
};

export const deletetext = (payload) => {
  return { type: DELETE_TEXT, payload: payload };
};

export const changedone = (payload) => {
  return { type: CHANGE_DONE, payload: payload };
};

export const makedetail = (payload) => {
  return { type: MAKE_DETAIL, payload: payload };
};

const initial = {
  todos: [],
};

const todos = (state = initial, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return { todos: [action.payload, ...state.todos] };
    case DELETE_TEXT:
      return {
        todos: state.todos.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    case CHANGE_DONE:
      return {
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            return { ...item, isDone: !item.isDone };
          }
        }),
      };

    default:
      return state;
  }
};

export default todos;
