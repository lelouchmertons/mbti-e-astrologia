import { SwissEphemeris, Planet, LunarPoint, CalculationFlag } from "../vendor/swisseph/swisseph-browser.js";

const form = document.querySelector("#birth-chart-form");
if (!form) throw new Error("Formulário do mapa astral não encontrado.");

const locationSelect = document.querySelector("#chart-location");
const customLocation = document.querySelector("#chart-custom-location");
const resultNode = document.querySelector("#chart-result");
const errorNode = document.querySelector("#chart-error");
const submitButton = document.querySelector("#chart-submit");

const signs = [
  ["Áries","♈"],["Touro","♉"],["Gêmeos","♊"],["Câncer","♋"],
  ["Leão","♌"],["Virgem","♍"],["Libra","♎"],["Escorpião","♏"],
  ["Sagitário","♐"],["Capricórnio","♑"],["Aquário","♒"],["Peixes","♓"]
];

const bodies = [
  ["Sol","☉",Planet.Sun], ["Lua","☽",Planet.Moon], ["Mercúrio","☿",Planet.Mercury],
  ["Vênus","♀",Planet.Venus], ["Marte","♂",Planet.Mars], ["Júpiter","♃",Planet.Jupiter],
  ["Saturno","♄",Planet.Saturn], ["Urano","♅",Planet.Uranus], ["Netuno","♆",Planet.Neptune],
  ["Plutão","♇",Planet.Pluto], ["Nodo Norte","☊",LunarPoint.TrueNode]
];

const aspectDefinitions = [
  ["Conjunção",0,"☌",8], ["Sextil",60,"⚹",4], ["Quadratura",90,"□",6],
  ["Trígono",120,"△",6], ["Oposição",180,"☍",8]
];

