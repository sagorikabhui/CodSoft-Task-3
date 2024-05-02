document.addEventListener('DOMContentLoaded', function () {
    const screen = document.getElementById('screen');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.dataset.value === '=') {
                try {
                    screen.textContent = eval(screen.textContent);
                } catch (error) {
                    screen.textContent = 'Error';
                }
            } else if (button.dataset.value === 'C') {
                screen.textContent = '0';
            } else {
                if (screen.textContent === '0') {
                    screen.textContent = button.dataset.value;
                } else {
                    screen.textContent += button.dataset.value;
                }
            }
        });
    });
});