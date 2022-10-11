import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addtext,
  changedone,
  deletetext,
  makedetail,
} from "../redux/modules/todos";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CARDBOX = styled.div`
  border: 1px solid green;
  width: 200px;
`;

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [todo, setTodo] = useState({});

  const globalTodos = useSelector((state) => state.todos.todos);

  const onMakeHandler = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, id: Date.now(), [name]: value, isDone: false });
  };

  const onClickHandler = () => {
    dispatch(addtext(todo));
    setTodo({ title: "", body: "" });
  };

  const deleteHandler = (todoId) => {
    dispatch(deletetext(todoId));
  };

  const onChangeHandler = (todoId) => {
    dispatch(changedone(todoId));
  };
  //   const onMakeHandler = (todoId) => {
  //     dispatch(makedetail(todoId))
  //   }

  console.log(globalTodos);
  return (
    <div>
      <h1>my todo list</h1>
      <label>제목</label>
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={onMakeHandler}
      />
      <label>내용</label>
      <input
        type="text"
        name="body"
        value={todo.body}
        onChange={onMakeHandler}
      />
      <button onClick={() => onClickHandler()}>추가하기</button>
      <div>
        <h2>working</h2>
        {globalTodos.map((item) => {
          if (item.isDone === false)
            return (
              <CARDBOX key={item.id}>
                <div
                  onClick={() => {
                    navigate("/detail");
                  }}
                >
                  상세보기
                </div>
                <div>{item.id}</div>
                <div>{item.title}</div>
                <div>{item.body}</div>
                <button onClick={() => deleteHandler(item.id)}>삭제하기</button>
                <button onClick={() => onChangeHandler(item.id)}>
                  {item.isDone === false ? "완료하기" : "취소하기"}
                </button>
              </CARDBOX>
            );
        })}
      </div>
      <div>
        <h2>Done</h2>
        {globalTodos.map((item) => {
          if (item.isDone === true)
            return (
              <CARDBOX key={item.id}>
                <div>{item.id}</div>
                <div>{item.title}</div>
                <div>{item.body}</div>
                <button onClick={() => deleteHandler(item.id)}>삭제하기</button>
                <button onClick={() => onChangeHandler(item.id)}>
                  {item.isDone === false ? "완료하기" : "취소하기"}
                </button>
              </CARDBOX>
            );
        })}
      </div>
    </div>
  );
};

export default Home;