const firstVisionMeanings = {
  "Áries": {
    sun: "constrói identidade pela iniciativa, pela coragem de começar e pela liberdade de agir. Na prática, costuma sentir-se mais inteiro quando pode decidir, experimentar e abrir caminho, embora precise aprender a sustentar aquilo que inicia.",
    moon: "processa emoções por meio de reação e movimento. Quando algo incomoda, tende a precisar agir, falar ou mudar a situação rapidamente; guardar a irritação por muito tempo costuma ser mais difícil do que enfrentá-la.",
    asc: "entra nas situações de forma direta, rápida e afirmativa. Pode causar a primeira impressão de alguém independente e competitivo, mesmo quando outras partes do mapa são delicadas ou reservadas.",
    mc: "busca reconhecimento por pioneirismo, autonomia e capacidade de decisão. Caminhos profissionais com desafio, liderança ou espaço para iniciar projetos tendem a tornar essa imagem pública mais visível."
  },
  "Touro": {
    sun: "constrói identidade por estabilidade, continuidade e resultados concretos. Na prática, tende a valorizar segurança, conforto e tempo para consolidar escolhas, resistindo quando uma mudança parece apressada ou sem fundamento.",
    moon: "precisa de previsibilidade, presença física e ritmos confiáveis para sentir segurança emocional. Afeto pode ser demonstrado por cuidado constante, comida, toque, conforto e disponibilidade prática.",
    asc: "aproxima-se da vida com calma, observação e firmeza. Pode transmitir serenidade e confiabilidade, mas também parecer resistente quando precisa mudar de direção antes de se sentir preparado.",
    mc: "procura construir reputação sólida e valor duradouro. Pode destacar-se em atividades que exigem constância, administração de recursos, senso estético ou capacidade de transformar esforço em algo palpável."
  },
  "Gêmeos": {
    sun: "constrói identidade por curiosidade, linguagem e circulação de ideias. Na prática, precisa aprender, conversar e comparar perspectivas para sentir que está vivo, podendo interessar-se por várias frentes ao mesmo tempo.",
    moon: "organiza emoções ao nomeá-las e compartilhá-las. Conversar, escrever ou mudar de ambiente ajuda a compreender o que sente; o excesso de estímulos, porém, pode transformar inquietação mental em ansiedade.",
    asc: "entra nas experiências fazendo perguntas, observando sinais e criando conexões. Costuma parecer comunicativo, leve e adaptável, mesmo que interiormente seja mais estável ou intenso.",
    mc: "é reconhecido por comunicação, versatilidade e capacidade de conectar informações. Ensino, escrita, comércio, mídia e funções com variedade podem expressar bem essa direção pública."
  },
  "Câncer": {
    sun: "constrói identidade por vínculos, memória e proteção. Na prática, tende a medir escolhas pelo sentimento de pertencimento e pela possibilidade de cuidar de pessoas, espaços ou histórias importantes.",
    moon: "encontra-se em um signo que amplia sua linguagem natural de acolhimento, intimidade e memória. Precisa sentir confiança antes de baixar a guarda e pode captar o clima emocional de um ambiente antes mesmo de alguém dizer o que aconteceu.",
    asc: "aproxima-se do mundo com sensibilidade e prudência. Um Ascendente em Câncer pode observar primeiro, proteger a própria intimidade e demonstrar cuidado por gestos concretos; por isso, a pessoa pode parecer reservada no início e muito acolhedora depois que confia.",
    mc: "busca uma atuação pública que gere pertencimento, cuidado ou continuidade. Pode ser reconhecido pela capacidade de acolher, preservar memórias, compreender necessidades coletivas ou criar ambientes seguros."
  },
  "Leão": {
    sun: "expressa com força a busca solar por identidade, criatividade e reconhecimento. Na prática, cresce quando coloca coração no que faz, assume autoria e permite que sua presença inspire, sem depender de aplauso constante.",
    moon: "precisa sentir que seu afeto é visto e valorizado. Demonstra emoção com calor, lealdade e generosidade, mas pode sofrer quando se sente ignorado ou quando não encontra espaço para expressar orgulho e criatividade.",
    asc: "entra nas situações com presença, calor e desejo de imprimir uma marca pessoal. Pode parecer confiante ou teatral mesmo quando há insegurança interna, porque seu modo espontâneo de ocupar espaço chama atenção.",
    mc: "procura reconhecimento por criatividade, liderança e autoria. Tende a florescer quando pode representar uma ideia, conduzir pessoas ou mostrar publicamente algo que considera genuinamente seu."
  },
  "Virgem": {
    sun: "constrói identidade pelo aperfeiçoamento, pela utilidade e pelo discernimento. Na prática, sente satisfação ao compreender detalhes e tornar algo mais claro ou funcional, mas precisa evitar transformar autocrítica em medida permanente de valor.",
    moon: "busca segurança emocional por organização, cuidado concreto e compreensão do que pode ser feito. Em momentos difíceis, tende a analisar, arrumar ou ajudar; nem toda emoção, porém, precisa ser resolvida como um problema.",
    asc: "entra nas experiências observando detalhes, riscos e necessidades práticas. Pode parecer discreto, competente e criterioso, revelando confiança aos poucos por meio de consistência e atenção.",
    mc: "é reconhecido por precisão, serviço e melhoria de processos. Trabalhos que exigem análise, método, saúde, edição ou cuidado técnico podem dar forma a essa vocação."
  },
  "Libra": {
    sun: "constrói identidade por relações, comparação e busca de equilíbrio. Na prática, aprende sobre si ao dialogar com o outro e costuma considerar vários lados antes de decidir, precisando preservar uma vontade própria dentro dos acordos.",
    moon: "precisa de reciprocidade, beleza e conversas equilibradas para sentir paz. Conflitos prolongados pesam bastante, mas evitar toda discordância pode afastá-lo do que realmente sente.",
    asc: "aproxima-se das pessoas com diplomacia, cordialidade e atenção à resposta do ambiente. Pode transmitir elegância e facilidade social, mesmo quando internamente vive decisões mais intensas.",
    mc: "procura reconhecimento por mediação, senso estético e capacidade de construir alianças. Negociação, arte, direito, relações públicas e trabalhos em parceria podem tornar essa direção visível."
  },
  "Escorpião": {
    sun: "constrói identidade por profundidade, lealdade e transformação. Na prática, prefere compreender o que está por trás das aparências e tende a envolver-se intensamente, aprendendo a usar poder e vulnerabilidade sem cair em controle excessivo.",
    moon: "vive emoções com intensidade, memória e necessidade de confiança profunda. Pode esconder o que sente até ter certeza da segurança do vínculo; quando confia, entrega-se com grande lealdade.",
    asc: "entra nas experiências com observação, reserva e percepção do que não está sendo dito. Pode causar uma impressão magnética ou difícil de decifrar, mesmo que outras posições sejam abertas e comunicativas.",
    mc: "busca impacto por investigação, estratégia e capacidade de atravessar crises. Pode ser reconhecido por lidar com assuntos complexos, recursos compartilhados, pesquisa, cura ou transformação institucional."
  },
  "Sagitário": {
    sun: "constrói identidade por expansão, sentido e liberdade de explorar. Na prática, precisa enxergar horizonte nas escolhas, seja por estudo, viagem, ensino ou contato com ideias que ampliem sua visão de mundo.",
    moon: "recupera equilíbrio emocional quando encontra espaço, movimento e uma perspectiva maior para o que vive. Humor, aprendizado e mudança de cenário podem ajudar, embora seja importante não transformar otimismo em fuga do desconforto.",
    asc: "entra nas situações com franqueza, entusiasmo e disposição para experimentar. Pode parecer espontâneo, bem-humorado e aventureiro, mesmo quando outras partes do mapa preferem controle e rotina.",
    mc: "busca reconhecimento por visão, conhecimento e capacidade de abrir caminhos. Ensino, viagens, publicação, direito ou projetos internacionais podem expressar essa direção pública."
  },
  "Capricórnio": {
    sun: "constrói identidade por responsabilidade, domínio e resultados de longo prazo. Na prática, tende a levar compromissos a sério e a medir o progresso pelo que consegue sustentar, precisando lembrar que valor pessoal não depende apenas de desempenho.",
    moon: "procura segurança emocional por autocontrole, estrutura e competência. Pode demonstrar afeto assumindo responsabilidades e oferecendo soluções, ainda que leve tempo para expor necessidades e pedir apoio.",
    asc: "aproxima-se do mundo com cautela, propósito e leitura das exigências da situação. Pode parecer maduro, reservado ou muito responsável desde cedo, mesmo quando interiormente é mais brincalhão.",
    mc: "encontra um terreno natural para ambição, construção de autoridade e reconhecimento gradual. A imagem pública cresce pela disciplina, pela confiabilidade e pela capacidade de assumir responsabilidades duradouras."
  },
  "Aquário": {
    sun: "constrói identidade por independência mental, visão coletiva e questionamento de padrões. Na prática, precisa sentir que pode pensar por conta própria e contribuir com algo diferente, sem perder o contato afetivo com as pessoas reais por trás das ideias.",
    moon: "processa emoções buscando espaço, compreensão e alguma distância para observar. Pode cuidar por meio de amizade, respeito e aceitação das diferenças, embora nem sempre demonstre vulnerabilidade imediatamente.",
    asc: "entra nas situações de modo original, independente e pouco previsível. Pode parecer diferente do grupo ou difícil de enquadrar, mesmo quando outras posições procuram tradição e estabilidade.",
    mc: "busca reconhecimento por inovação, redes e contribuição coletiva. Tecnologia, pesquisa, movimentos sociais e trabalhos que desafiem modelos antigos podem expressar essa vocação."
  },
  "Peixes": {
    sun: "constrói identidade por imaginação, sensibilidade e ligação com algo maior do que o próprio interesse. Na prática, tende a perceber nuances e possibilidades simbólicas, precisando de limites para que empatia não se transforme em dispersão.",
    moon: "capta emoções com grande permeabilidade e pode absorver o clima ao redor. Silêncio, arte, espiritualidade ou descanso ajudam a separar o que sente daquilo que recebeu dos outros.",
    asc: "aproxima-se do mundo de forma receptiva, intuitiva e adaptável. Pode parecer gentil, sonhador ou difícil de definir, porque responde ao ambiente antes de impor uma direção fixa.",
    mc: "busca uma atuação pública movida por imaginação, cuidado ou inspiração. Arte, saúde, espiritualidade e trabalhos de bastidores podem dar forma a essa direção, desde que existam limites e objetivos concretos."
  }
};

