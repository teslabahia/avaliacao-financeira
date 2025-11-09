// Data Storage
const assessmentData = {
  clientName: '',
  module1: {},
  module2: {},
  module3: {},
  completed: {
    module1: false,
    module2: false,
    module3: false
  }
};

// Question Data
const questionData = {
  module1: {
    tabs: [
      {
        name: 'Desconexão e Rejeição',
        schemas: [
          {
            name: 'Abandono',
            questions: [
              'As pessoas que me foram próximas têm sido muito imprevisíveis.',
              'Preocupo-me com o facto de as pessoas de quem gosto me abandonarem.',
              'Sinto que as pessoas vão se afastar de mim.'
            ]
          },
          {
            name: 'Desconfiança/Abuso',
            questions: [
              'Sinto que não posso confiar nas pessoas.',
              'As pessoas tendem a tirar proveito de mim.',
              'Espero que as pessoas me prejudiquem.'
            ]
          },
          {
            name: 'Privação Emocional',
            questions: [
              'Não tive quem cuidasse verdadeiramente de mim.',
              'Sinto que não há ninguém que realmente me compreenda.',
              'Ninguém está realmente disponível para mim.'
            ]
          }
        ]
      },
      {
        name: 'Autonomia e Desempenho',
        schemas: [
          {
            name: 'Dependência/Incompetência',
            questions: [
              'Não me sinto capaz de me virar sem a ajuda dos outros.',
              'Penso em mim como uma pessoa dependente.',
              'Não confio na minha capacidade de resolver problemas.'
            ]
          },
          {
            name: 'Vulnerabilidade',
            questions: [
              'Preocupo-me constantemente com possíveis desastres.',
              'Tenho medo de perder o controle.',
              'Sinto que algo de mau está prestes a acontecer.'
            ]
          },
          {
            name: 'Fracasso',
            questions: [
              'Sou um fracasso em relação às minhas conquistas.',
              'A maioria das pessoas é mais capaz do que eu.',
              'Não sou tão inteligente quanto os outros.'
            ]
          }
        ]
      }
    ]
  },
  module2: {
    tabs: [
      {
        name: 'Evitação do Dinheiro',
        questions: [
          'Pessoas ricas são gananciosas.',
          'Dinheiro corrompe as pessoas.',
          'Não mereço ter muito dinheiro.',
          'É difícil ser rico e ser uma pessoa boa.',
          'Há virtude em viver com menos dinheiro.'
        ]
      },
      {
        name: 'Adoração do Dinheiro',
        questions: [
          'As coisas ficariam melhores se eu tivesse mais dinheiro.',
          'Mais dinheiro me faria mais feliz.',
          'Nunca há dinheiro suficiente.',
          'O dinheiro resolveria todos os meus problemas.',
          'Dinheiro é poder.'
        ]
      },
      {
        name: 'Status do Dinheiro',
        questions: [
          'Seu valor próprio é igual ao seu patrimônio líquido.',
          'As pessoas são tão bem-sucedidas quanto o dinheiro que ganham.',
          'Só compraria algo se for considerado "o melhor".',
          'Se você não tem dinheiro, não tem motivo para ser infeliz.',
          'Pessoas pobres são preguiçosas.'
        ]
      },
      {
        name: 'Vigilância do Dinheiro',
        questions: [
          'Você não deve contar aos outros quanto dinheiro tem.',
          'Dinheiro deve ser guardado, não gasto.',
          'É importante economizar para um dia chuvoso.',
          'Se você não pode pagar em dinheiro, não deve comprar.',
          'Ficaria muito nervoso se não tivesse dinheiro economizado para emergências.'
        ]
      }
    ]
  },
  module3: {
    tabs: [
      {
        name: 'Bem-Estar Financeiro',
        sections: [
          {
            type: 'description',
            questions: [
              { text: 'Eu poderia lidar com uma grande despesa inesperada.', reverse: false },
              { text: 'Estou garantindo meu futuro financeiro.', reverse: false },
              { text: 'Por causa da minha situação financeira, sinto que nunca terei as coisas que quero na vida.', reverse: true },
              { text: 'Posso aproveitar a vida devido à forma como administro meu dinheiro.', reverse: false },
              { text: 'Estou apenas sobrevivendo financeiramente.', reverse: true },
              { text: 'Estou preocupado que o dinheiro que tenho ou vou poupar não dure.', reverse: true }
            ],
            scaleLabels: ['Nada', 'Muito Pouco', 'Moderadamente', 'Bem', 'Completamente']
          },
          {
            type: 'frequency',
            questions: [
              { text: 'Dar um presente para um casamento ou aniversário colocaria pressão nas minhas finanças do mês.', reverse: true },
              { text: 'Tenho dinheiro sobrando no final do mês.', reverse: false },
              { text: 'Estou atrasado com minhas finanças.', reverse: true },
              { text: 'Minhas finanças controlam minha vida.', reverse: true }
            ],
            scaleLabels: ['Nunca', 'Raramente', 'Às vezes', 'Frequentemente', 'Sempre']
          }
        ]
      },
      {
        name: 'Gestão Financeira',
        dimensions: [
          {
            name: 'Gestão de Caixa',
            questions: [
              'Comparo preços antes de fazer uma compra.',
              'Mantenho um registro escrito ou eletrônico das minhas despesas mensais.',
              'Permaneço dentro do meu orçamento ou plano de gastos.',
              'Pago todas as minhas contas em dia.'
            ]
          },
          {
            name: 'Gestão de Crédito',
            questions: [
              'Pago o saldo total do meu cartão de crédito todos os meses.',
              'Evito estourar o limite do cartão de crédito.',
              'Evito fazer apenas o pagamento mínimo dos empréstimos.'
            ]
          },
          {
            name: 'Poupança e Investimento',
            questions: [
              'Mantenho ou crio um fundo de emergência.',
              'Economizo de cada salário que recebo.',
              'Poupo para objetivos de longo prazo (casa, educação, etc.).',
              'Contribuo para aposentadoria.',
              'Invisto em ações, fundos ou títulos.'
            ]
          },
          {
            name: 'Seguros',
            questions: [
              'Mantenho seguro de saúde adequado.',
              'Mantenho seguro patrimonial adequado (automóvel, residência).',
              'Mantenho seguro de vida adequado.'
            ]
          }
        ]
      },
      {
        name: 'Locus de Controle',
        questions: [
          { text: 'Meu sucesso financeiro depende principalmente das minhas próprias ações e decisões.', type: 'interno' },
          { text: 'Posso controlar minha situação financeira através de planejamento e esforço.', type: 'interno' },
          { text: 'Sou responsável pelos resultados das minhas decisões financeiras.', type: 'interno' },
          { text: 'Minha situação financeira é determinada principalmente por fatores fora do meu controle.', type: 'externo' },
          { text: 'A sorte tem mais influência no meu sucesso financeiro do que minhas próprias escolhas.', type: 'externo' },
          { text: 'Não importa o quanto eu me esforce, minha situação financeira não mudará muito.', type: 'externo' }
        ]
      }
    ]
  }
};

