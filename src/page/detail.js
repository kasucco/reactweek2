import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CARDBOXDETAIL = styled.div`
  border: 1px solid green;
  width: 200px;
`;

const Detail = () => {
  const navigate = useNavigate();
  const globalTodos = useSelector((state) => state.todos.todos);
  return (
    <div>
      {globalTodos.map((item) => {
        <div key={item.id}>
          <div>{item.id}</div>
          <div>{item.title}</div>
        </div>;
      })}
      <button onClick={() => navigate("/")}>홈으로</button>
    </div>
  );
};

export default Detail;
