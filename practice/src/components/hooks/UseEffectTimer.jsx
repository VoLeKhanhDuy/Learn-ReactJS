import React, { useEffect, useState } from "react";

function UseEffectTimer() {
  const [countDown, setCountDown] = useState(180);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCountDown((prevState) => prevState - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div>
      <h1>{countDown}</h1>
    </div>
  );
}

export default UseEffectTimer;
