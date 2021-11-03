import { useState } from "react";

function BaiTapUseState() {
  const [count, setCount] = useState(1);

  const [profile, setProfile] = useState({
    name: "Duy",
    age: "11",
  });

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleUpdateProfile = () => {
    setProfile({ ...profile, address: "Vung Liem" });
  };

  return (
    <>
      {count}
      <button onClick={handleIncrease}>Increase</button>
      <br />
      {JSON.stringify(profile)}
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </>
  );
}

export default BaiTapUseState;
