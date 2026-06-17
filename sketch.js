/**
 * PORTAL INTERATIVO: AGRO FORTE, FUTURO SUSTENTÁVEL
 * Desenvolvido para o Concurso Agrinho 2026
 * Interface de Alta Performance e Design Responsivo via p5.js
 */

let paginaAtual = "Inicio";

// Paleta de Cores Corporativa (Agro-Tech Premium)
let corPrimaria, corSecundaria, corFundo, corCardFundo, corTextoEscuro, corTextoMutado;
let corSucesso, corAlerta, corPerigo;

// Elementos de Interface do Simulador
let sliderProducao;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Definição da identidade visual
  corPrimaria     = color(20, 52, 38);     // Verde Floresta Profundo
  corSecundaria   = color(40, 167, 69);    // Verde Folha Ativo
  corFundo        = color(245, 247, 245);  // Cinza Claro Ecológico
  corCardFundo    = color(255, 255, 255);  // Branco Puro
  corTextoEscuro  = color(33, 37, 41);     // Grafite Industrial
  corTextoMutado  = color(108, 117, 125);  // Cinza Neutro Informativo
  
  // Cores de Status Semafórico
  corSucesso      = color(40, 167, 69);
  corAlerta       = color(255, 193, 7);
  corPerigo       = color(220, 53, 69);
  
  // Inicialização do Slider Centralizado
  sliderProducao = createSlider(0, 100, 50);
  configurarEstiloSlider();
}

function draw() {
  background(corFundo);
  
  // Roteamento de Páginas
  if (paginaAtual === "Inicio") {
    sliderProducao.hide();
    desenharPaginaInicio();
  } else if (paginaAtual === "Pilares") {
    sliderProducao.hide();
    desenharPaginaPilares();
  } else if (paginaAtual === "Tecnologias") {
    sliderProducao.hide();
    desenharPaginaTecnologias();
  } else if (paginaAtual === "ODS") {
    sliderProducao.hide();
    desenharPaginaODS();
  } else if (paginaAtual === "Simulador") {
    sliderProducao.show();
    desenharPaginaSimulador();
  }
  
  // Componentes Globais Fixos (Camada Superior)
  desenharHeaderNavegacao();
  desenharFooterInstitucional();
}

// --- COMPONENTE: HEADER DE NAVEGAÇÃO ---
function desenharHeaderNavegacao() {
  // Barra de fundo com efeito de elevação
  fill(corPrimaria);
  noStroke();
  rect(0, 0, width, 80);
  
  // Logo / Branding
  fill(255);
  textSize(22);
  textAlign(LEFT, CENTER);
  textStyle(BOLD);
  text("🌱 AGRO-TECH", 40, 40);
  
  textSize(12);
  textStyle(NORMAL);
  fill(corSecundaria);
  text("CONCURSO AGRINHO 2026", 195, 42);
  
  // Renderização dos Links Dinâmicos do Menu
  textAlign(CENTER, CENTER);
  textSize(14);
  
  desenharItemMenu("Inicio", "Início", width - 520);
  desenharItemMenu("Pilares", "Os Pilares", width - 410);
  desenharItemMenu("Tecnologias", "Inovação", width - 300);
  desenharItemMenu("ODS", "Metas ODS", width - 190);
  desenharItemMenu("Simulador", "Simulador Pro", width - 75);
}

function desenharItemMenu(idPagina, label, x) {
  let larguraItem = idPagina === "Simulador" ? 110 : 90;
  let isHover = mouseX > x - larguraItem/2 && mouseX < x + larguraItem/2 && mouseY > 22 && mouseY < 58;
  
  if (paginaAtual === idPagina) {
    fill(corSecundaria);
    rect(x - larguraItem/2, 22, larguraItem, 36, 8);
    fill(255);
    textStyle(BOLD);
  } else if (isHover) {
    fill(255, 25);
    rect(x - larguraItem/2, 22, larguraItem, 36, 8);
    fill(255);
    cursor(HAND);
  } else {
    fill(230, 235, 230);
    textStyle(NORMAL);
  }
  
  noStroke();
  text(label, x, 40);
  textStyle(NORMAL);
  if (!isHover && mouseX > 0) cursor(ARROW);
}

