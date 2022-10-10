const ADD_TEXT = "ADD_TEXT";

export const addtext = (payload) => {
  return { type: "ADD_TEXT", payload: payload };
};

const initial = {
  todos: [
    {
      text: "",
    },
  ],
};

const todo = (state = initial, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return { todos: [{ text: action.payload }, ...state] };

    default:
      return state;
  }
};

export default todo;
