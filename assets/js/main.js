const toggleCheckbox = document.getElementById('switch');

toggleCheckbox.addEventListener('change', function (e) {

    const state = e.target.checked;

    if (state) {
        document.body.classList.add('night-mode');
    } else {
        document.body.classList.remove('night-mode');
    }
});
