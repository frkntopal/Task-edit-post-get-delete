import { useState } from "react";

function TaskCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  // İnput'un içerisine yazılanları kontrol etmek amacıyla useState hooks'unu kullanarak onChange'e bu fonksiyonu yolluyoruz
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(title, taskDesc);
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div className="task-create">
      <h3>Lütfen Task Ekleyiniz!</h3>
      <form className="task-form">
        <label className="task-label">Başlık</label>
        <input value={title} onChange={handleChange} className="task-input" />
        <label className="task-label">Task Giriniz</label>
        <textarea
          value={taskDesc}
          onChange={handleTaskChange}
          className="task-input"
          rows={5}
        ></textarea>
        <button className="btn-create" onClick={handleSubmit}>
          Oluştur
        </button>
      </form>
    </div>
  );
}

export default TaskCreate;
