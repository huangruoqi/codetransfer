document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByClassName('code-wrapper')[0].style.display = "inline";
    hljs.highlightAll();
    setInterval(()=> {
        fetch('https://codetransfer.herokuapp.com/', {method: 'POST'}).then(res => {
            if (res.redirected) {
                window.location.reload();
            }
        });
    }, 2500);
})
