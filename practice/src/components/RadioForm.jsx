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

function RadioForm() {
  const [checked, setChecked] = useState();

  console.log(checked);

  const handleSubmit = () => {
    console.log({ id: checked });
  };

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            onChange={() => setChecked(course.id)}
            checked={checked === course.id}
          />
          {course.name}
        </div>
      ))}
      <button type="submit" onClick={handleSubmit}>
        Submit Radio
      </button>
    </div>
  );
}

export default RadioForm;