// --- PÁGINA 1: INÍCIO (LANDING PAGE) ---
function desenharPaginaInicio() {
  // Seção Hero (Título Principal)
  fill(corPrimaria);
  textSize(42);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text("O Futuro do Campo é Sustentável", width / 2, 125);
  
  fill(corSecundaria);
  textSize(18);
  textStyle(ITALIC);
  text("Alimentando o mundo em perfeita harmonia com a preservação ambiental.", width / 2, 185);
  
  // Painel Editorial Central
  fill(corCardFundo);
  stroke(228, 232, 228);
  strokeWeight(1);
  rect(width / 2 - 450, 230, 900, 190, 16);
  
  noStroke();
  fill(corTextoEscuro);
  textSize(15.5);
  textStyle(NORMAL);
  textAlign(LEFT, TOP); // <--- Corrigido de JUSTIFY para LEFT com sucesso!
  let textoCorpo = "A agricultura moderna enfrenta o maior desafio da história humana: expandir a oferta global de alimentos para uma população estimada em 10 bilhões de pessoas até 2050, sem avançar sobre as florestas nativas. Através da tecnologia, o Brasil lidera essa revolução verde. A integração entre ciência, automação e respeito às leis ambientais prova que a produtividade no campo e a conservação ecológica não são opostas, mas sim aliadas vitais para a nossa existência.";
  text(textoCorpo, width / 2 - 410, 260, 820);
  
  // Seção de Indicadores de Impacto Real (KPIs Profissionais)
  let kpiY = 460;
  let kpiLargura = 270;
  let kpiEspaco = 30;
  let startKpiX = (width - (kpiLargura * 3 + kpiEspaco * 2)) / 2;
  
  desenharPainelKPI(startKpiX, kpiY, kpiLargura, "+30%", "Eficiência de Production com IA");
  desenharPainelKPI(startKpiX + kpiLargura + kpiEspaco, kpiY, kpiLargura, "-20%", "Redução de Gases Estufa");
  desenharPainelKPI(startKpiX + (kpiLargura + kpiEspaco) * 2, kpiY, kpiLargura, "100%", "Conformidade Florestal");
}

function desenharPainelKPI(x, y, l, metric, label) {
  fill(corCardFundo);
  stroke(230);
  rect(x, y, l, 100, 12);
  
  noStroke();
  fill(corSecundaria);
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, TOP);
  text(metric, x + l/2, y + 20);
  
  fill(corTextoMutado);
  textSize(12.5);
  textStyle(NORMAL);
  text(label, x + l/2, y + 62);
}

// --- PÁGINA 2: OS 3 PILARES ---
function desenharPaginaPilares() {
  fill(corPrimaria);
  textSize(32);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text("Framework de Sustentabilidade Agropecuária", width / 2, 130);
  
  let lCard = 290;
  let esp = 25;
  let startX = (width - (lCard * 3 + esp * 2)) / 2;
  let yCard = 200;
  
  desenharCardPremium(startX, yCard, lCard, "📈  PRODUTIVIDADE", "Verticalização da Produção", "Consiste em produzir mais safras por hectare utilizando mapeamento de solo por satélite e fertilização inteligente. O objetivo principal é abastecer mercados globais sem a necessidade de converter novas áreas de mata nativa em pastagens.");
  desenharCardPremium(startX + lCard + esp, yCard, lCard, "💧  CONSERVAÇÃO", "Proteção de Recursos Hídricos", "Foco absoluto no isolamento técnico de Áreas de Preservação Permanente (APPs) e matas ciliares. Proteger as bacias e lençóis freáticos garante a estabilidade do ciclo de chuvas e resguarda o ecossistema local.");
  desenharCardPremium(startX + (lCard + esp) * 2, yCard, lCard, "🌱  BAIXO CARBONO", "Neutralização e Manejo", "Implementação de sistemas avançados como o Plantio Direto e a ILPF (Integração Lavoura-Pecuária-Floresta). Essas dinâmicas capturam o CO2 atmosférico e o fixam diretamente na biomassa do solo, combatendo o aquecimento global.");
}

