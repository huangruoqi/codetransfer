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
    const copyButton = document.getElementById('copyButton');
    const copySuccess = document.getElementById('copySuccess');
    const copyTextHandler = () => {
        const text = codeBlock.innerText;
        navigator.clipboard.writeText(text).then{
            () => {
                copySuccess.classList.add('show-message');
                setTimeout(() => {
                    copySuccess.classList.remove('show-message');
                }, 2500);
            },
            () => {
                console.log('Error writing to the clipboard');
            }
        }
    }
    copyButton.addEventListener('click', copyTextHandler);
})
