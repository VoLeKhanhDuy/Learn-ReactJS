# ReactJS-F8

## Ôn tập ES6+

### Arrow Function

- Arrow function không có `context` của nó (this).
- Arrow function không có `Constructor`.
- VD:

```js
const logger_1 = (log) => {
  console.log(log);
};

const logger_2 = (log) => console.log(log);

const sum = (a, b) => a + b;
```

### JS Modules

- Bốc tách phần xử lý ra 1 file riêng.
- Import
- Export
  - 1 module chỉ `export default` được 1 cái.
  - `export` bình thường thì bao nhiêu cũng được.
  - Có thể sử dụng Destructuring để lấy các `export` bình thường.
  - `import * as constants from './constants.js`: import tất cả `export` trong file `constants.js` nó `as` sang Alias thì lúc này `constants` sẽ là một object.

### Destructuring

### Spread Operator

## Các loại toán tử hay dùng

1. **`v1 || v2`** -> Nếu mà có `v1` thì hiển thị `v1`, nếu không có `v1` thì hiển thị `v2`

2. **`v1 ?? v2`** -> Nếu `v1` là `null` hoặc `undefined` thì sẽ lấy `v2`

3. **`v1 !! v2`** -> Chuyển đổi `Object` sang `boolean`, nếu là `falsey` thì sẽ là `false`, nếu không thì là `true`

## React, React DOM

### document.createElement()

- Dùng để tạo 1 element
- Bản chất việc render

```html
<div id="root"></div>
```

```js
const root = document.getElementById("#root");
const h1 = document.createElement("h1");

h1.innerText = "Say Hello";

root.appendChild(h1); // thêm thằng con vào
/* Kết quả
  <div id="root">
    <h1>Say Hello</h1>
  </div>
*/
```

### NPM (Node Package Manager)

- Kiểm tra version ReactJS: `React.version`
- Gói quản lý thư viện Javascript
- CDN là một mạng lưới các máy chủ phân bố rộn rãi trên toàn thế giới. Khi một file được up lên tại một máy chủ CDN tại một vị trí bất kỳ thì nó sẽ có cơ chế đồng bộ sang hết toàn bộ máy chủ còn lại trên toàn thế giới.

```js
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>
```

> Lưu ý: API trong thư viện là một methods

### React.createElement()

- `React.createElement(type, props, children)`
  - `type`: kiểu element (h1, h2, div, ul,...)
  - `props`: object gồm các attribute của element
  - `children` ~ `props`: Nội dung bên trong thẻ tag. Nó giống như innerText

VD:

```js
const ulReact = React.createElement(
  "ul",
  {}, // or null
  React.createElement("li", null, "Javascript"),
  React.createElement("li", null, "ReactJS")
);
```

Kết quả:

```html
<ul>
  <li>Javascript</li>
  <li>ReactJS</li>
</ul>
```

VD2:

```js
const divReact = React.createElement(
  'div',
  {
    className="post-item"
  },
  React.createElement("h2", {title: "Học React JS"}, "Học ReactJS"),
  React.createElement("p", {}, "Học ReactJS từ cơ bản tới nâng cao"),
)
```

Kết quả:

```html
<div class="post-item">
  <h2 title="Học React JS">Học ReactJS</h2>
  <p>Học ReactJS từ cơ bản tới nâng cao</p>
</div>
```

### React-DOM

- Là một thư viện khác
- Render react element ra giao diện
- Là cầu nối giữ React và DOM
- React-Native: là cầu nối giữa React và Native

VD:

```html
<div id="root"></div>
```

```js
const divReact = React.createElement(
  'div',
  {
    className="post-item"
  },
  React.createElement("h2", {title: "Học React JS"}, "Học ReactJS"),
  React.createElement("p", {}, "Học ReactJS từ cơ bản tới nâng cao"),
)
// Get root element
const root = document.getElementById("root");

// React-DOM -> Render UI
ReactDOM.render(divReact, root); // render divReacr vào root
```

## JSX là gì?

- JSX: Javascript XML
- XML: là cú pháp mở rộng của HTML
- Babel: là một thư viện Javscript chuyên dùng để phân tích cú pháp, chuyển đổi cú pháp JSX -> JS
- Muốn viết Javascript vào JSX thì sử dụng: `{ }`
- Muốn viết một Object vào JSX thì sử dụng: `{{ }}`

## Props

- Là dữ liệu được truyền từ component cha xuống component con
- Props là thuộc tính READ-ONLY.
- Component con không thay đổi được. Muốn thay đổi phải nhờ component cha
- `props` là một object

### React Element (Các thẻ giống như HTML)

- Sử dụng `props` giống như attribute của thẻ html

### React Component (Component)

- Sử dụng `props` giống như đối số cho Component
- `props` có thể là bất kỳ kiểu dữ liệu nào
- Sử dụng destructoring

Ví dụ:

```js
function ColorBox(props) {
  const { color } = props; // props là một object

  return <div className="box" style={{ backgroundColor: color }}></div>;
}
```

Nên dùng `propTypes` để kiểm tra loại dữ liệu của `props` để tránh việc render sai

