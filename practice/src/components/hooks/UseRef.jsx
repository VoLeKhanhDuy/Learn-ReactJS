import React, { useEffect, useRef } from "react";

// Lưu giá trị của một tham chiếu bên ngoài function component
// Nghĩa là nó tự đem cái biến đó ra ngoài hàm =))
// Luôn trả về 1 object có properties là `current`

function UseRef() {
  const [count, setCount] = useRef(60);

  const timerId = useRef();
  const prevCount = useRef();

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  const handleStart = () => {
    timerId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerId.current);
  };

  console.log(
    "Giá trị hiện tại: ",
    count,
    ", Giá trị trước đó: ",
    prevCount.current
  );

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default UseRef;
