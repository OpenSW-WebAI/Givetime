document.addEventListener('DOMContentLoaded', () => {
    fetch('templates/main/header.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });

    fetch('templates/main/footer.html')
        .then(res => res.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });
});