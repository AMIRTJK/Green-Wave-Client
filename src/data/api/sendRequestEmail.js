// jsharipovamir@gmail.com:
// re_YMWcQ5v1_3LdUaGdaiDmcSVhv2QG7PXG2

// mavjisabz@gmail.com:
// re_giQh3bsx_AZHp6RRZoB2nWjeLLXVHQNsm

// http://localhost:4000/api/email
// https://green-wave-server.onrender.com

export const sendRequestEmail = async (formData) => {
  try {
    const response = await fetch(
      "https://green-wave-server.onrender.com/api/email",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        credentials: "include", // добавляем для включения учетных данных
      }
    );

    if (!response.ok) {
      throw new Error("Ошибка при отправке заявки.");
    }
  } catch (error) {
    console.error("Ошибка при отправке заявки:", error);
    throw error;
  }
};
