import React, { useState } from "react";
import { useEffect } from "react";

/*
  Dùng khi: muốn thực hiện các side effects
    side effects: khi có tác động xảy ra thì dữ liệu sẽ thay đổi
  ------------------------------------
  Dùng để:
  1. Update DOM
  2. Call API
  3. Listen DOM events
      - Scroll
      - Resize
  4. Cleanup
      - Remove listener / Unsubscribe
      - Clear timer
  ------------------------------------
  Các dạng:
  1. useEffect(callback)
    - Gọi callback mỗi khi component re-render 
    - Gọi callback
    - Ít dùng vì mỗi khi đc gọi thì nó phải render lại
  2. useEffect(callback, [])
    - Chỉ gọi callback 1 lần duy nhất sau khi component mounted
    - Sử dụng cho khi muốn thực hiện 1 logic nào đó nhưng chỉ gọi 1 lần khi component được mounted (Gọi API)
  3. useEffect(callback, [dependencies])
    - dependencies: xem như là 1 cái biến lưu trữ dữ liệu
    - Callback sẽ được gọi lại mỗi khi dependencies thay đổi

  * Lý thuyết chung
  1. Callback luôn được gọi sau khi component mounted
  2. Cleanup Function luôn được gọi trước khi component unmounted
*/

const tabs = ["posts", "comments", "albums"];

function UseEffect() {
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGotoTop, setShowGoToTop] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]); // khi type thay đổi thì hàm useEffect sẽ thay chạy lại

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        // Show button
        setShowGoToTop(true);
      } else {
        // Hide button
        setShowGoToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Đây là hàm Cleanup Function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleGoToTop = () => {};

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setType(tab)}
          style={type === tab ? { color: "#fff", backgroundColor: "#333" } : {}}
        >
          {tab}
        </button>
      ))}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <div>
        Show width window when resize
        <br />
        {width}
      </div>

      {showGotoTop && (
        <button
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
          }}
          onClick={handleGoToTop}
        >
          Go to Top
        </button>
      )}
    </div>
  );
}

export default UseEffect;
