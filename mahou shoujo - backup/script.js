document.addEventListener('DOMContentLoaded', () => {
    // Controles do Player
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const volumeSlider = document.querySelector('.volume-slider');

    playBtn.addEventListener('click', () => {
        console.log('Reproduzindo música...');
        alert('▶ Tocando: Moonlight Densetsu (DALI) ✨');
    });

    pauseBtn.addEventListener('click', () => {
        console.log('Música pausada.');
        alert('⏸ Música pausada.');
    });

    volumeSlider.addEventListener('input', (e) => {
        console.log(`Volume alterado para: ${e.target.value}%`);
    });

    // Interação com os cliques dos personagens
    const characterItems = document.querySelectorAll('.character-item');
    
    characterItems.forEach(item => {
        item.addEventListener('click', () => {
            // Pega o nome atribuído na propriedade "data-name" no HTML
            const charName = item.getAttribute('data-name');
            if (charName) {
                mostrarAlertaPersonagem(charName);
            }
        });
    });
});

// Função para exibir a pop-up de alerta
function mostrarAlertaPersonagem(nome) {
    alert(`✨ Você selecionou a Garota Mágica: ${nome} ♡ ✨\nEm breve mais informações!`);
}