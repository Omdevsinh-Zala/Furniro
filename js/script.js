const dark = document.getElementById('dark');
dark.addEventListener('click',(e) => {
    e.preventDefault();
    let theme = localStorage.getItem('theme')
    if(!theme) {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark')
    }
    if(theme == 'light') {
        localStorage.setItem('theme', 'dark');
        document.body.classList.add('dark')
    } else {
        localStorage.setItem('theme', 'light');
        document.body.classList.remove('dark')
    }
})

function check() {
    let theme = localStorage.getItem('theme')
    if(theme && theme == 'dark') {
        document.body.classList.add('dark')
    }
}
check();
