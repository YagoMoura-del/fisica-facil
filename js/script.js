//pressao.html
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica para o Modo Claro/Escuro (Opcional, Requisito 6) ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Carrega o tema salvo, se houver
    const currentTheme = localStorage.getItem('theme') || 'light';
    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '🌙';
    } else {
        themeToggle.textContent = '☀️';
    }

    // Alterna o tema ao clicar
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        // Salva a preferência
        let theme = 'light';
        if (body.classList.contains('dark-mode')) {
            theme = 'dark';
            themeToggle.textContent = '🌙';
        } else {
            themeToggle.textContent = '☀️';
        }
        localStorage.setItem('theme', theme);
    });

    // --- Lógica de Interatividade dos Exercícios (Requisito 6) ---
    const respostaButtons = document.querySelectorAll('.btn-resposta');
    const btnTentarNovamente = document.querySelector('.btn-tentar');

    // Botão Ver Resposta
    respostaButtons.forEach(button => {
        button.addEventListener('click', () => {
            const respostaId = button.getAttribute('data-resposta');
            const respostaElement = document.getElementById(`resposta-${respostaId}`);
            
            // Alterna a exibição da resposta
            if (respostaElement.style.display === 'block') {
                respostaElement.style.display = 'none';
                button.textContent = 'Ver Resposta';
            } else {
                respostaElement.style.display = 'block';
                button.textContent = 'Ocultar Resposta';
            }
        });
    });

    // Botão Tentar Novamente
    if (btnTentarNovamente) {
        btnTentarNovamente.addEventListener('click', () => {
            // Oculta todas as respostas para "tentar novamente"
            document.querySelectorAll('.resposta-oculta').forEach(resposta => {
                resposta.style.display = 'none';
            });
            // Reseta o texto dos botões
            respostaButtons.forEach(button => {
                button.textContent = 'Ver Resposta';
            });
            // Pode adicionar aqui um scroll para o topo da seção de exercícios
            document.getElementById('exercicios').scrollIntoView({ behavior: 'smooth' });
        });
    }

});