let enginePromise;

locationSelect.addEventListener("change", () => {
  customLocation.hidden = locationSelect.value !== "custom";
  customLocation.querySelectorAll("input").forEach(input => input.required = locationSelect.value === "custom");
});

form.addEventListener("submit", async event => {
  event.preventDefault();
  errorNode.hidden = true;
  resultNode.hidden = true;
  submitButton.disabled = true;
  submitButton.textContent = "PREPARANDO O CÉU...";
  try {
    const input = readChartInput();
    const utcDate = wallTimeToUtc(input.date, input.time, input.timeZone);
    const swe = await getEngine();
    const jd = swe.dateToJulianDay(utcDate);
    const flags = CalculationFlag.SwissEphemeris | CalculationFlag.Speed;
    const positions = bodies.map(([name,glyph,body]) => ({name,glyph,body,...swe.calculatePosition(jd, body, flags)}));
    const houses = swe.calculateHouses(jd, input.latitude, input.longitude, input.houseSystem);
    const aspects = calculateAspects(positions);
    renderChart({input,utcDate,jd,positions,houses,aspects});
    resultNode.hidden = false;
    resultNode.scrollIntoView({behavior:"smooth",block:"start"});
  } catch (error) {
    errorNode.textContent = readableError(error);
    errorNode.hidden = false;
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "CALCULAR MEU MAPA";
  }
});

