import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { CardBox } from "../shared/styled/common";
import { getTodoByid } from "../redux/modules/todos";
import { useEffect } from "react";

const Detail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams();
  
  const todo = useSelector((state)=>state.todos.todo)
  console.log(todo);
  useEffect(()=> {
    dispatch(getTodoByid(id))
  }, [])
  console.log(todo);

  
  return (
    <CardBox>
      <div>{todo.id}</div>
      <div>{todo.title}</div>
      <div>{todo.body}</div>
      <button onClick={() => navigate("/")}>홈으로</button>
    </CardBox>
  );
};

export default Detail;
