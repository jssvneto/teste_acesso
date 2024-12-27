// Função para capturar a localização e criar o link do Google Maps
function capturarLocalizacao() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Exibe a mensagem
                const messageDiv = document.getElementById('message');
                messageDiv.textContent = `Obrigado por compartilhar sua localização! 
                Latitude: ${latitude}, Longitude: ${longitude}`;

                // Cria o link para o Google Maps
                const mapLink = document.getElementById('map-link');
                mapLink.href = `https://www.google.com/maps?q=${latitude},${longitude}`;
                mapLink.style.display = "inline-block"; // Torna o link visível
            },
            (error) => {
                console.error("Erro ao obter localização:", error);
                document.getElementById('message').textContent = 
                    "Não foi possível capturar sua localização. Por favor, permita o acesso.";
            }
        );
    } else {
        document.getElementById('message').textContent = 
            "Seu navegador não suporta a funcionalidade de geolocalização.";
    }
}

// Executa a função ao carregar a página
window.onload = capturarLocalizacao;
