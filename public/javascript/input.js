const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const result = document.getElementById("result");

function input_btn() {
  console.log("aa : " + email.value);
  result.textContent = email.value;

  //생성할때 전달 오브젝트
  var obj = {
    Tem_A: 1,
    Tem_W: 2,
    Hum: 3,
    PH: 4,
    EC: 5,
    Light: 6,
    Q: 7,
  };

  //fetch 로 nodejs Post 값 전달.
  fetch("https://thorough-wildcat-conversely.ngrok-free.app/set_post", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
}

// 입력값 확인 및 처리

// (선택사항) 서버로 데이터 전송