async function getEngine() {
  if (!enginePromise) {
    enginePromise = (async () => {
      const swe = new SwissEphemeris();
      await swe.init(new URL("../vendor/swisseph/swisseph.wasm", import.meta.url).href);
      await swe.loadEphemerisFiles([
        {name:"sepl_18.se1",url:new URL("../vendor/swisseph/ephe/sepl_18.se1",import.meta.url).href},
        {name:"semo_18.se1",url:new URL("../vendor/swisseph/ephe/semo_18.se1",import.meta.url).href}
      ]);
      return swe;
    })();
  }
  return enginePromise;
}

function readChartInput() {
  const date = document.querySelector("#chart-date").value;
  const time = document.querySelector("#chart-time").value;
  if (!date || !time || !locationSelect.value) throw new Error("Preencha data, horário e local de nascimento.");
  let latitude;
  let longitude;
  let timeZone;
  let place;
  if (locationSelect.value === "custom") {
    latitude = Number(document.querySelector("#chart-latitude").value);
    longitude = Number(document.querySelector("#chart-longitude").value);
    timeZone = document.querySelector("#chart-timezone").value.trim();
    place = "Local personalizado";
  } else {
    const parts = locationSelect.value.split("|");
    latitude = Number(parts[0]);
    longitude = Number(parts[1]);
    timeZone = parts[2];
    place = parts[3];
  }
  if (!Number.isFinite(latitude) || latitude < -90 || latitude > 90) throw new Error("Informe uma latitude válida entre -90 e 90.");
  if (!Number.isFinite(longitude) || longitude < -180 || longitude > 180) throw new Error("Informe uma longitude válida entre -180 e 180.");
  validateTimeZone(timeZone);
  return {
    name: document.querySelector("#chart-name").value.trim() || "Mapa natal",
    date,time,latitude,longitude,timeZone,place,
    houseSystem: document.querySelector("#chart-house-system").value
  };
}

