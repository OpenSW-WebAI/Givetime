document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.getElementById("slideWrapper");
  const slides = Array.from(wrapper.children);
  const slideCount = slides.length;

  // ✅ 첫 슬라이드 복제 후 맨 뒤에 붙임
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