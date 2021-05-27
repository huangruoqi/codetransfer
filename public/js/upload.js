document.addEventListener('DOMContentLoaded', () => {
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
