async function fetchSummonerData() {
    try {
        showLoading(true);
        hideError();
        hideResults();
        
        const summonerName = document.getElementById('nomeInvocador').value.trim();
        const tagLine = document.getElementById('taglineInvocador').value.trim();
        
        if (!summonerName || !tagLine) {
            showError('Por favor, preencha o nome e a tag.');
            showLoading(false);
            return;
        }

        // Buscar dados da conta
        const accountResponse = await fetch(`http://localhost:3000/conta?nomeConta=${encodeURIComponent(summonerName)}&tagLine=${encodeURIComponent(tagLine)}`);
        
        if (!accountResponse.ok) {
            throw new Error('Conta não encontrada');
        }
        
        const accountData = await accountResponse.json();
        displayPlayerInfo(accountData);
        
        // Buscar partidas
        const matchesResponse = await fetch(`http://localhost:3000/conta/${accountData.puuid}/partidas`);
        
        if (!matchesResponse.ok) {
            throw new Error('Erro ao buscar partidas');
        }
        
        const matchesData = await matchesResponse.json();
        await displayMatches(matchesData, accountData.puuid);
        
        showLoading(false);
        
    } catch (error) {
        console.error('Erro:', error);
        showError(error.message || 'Erro ao buscar dados');
        showLoading(false);
    }
}

function displayPlayerInfo(playerData) {
    document.getElementById('player-name').textContent = `${playerData.gameName}#${playerData.tagLine}`;
    document.getElementById('player-puuid').textContent = `PUUID: ${playerData.puuid.substring(0, 20)}...`;
    document.getElementById('player-info').classList.remove('hidden');
}

async function displayMatches(matchIds, puuid) {
    const container = document.getElementById('matches-container');
    container.innerHTML = '';
    
    for (let i = 0; i < Math.min(10, matchIds.length); i++) {
        const matchId = matchIds[i];
        
        try {
            const matchResponse = await fetch(`http://localhost:3000/conta/partida/${matchId}`);
            const matchData = await matchResponse.json();
            
            const playerMatch = matchData.info.participants.find(p => p.puuid === puuid);
            if (playerMatch) {
                const matchElement = createMatchElement(matchData, playerMatch);
                container.appendChild(matchElement);
            }
        } catch (error) {
            console.error(`Erro ao buscar partida ${matchId}:`, error);
        }
    }
    
    document.getElementById('matches-section').classList.remove('hidden');
}

function createMatchElement(matchData, playerData) {
    const matchDiv = document.createElement('div');
    matchDiv.className = 'match-card';
    
    const placement = playerData.placement;
    const placementClass = placement <= 4 ? 'top' : 'bottom';
    
    const gameLength = Math.floor(matchData.info.game_length / 60);
    const gameDate = new Date(matchData.info.game_datetime).toLocaleDateString('pt-BR');
    
    // Pegar traits ativos (nível 2+)
    const activeTraits = playerData.traits
        .filter(trait => trait.tier_current >= 2)
        .sort((a, b) => b.tier_current - a.tier_current)
        .slice(0, 4);
    
    // Pegar unidades principais
    const units = playerData.units
        .filter(unit => unit.tier >= 2)
        .sort((a, b) => b.tier - a.tier)
        .slice(0, 6);
    
    matchDiv.innerHTML = `
        <div class="match-header">
            <div class="placement ${placementClass}">
                <span class="placement-number">#${placement}</span>
                <span class="placement-text">${placement <= 4 ? 'TOP' : 'BOT'} ${placement}</span>
            </div>
            <div class="match-info">
                <span class="game-date">${gameDate}</span>
                <span class="game-length">${gameLength}min</span>
            </div>
        </div>
        
        <div class="match-content">
            <div class="traits-section">
                <h4>🏆 Traits</h4>
                <div class="traits-list">
                    ${activeTraits.map(trait => `
                        <div class="trait-item tier-${trait.tier_current}">
                            <span class="trait-name">${trait.name}</span>
                            <span class="trait-level">${trait.num_units}/${trait.tier_current}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="units-section">
                <h4>⚔️ Composição</h4>
                <div class="units-list">
                    ${units.map(unit => `
                        <div class="unit-item">
                            <span class="unit-name">${unit.character_id}</span>
                            <div class="unit-stars">${'⭐'.repeat(unit.tier)}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    
    return matchDiv;
}

function showLoading(show) {
    const btnText = document.getElementById('btn-text');
    const loading = document.getElementById('loading');
    const button = document.getElementById('buscar');
    
    if (show) {
        btnText.style.display = 'none';
        loading.classList.remove('hidden');
        button.disabled = true;
    } else {
        btnText.style.display = 'block';
        loading.classList.add('hidden');
        button.disabled = false;
    }
}

function showError(message) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.querySelector('p').textContent = `❌ ${message}`;
    errorDiv.classList.remove('hidden');
}

function hideError() {
    document.getElementById('error-message').classList.add('hidden');
}

function hideResults() {
    document.getElementById('player-info').classList.add('hidden');
    document.getElementById('matches-section').classList.add('hidden');
}

// Permitir busca com Enter
document.addEventListener('DOMContentLoaded', function() {
    const inputs = ['nomeInvocador', 'taglineInvocador'];
    inputs.forEach(id => {
        document.getElementById(id).addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                fetchSummonerData();
            }
        });
    });
});
