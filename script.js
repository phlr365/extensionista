// Dados de exemplo pra substituir quando tiver um banco de dados real
let parks = [
    {
        id: 1,
        name: "Parque da Jaqueira",
        location: "Rua Do Futuro, Jaqueira",
        rating: 4.5,
        reviews: [
            { user: "João Silva", rating: 5, comment: "Ótimo parque para passear com a família!" },
            { user: "Maria Oliveira", rating: 4, comment: "Muito bom, mas poderia ter mais banheiros." }
        ]
    },
    {
        id: 2,
        name: "Parque da Tamarineira",
        location: "Avenida Conselheiro Rosa e Silva, Tamarineira",
        rating: 4.2,
        reviews: [
            { user: "Carlos Souza", rating: 5, comment: "Um dos melhores parques da cidade!" },
            { user: "Ana Costa", rating: 3, comment: "Bom, mas muito cheio nos fins de semana." }
        ]
    },
    {
        id: 3,
        name: "Parque de Apipucos",
        location: "Rua Apipucos, Monteiro",
        rating: 3,
        reviews: [
            { user: "João", rating: 3, comment: "Um parque mediano." },
        ]
    },
    {
        id: 4,
        name: "Parque de Santana",
        location: "Rua Jorge Gomes De Sá, Santana",
        rating: 4.5,
        reviews: [
            { user: "Silvia Silva", rating: 5, comment: "Horrível esse parque, muita gente mal educada! " },
            { user: "Maria Moura", rating: 4, comment: "Muito bom." }
        ]
    },
    {
        id: 5,
        name: "Parque do Forte do Arraial Novo do Bom Jesus",
        location: "Rua Antonio Valdevino Costa, Torrões",
        rating: 1,
        reviews: [
            { user: "João Maria", rating: 1, comment: "Perdi minha carateira" },
        ]
    },
    {
        id: 6,
        name: "Parque Dona Lindu",
        location: "Avenida Boa Viagem, Boa Viagem",
        rating: 4.3,
        reviews: [
            { user: "Oliva da Silva", rating: 5, comment: "Aprendi a andar de skate aqui." },
            { user: "Maria Oliveira", rating: 4, comment: "Bem legal." },
            { user: "José da Silva", rating: 4, comment: "Aceitável."}
        ]
    },
    {
        id: 7,
        name: "Parque Doutor Arnaldo Assunção",
        location: "Rua Antonio Borges Uchoa, Engenho do meio.",
        rating: 0,
        reviews: [
            
        ]
    },
    {
        id: 8,
        name: "Parque de Exposição do Cordeiro",
        location: "Avenida Caxangá, Cordeiro",
        rating: 5,
        reviews: [
            { user: "João Silva", rating: 5, comment: "As ovelhas sao muit fofa" },
            { user: "Maria Oliveira", rating: 5, comment: "comi rã na exposição" },
            { user: "Jefferson Antunes", rating: 5, comment: "As crianças amam a exposição de animais" }
        ]
    },
    {
        id: 9,
        name: "Parque Jonathan Marques da Cunha",
        location: "Avenida Mauricio De Nassau, Cordeiro",
        rating: 0,
        reviews: [
            
        ]
    },
    {
        id: 10,
        name: "Parque Treze de Maio",
        location: "Rua da Saudade, Santo Amaro",
        rating: 5,
        reviews: [
            { user: "Roberval dos Santos", rating: 5, comment: "." },
            { user: "Marta Morais", rating: 5, comment: "patinhso bonitinhos" }
        ]
    },
    {
        id: 11,
        name: "Praça Infantil John F. Kennedy",
        location: "Rua José Ferreira Lins, Curado",
        rating: 0,
        reviews: [
            
        ]
    },
    {
        id: 12,
        name: "Praça Lagoa do Araçá",
        location: "Avenida Cruz Cabugá, Imbiribeira",
        rating: 0,
        reviews: [
            
        ]
    },
    {
        id: 13,
        name: "Praça Memorial Arco Verde",
        location: "Avenida Cruz Cabugá, Santo Amaro",
        rating: 0,
        reviews: [
            
        ]
    },
    {
        id: 14,
        name: "Praça da Juventude",
        location: "Rua Prof. Nelson Melo , Ipsep",
        rating: 0,
        reviews: [
            
        ]
    },
    {
        id: 15,
        name: "Sítio da Trindade",
        location: "Estrada Do Arraial, Casa Amarela",
        rating: 4,
        reviews: [
            { user: "Roberto Gomes", rating: 5, comment: "Melhor lugar pra ir no São João" },
            { user: "Fagner Pinheiro", rating: 3, comment: "pista muito curta" }
        ]
    }
];

// Elementos do DOM
const parksList = document.querySelector('.parks-list');
const searchInput = document.getElementById('park-search');
const searchBtn = document.getElementById('search-btn');
const addParkBtn = document.getElementById('add-park-btn');

