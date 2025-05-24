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