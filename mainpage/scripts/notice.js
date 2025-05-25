document.addEventListener("DOMContentLoaded", () => {
  loadPosts();
  loadSidebarPosts();
});

function loadPosts() {
  fetch("api/notice/posts")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("card-container");
      container.innerHTML = "";

      data.posts.forEach(post => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <div class="card-title">${post.title}</div>
          <div class="card-meta">
            <div class="card-sub">작성자: ${post.author}</div>
            <span class="date">${formatDate(post.createdAt)}</span>
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch(err => console.error("게시글 로딩 실패:", err));
}

function loadSidebarPosts() {
  fetch("api/notice/posts/popular")
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("sidebar-container");
      container.innerHTML = "";

      data.posts.forEach(post => {
        const card = document.createElement("div");
        card.className = "sidebar-card";

        card.innerHTML = `
          <div class="sidebar-card-title">제목: ${post.title}</div>
          <div class="sidebar-card-content">내용: ${post.content}</div>
          <div class="sidebar-card-meta">
            <div class="author-info"><span class="author">${post.author}</span></div>
            <span class="date">${formatDate(post.createdAt)}</span>
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch(err => console.error("인기글 로딩 실패:", err));
}

function formatDate(isoString) {
  const date = new Date(isoString);
  return date.toISOString().split("T")[0]; // YYYY-MM-DD
}