// Elementos do modal
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Adicionar Nova Avaliação</h2>
        <form id="review-form">
            <div class="form-group">
                <label for="park-select">Parque:</label>
                <select id="park-select" required></select>
            </div>
            <div class="form-group">
                <label for="user-name">Seu Nome:</label>
                <input type="text" id="user-name" required>
            </div>
            <div class="form-group">
                <label>Avaliação:</label>
                <div class="star-rating">
                    <span class="star" data-rating="1"><i class="far fa-star"></i></span>
                    <span class="star" data-rating="2"><i class="far fa-star"></i></span>
                    <span class="star" data-rating="3"><i class="far fa-star"></i></span>
                    <span class="star" data-rating="4"><i class="far fa-star"></i></span>
                    <span class="star" data-rating="5"><i class="far fa-star"></i></span>
                </div>
                <input type="hidden" id="user-rating" value="0">
            </div>
            <div class="form-group">
                <label for="user-comment">Comentário:</label>
                <textarea id="user-comment" rows="4" required></textarea>
            </div>
            <button type="submit">Enviar Avaliação</button>
        </form>
    </div>
`;
document.body.appendChild(modal);

// Funções
function renderParks(parksToRender) {
    parksList.innerHTML = '';
    
    parksToRender.forEach(park => {
        const parkCard = document.createElement('div');
        parkCard.className = 'park-card';
        
        // Calcula a média de avaliações
        const avgRating = park.reviews.reduce((sum, review) => sum + review.rating, 0) / park.reviews.length;
        
        parkCard.innerHTML = `
            <h3 class="park-name">${park.name}</h3>
            <p class="park-location">${park.location}</p>
            <div class="rating">
                ${renderStars(avgRating)}
                <span>(${avgRating.toFixed(1)}) - ${park.reviews.length} avaliações</span>
            </div>
            <div class="reviews">
                ${park.reviews.slice(0, 3).map(review => `
                    <div class="review">
                        <strong>${review.user}</strong> - ${renderStars(review.rating)}
                        <p>${review.comment}</p>
                    </div>
                `).join('')}
            </div>
            <button class="add-review-btn" data-park-id="${park.id}">Avaliar este parque</button>
        `;
        
        parksList.appendChild(parkCard);
    });
    
    // Adiciona event listeners aos botões de avaliação
    document.querySelectorAll('.add-review-btn').forEach(btn => {
        btn.addEventListener('click', () => openReviewModal(parseInt(btn.dataset.parkId)));
    });
}

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars + 1 && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    
    return stars;
}

function openReviewModal(parkId) {
    const parkSelect = document.getElementById('park-select');
    parkSelect.innerHTML = parks.map(park => 
        `<option value="${park.id}" ${park.id === parkId ? 'selected' : ''}>${park.name}</option>`
    ).join('');
    
    // Reset no formulário
    document.getElementById('user-name').value = '';
    document.getElementById('user-comment').value = '';
    document.getElementById('user-rating').value = '0';
    document.querySelectorAll('.star-rating .star').forEach(star => {
        star.innerHTML = '<i class="far fa-star"></i>';
    });
    
    modal.style.display = 'block';
}

// Event Listeners
searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredParks = parks.filter(park => 
        park.name.toLowerCase().includes(searchTerm) || 
        park.location.toLowerCase().includes(searchTerm)
    );
    renderParks(filteredParks);
});

addParkBtn.addEventListener('click', () => {
    openReviewModal(null);
});

// Função de notas com estrelas
document.querySelector('.star-rating').addEventListener('click', (e) => {
    if (e.target.classList.contains('star') || e.target.parentElement.classList.contains('star')) {
        const star = e.target.classList.contains('star') ? e.target : e.target.parentElement;
        const rating = parseInt(star.dataset.rating);
        
        document.getElementById('user-rating').value = rating;
        
        // Update star display
        const stars = document.querySelectorAll('.star-rating .star');
        stars.forEach((s, index) => {
            if (index < rating) {
                s.innerHTML = '<i class="fas fa-star"></i>';
            } else {
                s.innerHTML = '<i class="far fa-star"></i>';
            }
        });
    }
});

// Fecha o modal
document.querySelector('.close').addEventListener('click', () => {
    modal.style.display = 'none';
});

// Submete a avaliação
document.getElementById('review-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const parkId = parseInt(document.getElementById('park-select').value);
    const userName = document.getElementById('user-name').value;
    const userRating = parseInt(document.getElementById('user-rating').value);
    const userComment = document.getElementById('user-comment').value;
    
    // Adiciona a nova avaliação
    const park = parks.find(p => p.id === parkId);
    if (park) {
        park.reviews.push({
            user: userName,
            rating: userRating,
            comment: userComment
        });
    } else {
        // Se for um novo parque
        const newPark = {
            id: parks.length + 1,
            name: document.getElementById('park-select').options[document.getElementById('park-select').selectedIndex].text,
            rating: userRating,
            reviews: [{
                user: userName,
                rating: userRating,
                comment: userComment
            }]
        };
        parks.push(newPark);
    }
    
    // Atualiza a exibição
    renderParks(parks);
    modal.style.display = 'none';
});

// Fecha o modal ao clicar fora
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Inicializa a página
renderParks(parks);