function desenharCardPremium(x, y, l, titulo, subtitulo, corpo) {
  let mouseSobre = mouseX > x && mouseX < x + l && mouseY > y && mouseY < y + 320;
  
  fill(corCardFundo);
  // Se o mouse estiver em cima, cria uma borda mais escura sutil (Efeito profissional de foco)
  stroke(mouseSobre ? color(180, 190, 180) : color(220));
  strokeWeight(mouseSobre ? 1.5 : 1);
  rect(x, y, l, 320, 16);
  
  // Detalhe de cor lateral de marcação
  fill(corSecundaria);
  noStroke();
  rect(x, y, 6, 320, 16, 0, 0, 16);
  
  fill(corPrimaria);
  textSize(16);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  text(titulo, x + 25, y + 30);
  
  fill(corSecundaria);
  textSize(12);
  textStyle(BOLD);
  text(subtitulo, x + 25, y + 55);
  
  fill(corTextoEscuro);
  textSize(13.5);
  textStyle(NORMAL);
  text(corpo, x + 25, y + 90, l - 45);
}

// --- PÁGINA 3: INOVAÇÃO TECNOLÓGICA ---
function desenharPaginaTecnologias() {
  fill(corPrimaria);
  textSize(32);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text("A Era da Agro-Inteligência", width / 2, 125);
  
  let lItem = 750;
  let pX = width / 2 - lItem / 2;
  let pY = 190;
  
  desenharLinhaTech(pX, pY, lItem, "🛸  Sensoriamento Aéreo & Drones", "Aeronaves remotamente pilotadas monitoram anomalias na lavoura através de índices NDVI (Infravermelho). Isso permite intervenções cirúrgicas localizadas, diminuindo o uso de agroquímicos em até 40%.");
  desenharLinhaTech(pX, pY + 100, lItem, "🤖  Internet das Coisas (IoT) & Algoritmos", "Estações meteorológicas e sensores subterrâneos processam a umidade do solo a cada segundo. Modelos de IA analisam os dados para prever surtos de pragas antes mesmo que aconteçam.");
  desenharLinhaTech(pX, pY + 200, lItem, "🧬  Bioinsumos & Engenharia Genética", "Substituição progressiva de fertilizantes minerais sintéticos por inoculantes biológicos baseados em microrganismos. Sementes de última geração resistem a secas intensas, mantendo a segurança alimentar.");
}

function desenharLinhaTech(x, y, l, titulo, desc) {
  fill(corCardFundo);
  stroke(225);
  rect(x, y, l, 85, 12);
  
  noStroke();
  fill(corPrimaria);
  textSize(15.5);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  text(titulo, x + 25, y + 15);
  
  fill(corTextoEscuro);
  textSize(13);
  textStyle(NORMAL);
  text(desc, x + 25, y + 38, l - 50);
}

// --- PÁGINA 4: COMPATIBILIDADE ODS ---
function desenharPaginaODS() {
  fill(corPrimaria);
  textSize(32);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text("Alinhamento com os Objetivos de Sustentabilidade da ONU", width / 2, 125);
  
  let lBox = 420;
  let topY = 200;
  let esX = (width - (lBox * 2 + 40)) / 2;
  
  desenharCaixaODS(esX, topY, lBox, "🌾  ODS 2: Fome Zero e Agro Sustentável", "Aumentar a produtividade agrícola através de práticas resilientes garante a produção contínua de alimentos acessíveis, promovendo a estabilidade alimentar mundial.");
  desenharCaixaODS(esX + lBox + 40, topY, lBox, "💧  ODS 6: Água Potável e Saneamento", "Mapear e conservar nascentes e APPs agrícolas previne o assoreamento dos rios e protege as bacias de água doce, preservando a vida aquática e o consumo humano.");
  desenharCaixaODS(esX, topY + 150, lBox, "🛰️  ODS 9: Inovação e Infraestrutura", "A introdução de robótica, sensores IoT e conectividade no ecossistema rural cria uma infraestrutura forte, integrando o campo na vanguarda da revolução digital.");
  desenharCaixaODS(esX + lBox + 40, topY + 150, lBox, "🌍  ODS 13: Ação Contra a Mudança do Clima", "A expansão de técnicas de Agricultura de Baixo Carbono atua diretamente no sequestro de toneladas de CO2 equivalente, amortecendo os impactos climáticos.");
}

