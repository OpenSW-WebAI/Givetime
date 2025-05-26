document.addEventListener("DOMContentLoaded", () => {
    const userId = 1; // 실제 로그인 사용자 ID에 따라 동적으로 지정 가능

    fetch(`/api/users/${userId}`)
        .then(res => {
            if (!res.ok) throw new Error("서버 응답 실패");
            return res.json();
        })
        .then(data => {
            document.getElementById("username").textContent = data.username;
            document.getElementById("title").textContent = data.title;
            document.getElementById("location").textContent = data.location;
            document.getElementById("email").textContent = data.email;
            document.getElementById("about").innerHTML = data.about.replace(/\n/g, "<br>");

            // 기술 목록
            const skillsList = document.getElementById("skills-list");
            skillsList.innerHTML = "";
            data.skills.forEach(skill => {
                const li = document.createElement("li");
                li.textContent = skill;
                skillsList.appendChild(li);
            });

            // 서비스 목록
            const servicesList = document.getElementById("services-list");
            servicesList.innerHTML = "";
            data.services.forEach(service => {
                const li = document.createElement("li");
                li.textContent = service;
                servicesList.appendChild(li);
            });
        })
        .catch(err => {
            console.error("유저 데이터 불러오기 실패:", err);
        });
});
