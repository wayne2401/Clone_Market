const form = document.getElementById("write-form");

const handleSubmitForm = async (event) => {
  event.preventDefault();
  const main = new FormData(form);
  main.append("insertAt", new Date().getTime());
  try {
    const formData = new FormData(form);
    const res = await fetch("/items", {
      method: "POST",
      body: main,
    });
    const data = await res.json();
    if (data === "200") window.location.pathname = "/";
  } catch (e) {
    console.error("이미지 업로드에 실패했습니다.");
  }
};

form.addEventListener("submit", handleSubmitForm);

//56강 중간정도
