import React, { useState } from "react";

import { sendRequestEmail } from "../data/api/sendRequestEmail";

const FormRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    age: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendRequestEmail(formData);
      alert("Заявка отправлена успешно!");
    } catch (error) {
      alert("Ошибка при отправке заявки.");
    }
  };
  return (
    <form onSubmit={handleSubmit} action="" className="form-request">
      <p className="title">Отправить заявку</p>
      <input
        type="text"
        name="name"
        placeholder="ФИО"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Номер телефона"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        type="text"
        name="age"
        placeholder="Возраст"
        value={formData.age}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="E-mail адрес"
        value={formData.email}
        onChange={handleChange}
      />
      <button type="submit">Отправить</button>
    </form>
  );
};

export default FormRequest;
