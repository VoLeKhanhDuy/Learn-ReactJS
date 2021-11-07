import React, { useState, useReducer } from 'react';

// Nếu sử dụng useState
// 1. Init state: 0
// 2. Actions: Up(state+1) Down(state-1)

// Nếu sử dụng useReducer
// 1. Init state: 0
// 2. Actions: Up(state+1) Down(state-1)
// 3. Tạo Reducer
// 4. Dispatch

// ----------------

// 1. Tạo init state
const initState = 0;

// 2. Actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';

// 3. Tạo reducer
// là một hàm nhận vào state và action, dựa vào action để quyết định trả ra state mới tùy logic
// return ra phải cùng kiểu dữ liệu với initState
const reducer = (state, action) => {
  switch(action) {
    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error('Invalid action');
  }
}


function UseReducer() {
  /*
    Nhận vào 2 đối số:
      - reducer
      - initState
    Hoạt động:
      - Khi component lần đầu chạy thì sẽ chạy useReducer và nhận reducer tạm để đó chưa chạy tới
      - Nó sẽ nhận giá trị khởi tạo initState và return về 1 array [count, ]
        count lúc này sẽ nhận giá trị khởi tạo luôn là sẽ = 0
      - dispatch: dùng để kích hoạt một action

      * Khi bấm dispatch thì:
          Khi gọi hàm dispatch thì sẽ truyền vào 1 action sau đó sẽ gọi hàm reducer.
          nó lấy state hiện tại gắn vào state (nghĩa là lấy initState gắn vào state của hàm reducer).
          và nó sẽ lấy DOWN_ACTION truyền vào tham số action của hàm reducer
  */
  const [count, dispatch] = useReducer(reducer, initState);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
      <button onClick={() => dispatch(UP_ACTION)}>Up</button>
    </div>
  );
}

export default UseReducer;