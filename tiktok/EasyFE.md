## Cú pháp thông dụng

- Render dữ liệu: `{ }`
- Sự kiện click: `onClick={() => function()}`
- Gắn class theo điều kiện:
  - Cài thêm package là `classnames`: `npm i --save classnames`
  - Import `import classnames from 'classname'`
  - Viết tại thẻ cần gắn class: `className={classnames({completed: todo.status === 'completed'})}`
- Lặp qua mảng: `{todoList.map(todo => (<li>{todo.title}</li>))}`
- CSS inline: `style={{ backgroundColor: 'red' }}`

## Props

- Là dữ liệu được truyền từ component cha xuống component con
- Props là thuộc tính READ-ONLY.
- Component con không thay đổi được. Muốn thay đổi phải nhờ component cha

```js
function ColorBox(props) {
  const { color } = props; // props là một object

  return <div className="box" style={{ backgroundColor: color }}></div>;
}
```

- Nên dùng `propTypes` để kiểm tra loại dữ liệu của `props` để tránh việc render sai

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

## State

- State được tạo ra và quản lý bởi component hiện tại.
- Được dùng cho những dữ liệu có khả năng sẽ thay đổi.
- Component sẽ reRender lại khi props hay state thay đổi

```js
function ColorBox() {
  // ban đầu color có giá trị mặc định là white ~ (const color = white)
  const [color, setColor] = useState("white");

  return (
    <div>
      {color}

      <button onClick={() => setColor("black")}>Change to black</button>
      <button onClick={() => setColor("white")}>Change to white</button>
    </div>
  );
}
```

## Life cycle

- Chỉ có trong Class Component
- Gồm 3 giai đoạn:
  - Được tạo ra - `Mounting` (constructor -> render -> componentDidMount)
  - Thay đổi - `Updating` (render -> componentDidUpdate)
    - Render khi `props`, `state` có sự thay đổi
  - Hủy bỏ - `Unmounting` (componentWillUnmount)

### Constructor

- Nhớ có `super(props)`
- Sử dụng để khai báo state
- Sử dụng để khai báo thuộc tính

### ComponentDidMount

- Chạy đúng 1 lần đầu tiên
- Chạy sau hàm render
- Thường sử dụng để gọi API, xử lý dữ liệu, thay đổi state

```
Chạy constructor trước -> render lần đầu -> componentDiaMount()
```

### ComponentWillUnmount

- Chạy đúng 1 lần
- Clear timeout hoặc interval nếu có dùng
- Reset dữ liệu trên redux nếu cần thiết

### ComponentDidUpdate

- Quá trình update diễn ra mỗi khi có `props`, `state` thay đổi
- Hạn chế dùng
- Không nên sử dụng setState trong đây

## React Hooks

1. React hooks là gì?

- Feature mới được add vào từ version 16.8 của React
- Giúp mình có thể dung state, life cycle và các feature khác của React mà không cần dùng tới class

2. Khi nào sử dụng hooks?

- Khi muốn dùng state, life cycle,... mà không thích làm việc với class (OOP)
- Hooks chỉ sử dụng cho functional component, không dùng cho class

### useState()

- Là một hook cơ bản
- Giúp sử dụng state trong functional component
- useState(giá_trị_khởi_tạo) là một hàm trả về cái mảng 2 phần tử
- Cú pháp: `const [name, setName] = useState('Duy');`

### useEffect()

1. Side Effect

- Gọi API lấy dữ liệu - không cần clean up
- Tương tác với DOM - không cần clean up
- Subscriptions - cần clean up
- setTimeout, setInterval - cần clean up

2. useEffect()

- Là một hook cơ bản trong React hooks
- Sử dung cho side effect
- Mỗi useEffect gồm 2 phần: side effect và clean up
- Được thực thi sau mỗi lần render
- Được thực thi ít nhất 1 lần sau lần render đầu tiên
- Những lần render sau, chỉ được thực thi nếu có dependencies thay đổi

`function useEffect(callback, dependencies) {}`

VD:

```js
function App() {
  const [color, setColor] = useState("black");

  useEffect(() => {
    // Code ở đây gọi là SideEffect

    return () => {
      // Code ở đây gọi là CleanUp
    };
  }, []);

  return <h1>Xin chào</h1>;
}
```

Cách hoạt động:

MOUNTING

- Trong lần render đầu tiên thì sẽ render `<h1>Xin chào</h1>`
- Sau đó mới tới `useEffect()` nhưng chỉ chạy phần `<h1>SideEffect</h1>` còn phần `<h1>CleanUp</h1>` thì không chạy

UPDATING
Tiếp đến lần render tiếp theo ví dụ ta có update một cái gì đó thì:

- Chạy render trước là `<h1>Xin chào</h1>`
- Sau đó run phần `<h1>CleanUp</h1>` trong `useEffect()` nếu tham số thứ 2 (dependencies) trong hàm có sự thay đổi
- Sau đó mới chạy lại `<h1>SideEffect</h1>` lần thứ 2 trong `useEffect()`

UNMOUNTING

- Chạy phần `<h1>CleanUp</h1>` trong `useEffect()`

3. Dùng useEffect() kèm điều kiện

Ta có 3 trường hợp:

- Trường hợp 1: Không có khai báo `dependencies`
- Ý nghĩa:
  Nó sẽ luôn luôn được thực hiện
  Được chạy sau mỗi lần render

