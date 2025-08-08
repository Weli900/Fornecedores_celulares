// Lista completa de fornecedores (já em ordem alfabética)
const fornecedores = [
    {
        nome: "Assistencia Ctba",
        descricao: "Assistência - Peças - Ferramentas",
        telefone: "+554184544410"
    },
    {
        nome: "Casa Do Técnico",
        descricao: "Assistência - Peças - Ferramentas",
        telefone: "+5511984589757"
    },
    {
        nome: "Cell Master",
        descricao: "Ferramentas ",
        telefone: "+554191253232"
    },
    {
        nome: "Emili Royalle Peças",
        descricao: "Peças - Ferramentas",
        telefone: "+554188429897"
    },
    {
        nome: "FF Parts",
        descricao: "Peças - Ferramentas",
        telefone: "+554197047007"
    },
    {
        nome: "Formecedor Abissal",
        descricao: "Peças - Ferramentas",
        telefone: "+554198190129"
    },
    {
        nome: "Gcell",
        descricao: "Peças",
        telefone: "+554199300801"
    },
    {
        nome: "Hr Peças",
        descricao: "Peças",
        telefone: "+554197808369"
    },
    {
        nome: "Iplay Parts",
        descricao: "Peças",
        telefone: "+554185068573"
    },
    {
        nome: "JB Parts",
        descricao: "Peças",
        telefone: "+554198881127"
    },
    {
        nome: "Leo Connect Phone",
        descricao: "Peças",
        telefone: "+554195189428"
    },
    {
    nome: "Ly Parts",
    descricao: "Peças",
    telefone: "+554188900086"
    },
    
    {
        nome: "Mega Peças - Andrew",
        descricao: "Peças - Ferramentas",
        telefone: "+554195988308"
    },
    {
        nome: "Mega Peças",
        descricao: "Peças - Ferramentas ",
        telefone: "+554192218160"
    },
    {
        nome: "Mobile Parts",
        descricao: "Peças",
        telefone: "+554197148524"
    },
    {
        nome: "Novo Sam Distribuidora",
        descricao: "Peças",
        telefone: "+554195210077"
    },
    
    {
        nome: "PEG",
        descricao: "Peças - Ferramentas - Acessórios ",
        telefone: "+554130947500"
    },
    {
        nome: "RL Eletrônica",
        descricao: "Peças - Ferramentas",
        telefone: "+554188861850"
    },
    {
        nome: "Royalle",
        descricao: "Peças - Ferramentas - Acessórios",
        telefone: "+554195698828"
    },
    {
        nome: "Smart Parts",
        descricao: "Peças - Ferramentas - Acessórios",
        telefone: "+554891591110"
    },
    {
        nome: "So Tudo",
        descricao: "Peças",
        telefone: "+554198892777"
    },
    {
        nome: "Tmobile Milaine",
        descricao: "Assistência técnica",
        telefone: "+554199732052"
    },
    {
        nome: "Voguel Fornecedor",
        descricao: "Peças - Acessórios",
        telefone: "+554188893369"
    }
];

function mostrarFornecedores(lista = fornecedores) {
    const container = document.getElementById('contactGrid');
    container.innerHTML = '';
    
    if (lista.length === 0) {
        container.innerHTML = '<div class="no-results">Nenhum fornecedor encontrado</div>';
        return;
    }
    
    lista.forEach(fornecedor => {
        const card = document.createElement('div');
        card.className = 'contact-card';
        
        card.innerHTML = `
            <div class="contact-name">${fornecedor.nome}</div>
            ${fornecedor.descricao ? `<div class="contact-description">${fornecedor.descricao}</div>` : ''}
            <div class="contact-phone">${fornecedor.telefone}</div>
            <a href="https://wa.me/${fornecedor.telefone.replace(/\D/g, '')}" 
               class="whatsapp-btn" 
               target="_blank">
               WhatsApp
            </a>
        `;
        
        container.appendChild(card);
    });
}

// Filtro de pesquisa
document.getElementById('search').addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();
    const resultados = fornecedores.filter(fornecedor => 
        fornecedor.nome.toLowerCase().includes(termo) || 
        (fornecedor.descricao && fornecedor.descricao.toLowerCase().includes(termo))
    );
    mostrarFornecedores(resultados);
});

// Carrega todos os fornecedores ao abrir a página
mostrarFornecedores();