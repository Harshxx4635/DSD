document.querySelectorAll('.btn').forEach((btn) => {
    const text = btn.previousElementSibling.textContent;
    btn.addEventListener('click', () => {
        navigator.clipboard.writeText(text).then(() => {
            btn.textContent = 'Copied!';
            setTimeout(() => {
                btn.textContent = 'Copy Code';
            },2000);
        })
    })
})