function desenharCaixaODS(x, y, l, titulo, desc) {
  fill(corCardFundo);
  stroke(220);
  rect(x, y, l, 120, 12);
  
  noStroke();
  fill(corPrimaria);
  textSize(14);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  text(titulo, x + 20, y + 18);
  
  fill(corTextoEscuro);
  textSize(12.5);
  textStyle(NORMAL);
  text(desc, x + 20, y + 42, l - 40);
}

// --- PÁGINA 5: SIMULADOR INTERATIVO (PRO) ---
function desenharPaginaSimulador() {
  fill(corPrimaria);
  textSize(30);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text("Simulador Analítico de Equilíbrio Ecológico", width / 2, 125);
  
  let prodVal = sliderProducao.value();
  let presVal = 100 - prodVal; // Lógica inversa automática incorporada
  
  let statusStr = "";
  let corStatus = corSucesso;
  let analiseProfunda = "";
  
  // Modelagem matemática das consequências simuladas
  if (prodVal >= 45 && prodVal <= 55) {
    statusStr = "MÁXIMO EQUILÍBRIO OPERACIONAL (SUSTENTÁVEL) 🌱🏆";
    corStatus = corSucesso;
    analiseProfunda = "Excelente! Você atingiu o patamar perfeito defendido pelo Agrinho. O uso correto de tecnologia intensiva permite safras robustas e geração de renda real sem avançar um único centímetro em reservas ecológicas. O solo mantém sua microbiota rica e os recursos de água permanecem seguros para o futuro.";
  } else if (prodVal > 55 && prodVal <= 75) {
    statusStr = "ALERTA: ESTRESSE AMBIENTAL DE MÉDIO PRAZO ⚠️";
    corStatus = corAlerta;
    analiseProfunda = "Atenção: Priorizar a expansão produtiva imediata sem o suporte de bioinsumos ou rotação de culturas inicia o esgotamento químico da terra. Reduza a pressão produtiva e integre sistemas de ILPF para evitar a degradação e perda de fertilidade natural.";
  } else if (prodVal > 75) {
    statusStr = "COLAPSO ECOSSISTÊMICO E FALÊNCIA DO CAMPO 🚨🚨";
    corStatus = corPerigo;
    analiseProfunda = "Crise Crítica! A exploração predatória sem áreas de conservação eliminou os polinizadores locais e causou erosão severa do relevo. Sem árvores para regular as microclimas, o campo sofrerá com quebras totais de safra devido à seca extrema. O lucro imediato gerou destruição estrutural permanente.";
  } else if (prodVal < 45 && prodVal >= 25) {
    statusStr = "ATENÇÃO: INSUFICIÊNCIA DE MERCADO E INFLAÇÃO 📉🥖";
    corStatus = corAlerta;
    analiseProfunda = "Risco Econômico: Embora a área florestal esteja completamente intacta, a produção física de grãos e carnes caiu abaixo do limite de consumo. Isso provoca escassez de alimentos básicos nas cidades, aumento drástico nos preços de mercado e dependência direta de importações externas.";
  } else {
    statusStr = "CRISE DE ABASTECIMENTO E INSEGURANÇA ALIMENTAR SEVERA 🛑";
    corStatus = corPerigo;
    analiseProfunda = "Paralisia Econômica: O bloqueio de quase toda a atividade produtiva causou uma crise humanitária de falta de comida. Lembre-se: o desenvolvimento sustentável não significa impedir o agro, mas sim torná-lo inteligente! O ser humano faz parte do planeta e precisa de calorias para subsistir.";
  }
  
  // Painel de Status
  fill(corStatus);
  noStroke();
  rect(width / 2 - 380, 175, 760, 45, 8);
  
  fill(255);
  textSize(14);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(statusStr, width / 2, 197);
  
  // Indicadores Dinâmicos Internos
  fill(corTextoEscuro);
  textSize(14);
  textStyle(BOLD);
  textAlign(LEFT, CENTER);
  text("🚜 Intensidade da Atividade Agrícola: " + prodVal + "%", width / 2 - 250, 255);
  text("🌳 Índice de Conservação Florestal: " + presVal + "%", width / 2 - 250, 305);
  
  // Bloco de Análise Avançada
  fill(corCardFundo);
  stroke(220);
  rect(width / 2 - 380, 350, 760, 115, 12);
  noStroke();
  fill(corTextoEscuro);
  textSize(13);
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  text(analiseProfunda, width / 2 - 355, 368, 710);
  
  // RENDERIZAÇÃO DOS GRÁFICOS DE COORDENADAS DINÂMICAS
  let gX = width / 2 - 250;
  let gY = height - 190;
  
  if (gY > 480) {
    stroke(200);
    strokeWeight(1.5);
    line(gX - 10, gY + 100, gX + 510, gY + 100); // Eixo X horizontal
    
    noStroke();
    // Indicador 1: Lucratividade Comercial (Baseado em Produção)
    fill(184, 134, 11);
    let hLucro = map(prodVal, 0, 100, 0, 90);
    rect(gX + 40, gY + 100 - hLucro, 65, hLucro, 6, 6, 0, 0);
    
    // Indicador 2: Saúde da Biodiversidade (Baseado em Preservação)
    fill(0, 128, 128);
    let hBio = map(presVal, 0, 100, 0, 90);
    rect(gX + 215, gY + 100 - hBio, 65, hBio, 6, 6, 0, 0);
    
    // Indicador 3: Pegada de Carbono Atmosférico (Inversa à Preservação)
    fill(112, 128, 144);
    let hCarb = map(prodVal, 0, 100, 5, 90);
    rect(gX + 390, gY + 100 - hCarb, 65, hCarb, 6, 6, 0, 0);
    
    // Exibição do valor em texto no topo de cada barra (Estilo Dashboard Pro)
    fill(corTextoEscuro);
    textSize(11);
    textAlign(CENTER, BOTTOM);
    text(floor(hLucro * 1.1) + "%", gX + 72, gY + 95 - hLucro);
    text(presVal + "%", gX + 247, gY + 95 - hBio);
    text(prodVal + "%", gX + 422, gY + 95 - hCarb);
    
    // Textos das Legendas do Gráfico Analítico
    textSize(12);
    textStyle(BOLD);
    textAlign(CENTER, TOP);
    text("Retorno\nFinanceiro", gX + 72, gY + 108);
    text("Saúde da\nBiodiversidade", gX + 247, gY + 108);
    text("Pegada de\nCarbono (CO2)", gX + 422, gY + 108);
  }
}