function validateTimeZone(timeZone) {
  if (!timeZone) throw new Error("Informe o fuso IANA do local de nascimento.");
  try { new Intl.DateTimeFormat("pt-BR", {timeZone}).format(new Date()); }
  catch { throw new Error("O fuso informado não foi reconhecido. Use um nome como America/Sao_Paulo."); }
}

function wallTimeToUtc(dateText, timeText, timeZone) {
  const [year,month,day] = dateText.split("-").map(Number);
  const [hour,minute] = timeText.split(":").map(Number);
  const target = Date.UTC(year,month-1,day,hour,minute,0);
  let guess = target;
  for (let i=0;i<3;i++) guess = target - zoneOffset(new Date(guess), timeZone);
  return new Date(guess);
}

function zoneOffset(date, timeZone) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone, year:"numeric", month:"2-digit", day:"2-digit",
    hour:"2-digit", minute:"2-digit", second:"2-digit", hourCycle:"h23"
  }).formatToParts(date).reduce((all,part) => (all[part.type]=part.value,all), {});
  return Date.UTC(+parts.year,+parts.month-1,+parts.day,+parts.hour,+parts.minute,+parts.second) - date.getTime();
}

function positionLabel(longitude) {
  const normalized = normalize(longitude);
  const signIndex = Math.floor(normalized / 30);
  const within = normalized - signIndex * 30;
  const degree = Math.floor(within);
  const minute = Math.floor((within-degree)*60);
  return {sign:signs[signIndex][0],glyph:signs[signIndex][1],degree,minute,text:`${degree}°${String(minute).padStart(2,"0")}′ ${signs[signIndex][0]}`};
}

function normalize(value) { return (value % 360 + 360) % 360; }
function forward(from,to) { return normalize(to-from); }

function houseFor(longitude, cusps) {
  for (let house=1;house<=12;house++) {
    const next = house === 12 ? cusps[1] : cusps[house+1];
    if (forward(cusps[house], longitude) < forward(cusps[house], next)) return house;
  }
  return 1;
}

function calculateAspects(positions) {
  const aspects = [];
  for (let i=0;i<positions.length;i++) for (let j=i+1;j<positions.length;j++) {
    const raw = Math.abs(positions[i].longitude-positions[j].longitude);
    const distance = Math.min(raw,360-raw);
    for (const [name,angle,glyph,orb] of aspectDefinitions) {
      const difference = Math.abs(distance-angle);
      if (difference <= orb) aspects.push({first:positions[i],second:positions[j],name,glyph,orb:difference});
    }
  }
  return aspects.sort((a,b) => a.orb-b.orb);
}

