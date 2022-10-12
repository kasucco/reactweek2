const ADD_TEXT = "ADD_TEXT";
const DELETE_TEXT = "DELETE_TEXT";
const CHANGE_DONE = "CHANGE_DONE";
const GET_TODO_BYID = "GET_TODO_BYID";

export const addtext = (payload) => {
  return { type: ADD_TEXT, payload: payload };
};

export const deletetext = (payload) => {
  return { type: DELETE_TEXT, payload: payload };
};

export const changedone = (payload) => {
  return { type: CHANGE_DONE, payload: payload };
};

export const getTodoByid = (payload) => {
  return { type: GET_TODO_BYID, payload };
};
const initial = {
  todos: [
    {
      id: 1, // id는 모두 고유값이어야 합니다.
      title: "리액트 강의보기",
      body: "챕터 1부터 챕터 12까지 학습",
      isDone: false,
    },
    {
      id: 2, // id는 모두 고유값이어야 합니다.
      title: "점심 먹기",
      body: "점심 뭐먹지..?",
      isDone: false,
    },
  ],
  todo: {
    id: 0, // id는 모두 고유값이어야 합니다.
    title: "",
    body: "",
    isDone: false,
  }
};

const todos = (state = initial, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    case DELETE_TEXT:
      return {
        ...state,
        todos: state.todos.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    case CHANGE_DONE:
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            return { ...item, isDone: !item.isDone };
          } else {
            return item
          }
        }),
      };
    case GET_TODO_BYID:
      return {
        ...state,
        todo: state.todos.find((item) => {
          return item.id === Number(action.payload)
        })
      };

    default:
      return state;
  }
};

export default todos;
