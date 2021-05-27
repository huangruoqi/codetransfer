document.addEventListener('DOMContentLoaded', () => {
    setInterval(()=> {
        const languages = ['java', 'javascript', 'python'];
        const lang = hljs.highlightAuto(editor.getValue(), languages).language;
        if (lang) {
            editor.session.setMode("ace/mode/"+lang);
            console.log(lang);
        }
        else {
            editor.session.setMode("ace/mode/java");
        }

    }, 1)
    document.getElementById('upload-button').addEventListener('click', () => {
        console.log(editor.getValue())
        let body = {
            code: editor.getValue()
        }
        fetch('https://codetransfer.herokuapp.com/upload/input', {
            method: 'POST', 
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            if (res.redirected) {
                window.location.href = '/';
            }
        });

    })
})