// Initialize Application
function startAssessment() {
  const clientName = document.getElementById('client-name').value;
  assessmentData.clientName = clientName || 'Cliente';
  
  document.getElementById('welcome-screen').classList.remove('active');
  document.getElementById('assessment-screen').classList.add('active');
  
  // Initialize all modules
  initializeModule1();
  initializeModule2();
  initializeModule3();
  
  // Show first module
  navigateToModule(1);
}

// Navigation
function navigateToModule(moduleNum) {
  // Hide all modules
  document.querySelectorAll('.module-content').forEach(m => m.classList.remove('active'));
  document.querySelectorAll('.module-item').forEach(m => m.classList.remove('active'));
  
  // Show selected module
  document.getElementById(`module-${moduleNum}`).classList.add('active');
  document.querySelector(`[data-module="${moduleNum}"]`).classList.add('active');
  
  updateProgress();
}

function navigateToReport() {
  if (!assessmentData.completed.module1 || !assessmentData.completed.module2 || !assessmentData.completed.module3) {
    alert('Por favor, complete todos os módulos antes de acessar o relatório.');
    return;
  }
  
  // Hide all modules
  document.querySelectorAll('.module-content').forEach(m => m.classList.remove('active'));
  document.querySelectorAll('.module-item').forEach(m => m.classList.remove('active'));
  
  // Show report
  document.getElementById('report-module').classList.add('active');
  document.querySelector('[data-module="report"]').classList.add('active');
  
  generateReport();
}

