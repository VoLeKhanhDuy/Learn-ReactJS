import React, { useMemo, useRef, useState } from "react";

function UseMemo() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const nameRef = useRef();

  const handleSubmit = () => {
    setProducts([
      ...products,
      {
        name,
        price: +price,
      },
    ]);

    setName("");
    setPrice("");

    nameRef.current.focus();
  };

  /*
    đoạn này có thể sẽ bị tính toán lại một cách không cần thiết
    khi nhập vào input thì hàm này vẫn được gọi mặc dù chưa cần tính toán lại
  */
  // const total = products.reduce((result, prod) => {
  //   console.log("Bị tính toán lại!!");
  //   return result + prod.price;
  // }, 0);

  // Cách khắc phục là sẽ sử dụng useMemo
  const total = useMemo(() => {
    const result = products.reduce((result, prod) => {
      return result + prod.price;
    }, 0);

    return result;
  }, [products]); // despendencies giống useEffect

  return (
    <div>
      <input
        ref={nameRef}
        type="text"
        value={name}
        placeholder="Nhập tên"
        onChange={(e) => e.target.value}
      />
      <br />
      <input
        type="text"
        value={price}
        placeholder="Nhập giá"
        onChange={(e) => e.target.value}
      />
      <br />
      <button onClick={handleSubmit}>Thêm</button>
      <br />
      Total: {total}
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemo;
