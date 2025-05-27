document.addEventListener("DOMContentLoaded", function () {
  // ✅ 슬라이드 코드
  const wrapper = document.getElementById("slideWrapper");
  if (wrapper) {
    const slides = Array.from(wrapper.children);
    const slideCount = slides.length;

    const firstClone = slides[0].cloneNode(true);
    wrapper.appendChild(firstClone);

    let index = 0;

    setInterval(() => {
      index++;
      wrapper.style.transition = "transform 1s ease-in-out";
      wrapper.style.transform = `translateX(-${index * 100}%)`;

      if (index === slideCount) {
        setTimeout(() => {
          wrapper.style.transition = "none";
          wrapper.style.transform = "translateX(0%)";
          index = 0;
        }, 1000);
      }
    }, 4000);
  }

  // ✅ 회원가입 모달 Ajax 요청
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const errorMessages = signupForm.querySelectorAll(".error-message");
      errorMessages.forEach((span) => (span.textContent = ""));

      let valid = true;

      const email = signupForm.querySelector('input[name="email"]');
      const nickname = signupForm.querySelector('input[name="nickname"]');
      const password1 = signupForm.querySelector('input[name="password1"]');
      const password2 = signupForm.querySelector('input[name="password2"]');
      const location = signupForm.querySelector('input[name="location"]');

      // 이메일 검사
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value)) {
        email.nextElementSibling.textContent =
          "올바른 이메일 형식을 입력해주세요.";
        valid = false;
      }

      // 닉네임 검사
      if (nickname.value.trim() === "") {
        nickname.nextElementSibling.textContent = "닉네임을 입력해주세요.";
        valid = false;
      }

      // 비밀번호 검사
      if (password1.value.length < 8) {
        password1.nextElementSibling.textContent =
          "비밀번호는 8자 이상이어야 합니다.";
        valid = false;
      }

      // 비밀번호 확인
      if (password1.value !== password2.value) {
        password2.nextElementSibling.textContent =
          "비밀번호가 일치하지 않습니다.";
        valid = false;
      }

      // 거주지 검사
      if (location.value.trim() === "") {
        location.nextElementSibling.textContent = "거주지를 입력해주세요.";
        valid = false;
      }

      if (!valid) {
        return; // 오류가 있으면 서버 요청 안함
      }

      const formData = new FormData(signupForm);
      const csrfToken = document.querySelector(
        'input[name="csrfmiddlewaretoken"]'
      ).value;

      fetch("/account/signup/", {
        method: "POST",
        headers: {
          "X-CSRFToken": csrfToken,
        },
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            return response.json(); // JSON 응답으로 처리
          } else {
            throw new Error("회원가입 실패");
          }
        })
        .then((data) => {
          if (data.success) {
            alert("회원가입 완료! 🎉");
            window.location.href = "/"; // 메인 페이지로 리다이렉트
          } else {
            alert(data.message || "회원가입 실패. 입력값을 확인해주세요.");
          }
        })
        .catch((error) => {
          console.error("에러:", error);
          alert("회원가입 중 오류가 발생했습니다.");
        });
    });
  }
});

// ✅ 로그인 모달 열고 닫기
function openLoginModal() {
  document.getElementById("loginModal").style.display = "flex";
  document.getElementById("signupModal").style.display = "none";
}

function closeLoginModal() {
  document.getElementById("loginModal").style.display = "none";
}

// ✅ 회원가입 모달 열고 닫기
function openSignupModal() {
  document.getElementById("signupModal").style.display = "flex";
  document.getElementById("loginModal").style.display = "none";
}

function closeSignupModal() {
  document.getElementById("signupModal").style.display = "none";
}

// ✅ 비밀번호 토글
function togglePassword() {
  const pwd = document.getElementById("password");
  pwd.type = pwd.type === "password" ? "text" : "password";
}

function toggleConfirmPassword() {
  const pwd = document.getElementById("confirmPassword");
  pwd.type = pwd.type === "password" ? "text" : "password";
}