function renderChart(data) {
  const {input,utcDate,positions,houses,aspects} = data;
  const asc = positionLabel(houses.ascendant);
  const mc = positionLabel(houses.mc);
  const sun = positionLabel(positions[0].longitude);
  const moon = positionLabel(positions[1].longitude);
  const planetRows = positions.map(planet => {
    const place = positionLabel(planet.longitude);
    const house = houseFor(planet.longitude,houses.cusps);
    return `<tr><th><span>${planet.glyph}</span>${planet.name}</th><td><strong>${place.glyph} ${place.sign}</strong><small>${place.degree}° ${String(place.minute).padStart(2,"0")}′</small></td><td>Casa ${house}</td><td>${planet.longitudeSpeed < 0 ? "Retrógrado" : "Direto"}</td></tr>`;
  }).join("");
  const houseRows = Array.from({length:12},(_,index) => {
    const place = positionLabel(houses.cusps[index+1]);
    return `<li><span>Casa ${index+1}</span><strong>${place.glyph} ${place.text}</strong></li>`;
  }).join("");
  const aspectRows = aspects.length ? aspects.map(aspect => `<li><span>${aspect.first.glyph} ${aspect.first.name}</span><b>${aspect.glyph}</b><span>${aspect.second.glyph} ${aspect.second.name}</span><small>${aspect.name} · orbe ${aspect.orb.toFixed(1)}°</small></li>`).join("") : "<li>Nenhum aspecto maior dentro dos orbes selecionados.</li>";
  resultNode.innerHTML = `
    <header class="chart-result-hero"><p>MAPA CALCULADO NO SEU APARELHO</p><h2>${escapeHtml(input.name)}</h2><span>${formatLocalInput(input)} · ${escapeHtml(input.place)}</span></header>
    <div class="big-three"><article><span>SOL</span><strong>${sun.glyph} ${sun.sign}</strong><small>${sun.text}</small></article><article><span>LUA</span><strong>${moon.glyph} ${moon.sign}</strong><small>${moon.text}</small></article><article><span>ASCENDENTE</span><strong>${asc.glyph} ${asc.sign}</strong><small>${asc.text}</small></article><article><span>MEIO DO CÉU</span><strong>${mc.glyph} ${mc.sign}</strong><small>${mc.text}</small></article></div>
    <div class="chart-wheel-wrap">${chartWheel(positions,houses)}<div><h3>Como ler esta primeira visão</h3><p>O Sol aponta o centro da identidade; a Lua descreve necessidades emocionais; o Ascendente mostra a forma de entrar nas experiências; e o Meio do Céu organiza vocação, visibilidade e direção pública. A leitura completa surge ao combinar essas quatro referências com planetas, casas e aspectos.</p>${firstVisionDetails({sun,moon,asc,mc})}<p class="chart-technical">Cálculo tropical · casas ${houseSystemName(input.houseSystem)} · ${input.latitude.toFixed(4)}, ${input.longitude.toFixed(4)} · UTC ${utcDate.toISOString().replace("T"," ").slice(0,16)}</p></div></div>
    <section class="chart-data-section"><h3>Posições planetárias</h3><div class="chart-table-wrap"><table><thead><tr><th>Ponto</th><th>Posição</th><th>Casa</th><th>Movimento</th></tr></thead><tbody>${planetRows}</tbody></table></div></section>
    <section class="chart-data-split"><div><h3>Cúspides das casas</h3><ol class="house-list">${houseRows}</ol></div><div><h3>Aspectos principais</h3><ul class="aspect-list">${aspectRows}</ul></div></section>
    <footer class="chart-privacy-confirmation"><strong>Privacidade preservada</strong><p>Este mapa foi calculado localmente. Nome, nascimento e coordenadas não foram enviados nem guardados pelo site.</p></footer>`;
}

function firstVisionDetails({sun,moon,asc,mc}) {
  const items = [
    ["SOL",sun,"sun","Identidade consciente"],
    ["LUA",moon,"moon","Necessidades emocionais"],
    ["ASCENDENTE",asc,"asc","Primeira resposta à vida"],
    ["MEIO DO CÉU",mc,"mc","Direção pública e vocacional"]
  ];
  const cards = items.map(([label,position,key,subtitle]) => {
    const meaning = firstVisionMeanings[position.sign]?.[key] || "ganha significado quando é combinado com o restante do mapa.";
    return `<article><span>${label}</span><h4>${position.glyph} ${position.sign}</h4><small>${subtitle}</small><p><strong>${label.charAt(0)+label.slice(1).toLowerCase()} em ${position.sign}</strong> ${meaning}</p></article>`;
  }).join("");
  return `<details class="first-vision-details"><summary>VER DETALHES</summary><div class="first-vision-content"><p class="first-vision-intro">Estas quatro posições não competem para decidir quem você é. Cada uma aparece com mais nitidez em um contexto diferente: o Sol nas escolhas que constroem identidade, a Lua na intimidade e nas reações emocionais, o Ascendente nos começos e na impressão imediata, e o Meio do Céu na atuação pública.</p><div class="first-vision-cards">${cards}</div><section class="first-vision-balance"><h4>É possível reconhecer mais uma parte do que as outras?</h4><p>Sim. Uma pessoa pode identificar-se muito com a Lua e pouco com o signo solar, ou perceber o Ascendente com mais força no cotidiano. Isso não torna uma posição falsa. A expressão muda conforme o ambiente, a fase da vida e o restante do mapa.</p><p>Uma camada também ganha destaque quando ocupa um dos ângulos do mapa, recebe muitos aspectos, participa de uma concentração de planetas ou repete temas presentes em outros pontos. O planeta que rege o Ascendente também ajuda a organizar a maneira como o conjunto se manifesta. Por isso, nenhuma dessas quatro posições deve ser lida isoladamente como uma porcentagem fixa da personalidade.</p><p>Neste mapa, a integração começa assim: <strong>Sol em ${sun.sign}</strong> orienta o desenvolvimento consciente; <strong>Lua em ${moon.sign}</strong> descreve o que restaura segurança emocional; <strong>Ascendente em ${asc.sign}</strong> mostra como a pessoa inicia e responde; e <strong>Meio do Céu em ${mc.sign}</strong> indica a imagem que tende a construir no mundo. Contradições entre eles não são erros, mas modos diferentes de agir em contextos diferentes.</p></section></div></details>`;
}