```js
import PropTypes from "prop-types";

function ColorBox(props) {
  const { color } = props; // props là một object

  return <div className="box" style={{ backgroundColor: color }}></div>;
}

ColorBox.propTypes = {
  color: PropTypes.string.isRequired, // kiểu dữ liệu là string, isRequired: bắt buộc truyền
  rounded: PropTypes.bool,
};

// đối với dạng prop không có isRequired thì nên có 1 giá trị mặc định
ColorBox.defaultProps = {
  rounded: true,
};
```

## DOM Events

```js
<button onClick={() => console.log(Math.random())}>Click me!</button>
```

## Create React App

### Node JS là gì?

- NodeJS là một Javascript Runtime (khi cài lên máy tính thì sẽ tạo ra môi trường độc lập thực thi code Javascript trong đó)
- Bên trong NodeJS sử dung Chrome V8 Javascript Engine

### Create React App

Để tạo 1 dự án React: `npx create-react-app project_name`

### Folder Structure

public:

- Có thể truy cập được các file trong public thông qua trình duyệt
- Khi chạy dự án thì nó sẽ trỏ thẳng đến thư mục public -> index.html

src:

- reportWebVitals.js: file này để gửi lên google để cung cấp công cụ tìm kiếm. Tối ưu trải nghiệm người dùng

## Hooks

Hook là những hàm được viết sẵn trong ReactJS để làm các nhiệm vụ khác nhau

Hook được thêm vào React từ phiên bản 16.8

Giúp mình có thể dùng state, life cycle và các feature khác của React mà không cần dùng tới class

> Chỉ dùng cho function component

**1. useState**

Giúp đơn giản hóa việc thể hiện trang thái của dữ liệu ra giao diện người dùng.
Dùng khi muốn dữ liệu thay đổi thì giao diện tự động cập nhật

```js
import { useState } from "react";

function Component() {
  const [state, setState] = useState(initState); // initState: giá trị khởi tạo
}
```

Lưu ý:

> Component sẽ được render lại sau khi `setState`
>
> setState với Callback
>
> > ```js
> > // setState sẽ nhận vào 1 callback.
> > // callback này sẽ trả lại đối số là giá trị hiện tại của state
> > // prevState: là giá trị state trước đó
> > setState((prevState) => prevState + 1); // VD: 1 => 1 + 1 => state = 2
> > ```
>
> Initial State chỉ dùng cho lần đầu
>
> Nếu `initState` là một hàm thì sẽ lấy giá trị **return** của hàm đó làm `initState`
>
> Để không bị gọi lại giá trị khởi tạo thì ta sẽ biến `initState` thành một hàm
>
> > VD:
> >
> > ```js
> > import { useState } from "react";
> >
> > const orders = [100, 100, 500];
> >
> > function Component() {
> >   const [state, setState] = useState(() => {
> >     const total = orders.reduce((total, cur) => total + cur);
> >
> >     return total;
> >   });
> > }
> > ```
>
> Set State là **thay thế `state` bằng giá trị mới**

**2. useEffect**

<em>Dùng khi:</em> muốn thực hiện các side effects

> side effects: khi có tác động xảy ra thì dữ liệu sẽ thay đổi

`mounted`: thời điểm đưa 1 component vào sử dụng

`unmounted`: thời điểm không còn sử dụng component đó nữa

<em>Dùng để:</em>

    1.  Update DOM
    2.  Call API
    3.  Listen DOM events
        > - Scroll
        > - Resize
    4.  Cleanup
        > - Remove listener / Unsubscribe
        > - Clear timer

<em>Các dạng:</em>

1.  `useEffect(callback)`

    - Gọi callback mỗi khi component re-render
    - Gọi callback sau khi component thêm element vào DOM

      > Nghĩa là thực thi đoạn trong `return()` tạo element thêm vào trong DOM thì sau đó mới gọi `useEffect(callback)`
      >
      > VD:
      >
      > > ```js
      > > function Content() {
      > >   useEffect(() => {
      > >     console.log("Run callback"); // Chạy xong đoạn dưới thì chạy code trong này
      > >   });
      > >
      > >   return (
      > >     <div>
      > >       <input />
      > >       {console.log("Render element vào DOM")} // Đoạn này sẽ chạy trước
      > >     </div>
      > >   );
      > > }
      > > ```

    - Ít dùng vì mỗi khi đc gọi thì nó phải render lại

2.  `useEffect(callback, [])`

    - Chỉ gọi callback 1 lần duy nhất sau khi component mounted
    - Sử dụng cho khi muốn thực hiện 1 logic nào đó nhưng chỉ gọi 1 lần khi component được mounted (Gọi API)

3.  `useEffect(callback, [dependencies])`

    - dependencies: là 1 cái biến lưu trữ dữ liệu (từ props, useState,...)
    - Callback sẽ được gọi lại mỗi khi dependencies thay đổi

**Lý thuyết chung cho các dạng trên**

