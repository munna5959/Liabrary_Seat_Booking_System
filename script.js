window.onload = function() {
    const popup = document.getElementById('welcome-popup');
    popup.classList.add('show');

    setTimeout(() => {
        popup.classList.remove('show');
    }, 2000); // 5000 milliseconds = 5 seconds
};
