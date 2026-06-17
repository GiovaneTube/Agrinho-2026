// Variável para controlar qual página está ativa
let paginaAtual = "Inicio";

// Cores do tema (Agro Sustentável)
let corVerdeEscuro, corVerdeClaro, corPalha, corTexto;

// Variáveis para elementos de interação da página "Simulador"
let sliderProducao, sliderPreservacao;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  corVerdeEscuro = color(34, 76, 56);   
  corVerdeClaro  = color(76, 154, 42);  
  corPalha       = color(244, 241, 234); 
  corTexto       = color(40, 40, 40);
  
  sliderProducao = createSlider(0, 100, 50);
  sliderProducao.position(width / 2 - 100, 260);
  sliderProducao.hide();
  
  sliderPreservacao = createSlider(0, 100, 50);
  sliderPreservacao.position(width / 2 - 100, 320);
  sliderPreservacao.hide();

  // Lógica inversa automática
  sliderProducao.input(() => {
    sliderPreservacao.value(100 - sliderProducao.value());
  });

  sliderPreservacao.input(() => {
    sliderProducao.value(100 - sliderPreservacao.value());
  });
}

function draw() {
  background(corPalha);
  desenharMenu();
  
  if (paginaAtual === "Inicio") {
    ocultarControles();
    desenharInicio();
  } else if (paginaAtual === "Pilares") {
    ocultarControles();
    desenharPilares();
  } else if (paginaAtual === "Tecnologias") {
    ocultarControles();
    desenharTecnologias();
  } else if (paginaAtual === "Simulador") {
    mostrarControles();
    desenharSimulador();
  }
  
  desenharRodape();
}

function desenharMenu() {
  fill(corVerdeEscuro);
  noStroke();
  rect(0, 0, width, 70);
  
  fill(255);
  textSize(18);
  textAlign(LEFT, CENTER);
  textStyle(BOLD);
  text("AGRO FORTE & SUSTENTÁVEL", 30, 35);
  
  textAlign(CENTER, CENTER);
  textSize(14);
  textStyle(NORMAL);
  
  destacarBotao("Inicio", width - 360, 35);
  text("Início", width - 360, 35);
  
  destacarBotao("Pilares", width - 270, 35);
  text("Pilares", width - 270, 35);
  
  destacarBotao("Tecnologias", width - 160, 35);
  text("Tecnologias", width - 160, 35);
  
  destacarBotao("Simulador", width - 60, 35);
  text("Simulador", width - 60, 35);
}

function destacarBotao(nomePagina, x, y) {
  if (paginaAtual === nomePagina) {
    fill(corVerdeClaro);
    ellipse(x, y + 20, 6, 6);
    fill(255);
  } else {
    fill(200);
  }
}

function desenharInicio() {
  fill(corVerdeEscuro);
  textSize(32);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text("Agro forte, futuro sustentável", width / 2, 110);
  
  fill(corVerdeClaro);
  textSize(20);
  textStyle(ITALIC);
  text("O equilíbrio perfeito entre a produção e o meio ambiente.", width / 2, 165);
  
  fill(corTexto);
  textSize(15);
  textStyle(NORMAL);
  textAlign(CENTER, TOP);
  let textoIntro = "O grande desafio atual é alimentar uma população mundial em crescimento. Unir a alta produtividade do campo à conservação dos recursos naturais é uma necessidade econômica e de sobrevivência global.\n\nAtravés de práticas modernas, o desenvolvimento de uma agricultura de baixo carbono prova que é possível expandir a produção de alimentos protegendo biomas, florestas nativas e recursos hídricos cruciais.";
  text(textoIntro, width / 2 - 340, 210, 680);
  
  noStroke();
  fill(corVerdeClaro, 40);
  ellipse(width / 2, height / 2 + 150, 120, 120);
  fill(corVerdeClaro);
  ellipse(width / 2, height / 2 + 150, 80, 80);
  fill(corPalha);
  arc(width / 2 - 15, height / 2 + 150, 60, 60, 0, HALF_PI);
}

function desenharPilares() {
  fill(corVerdeEscuro);
  textSize(26);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text("Os 3 Pilares do Equilíbrio", width / 2, 110);
  
  let larguraCard = 240;
  let espacamento = 30;
  let inicioX = (width - (larguraCard * 3 + espacamento * 2)) / 2;
  let topoY = 170;
  
  desenharCard(inicioX, topoY, larguraCard, "1. Produtividade", "Uso de agricultura de precisão e inteligência artificial para produzir mais grãos e bioenergia utilizando rigorosamente a mesma área física de terra.");
  desenharCard(inicioX + larguraCard + espacamento, topoY, larguraCard, "2. Conservação", "Manutenção rigorosa de Áreas de Preservação Permanente (APPs) e do Código Florestal, garantindo a proteção ativa de nascentes e solos.");
  desenharCard(inicioX + (larguraCard + espacamento) * 2, topoY, larguraCard, "3. Baixo Carbono", "Práticas integradas como a ILPF (Integração Lavoura-Pecuária-Floresta) transformam o solo em um sequestrador ativo de gases estufa.");
}