1. CALLBACK SẼ LUÔN ĐƯỢC GỌI LẠI SAU KHI COMPONENT MOUNTED

   VD:

   > ```js
   > useEffect(() => {
   >   // Code trong đây gọi là callback
   >   // Nghĩa là mỗi khi component được gọi thì code trong đây sẽ được chạy
   > });
   > ```

2. CLEANUP FUNCTION LUÔN ĐƯỢC GỌI TRƯỚC KHI COMPONENT UNMOUNTED

   VD:

   > ```js
   > // Đây là hàm Cleanup Function
   > return () => {
   >   window.removeEventListener("scroll", handleScroll);
   > };
   > ```

3. CLEANUP FUNCTION LUÔN ĐƯỢC GỌI TRƯỚC KHI CALLBACK ĐƯỢC GỌI (TRỪ LẦN MOUNTED)

**3. useRef()**

Lưu giá trị của một tham chiếu bên ngoài function component. Nghĩa là nó tự đem cái biến đó ra ngoài hàm

`useRef()`: là một hàm và nhận một tham số là `initialValue`. Chỉ sử dụng `initialValue` trong lần đầu tiên khi component được mounted

`useRef()`: luôn trả về 1 object có properties là `current`

Dùng để:

> Biết được giá trị hiện tại và giá trị render trước đó
>
> Stop thời gian
>
> ...

**4. memo() HOC**

memo() được gọi là: Higher Order Component (HOC) - memo KHÔNG PHẢI LÀ MỘT HOOK

Giúp ghi nhớ lại các props của một component để quyết định có render lại component đó hay không - tránh bị render không cần thiết

**5. useCallback()**

Giúp tránh tạo ra những hàm mới không cần thiết

`useCallback()` nhận 2 đối số

- Đối số thứ 1 là `callback`
- Đối số thứ 2 là 1 mảng chứa các despendencies (tương tự như useEffect)

<em>Tóm lại:</em>

Trong thực tế thì một component có thể nhận rất nhiều `props`, trong đó có nhiều `props` là kiểu dữ liệu `nguyên thủy` và cũng có nhiều `props` có kiểu dữ liệu `tham chiếu` (object, array, function). Nếu đã xác định sử dụng `React.memo` để tránh component con bị render không cần thiết thì những cái `function` truyền vào phải sử dụng `useCallback` hết để tránh bị render không cần thiết

Ví dụ:

> Tại component cha:
>
> > ```js
> > import { useCallback, useState } from "react";
> > import Content from "./Content";
> >
> > function App() {
> >   const [count, setCount] = useState(0);
> >
> >   const handleIncrease = useCallback(() => {
> >     setCount((prev) => prev + 1);
> >   }, []);
> >
> >   return (
> >     <div>
> >       <Content onIncrease={handleIncrease} />
> >       <h1>{count}</h1>
> >     </div>
> >   );
> > }
> >
> > export default App;
> > ```
>
> Tại component con:
>
> > ```js
> > import React, { memo } from "react";
> >
> > function Content({ onIncrease }) {
> >   console.log("re-render");
> >   return (
> >     <div>
> >       <button onClick={onIncrease}>Click!</button>
> >     </div>
> >   );
> > }
> >
> > export default memo(Content);
> > ```

**6. useMemo()**

Dùng để tránh thực hiện lại 1 logic nào đó không cần thiết

-> Xem file UseMemo trong project practice

**7. useReducer()**

Chức nắng giống như `useState()` nhưng thường dùng để xử lý các state phức tạp hơn

-> Xem file UseReducer, folder UseeducerTodo, TodoAppUseReducer trong project practice

**8. useContext()**

Context: giúp đơn giản hóa việc truyền dữ liệu từ component cha sang các component con mà không cần dùng đến `props` (truyền dữ liệu không cần component trung gian)

<em>1. Create contex:</em>
<em>2. Provider:</em> cung cấp dữ liệu
<em>3. Consumer:</em> nhận dữ liệu

## CSS, CSS module, classNames

**1. Sử dụng CSS**

- <em>CSS inline:</em> `style={{ margin: '0 32px' }}`

- Tạo 1 file để viết CSS riêng (nhớ import)

VD:

```shell
  src
  |__components
     |__Heading
        |__index.jsx (import './heading.css')
        |__heading.css
```

- Khi build CSS lên môi trường product thì toàn bộ các file css sẽ được gộp lại thành 1 file (file này là file min)

**2. CSS module**

VD:

```shell
  src
  |__components
     |__Heading
        |__index.jsx - (import styles from './heading.module.css')
        |__heading.module.css
```

Trong file `index.jsx` ta sử dụng:

```js
<h1 className={styles.heading}>Đây là heading</h1>
```

<em>\* Lưu ý:</em>

- Đặt tên class bằng kiểu camelCase

**3. Thư viện clsx và classnames**

- Cài đặt `clsx`: `npm i clsx`

- `import clsx from 'clsx'`

```js
<h1 className={clsx(styles.btn, styles.active)}>Heading</h1>
```

- style theo logic

```js
<h1
  className={clsx(styles.btn, {
    [styles.active]: false,
  })}
>
  Heading
</h1>
```