function chartWheel(positions,houses) {
  const center = 250;
  const outer = 220;
  const zodiacInner = 178;
  const planetRadius = 145;
  const ascRotation = 180 - houses.ascendant;
  const polar = (longitude,radius) => {
    const angle = (normalize(longitude + ascRotation)-90) * Math.PI/180;
    return [center+Math.cos(angle)*radius,center+Math.sin(angle)*radius];
  };
  const zodiacLines = Array.from({length:12},(_,index) => {
    const [x1,y1] = polar(index*30,zodiacInner);
    const [x2,y2] = polar(index*30,outer);
    const [tx,ty] = polar(index*30+15,199);
    return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/><text x="${tx}" y="${ty}" class="zodiac-glyph">${signs[index][1]}</text>`;
  }).join("");
  const houseLines = Array.from({length:12},(_,index) => {
    const [x,y] = polar(houses.cusps[index+1],zodiacInner);
    const [nx,ny] = polar(houses.cusps[index+1]+5,165);
    return `<line class="house-ray" x1="${center}" y1="${center}" x2="${x}" y2="${y}"/><text x="${nx}" y="${ny}" class="house-number">${index+1}</text>`;
  }).join("");
  const sorted = [...positions].sort((a,b)=>a.longitude-b.longitude);
  const planetMarks = sorted.map((planet,index) => {
    let adjusted = planet.longitude;
    if (index && forward(sorted[index-1].longitude,planet.longitude)<5) adjusted += (index%2 ? 4 : -4);
    const [x,y] = polar(adjusted,planetRadius-(index%3)*12);
    return `<g><circle cx="${x}" cy="${y}" r="15"/><text x="${x}" y="${y}" class="planet-glyph">${planet.glyph}</text></g>`;
  }).join("");
  return `<svg class="chart-wheel" viewBox="0 0 500 500" role="img" aria-label="Roda do mapa astral"><circle cx="250" cy="250" r="220"/><circle cx="250" cy="250" r="178"/>${zodiacLines}${houseLines}${planetMarks}<circle class="wheel-center" cx="250" cy="250" r="10"/></svg>`;
}

function houseSystemName(code) {
  return ({P:"Placidus",W:"Signos inteiros",A:"Casas iguais",K:"Koch",C:"Campanus"})[code] || code;
}

function formatLocalInput(input) {
  const [year,month,day] = input.date.split("-");
  return `${day}/${month}/${year} às ${input.time}`;
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, character => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[character]);
}

function readableError(error) {
  const message = String(error?.message || error);
  if (/fetch|wasm|network/i.test(message)) return "Não foi possível preparar o mecanismo astronômico. Conecte-se uma vez à internet, recarregue o PWA e tente novamente.";
  return message || "Não foi possível calcular o mapa com os dados informados.";
}