function desenharCard(x, y, l, titulo, desc) {
  fill(255);
  stroke(220);
  strokeWeight(1);
  rect(x, y, l, 260, 8);
  
  noStroke();
  fill(corVerdeClaro);
  rect(x, y, l, 6, 8, 8, 0, 0);
  
  fill(corVerdeEscuro);
  textSize(16);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  text(titulo, x + 15, y + 25);
  
  fill(corTexto);
  textSize(13);
  textStyle(NORMAL);
  text(desc, x + 15, y + 60, l - 30);
}

function desenharTecnologias() {
  fill(corVerdeEscuro);
  textSize(26);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text("Tecnologia de Ponta no Campo", width / 2, 110);
  
  fill(corTexto);
  textSize(15);
  textStyle(NORMAL);
  text("A revolução digital converte dados brutos em inteligência ecológica operacional.", width / 2, 150);
  
  let larguraItem = 550;
  let posX = width / 2 - larguraItem / 2;
  let posY = 190;
  
  desenharItemTech(posX, posY, larguraItem, "🛸 Drones e Sensoriamento Remoto", "Mapeiam a saúde da vegetação por infravermelho. Permitem aplicar fertilizantes e água com precisão cirúrgica apenas nas plantas necessitadas.");
  desenharItemTech(posX, posY + 90, larguraItem, "🤖 Inteligência Artificial e IoT", "Sensores coletam umidade e química do solo em tempo real. Algoritmos preditivos cruzam dados para prever pragas com dias de antecedência.");
  desenharItemTech(posX, posY + 180, larguraItem, "🧬 Biotecnologia e Bioinsumos", "Sementes adaptadas a extremos climáticos como secas. O uso de bactérias fixadoras substitui adubos químicos fósseis por alternativas biológicas.");
}

function desenharItemTech(x, y, l, titulo, desc) {
  fill(255);
  stroke(210);
  rect(x, y, l, 75, 6);
  
  noStroke();
  fill(corVerdeEscuro);
  textSize(14);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  text(titulo, x + 15, y + 12);
  
  fill(corTexto);
  textSize(12);
  textStyle(NORMAL);
  text(desc, x + 15, y + 32, l - 30); 
}

function desenharSimulador() {
  fill(corVerdeEscuro);
  textSize(26);
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  text("Simulador de Balanço Sustentável", width / 2, 105);
  
  let prod = sliderProducao.value();
  let pres = sliderPreservacao.value();
  let statusSustentavel = "";
  let corStatus;
  
  if (prod >= 40 && prod <= 60) {
    statusSustentavel = "EQUILÍBRIO PERFEITO: Produtividade máxima protegendo os biomas! 🌱";
    corStatus = corVerdeClaro;
  } else if (prod > 60) {
    statusSustentavel = "ALERTA: Foco excessivo em produção. Risco de esgotamento ambiental! ⚠️";
    corStatus = color(200, 80, 80);
  } else {
    statusSustentavel = "ATENÇÃO: Produção baixa. Risco de escassez alimentar e inflação. 📉";
    corStatus = color(220, 140, 40);
  }
  
  fill(255);
  stroke(220);
  rect(width / 2 - 270, 145, 540, 50, 8);
  
  noStroke();
  fill(corStatus);
  textSize(13);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(statusSustentavel, width / 2, 170);
  
  fill(corTexto);
  textSize(13);
  textStyle(NORMAL);
  textAlign(LEFT, CENTER);
  text("Foco em Produção Agrícola: " + prod + "%", width / 2 - 100, 245);
  text("Foco em Preservação Ambiental: " + pres + "%", width / 2 - 100, 305);
  
  // Gráfico
  let graficoX = width / 2 - 150;
  let graficoY = 370;
  
  stroke(180);
  strokeWeight(2);
  line(graficoX - 20, graficoY + 110, graficoX + 320, graficoY + 110);
  
  noStroke();
  fill(180, 70, 70); 
  let alturaProd = map(prod, 0, 100, 0, 110);
  rect(graficoX + 30, graficoY + 110 - alturaProd, 60, alturaProd);
  
  fill(corVerdeClaro);
  let alturaPres = map(pres, 0, 100, 0, 110);
  rect(graficoX + 170, graficoY + 110 - alturaPres, 60, alturaPres);
  
  fill(corTexto);
  textSize(12);
  textAlign(CENTER, TOP);
  text("Eficiência\nProdutiva", graficoX + 60, graficoY + 120);
  text("Preservação\nAmbiental", graficoX + 200, graficoY + 120);
}

function desenharRodape() {
  fill(225);
  noStroke();
  rect(0, height - 40, width, 40);
  fill(100);
  textSize(12);
  textAlign(CENTER, CENTER);
  text("© 2026 Agro Forte, Futuro Sustentável - Desenvolvido via p5.js", width / 2, height - 20);
}

function mostrarControles() {
  sliderProducao.show();
  sliderPreservacao.show();
}

function ocultarControles() {
  sliderProducao.hide();
  sliderPreservacao.hide();
}

function mousePressed() {
  if (mouseY > 0 && mouseY < 70) {
    if (mouseX > width - 390 && mouseX < width - 320) paginaAtual = "Inicio";
    else if (mouseX > width - 310 && mouseX < width - 220) paginaAtual = "Pilares";
    else if (mouseX > width - 210 && mouseX < width - 110) paginaAtual = "Tecnologias";
    else if (mouseX > width - 100 && mouseX < width - 10) paginaAtual = "Simulador";
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  sliderProducao.position(width / 2 - 100, 260);
  sliderPreservacao.position(width / 2 - 100, 320);
}
