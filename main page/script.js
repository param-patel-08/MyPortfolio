
document.querySelector('.menu span').addEventListener('click', function() {
    document.querySelector('.sidebar').style.width = '250px';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.sidebar').style.width = '0';
});
