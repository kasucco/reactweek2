import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CardBox } from "../shared/styled/common";
import { getTodoByid } from "../redux/modules/todos";
import { useEffect } from "react";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const param = useParams();
  // console.log(param);
  // console.log(dispatch(getTodoByid(param.id)).id);
  // const globalTodos = useSelector((state) => state.todos.todos);
  // const [currTodo] = globalTodos.filter((item) => item.id === Number(param.id));

  // console.log(globalTodos);
  // console.log(currTodo);
  const todo = () => dispatch(getTodoByid(param.id));

  useEffect(() => {
    todo();
  }, []);
  const todolist = useSelector((state) => state.todos.todos);
  console.log(todolist);
  return (
    <CardBox>
      {/* <div>{currTodo.id}</div>
      <div>{currTodo.title}</div>
      <div>{currTodo.body}</div> */}
      <div>{todolist.body}</div>

      <button onClick={() => navigate("/")}>홈으로</button>
    </CardBox>
  );
};

export default Detail;
