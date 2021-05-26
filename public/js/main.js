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

    const codeBlock = document.getElementById('code');
    const copyButton = document.getElementById('copy-button');
    const copySuccess = document.getElementById('copy-success');

    const copyTextHandler = () => {
    const text = codeBlock.innerText;


    navigator.clipboard.writeText(text).then(
        () => {
            copySuccess.classList.add('show-message');
            setTimeout(() => {
            copySuccess.classList.remove('show-message');
        }, 2500);
        }
    );
    };
})
