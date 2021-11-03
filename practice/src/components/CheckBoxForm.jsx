import React, { useState } from "react";

const courses = [
  {
    id: 1,
    name: "html, css",
  },
  {
    id: 2,
    name: "javascript",
  },
  {
    id: 3,
    name: "reactjs",
  },
];

function CheckBoxForm() {
  const [checked, setChecked] = useState([]);

  const handleCheck = (id) => {
    setChecked((prev) => {
      const isCheck = checked.includes(id);
      if (isCheck) {
        // uncheck
        return checked.filter((item) => item !== id); // lọc để lấy ra những item khác id truyền vào
      } else {
        // check
        return [...prev, id];
      }
    });
  };

  const handleSubmit = () => {
    console.log({ ids: checked });
  };

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            onChange={() => handleCheck(course.id)}
            checked={checked.includes(course.id)}
          />
          {course.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit CheckBox</button>
    </div>
  );
}

export default CheckBoxForm;