```js
useEffect(() => {
  return () => {};
});
```

- Trường hợp 2: `dependencies` này là emty ~ mảng rỗng
- Ý nghĩa:
  Chạy đúng 1 lần sau lần render đầu tiên

```js
useEffect(() => {
  return () => {};
}, []);
```

- Trường hợp 3: `dependencies` này là có dữ liệu
- Ý nghĩa:
  Render lần đầu tiên
  Những lần render sau sẽ phụ thuộc vào dữ liệu truyền vào ở đây là `filters`
  Nếu `filters` này thay đổi thì `useEffect()` sẽ được gọi

```js
const [filters, setFilters] = useState();
useEffect(() => {
  return () => {};
}, [filters]);
```

### Custom Hook

- Là hook dó mình tự định nghĩa
- Tách phần logic ra khỏi UI (như kiểu viết function xử lý riêng)

### useCallback()

- Là một react hooks giúp tạo ra một `memoized callback` và chỉ tạo ra callback mới khi `dependencies` thay đổi
- Nhận vào 2 tham số: `function` và `dependencies`
- Trả về `memoized callback`
- Chỉ tạo ra `function mới` khi `dependences` thay đổi
- Nếu dùng `emty dependences` thì không bao giờ tạo ra function mới
- Nên dùng cho: đồ thị, biểu đồ, animations, những component render nặng

### useMemo()

- Là một react hooks giúp tạo ra một `memoized value` và tính toán `value` mới khi `dependencies` thay đổi
- Nhận vào 2 tham số: `function` và `dependencies`
- Trả về `memoized value`
- Chỉ tính toán `value mới` khi `dependences` thay đổi
- Nếu dùng `emty dependence`s thì không bao giờ tính toán lại value mới
- Nên dùng cho: đồ thị, biểu đồ, animations, những component render nặng

## Routing

- Cài đặt: `npm i --save react-router-dom`
- Các component:

```
Component     |                     Mô tả
--------------------------------------------------------------------------
Router        | Component bao bọc tất cả component khác của routing
Route         | Render component tương ứng khi vào đường dẫn tương ứng
Switch        | Chỉ render route đầu tiên match path
Redirect      | Redirect từ path này sang path khác
Link          | Đi tới path tương ứng
NavLink       | Giống như Link nhưng có thêm activeClassName (dùng cho menu)
```

1. Cách sử dụng

- Đặt `BrowserRouter`

```js
React.render(
  <Reac.StricMode>
    <BrowserRouter>
      <App>
    </BrowserRouter>
  </Reac.StricMode>,
  document.getElementById("root");
);
```

- Trong file App.js

VD:

```js
<Route path="/todos" component={TodoList} />
<Route path="/home" component={Home} />
```

2. Link

```js
<Link to="/todos">Đi tới Component Todo</Link>
<Link to="/home">Đi tới Component Home</Link>
```

3. NavLink

- Thường dùng cho menu
- Có giá trị mặc định là `class="active"`

```js
<NavLink to="/todos" activeClassName="active">Đi tới Component Todo</NavLink>
<NavLink to="/home" activeClassName="active">Đi tới Component Home</NavLink>
```

4. Switch

- Check thằng nào match với component đó thì sẽ dừng lại
- Nếu không có Switch thì miễn là có <Route> được tạo thì nó sẽ tạo ra component

```js
<Switch>
  <Route path="/" component={TodoList} />
  <Route path="/todo" component={TodoList} />
  <Route path="/todos" component={TodoList} />
  <Route path="/home" component={Home} />
</Switch>
```

5. Route matching

- Mặc định `exact = false`, lúc đó Route sẽ match khi URL `start with path`
- Khi `exact = true`, lúc đó Route sẽ match khi URL = PATH
- Thường dùng `exact = false` cho routing cha

```js
<Switch>
  <Route path="/" component={HomePage} exact />
  <Route path="/todos" component={TodoList} />
</Switch>
```

6. Redirect

- Redirect từ path này sang path khác

```js
<Switch>
  <Redirect from="/home" to="/" exact />
  <Redirect from="/post-list/:postId" to="/posts/:postId" />
</Switch>
```

7. Routing hooks

- useHistory - trả về history instance, dùng để navigate (dùng để di chuyển trang khác)
- useLocation - trả về location object của URL hiện tại (dùng để xử lý URL params)
- useParams - trả về path params object của URL hiện tại (dùng khi muốn xử lý path params)
- useRouteMatch - trả về match object của URL hiện tại (khi làm nested routing)

Phân biệt path params với URL params

- Path params
  - Route có path: `/todos/:todoId`
  - User visits: `/todos/123` -> Path params là `{ todoId: '123' }`
- URL params:
  - User vào đường dẫn: `/todos?page=1&size=10` -> URL params là phần sau dấu ?

8. Nested routing
   VD:
   Tại file App.js

```js
<Route path="/todo" component={TodoFeature} />
```

Tại component TodoFeature

```js
function TodoFeature() {
  const match = useRouteMatch(); // nested routing
  // Khi path="/todo" thay đổi thì tự đông component TodoFeature sẽ thay đổi theo
  return (
    <div>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} />
      </Switch>
    </div>
  );
}
```

## Redux

- Là thư viện quản lý State
- Sử dụng kiến trúc uni-directional data flow (là đi 1 chiều)
- Chỉ có 1 store duy nhất
- Sử dụng khi cần chia sẻ dữ liệu ở các component khác
