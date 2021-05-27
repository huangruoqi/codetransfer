document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('upload-button').addEventListener('click', () => {
        let code = editor.getValue();
        fetch('https://codetransfer.herokuapp.com/upload/input', {
            method: 'POST', 
            body: JSON.stringify(code);
        }).then(res => {
            if (res.redirected) {
                window.location.href = '/';
            }
        });

    })
})
