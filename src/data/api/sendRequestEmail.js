// re_YMWcQ5v1_3LdUaGdaiDmcSVhv2QG7PXG2
// http://localhost:4000/api/email

export const sendRequestEmail = async (formData) => {
  try {
    const response = await fetch("https://green-wave.onrender.com/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error("Ошибка при отправке заявки.");
    }
  } catch (error) {
    console.error("Ошибка при отправке заявки:", error);
    throw error;
  }
};