function switchTab(moduleNum, tabNum) {
  const module = document.getElementById(`module-${moduleNum}`);
  const tabs = module.querySelectorAll('.tab-btn');
  const contents = module.querySelectorAll('.tab-content');
  
  tabs.forEach((tab, index) => {
    if (index === tabNum - 1) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
  
  contents.forEach((content, index) => {
    if (index === tabNum - 1) {
      content.classList.add('active');
    } else {
      content.classList.remove('active');
    }
  });
}

// Module 1: Emotions and Patterns
function initializeModule1() {
  questionData.module1.tabs.forEach((tab, tabIndex) => {
    const container = document.getElementById(`m1-questions-${tabIndex + 1}`);
    let html = '';
    
    tab.schemas.forEach((schema, schemaIndex) => {
      html += `<div class="question-group">`;
      html += `<h4>${schema.name}</h4>`;
      
      schema.questions.forEach((question, qIndex) => {
        const questionId = `m1-t${tabIndex + 1}-s${schemaIndex}-q${qIndex}`;
        html += `<div class="question-item">`;
        html += `<div class="question-text">${question}</div>`;
        html += `<div class="likert-scale">`;
        
        for (let i = 1; i <= 6; i++) {
          html += `
            <div class="likert-option">
              <input type="radio" id="${questionId}-${i}" name="${questionId}" value="${i}">
              <label for="${questionId}-${i}">
                <span class="likert-value">${i}</span>
              </label>
            </div>
          `;
        }
        
        html += `</div>`;
        html += `<div class="scale-labels"><span>Completamente falso</span><span>Descreve-me perfeitamente</span></div>`;
        html += `</div>`;
      });
      
      html += `</div>`;
    });
    
    container.innerHTML = html;
  });
}

function saveAndContinue(moduleNum, tabNum) {
  const module = document.getElementById(`module-${moduleNum}`);
  const currentTab = module.querySelector(`#m${moduleNum}-tab-${tabNum}`);
  const inputs = currentTab.querySelectorAll('input[type="radio"]');
  
  // Validate all questions answered
  const questionNames = new Set();
  inputs.forEach(input => questionNames.add(input.name));
  
  const answeredQuestions = new Set();
  inputs.forEach(input => {
    if (input.checked) {
      answeredQuestions.add(input.name);
    }
  });
  
  if (answeredQuestions.size < questionNames.size) {
    alert('Por favor, responda todas as questões antes de continuar.');
    return;
  }
  
  // Save responses
  inputs.forEach(input => {
    if (input.checked) {
      if (!assessmentData[`module${moduleNum}`][input.name]) {
        assessmentData[`module${moduleNum}`][input.name] = parseInt(input.value);
      }
    }
  });
  
  // Move to next tab or complete module
  const totalTabs = module.querySelectorAll('.tab-btn').length;
  if (tabNum < totalTabs) {
    switchTab(moduleNum, tabNum + 1);
  } else {
    assessmentData.completed[`module${moduleNum}`] = true;
    showCompletionMessage(moduleNum);
    updateProgress();
    
    // Move to next module
    if (moduleNum < 3) {
      setTimeout(() => {
        navigateToModule(moduleNum + 1);
      }, 1500);
    } else {
      setTimeout(() => {
        navigateToReport();
      }, 1500);
    }
  }
}

function showCompletionMessage(moduleNum) {
  const module = document.getElementById(`module-${moduleNum}`);
  const message = document.createElement('div');
  message.className = 'completion-message';
  message.innerHTML = `
    <h3>✓ Módulo ${moduleNum} Concluído!</h3>
    <p>Suas respostas foram salvas com sucesso.</p>
  `;
  module.appendChild(message);
  
  setTimeout(() => {
    message.remove();
  }, 3000);
}

// Module 2: Money Beliefs
function initializeModule2() {
  questionData.module2.tabs.forEach((tab, tabIndex) => {
    const container = document.getElementById(`m2-questions-${tabIndex + 1}`);
    let html = '';
    
    tab.questions.forEach((question, qIndex) => {
      const questionId = `m2-t${tabIndex + 1}-q${qIndex}`;
      html += `<div class="question-item">`;
      html += `<div class="question-text">${question}</div>`;
      html += `<div class="likert-scale">`;
      
      for (let i = 1; i <= 6; i++) {
        html += `
          <div class="likert-option">
            <input type="radio" id="${questionId}-${i}" name="${questionId}" value="${i}">
            <label for="${questionId}-${i}">
              <span class="likert-value">${i}</span>
            </label>
          </div>
        `;
      }
      
      html += `</div>`;
      html += `<div class="scale-labels"><span>Discordo totalmente</span><span>Concordo totalmente</span></div>`;
      html += `</div>`;
    });
    
    container.innerHTML = html;
  });
}

// Module 3: Habits and Control
function initializeModule3() {
  // Tab 1: CFPB
  const cfpbContainer = document.getElementById('m3-questions-1');
  let html = '';
  
  questionData.module3.tabs[0].sections.forEach((section, sectionIndex) => {
    section.questions.forEach((question, qIndex) => {
      const questionId = `m3-t1-s${sectionIndex}-q${qIndex}`;
      html += `<div class="question-item" data-reverse="${question.reverse}">`;
      html += `<div class="question-text">${question.text}</div>`;
      html += `<div class="likert-scale">`;
      
      for (let i = 1; i <= 5; i++) {
        html += `
          <div class="likert-option">
            <input type="radio" id="${questionId}-${i}" name="${questionId}" value="${i}">
            <label for="${questionId}-${i}">
              <span class="likert-value">${i}</span>
              <span class="likert-label">${section.scaleLabels[i-1]}</span>
            </label>
          </div>
        `;
      }
      
      html += `</div></div>`;
    });
  });
  
  cfpbContainer.innerHTML = html;
  
  // Tab 2: FMBS
  const fmbsContainer = document.getElementById('m3-questions-2');
  html = '';
  
  questionData.module3.tabs[1].dimensions.forEach((dimension, dimIndex) => {
    html += `<div class="question-group">`;
    html += `<h4>${dimension.name}</h4>`;
    
    dimension.questions.forEach((question, qIndex) => {
      const questionId = `m3-t2-d${dimIndex}-q${qIndex}`;
      html += `<div class="question-item">`;
      html += `<div class="question-text">${question}</div>`;
      html += `<div class="likert-scale">`;
      
      const labels = ['Nunca', 'Raramente', 'Às vezes', 'Frequentemente', 'Sempre'];
      for (let i = 1; i <= 5; i++) {
        html += `
          <div class="likert-option">
            <input type="radio" id="${questionId}-${i}" name="${questionId}" value="${i}">
            <label for="${questionId}-${i}">
              <span class="likert-value">${i}</span>
              <span class="likert-label">${labels[i-1]}</span>
            </label>
          </div>
        `;
      }
      
      html += `</div></div>`;
    });
    
    html += `</div>`;
  });
  
  fmbsContainer.innerHTML = html;
  
  // Tab 3: Locus
  const locusContainer = document.getElementById('m3-questions-3');
  html = '';
  
  questionData.module3.tabs[2].questions.forEach((question, qIndex) => {
    const questionId = `m3-t3-q${qIndex}`;
    html += `<div class="question-item" data-type="${question.type}">`;
    html += `<div class="question-text">${question.text}</div>`;
    html += `<div class="likert-scale">`;
    
    const labels = ['Discordo totalmente', 'Discordo', 'Neutro', 'Concordo', 'Concordo totalmente'];
    for (let i = 1; i <= 5; i++) {
      html += `
        <div class="likert-option">
          <input type="radio" id="${questionId}-${i}" name="${questionId}" value="${i}">
          <label for="${questionId}-${i}">
            <span class="likert-value">${i}</span>
            <span class="likert-label">${labels[i-1]}</span>
          </label>
        </div>
      `;
    }
    
    html += `</div></div>`;
  });
  
  locusContainer.innerHTML = html;
}

// Progress Tracking
function updateProgress() {
  const completed = Object.values(assessmentData.completed).filter(v => v).length;
  const total = 3;
  const percentage = Math.round((completed / total) * 100);
  
  document.getElementById('progress-fill').style.width = percentage + '%';
  document.getElementById('progress-text').textContent = percentage + '% Completo';
  
  // Update individual module progress
  for (let i = 1; i <= 3; i++) {
    const moduleProgress = assessmentData.completed[`module${i}`] ? 100 : 0;
    document.getElementById(`progress-m${i}`).textContent = moduleProgress + '%';
  }
}

// Report Generation
function generateReport() {
  const reportContainer = document.getElementById('report-content');
  const currentDate = new Date().toLocaleDateString('pt-BR');
  
  let html = `
    <div class="report-header">
      <h2>Relatório de Avaliação Comportamental Financeira</h2>
      <div class="report-info">
        <div><strong>Cliente:</strong> ${assessmentData.clientName}</div>
        <div><strong>Data:</strong> ${currentDate}</div>
      </div>
    </div>
  `;
  
  // Section 1: Emotions and Patterns
  html += `<div class="report-section">`;
  html += `<h3>1. Emoções e Padrões (Esquemas de Young)</h3>`;
  
  const schemaScores = calculateSchemaScores();
  html += `<div class="chart-container"><canvas id="schemaChart"></canvas></div>`;
  
  html += `<h4>Esquemas Identificados</h4>`;
  Object.entries(schemaScores).forEach(([schema, score]) => {
    const level = score >= 4 ? 'high' : score >= 3 ? 'medium' : 'low';
    const levelText = score >= 4 ? 'Alto' : score >= 3 ? 'Moderado' : 'Baixo';
    html += `
      <div class="schema-result ${level}">
        <span class="schema-name">${schema}</span>
        <span class="schema-score">${score.toFixed(1)} / 6.0 (${levelText})</span>
      </div>
    `;
  });
  
  // Interpretations for active schemas
  Object.entries(schemaScores).forEach(([schema, score]) => {
    if (score >= 4) {
      html += `<div class="interpretation">`;
      html += `<strong>${schema}:</strong> `;
      html += getSchemaInterpretation(schema);
      html += `</div>`;
    }
  });
  
  html += `</div>`;
  
  // Section 2: Money Beliefs
  html += `<div class="report-section">`;
  html += `<h3>2. Crenças sobre Dinheiro (Klontz Money Scripts)</h3>`;
  
  const beliefScores = calculateBeliefScores();
  html += `<div class="chart-container"><canvas id="beliefChart"></canvas></div>`;
  
  const dominantBelief = Object.entries(beliefScores).sort((a, b) => b[1] - a[1])[0];
  html += `<h4>Perfil Dominante: ${dominantBelief[0]}</h4>`;
  html += `<div class="interpretation">`;
  html += getBeliefInterpretation(dominantBelief[0]);
  html += `</div>`;
  
  html += `</div>`;
  
  // Section 3: Habits and Control
  html += `<div class="report-section">`;
  html += `<h3>3. Hábitos e Controle Financeiro</h3>`;
  
  const cfpbScore = calculateCFPBScore();
  const fmbsScores = calculateFMBSScores();
  const locusScore = calculateLocusScore();
  
  html += `<h4>Bem-Estar Financeiro (CFPB)</h4>`;
  html += `<div class="chart-container small"><canvas id="cfpbChart"></canvas></div>`;
  html += `<div class="interpretation">`;
  html += `<p><strong>Pontuação:</strong> ${cfpbScore.toFixed(0)}/100</p>`;
  html += `<p>${getCFPBInterpretation(cfpbScore)}</p>`;
  html += `</div>`;
  
  html += `<h4>Comportamentos de Gestão Financeira (FMBS)</h4>`;
  html += `<div class="chart-container small"><canvas id="fmbsChart"></canvas></div>`;
  
  html += `<h4>Locus de Controle Financeiro</h4>`;
  html += `<div class="chart-container small"><canvas id="locusChart"></canvas></div>`;
  html += `<div class="interpretation">`;
  html += `<p>${getLocusInterpretation(locusScore)}</p>`;
  html += `</div>`;
  
  html += `</div>`;
  
  // Section 4: Integration and Recommendations
  html += `<div class="report-section">`;
  html += `<h3>4. Integração e Recomendações</h3>`;
  
  html += `<h4>Análise Integrada</h4>`;
  html += `<div class="interpretation">`;
  html += getIntegratedAnalysis(schemaScores, beliefScores, cfpbScore, locusScore);
  html += `</div>`;
  
  html += `<h4>Recomendações Prioritárias</h4>`;
  html += `<ul class="recommendations">`;
  const recommendations = getRecommendations(schemaScores, beliefScores, cfpbScore, fmbsScores, locusScore);
  recommendations.forEach(rec => {
    html += `<li>${rec}</li>`;
  });
  html += `</ul>`;
  
  html += `</div>`;
  
  // Action Buttons
  html += `<div class="report-actions">`;
  html += `<button class="btn btn--primary" onclick="window.print()">Imprimir Relatório</button>`;
  html += `<button class="btn btn--secondary" onclick="showManual()">Ver Manual de Interpretação</button>`;
  html += `<button class="btn btn--secondary" onclick="location.reload()">Reiniciar Avaliação</button>`;
  html += `</div>`;
  
  reportContainer.innerHTML = html;
  
  // Create charts
  setTimeout(() => {
    createSchemaChart(schemaScores);
    createBeliefChart(beliefScores);
    createCFPBGauge(cfpbScore);
    createFMBSChart(fmbsScores);
    createLocusChart(locusScore);
  }, 100);
}

// Calculation Functions
function calculateSchemaScores() {
  const schemas = {
    'Abandono': [],
    'Desconfiança/Abuso': [],
    'Privação Emocional': [],
    'Dependência/Incompetência': [],
    'Vulnerabilidade': [],
    'Fracasso': []
  };
  
  // Parse Module 1 responses
  Object.entries(assessmentData.module1).forEach(([key, value]) => {
    const match = key.match(/m1-t(\d)-s(\d)-q(\d)/);
    if (match) {
      const tabIndex = parseInt(match[1]) - 1;
      const schemaIndex = parseInt(match[2]);
      const schemaName = questionData.module1.tabs[tabIndex].schemas[schemaIndex].name;
      schemas[schemaName].push(value);
    }
  });
  
  // Calculate averages
  const scores = {};
  Object.entries(schemas).forEach(([name, values]) => {
    scores[name] = values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : 0;
  });
  
  return scores;
}

function calculateBeliefScores() {
  const beliefs = {
    'Evitação do Dinheiro': [],
    'Adoração do Dinheiro': [],
    'Status do Dinheiro': [],
    'Vigilância do Dinheiro': []
  };
  
  Object.entries(assessmentData.module2).forEach(([key, value]) => {
    const match = key.match(/m2-t(\d)-q(\d)/);
    if (match) {
      const tabIndex = parseInt(match[1]) - 1;
      const beliefName = questionData.module2.tabs[tabIndex].name;
      beliefs[beliefName].push(value);
    }
  });
  
  const scores = {};
  Object.entries(beliefs).forEach(([name, values]) => {
    scores[name] = values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : 0;
  });
  
  return scores;
}

function calculateCFPBScore() {
  let total = 0;
  let count = 0;
  
  Object.entries(assessmentData.module3).forEach(([key, value]) => {
    const match = key.match(/m3-t1-s(\d)-q(\d)/);
    if (match) {
      const sectionIndex = parseInt(match[1]);
      const qIndex = parseInt(match[2]);
      const question = questionData.module3.tabs[0].sections[sectionIndex].questions[qIndex];
      
      let score = value;
      if (question.reverse) {
        score = 6 - value; // Reverse scoring
      }
      
      total += score;
      count++;
    }
  });
  
  // Convert to 0-100 scale
  return count > 0 ? (total / count / 5) * 100 : 0;
}

function calculateFMBSScores() {
  const dimensions = {
    'Gestão de Caixa': [],
    'Gestão de Crédito': [],
    'Poupança e Investimento': [],
    'Seguros': []
  };
  
  Object.entries(assessmentData.module3).forEach(([key, value]) => {
    const match = key.match(/m3-t2-d(\d)-q(\d)/);
    if (match) {
      const dimIndex = parseInt(match[1]);
      const dimName = questionData.module3.tabs[1].dimensions[dimIndex].name;
      dimensions[dimName].push(value);
    }
  });
  
  const scores = {};
  Object.entries(dimensions).forEach(([name, values]) => {
    scores[name] = values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : 0;
  });
  
  return scores;
}

function calculateLocusScore() {
  let interno = 0;
  let externo = 0;
  
  Object.entries(assessmentData.module3).forEach(([key, value]) => {
    const match = key.match(/m3-t3-q(\d)/);
    if (match) {
      const qIndex = parseInt(match[1]);
      const question = questionData.module3.tabs[2].questions[qIndex];
      
      if (question.type === 'interno') {
        interno += value;
      } else {
        externo += value;
      }
    }
  });
  
  return {
    interno: (interno / 15) * 100,
    externo: (externo / 15) * 100
  };
}

// Chart Creation Functions
function createSchemaChart(scores) {
  const ctx = document.getElementById('schemaChart');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(scores),
      datasets: [{
        label: 'Pontuação',
        data: Object.values(scores),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          max: 6,
          title: {
            display: true,
            text: 'Pontuação Média (1-6)'
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

function createBeliefChart(scores) {
  const ctx = document.getElementById('beliefChart');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'radar',
    data: {
      labels: Object.keys(scores),
      datasets: [{
        label: 'Crenças',
        data: Object.values(scores),
        backgroundColor: 'rgba(31, 184, 205, 0.2)',
        borderColor: '#1FB8CD',
        pointBackgroundColor: '#1FB8CD',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#1FB8CD'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          beginAtZero: true,
          max: 6,
          ticks: {
            stepSize: 1
          }
        }
      }
    }
  });
}

function createCFPBGauge(score) {
  const ctx = document.getElementById('cfpbChart');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Bem-Estar', 'Restante'],
      datasets: [{
        data: [score, 100 - score],
        backgroundColor: ['#1FB8CD', '#ECEBD5'],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      circumference: 180,
      rotation: 270,
      cutout: '70%',
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      }
    }
  });
}

function createFMBSChart(scores) {
  const ctx = document.getElementById('fmbsChart');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Object.keys(scores),
      datasets: [{
        label: 'Frequência',
        data: Object.values(scores),
        backgroundColor: ['#1FB8CD', '#FFC185', '#5D878F', '#D2BA4C'],
        barThickness: 40
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          beginAtZero: true,
          max: 5,
          title: {
            display: true,
            text: 'Pontuação Média (1-5)'
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

function createLocusChart(score) {
  const ctx = document.getElementById('locusChart');
  if (!ctx) return;
  
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Locus Interno', 'Locus Externo'],
      datasets: [{
        data: [score.interno, score.externo],
        backgroundColor: ['#1FB8CD', '#FFC185']
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

// Interpretation Functions
function getSchemaInterpretation(schema) {
  const interpretations = {
    'Abandono': 'Padrão de instabilidade em relacionamentos pode levar a decisões financeiras impulsivas por medo de perder oportunidades. Recomenda-se trabalhar a ansiedade através de planejamento financeiro estruturado.',
    'Desconfiança/Abuso': 'Dificuldade em confiar pode limitar parcerias financeiras benéficas. Importante trabalhar com profissionais certificados e estabelecer contratos claros.',
    'Privação Emocional': 'Tendência a compensar carências emocionais através de compras ou acumulação de dinheiro. Desenvolver fontes alternativas de satisfação emocional.',
    'Dependência/Incompetência': 'Paralisia em decisões financeiras. Iniciar com pequenas decisões e construir confiança progressivamente através de educação financeira.',
    'Vulnerabilidade': 'Ansiedade financeira extrema pode levar à evitação de investimentos. Trabalhar gestão de ansiedade e diversificação de risco.',
    'Fracasso': 'Autosabotagem financeira por crença de incapacidade. Importante celebrar pequenas conquistas e questionar pensamentos automáticos negativos.'
  };
  
  return interpretations[schema] || '';
}

function getBeliefInterpretation(belief) {
  const interpretations = {
    'Evitação do Dinheiro': '<p><strong>Comportamentos típicos:</strong> Autosabotagem financeira, rejeição de aumentos salariais, doação excessiva, dificuldade em acumular patrimônio.</p><p><strong>Estratégias:</strong> Ressignificar dinheiro como ferramenta neutra para realizar valores pessoais. Trabalhar questões de merecimento através de terapia. Estabelecer metas financeiras alinhadas com propósito de vida.</p>',
    'Adoração do Dinheiro': '<p><strong>Comportamentos típicos:</strong> Trabalho excessivo, gastos compulsivos, endividamento crônico buscando status, dificuldade em aproveitar o presente.</p><p><strong>Estratégias:</strong> Identificar necessidades emocionais não atendidas. Desenvolver fontes alternativas de satisfação (relacionamentos, hobbies, propósito). Estabelecer limites para trabalho e consumo.</p>',
    'Status do Dinheiro': '<p><strong>Comportamentos típicos:</strong> Gastos para impressionar outros, comparação social constante, consumo de luxo mesmo com dívidas, autoestima vinculada a patrimônio.</p><p><strong>Estratégias:</strong> Trabalhar autoestima desvinculada de patrimônio. Redefinir sucesso considerando relacionamentos, saúde e bem-estar. Praticar gratidão e mindfulness.</p>',
    'Vigilância do Dinheiro': '<p><strong>Comportamentos típicos:</strong> Acumulação extrema, ansiedade com qualquer gasto, dificuldade em aproveitar o dinheiro, rigidez excessiva no orçamento.</p><p><strong>Estratégias:</strong> Trabalhar segurança emocional através de fundo de emergência adequado. Permitir gastos de prazer planejados (5-10% da renda). Equilibrar segurança futura com qualidade de vida presente.</p>'
  };
  
  return interpretations[belief] || '';
}

function getCFPBInterpretation(score) {
  if (score >= 75) {
    return 'Excelente bem-estar financeiro. Você demonstra segurança financeira atual e futura, com capacidade de lidar com imprevistos e aproveitar a vida.';
  } else if (score >= 50) {
    return 'Bem-estar financeiro moderado. Há áreas de segurança, mas também pontos que geram preocupação. Focar em fortalecer fundo de emergência e planejamento futuro.';
  } else if (score >= 25) {
    return 'Bem-estar financeiro baixo. Significativo estresse financeiro presente. Priorizar redução de dívidas de alto custo e estabelecimento de controle básico de gastos.';
  } else {
    return 'Bem-estar financeiro crítico. Situação requer intervenção urgente. Buscar aconselhamento profissional para reestruturação financeira básica.';
  }
}

function getLocusInterpretation(score) {
  if (score.interno > score.externo + 20) {
    return '<strong>Locus Interno Predominante:</strong> Você acredita ter controle sobre suas finanças através de suas ações. Isto é positivo para iniciativa e responsabilidade. Mantenha este senso de agência.';
  } else if (score.externo > score.interno + 20) {
    return '<strong>Locus Externo Predominante:</strong> Você tende a atribuir resultados financeiros a fatores externos. Isto pode reduzir iniciativa. Importante identificar áreas onde você TEM controle e focar nestas.';
  } else {
    return '<strong>Locus Equilibrado:</strong> Você reconhece tanto sua responsabilidade pessoal quanto fatores contextuais. Este é um equilíbrio saudável que permite ação sem culpa excessiva.';
  }
}

function getIntegratedAnalysis(schemas, beliefs, cfpb, locus) {
  let analysis = '<p>';
  
  // Find dominant patterns
  const highSchemas = Object.entries(schemas).filter(([_, score]) => score >= 4).map(([name, _]) => name);
  const dominantBelief = Object.entries(beliefs).sort((a, b) => b[1] - a[1])[0][0];
  
  if (highSchemas.length > 0 && cfpb < 50) {
    analysis += 'A presença de esquemas emocionais ativos combinada com baixo bem-estar financeiro sugere que padrões psicológicos podem estar impactando comportamentos financeiros. ';
  }
  
  if (dominantBelief === 'Evitação do Dinheiro' && cfpb < 50) {
    analysis += 'Suas crenças de evitação do dinheiro podem estar contribuindo para dificuldades em acumular recursos financeiros. ';
  }
  
  if (dominantBelief === 'Adoração do Dinheiro' && highSchemas.includes('Privação Emocional')) {
    analysis += 'A combinação de privação emocional e adoração do dinheiro sugere uso compensatório do consumo. Importante trabalhar necessidades emocionais subjacentes. ';
  }
  
  if (locus.externo > locus.interno && cfpb < 50) {
    analysis += 'O locus de controle externo combinado com baixo bem-estar pode criar ciclo de desamparo aprendido. Focar em pequenas vitórias para reconstruir senso de agência. ';
  }
  
  analysis += '</p><p>A abordagem integrada deve endereçar simultaneamente: (1) Padrões emocionais através de terapia, (2) Crenças disfuncionais através de reestruturação cognitiva, e (3) Comportamentos através de educação e planejamento financeiro estruturado.</p>';
  
  return analysis;
}

function getRecommendations(schemas, beliefs, cfpb, fmbs, locus) {
  const recommendations = [];
  
  // Based on CFPB score
  if (cfpb < 50) {
    recommendations.push('Estabelecer fundo de emergência equivalente a 3 meses de despesas como prioridade máxima para reduzir ansiedade financeira.');
    recommendations.push('Implementar sistema simples de controle de gastos (aplicativo ou planilha) para ganhar visibilidade sobre fluxo de caixa.');
  }
  
  // Based on FMBS
  if (fmbs['Gestão de Caixa'] < 3) {
    recommendations.push('Criar orçamento mensal realista usando regra 50-30-20 (50% necessidades, 30% desejos, 20% poupança/dívidas).');
  }
  
  if (fmbs['Poupança e Investimento'] < 3) {
    recommendations.push('Automatizar poupança através de débito automático no dia do salário, mesmo que valor pequeno (ex: 5% da renda).');
  }
  
  // Based on dominant belief
  const dominantBelief = Object.entries(beliefs).sort((a, b) => b[1] - a[1])[0][0];
  
  if (dominantBelief === 'Evitação do Dinheiro') {
    recommendations.push('Trabalhar ressignificação do dinheiro através de journaling: "Como o dinheiro pode ser ferramenta para realizar meus valores?"');
  }
  
  if (dominantBelief === 'Adoração do Dinheiro') {
    recommendations.push('Desenvolver lista de atividades gratuitas que trazem satisfação genuína. Agendar pelo menos 3 por semana.');
  }
  
  if (dominantBelief === 'Status do Dinheiro') {
    recommendations.push('Praticar "detox" de redes sociais por 2 semanas e observar impacto em ansiedade e desejo de consumo.');
  }
  
  // Based on schemas
  const highSchemas = Object.entries(schemas).filter(([_, score]) => score >= 4);
  if (highSchemas.length > 0) {
    recommendations.push('Considerar terapia cognitivo-comportamental focada em esquemas para trabalhar padrões emocionais subjacentes.');
  }
  
  // Based on locus
  if (locus.externo > locus.interno) {
    recommendations.push('Criar lista de "Controle vs Influência vs Aceitação" para identificar onde você pode agir efetivamente.');
  }
  
  // General
  recommendations.push('Agendar revisão trimestral deste relatório para monitorar progresso e ajustar estratégias.');
  
  return recommendations.slice(0, 7);
}

// Manual
function showManual() {
  const modal = document.getElementById('manual-modal');
  const manualContent = document.getElementById('manual-content');
  
  manualContent.innerHTML = `
    <h2>Manual de Interpretação e Aplicação</h2>
    
    <h3>1. Como Ler o Relatório</h3>
    <p>O relatório está organizado em 4 seções principais que devem ser analisadas em conjunto:</p>
    <ul>
      <li><strong>Emoções e Padrões:</strong> Identifica esquemas emocionais básicos que influenciam comportamento financeiro</li>
      <li><strong>Crenças sobre Dinheiro:</strong> Mapeia scripts inconscientes sobre dinheiro</li>
      <li><strong>Hábitos e Controle:</strong> Avalia comportamentos atuais e percepção de controle</li>
      <li><strong>Integração:</strong> Conecta os três níveis e sugere intervenções</li>
    </ul>
    
    <h3>2. Critérios de Pontuação</h3>
    
    <h4>Esquemas de Young (1-6)</h4>
    <ul>
      <li><strong>1-2.9:</strong> Esquema inativo - não representa padrão significativo</li>
      <li><strong>3-3.9:</strong> Esquema moderado - atenção recomendada</li>
      <li><strong>4-6:</strong> Esquema ativo - requer intervenção terapêutica</li>
    </ul>
    
    <h4>Crenças Financeiras (1-6)</h4>
    <ul>
      <li><strong>Até 3:</strong> Crença não dominante</li>
      <li><strong>3.1-4.5:</strong> Crença moderada - influencia algumas decisões</li>
      <li><strong>4.6-6:</strong> Crença dominante - dirige comportamentos financeiros</li>
    </ul>
    
    <h4>Bem-Estar Financeiro CFPB (0-100)</h4>
    <ul>
      <li><strong>0-24:</strong> Crítico - intervenção urgente</li>
      <li><strong>25-49:</strong> Baixo - alta vulnerabilidade</li>
      <li><strong>50-74:</strong> Moderado - alguns pontos de estresse</li>
      <li><strong>75-100:</strong> Excelente - segurança e controle</li>
    </ul>
    
    <h4>Comportamentos FMBS (1-5)</h4>
    <ul>
      <li><strong>1-2:</strong> Comportamento raro - área crítica</li>
      <li><strong>2.1-3:</strong> Comportamento ocasional - melhorias necessárias</li>
      <li><strong>3.1-4:</strong> Comportamento frequente - bom nível</li>
      <li><strong>4.1-5:</strong> Comportamento consistente - excelente</li>
    </ul>
    
    <h3>3. Estratégias de Intervenção por Perfil</h3>
    
    <h4>Perfil: Esquemas Ativos + Baixo Bem-Estar</h4>
    <p><strong>Prioridade:</strong> Estabilização emocional antes de mudanças financeiras complexas</p>
    <ol>
      <li>Encaminhar para psicoterapia focada em esquemas</li>
      <li>Implementar apenas mudanças financeiras simples e concretas</li>
      <li>Evitar decisões importantes até estabilização emocional</li>
    </ol>
    
    <h4>Perfil: Evitação do Dinheiro</h4>
    <p><strong>Abordagem:</strong> Ressignificação cognitiva e exposição gradual</p>
    <ol>
      <li>Questionar crenças: "De onde vem esta ideia? É sempre verdadeira?"</li>
      <li>Identificar pessoas ricas que são boas (contra-exemplos)</li>
      <li>Conectar dinheiro com valores pessoais (ex: segurança familiar)</li>
      <li>Estabelecer metas financeiras pequenas e alcançáveis</li>
    </ol>
    
    <h4>Perfil: Adoração do Dinheiro</h4>
    <p><strong>Abordagem:</strong> Identificar necessidades subjacentes</p>
    <ol>
      <li>Mapear o que realmente busca através do dinheiro (segurança, amor, reconhecimento)</li>
      <li>Desenvolver fontes alternativas para estas necessidades</li>
      <li>Praticar gratidão diária pelo que já possui</li>
      <li>Estabelecer limite de horas de trabalho e consumo</li>
    </ol>
    
    <h4>Perfil: Status do Dinheiro</h4>
    <p><strong>Abordagem:</strong> Desvinculação de autoestima e patrimônio</p>
    <ol>
      <li>Exercício: listar 20 qualidades suas não relacionadas a dinheiro</li>
      <li>Redefinir métricas de sucesso (saúde, relacionamentos, contribuição)</li>
      <li>Período de "detox" de comparações sociais</li>
      <li>Praticar consumo consciente: "Por que quero isto? Para quem?"</li>
    </ol>
    
    <h4>Perfil: Vigilância do Dinheiro</h4>
    <p><strong>Abordagem:</strong> Equilíbrio entre segurança e qualidade de vida</p>
    <ol>
      <li>Calcular fundo de emergência adequado (6-12 meses de despesas)</li>
      <li>Uma vez atingido, permitir "orçamento de prazer" (5-10% da renda)</li>
      <li>Trabalhar ansiedade através de técnicas de regulação emocional</li>
      <li>Praticar pequenos gastos de prazer semanalmente</li>
    </ol>
    
    <h4>Perfil: Locus Externo Dominante</h4>
    <p><strong>Abordagem:</strong> Reconstruir senso de agência</p>
    <ol>
      <li>Identificar 3 áreas onde você TEM controle financeiro</li>
      <li>Estabelecer metas pequenas e específicas nestas áreas</li>
      <li>Celebrar cada pequena conquista</li>
      <li>Registrar evidências de controle ao longo do tempo</li>
    </ol>
    
    <h3>4. Sequência de Implementação</h3>
    
    <h4>Fase 1 (Semanas 1-4): Estabilização</h4>
    <ul>
      <li>Implementar controle básico de gastos</li>
      <li>Identificar e reduzir 1-2 gastos desnecessários</li>
      <li>Se necessário, iniciar terapia</li>
    </ul>
    
    <h4>Fase 2 (Meses 2-3): Construção de Base</h4>
    <ul>
      <li>Estabelecer orçamento realista</li>
      <li>Iniciar fundo de emergência (meta inicial: 1 mês de despesas)</li>
      <li>Trabalhar crenças disfuncionais através de journaling ou terapia</li>
    </ul>
    
    <h4>Fase 3 (Meses 4-6): Consolidação</h4>
    <ul>
      <li>Expandir fundo de emergência (meta: 3-6 meses)</li>
      <li>Reduzir dívidas de alto custo</li>
      <li>Estabelecer hábitos de poupança automática</li>
    </ul>
    
    <h4>Fase 4 (Meses 7-12): Crescimento</h4>
    <ul>
      <li>Estabelecer metas de longo prazo</li>
      <li>Iniciar investimentos adequados ao perfil</li>
      <li>Consolidar novos padrões comportamentais</li>
    </ul>
    
    <h3>5. Sinais de Alerta</h3>
    <p>Encaminhar para profissionais especializados se identificar:</p>
    <ul>
      <li>Múltiplos esquemas ativos (3 ou mais com pontuação ≥ 4)</li>
      <li>Compulsão por compras ou jogo</li>
      <li>Endividamento compulsivo recorrente</li>
      <li>Autosabotagem financeira repetida</li>
      <li>Ansiedade paralisante relacionada a dinheiro</li>
      <li>Conflitos conjugais graves por questões financeiras</li>
    </ul>
    
    <h3>6. Reavaliação</h3>
    <p>Reaplicar esta avaliação a cada 3-6 meses para:</p>
    <ul>
      <li>Monitorar progresso</li>
      <li>Ajustar estratégias</li>
      <li>Identificar novos pontos de atenção</li>
      <li>Celebrar conquistas</li>
    </ul>
    
    <h3>7. Recursos Complementares</h3>
    <ul>
      <li><strong>Livros:</strong> "A Lógica do Consumo" (Brad Klontz), "Terapia do Esquema" (Jeffrey Young)</li>
      <li><strong>Apps:</strong> Guiabolso, Mobills, Organizze (controle financeiro)</li>
      <li><strong>Profissionais:</strong> Psicólogos com formação em Terapia Cognitivo-Comportamental ou Terapia do Esquema</li>
      <li><strong>Cursos:</strong> Educação financeira básica (CVM, B3, bancos)</li>
    </ul>
    
    <div style="margin-top: 32px; padding: 20px; background: var(--color-bg-1); border-radius: 8px;">
      <h3 style="margin-top: 0;">⚠️ Nota Importante</h3>
      <p>Este instrumento é uma ferramenta de triagem e não substitui avaliação clínica completa. Os resultados devem ser interpretados por profissional qualificado (psicólogo ou consultor financeiro com formação em finanças comportamentais).</p>
    </div>
  `;
  
  modal.classList.add('active');
}

function closeManual() {
  document.getElementById('manual-modal').classList.remove('active');
}

// Initialize on load
window.addEventListener('click', function(event) {
  const modal = document.getElementById('manual-modal');
  if (event.target === modal) {
    closeManual();
  }
});