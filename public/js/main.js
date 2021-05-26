document.addEventListener('DOMContentLoaded', () => {
    document.getElementsByClassName('code-wrapper')[0].style.display = "inline";
    hljs.highlightAll();
    setInterval(()=> {
        fetch('http://localhost:3000', {method: 'POST'}).then(res => {
            if (res.redirected) {
                window.location.reload();
            }
        });
    }, 5000)
})
