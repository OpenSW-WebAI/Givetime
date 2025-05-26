document.addEventListener('DOMContentLoaded', () => {
    fetch('layout/header.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    fetch('layout/footer.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
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
