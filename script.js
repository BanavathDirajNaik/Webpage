let timeoutId = null;

function showSection(id) {
    // Hide all sections by removing the show class
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('show');
        section.style.display = 'none';
    });

    // Show the selected section by adding the show class
    const selected = document.getElementById(id);
    selected.classList.add('show');
    selected.style.display = 'block';

    // Clear any previous timers
    if (timeoutId) clearTimeout(timeoutId);

    // Hide after 7 seconds
    timeoutId = setTimeout(() => {
        selected.classList.remove('show');
        selected.style.display = 'none';
    }, 7000);
}
