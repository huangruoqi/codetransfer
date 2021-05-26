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
    const copytexthandler = () => {
        const text = codeblock.innertext;
        navigator.clipboard.writeText(text).then{
            () => {
                copysuccess.classlist.add('show-message');
                settimeout(() => {
                    copysuccess.classlist.remove('show-message');
                }, 2500);
            }
        }
    }
    copyButton.addEventListener('click', copyTextHandler);
})
