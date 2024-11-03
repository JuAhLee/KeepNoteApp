<h1> Notes 만들기 </h1>

- **배포 링크 :** [OneNotes 링크](채워넣기)

<br>

<div  align="center">
  <img width="60%" height="350px" src="채워넣기" alt="OneNotes Gif">
</div>

<br><br>

## 기술 스택

|       vite       |     react     | Typescript | 
| :--------------: | :-----------: | :--------: | 
| styled-component | Redux/toolkit |  Netlify   |  

<br><br>

## 사용한 라이브러리 & 구현 기능

<br>

- ## 라이브러리 :
 > ## [React Router Dom](https://reactrouter.com/en/main/start/tutorial)
 페이지 전환을 도와주는 라이브러리 입니다.


 ```javascript
 import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllNotes />} />
        <Route path="/archive" element={<ArchiveNotes />} />
        <Route path="/trash" element={<TrashNotes />} />
        <Route path="/tag/:name" element={<TagNotes />} />
        <Route path="/404" element={<ErrorPage />} />
        <Route path="/*" element={<Navigate to={"/404"} />} />
      </Routes>
    </BrowserRouter>

 ```

<br><br>



> ## Redux/toolkit  //같이

<br><br>

> ## [react-quill](https://github.com/zenoamaro/react-quill)
 폰트 색 변경, 크기 조정, 이미지 추가 등의 기능을 사용할 수 있는 텍스트 에디터 라이브러리 입니다.
 <br>
 텍스트 에디터를 원하는 대로 커스텀 할 수 있습니다.


 ```javascript
 import ReactQuill from "react-quill";
 import "react-quill/dist/quill.snow.css";

 // ReactQuill Custom
 const formats = [
  "bold",
  "italic",
  "underline",
  "strike",
  "list",

  "color",
  "background",

  "image",
  "blockquote",
  "code-block",
 ];

 const modules = {
   toolbar: [
    [{ list: "ordered" }, { list: "bullet" }],
    [],
    ["italic", "underline", "strike"],
    [],
    [{ color: [] }, { background: [] }],
    [],
    ["image", "blockquote", "code-block"],
   ],
 };

 // ReactQuill 사용
 const TextEditor = ({ color, value, setValue }: TextEditorProps) => {
  return (
   ..
      <ReactQuill
        formats={formats}  // React-Quill 커스텀
        modules={modules}
        theme="snow"
        value={value}  //prop으로 가져온 입력값
        onChange={setValue}
      />
  );
};

 ```
<br><br>

> ## [html-react-parser](https://www.npmjs.com/package/html-react-parser)
  HTML string을 React Element로 변환해 주는 라이브러리 입니다.
  <br>
  React-Quill 텍스터 에디터에서, HTML요소를 포함한 데이터를 일반적인 텍스트로 바꿔주기 위해 사용했습니다.

  ```javascript 
  import parse from "html-react-parser";

  // html-react-parser 예시1
  parse ( '<p>Hello, World!</p>' ) ;  // React.createElement('p', {}, 'Hello, World!')

  // html-react-parser 예시2
  <div className="readNote__content">{parse(note.content)}</div>  

  /*ex) 노트에 "Text" 입력시 , 
  BEFORE : <p>Text<p>
  AFTER : Text                */

  ```

> ## toastify

> ## uuid

> ## dayjs

<br>

