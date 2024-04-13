![baecomm](https://github.com/nuyhman/baecomm-fe/assets/96006602/e59a7a4c-5586-496f-9188-c7b6edc24a8d)

<h2 align="center">
  Baecomm Front-end 채용 과제
</h2>
<p align="center">
  CRA를 기반으로 페이지네이션 구현
</p>

## 데모

https://baecomm-fe.vercel.app/

## 프로젝트 시작하기

```bash
> npm install
> npm start
```

## 기술 스택

- [react](https://react.dev/) - SPA 기반으로 한 UI를 위한 라이브러리
- [react-router-dom](https://reactrouter.com/en/main) - React로 생성된 SPA 내부에서 페이지 이동하기 위한 라이브러리
- [emotion](https://emotion.sh/docs/introduction) - css-in-js 라이브러리

## 구현 사항

0. API
   다음 사이트에 있는 API를 사용한다.
   https://dummyjson.com/docs/products

1. 상품 목록 페이지

- [x] 페이지 상단에 검색어를 입력할 수 있는 input과 “검색” 버튼이 있다.
- [x] 검색어를 입력하고 “검색”을 클릭하면 검색 결과가 반영된 목록이 표시된다.
- [x] 검색어를 입력하고 엔터 키를 입력하면 “검색”버튼 클릭과 동일하게 동작한다.
- [x] 검색창 아래에 상품 목록이 있다.
- [x] 최초 접속 시 10개의 상품을 출력한다.
- [x] 한 행에 상품을 2개씩 배치한다.
- [x] 각 상품의 thumbnail image, brand, title, price를 보여준다.
- [x] 각 항목은 세로로 순서대로 표시하되, brand, title은 같은 행에 표시한다.
- [x] 상품 표시 영역에 마우스를 올리면 brand, title 행의 색상이 파란색으로 표시된다.
- [x] 상품을 클릭하면 해당 상품의 상세 페이지로 이동한다.
- [x] 목록 하단에는 “더보기” 버튼이 있다.
- [x] 버튼을 클릭할 때마다 상품 목록에서 10개의 상품을 추가로 보여준다.
- [x] 더 표시할 상품이 있을 때에만 버튼이 표시된다.

2. 상품 상세 페이지

- [x] 페이지 상단에 “목록으로 돌아가기” 버튼이 있다.
- [x] 버튼을 클릭하면 상품 목록 페이지로 이동한다.
- [x] 목록 화면에서 검색 기능 사용 후 상세 페이지로 이동한 경우, 목록으로 돌아가면 검색어와 검색 결과, 스크롤 위치가 유지된다.
- [x] “목록으로 돌아가기” 버튼 아래에 상품 상세 정보가 표시된다.
- [x] 목록에서 선택한 상품의 thumbnail image, brand, title, price, description과 images 배열의 각 image가 모두 표시된다.

## 진행하면서 고민한 부분

커스텀 훅들을 통해 관심사를 분리하여 처리하였습니다.

1. 상태 관리와 비동기 처리의 분리: `useFetch` 커스텀 훅은 데이터 fetch와 관련된 상태 및 비동기 처리를 담당합니다. 이를 통해 컴포넌트에서는 상태에 따른 ui에만 집중할 수 있습니다.

2. 페이지네이션 및 데이터 요청의 분리: `useFetchMore`에서는 페이지네이션을 위한 로직을 구현하고, `updateQuery` 를 통해 원하는 부분의 데이터만 병합할 수 있습니다.

3. 스크롤 위치 복구: `useScrollRestoration` 커스텀 훅은 스크롤 위치와 데이터를 저장하고 복구하는 역할을 담당합니다. key를 통해 복구할 페이지를 특정할 수 있습니다.
   - 세션 스토리지 활용 및 정리: 세션 스토리지를 사용하여 데이터를 저장하고 복구하는데, 이는 새로 고침 또는 페이지 이동 시에도 유지될 수 있도록 합니다. 또한, 언마운트 시점에서 `restoreComplete` 함수 호출을 통해 side effect를 최소화 하였습니다.

이러한 방식으로 관심사의 분리를 통해 코드의 가독성, 유지보수성, 그리고 재사용성을 향상시켰습니다.
