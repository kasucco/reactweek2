
리액트와 리액트를 적용한 투두리스트
============
지난 주차에 만들었던 투두리스트를 react-router-dom, styled-components, redux 를 사용해서 다시 작성!



## 구성
#### 메인페이지
![image](https://user-images.githubusercontent.com/113442143/195472232-e98c7f69-a69a-439f-b021-1abc120da6df.png)

1. 메인 페이지는 크게 Header, Form, Working List, Done List로 구성되어 있다.
2. Header는 제목을 보여준다
3. Form에서 투두리스트를 추가한다.
4. Working List에서 현재 진행중인 일을 확인한다.
5. Done List에서 완료한 일을 확인한다.

### 상세페이지
![image](https://user-images.githubusercontent.com/113442143/195474159-e228a392-96c2-490c-a883-d95b465e91b8.png)

1. 상세페이지에서는 카드의 id, 제목, 내용을 카드별로 확인할 수 있다.


## 기능
1. Form에서 원하는 제목과 내용을 넣고 추가하기 버튼을 누르면 Working List에 제목과 내용이 포함된 투두리스트 카드가 한장 추가된다.
2. Working List 카드 안의 완료하기 버튼을 클릭하면 카드는 Done List로 이동하고 버튼은 취소하기로 바뀐다.
3. Done List 카드 안의 취소하기 버튼을 클릭하면 카드는 Done List로 이동하고 버튼은 완료하기로 바뀐다.
4. 카드 안의 삭제하기 버튼을 누르면 카드가 삭제된다.
5. 카드 안의 상세보기를 누르면 상세페이지로 이동한다.
6. 상세페이지에서 홈으로 버튼을 누르면 메인페이지로 이동한다.
7. 상세페이지에서도 Form 파트가 있어 카드를 추가할 수 있다.
