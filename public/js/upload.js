document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('upload-button').addEventListener('click', () => {
        let body = {
            code: editor.getValue()
        }
        fetch('https://codetransfer.herokuapp.com/upload/input', {
            method: 'POST', 
            body: JSON.stringify(body)
        }).then(res => {
            if (res.redirected) {
                window.location.href = '/';
            }
        });

    })
})
