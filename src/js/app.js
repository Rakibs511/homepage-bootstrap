const switches = document.querySelectorAll('input[type="checkbox"]');

switches.forEach(switchBtn => {
    switchBtn.addEventListener('change', function () {
        const isChecked = this.checked;
        const targetElement = this.nextElementSibling; 

        if (isChecked) {
            targetElement.classList.add('toggle-on');
            targetElement.classList.remove('toggle-off');
        } else {
            targetElement.classList.add('toggle-off');
            targetElement.classList.remove('toggle-on');
        }
    });
});