// --- COMPONENTE: FOOTER INSTITUCIONAL ---
function desenharFooterInstitucional() {
  fill(230, 235, 230);
  noStroke();
  rect(0, height - 35, width, 35);
  
  fill(corTextoMutado);
  textSize(11.5);
  textAlign(CENTER, CENTER);
  textStyle(NORMAL);
  text("© 2026 Portal Agro-Tech Interativo - Trabalho Registrado para o Concurso Estadual Agrinho - Desenvolvido via p5.js", width / 2, height - 17);
}

// --- CONTROLES AUXILIARES E RESPONSIVIDADE ---
function configurarEstiloSlider() {
  sliderProducao.position(width / 2 - 250, 270);
  sliderProducao.style('width', '500px');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  configurarEstiloSlider();
}

function mousePressed() {
  // Mapeamento lógico dos cliques no Header
  if (mouseY > 22 && mouseY < 58) {
    if (mouseX > width - 565 && mouseX < width - 475) paginaAtual = "Inicio";
    else if (mouseX > width - 455 && mouseX < width - 365) paginaAtual = "Pilares";
    else if (mouseX > width - 345 && mouseX < width - 255) paginaAtual = "Tecnologias";
    else if (mouseX > width - 235 && mouseX < width - 145) paginaAtual = "ODS";
    else if (mouseX > width - 130 && mouseX < width - 20) paginaAtual = "Simulador";
  }
}