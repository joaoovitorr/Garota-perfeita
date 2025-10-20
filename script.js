document.addEventListener('DOMContentLoaded', () => {
    const simBtn = document.getElementById('sim-btn');
    const naoBtn = document.getElementById('nao-btn');
    const mensagemFinal = document.getElementById('mensagem-final');
    const container = document.querySelector('.container');

    // --- Lógica para o botão "NÃO" que se move (o balão fujão) ---
    naoBtn.addEventListener('mouseover', () => {
        const containerRect = container.getBoundingClientRect();
        const naoBtnRect = naoBtn.getBoundingClientRect();

        const newX = Math.random() * (containerRect.width - naoBtnRect.width);
        const newY = Math.random() * (containerRect.height - naoBtnRect.height);

        naoBtn.style.transform = `translate(${newX}px, ${newY}px)`;
    });

    // --- Lógica para o botão "SIM" ---
    simBtn.addEventListener('click', () => {
        // Esconde os botões
        simBtn.style.display = 'none';
        naoBtn.style.display = 'none';

        // Mostra a mensagem final
        mensagemFinal.classList.remove('hidden');

        // Mensagem fofa ❤️
        alert('🎉 Eu sabia rs! Coisa mais linda desse mundo! 🎉');

        // Rolagem suave até o final
        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }, 300);

        // 💖 Efeito de corações subindo
        gerarCoracoes(40);

        // 🎵 Toca a música romântica
        tocarMusica();
    });

    // --- Função para criar corações flutuantes ---
    function gerarCoracoes(qtd) {
        for (let i = 0; i < qtd; i++) {
            const heart = document.createElement('span');
            heart.classList.add('heart');
            heart.textContent = '❤️';

            // posição e tamanho aleatórios
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.fontSize = Math.random() * 20 + 20 + 'px';
            heart.style.animationDuration = (3 + Math.random() * 2) + 's';

            document.body.appendChild(heart);

            // remove o coração após a animação
            setTimeout(() => {
                heart.remove();
            }, 5000);
        }
    }

    // --- Função para tocar a música romântica ---
    function tocarMusica() {
        // você pode trocar o link abaixo por outro som, se quiser
        const audio = new Audio('https://cdn.pixabay.com/download/audio/2022/03/30/audio_44693f7b2a.mp3?filename=romantic-piano-ambient-11090.mp3');
        audio.volume = 0.4; // volume suave
        audio.play().catch(() => {
            console.log('A reprodução de áudio foi bloqueada até interação do usuário.');
        });
    }
});

