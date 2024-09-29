document.getElementById('symptom-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const symptoms = document.getElementById('symptoms').value;
    
    if (symptoms.trim() === "") {
        alert('Por favor, descreva seus sintomas.');
    } else {
        // Simulação de consulta médica online
        alert('Consultando médico online... Você será notificado em breve.');
        // Aqui pode ser feita uma integração com uma API para consulta real
    }
});

document.getElementById('schedule-button').addEventListener('click', function () {
    alert('Redirecionando para o agendamento...');
    // Aqui pode haver redirecionamento para uma página de agendamento
});
