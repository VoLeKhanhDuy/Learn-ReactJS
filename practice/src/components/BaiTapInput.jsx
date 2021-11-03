import { useState } from "react";

const gifts = ["CPU i9", "RAM 32GB", "RGB Keyboard"];

function BaiTapInput() {
  const [gift, setGift] = useState();

  const randomGift = () => {
    const index = Math.floor(Math.random() * gifts.length);

    setGift(gifts[index]);
  };

  return (
    <>
      {/* 
        Nếu mà có gift thì hiển thị gift
        còn không có gift thì hiển thị chuỗi
      */}
      <h1>{gift || "Chưa có phần thưởng"}</h1>
      <button onClick={randomGift}>Lấy thưởng</button>
    </>
  );
}

export default BaiTapInput;
