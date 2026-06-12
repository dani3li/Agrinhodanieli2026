// ===== FUNÇÕES DE FILTRAGEM DE PRODUTOS =====

function filterProducts(category) {
    // Obter todos os cards de produtos
    const productCards = document.querySelectorAll('.product-card');
    
    // Obter todos os botões de filtro
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Remover classe 'active' de todos os botões
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Adicionar classe 'active' ao botão clicado
    event.target.classList.add('active');
    
    // Filtrar produtos
    productCards.forEach(card => {
        if (category === 'todos') {
            // Mostrar todos os produtos
            card.style.display = 'flex';
            card.classList.remove('hidden');
            // Trigger da animação
            card.style.animation = 'none';
            setTimeout(() => {
                card.style.animation = '';
            }, 10);
        } else {
            // Verificar se o produto pertence à categoria selecionada
            const cardCategory = card.getAttribute('data-category');
            if (cardCategory === category) {
                card.style.display = 'flex';
                card.classList.remove('hidden');
                // Trigger da animação
                card.style.animation = 'none';
                setTimeout(() => {
                    card.style.animation = '';
                }, 10);
            } else {
                card.style.display = 'none';
                card.classList.add('hidden');
            }
        }
    });
}

// ===== FUNÇÃO DE ADICIONAR À LISTA DE INTERESSE =====

function addToInterest(productName) {
    // Criar notificação amigável
    showNotification(`✨ ${productName} adicionado à sua lista de interesse!`);
    
    // Efeito visual no botão
    event.target.style.backgroundColor = '#27AE60';
    event.target.textContent = '✓ Adicionado!';
    
    // Retornar ao estado original após 2 segundos
    setTimeout(() => {
        event.target.style.backgroundColor = '';
        event.target.textContent = '+ Interesse';
    }, 2000);
}

// ===== FUNÇÃO DE NOTIFICAÇÃO =====

function showNotification(message) {
    // Criar elemento de notificação
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Adicionar estilos inline
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #2ECC71, #27AE60);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(46, 204, 113, 0.3);
        font-weight: 600;
        z-index: 1000;
        animation: slideIn 0.4s ease;
        font-size: 0.95rem;
    `;
    
    // Adicionar ao corpo do documento
    document.body.appendChild(notification);
    
    // Remover notificação após 3 segundos
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.4s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 400);
    }, 3000);
}

// ===== FUNÇÃO PARA MOSTRAR INFORMAÇÕES DO PRODUTOR =====

function showProducerInfo(producerName, producerInfo) {
    // Criar modal com informações do produtor
    const modal = document.createElement('div');
    modal.className = 'producer-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2000;
        animation: fadeIn 0.3s ease;
    `;
    
    // Criar conteúdo do modal
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 12px;
        max-width: 500px;
        width: 90%;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        animation: slideUp 0.3s ease;
    `;
    
    // Título
    const title = document.createElement('h2');
    title.textContent = producerName;
    title.style.cssText = `
        color: #27AE60;
        margin-bottom: 1rem;
        font-size: 1.5rem;
    `;
    
    // Descrição
    const description = document.createElement('p');
    description.textContent = producerInfo;
    description.style.cssText = `
        color: #7F8C8D;
        line-height: 1.6;
        margin-bottom: 1.5rem;
        font-size: 1rem;
    `;
    
    // Botão de fechar
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Fechar';
    closeButton.style.cssText = `
        background: #2ECC71;
        color: white;
        border: none;
        padding: 0.8rem 2rem;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 600;
        font-size: 1rem;
        transition: all 0.3s ease;
        width: 100%;
    `;
    
    closeButton.onmouseover = () => {
        closeButton.style.backgroundColor = '#27AE60';
        closeButton.style.transform = 'scale(1.02)';
    };
    
    closeButton.onmouseout = () => {
        closeButton.style.backgroundColor = '#2ECC71';
        closeButton.style.transform = 'scale(1)';
    };
    
    closeButton.onclick = () => {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    };
    
    // Montar modal
    modalContent.appendChild(title);
    modalContent.appendChild(description);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);
    
    // Fechar ao clicar fora do modal
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.style.animation = 'fadeOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(modal);
            }, 300);
        }
    };
    
    // Adicionar ao documento
    document.body.appendChild(modal);
}

// ===== EFEITO CTA BUTTON =====

document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            // Scroll para a seção de catálogo
            const catalogSection = document.getElementById('catalog');
            catalogSection.scrollIntoView({ behavior: 'smooth' });
            
            // Mostrar notificação
            showNotification('🎯 Vamos explorar os produtos incríveis!');
        });
    }
});

// ===== ANIMAÇÕES CSS DINÂMICAS =====

// Adicionar estilos de animação ao documento
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }

    @keyframes slideUp {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fadeOut {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== FUNÇÃO PARA EFEITO DE SCROLL SUAVE EM LINKS DE NAVEGAÇÃO =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== FUNÇÃO PARA INCREMENTAR CONTADOR DE INTERESSE (OPCIONAL) =====

let interestCount = 0;

function updateInterestCount() {
    interestCount++;
    console.log(`Total de itens em interesse: ${interestCount}`);
}

// Integrar com a função addToInterest
const originalAddToInterest = addToInterest;
addToInterest = function(productName) {
    originalAddToInterest(productName);
    updateInterestCount();
};

// ===== CARREGAR ESTADO INICIAL =====

window.addEventListener('load', () => {
    console.log('🌱 EcoFeira Local carregado com sucesso!');
    console.log('Bem-vindo ao marketplace sustentável!');
});
