function enviarFormulario(event) {
    event.preventDefault(); 
    

    const notificacion = document.getElementById('notificacion');
    notificacion.style.display = 'block';


    setTimeout(() => {
        notificacion.style.display = 'none';
    }, 3000);


    document.getElementById('nombre').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensaje').value = '';


    setTimeout(() => {
        window.location.reload(); 
    }, 3000);
}
