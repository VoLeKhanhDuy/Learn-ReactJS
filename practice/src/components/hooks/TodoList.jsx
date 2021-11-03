import React, { useState } from "react";

function TodoList() {
  const [jobs, setJobs] = useState(() => {
    // Vì localStorage lưu ở dạng chuỗi nên chúng ta phải chuyển sang mảng để làm giá trị mặc định cho jobs
    const storageJobs = JSON.parse(localStorage.getItem("jobs"));

    // ??: trường hợp thằng trước null hoặc undefined thì sẽ lấy thằng sau
    return storageJobs ?? [];
  });

  const [job, setJob] = useState();

  const handleSubmit = () => {
    setJobs((prev) => {
      const newJobs = [...prev, job];

      const jsonJobs = JSON.stringify(newJobs); // chuyển mảng Jobs thành chuỗi
      localStorage.setItem("jobs", jsonJobs);

      return newJobs;
    });
    setJob("");
  };

  return (
    <div>
      <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>ADD</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
