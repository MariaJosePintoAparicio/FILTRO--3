const JSON_URL = "http://154.38.171.54:3001/priceH"

const HEADERS = {
    
        
}

const customer = {
    name: "",
    phoneNumber: "",
    email: "",
    total: 0
}


function nextComponent(price, position){
    const afterSection = document.getElementById('answer_'+(position - 1))
    afterSection.classList.add('d-none')
    const section = document.getElementById('answer_'+position)
    section.classList.remove('d-none')
    customer.total += price
    document.getElementById('total').textContent = customer.total + ' COP'
    document.getElementById('valor').value = customer.total;

}

function sendInfo(){
    console.log(customer.total);
    const afterSection = document.getElementById('answer_6')
    afterSection.classList.add('d-none')
    const section = document.getElementById('formulario')
    section.classList.remove('d-none')

}

function enviarCotizacion() {
    /*var formulario = document.getElementById("formularioCotizacion");
    var formData = new FormData(formulario);  

    console.log(formData)*/

    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const valor = document.getElementById('valor').value.trim();
    if (nombre && telefono && email && valor) {
        const cotizacion = {
            nombre: nombre,
            telefono: telefono,
            email: email,
            valor: valor,
        };
        fetch(JSON_URL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cotizacion)
    })
    .then(function(response) {
        if (!response.ok) {
            throw new Error("Error al enviar la cotización.");
        }
        alert("¡Cotización enviada correctamente!");
    })
    .catch(function(error) {
        alert(error.message);
    });
        
        
    } else {
        alert('Por favor, complete todos los campos.');
    }
}