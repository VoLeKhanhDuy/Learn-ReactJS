import React, { useState } from "react";

function InputForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleChangeName = () => {
    console.log({ name, email });
  };

  console.log(name);

  return (
    <div>
      <div>Tên thay đổi: {name}</div>
      <div>Email: {email}</div>
      <input
        value={name}
        type="text"
        placeholder="Điền tên"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        value={email}
        type="email"
        placeholder="Điền email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleChangeName}>Đổi tên</button>
    </div>
  );
}

export default InputForm;
