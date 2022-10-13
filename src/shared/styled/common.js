import styled from "styled-components";

export const HeaderBox = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 24px;
`;
export const LayoutBox = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
export const StContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StDialog = styled.div`
  background-color: gainsboro;
  width: 600px;
  height: 400px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const StDialogHeader = styled.div`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 0 12px;
  align-items: center;
  margin-bottom: 20px;
`;
export const StButton = styled.button`
  border: 1px solid ${({ borderColor }) => borderColor};
  height: 40px;
  width: 120px;
  background-color: #fff;
  border-radius: 12px;
  cursor: pointer;
`;
export const StTitle = styled.h1`
  padding: 0 24px;
`;
export const StListContainer = styled.div`
  padding: 0 24px;
`;
export const StAddForm = styled.form`
  background-color: #eee;
  border-radius: 30px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;
export const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;
export const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;
export const StAddButton = styled.button`
  border: none;
  height: 40px;
  cursor: pointer;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
export const StInputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const StListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
export const StTodoContainer = styled.div`
  width: 270px;
  border: 4px solid teal;
  min-height: 100px;
  border-radius: 30px;
  padding: 12px 24px 24px 24px;
`;
export const StDialogFooter = styled.footer`
  display: flex;
  justify-content: end;
  padding: 5px;
  gap: 12px;
  margin-top: 20px;
`;

export const Stmargin = styled.div`
  margin-left: 200px;
`;
