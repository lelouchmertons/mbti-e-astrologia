const personalities = [
  {
    id: "INTJ", label: "Visão estratégica", accent: "#5267a7",
    summary: "Independente, orientado por padrões e disposto a transformar uma visão de longo prazo em estrutura.",
    intro: "INTJ tende a reunir observação interna, estratégia e critérios objetivos. É comum que queira compreender o sistema inteiro antes de agir. Depois de enxergar uma direção, trabalha com autonomia para torná-la viável.",
    preferences: [["I","Introversão"],["N","Intuição"],["T","Pensamento"],["J","Julgamento"]],
    strengths: ["Percebe padrões e consequências de longo prazo.","Estrutura ideias complexas com independência.","Mantém padrões elevados de competência e coerência."],
    cautions: ["Pode parecer distante quando está apenas processando internamente.","Pode perder a paciência com rotinas sem propósito claro.","Corre o risco de tratar sentimentos como problemas puramente lógicos."],
    relations: "Valoriza conversas substanciais, respeito pela autonomia e acordos claros. Demonstra cuidado frequentemente por meio de soluções, planejamento e lealdade consistente, mesmo quando não verbaliza afeto com facilidade.",
    work: "Aprende melhor ao investigar princípios, testar modelos e construir domínio próprio. Em equipes, costuma contribuir com direção, antecipação de riscos e desenho de sistemas; funciona pior sob microgestão ou regras incoerentes.",
    stress: "Sob pressão prolongada, pode se fechar, hipercontrolar detalhes ou buscar estímulos imediatos fora do padrão habitual. Pausas concretas, sono e contato com o presente ajudam a recuperar perspectiva.",
    growth: "Compartilhar o raciocínio antes de chegar à conclusão final e consultar o impacto humano de uma decisão torna a visão estratégica mais colaborativa.",
  },
  {
    id: "INFP", label: "Idealismo coerente", accent: "#4b9a7a",
    summary: "Guiado por valores, atento às possibilidades e interessado em uma vida que pareça internamente verdadeira.",
    intro: "INFP costuma avaliar experiências por sua autenticidade e significado. Sua imaginação abre múltiplas possibilidades, enquanto seus valores pessoais funcionam como bússola. Pode ser flexível na forma e firme quando algo essencial está em jogo.",
    preferences: [["I","Introversão"],["N","Intuição"],["F","Sentimento"],["P","Percepção"]],
    strengths: ["Empatia atenta à individualidade.","Imaginação e facilidade para enxergar possibilidades.","Lealdade profunda a pessoas, causas e valores."],
    cautions: ["Pode adiar decisões para preservar possibilidades.","Pode idealizar pessoas ou projetos e sofrer com a distância da realidade.","Tende a guardar conflitos até que um valor central seja atingido."],
    relations: "Procura vínculo autêntico, escuta sem padronizar a experiência alheia e costuma valorizar pequenos sinais de significado. Precisa de espaço interno, mas também de segurança para dizer o que sente antes de acumular frustração.",
    work: "Engaja-se quando encontra propósito, liberdade criativa e impacto humano. Aprende conectando ideias a narrativas e valores; ambientes excessivamente competitivos ou impessoais podem drenar sua energia.",
    stress: "Sob estresse, pode ruminar, se isolar ou tentar organizar tudo com rigidez incomum. Traduzir sentimentos em um próximo passo pequeno e verificável costuma restaurar movimento.",
    growth: "Dar forma concreta às boas intenções por meio de prazos, limites e critérios observáveis protege seus valores e amplia o alcance de sua criatividade.",
  },
  {
    id: "INTP", label: "Precisão conceitual", accent: "#357cb1",
    summary: "Curioso, analítico e movido pela busca de modelos capazes de explicar como as coisas realmente funcionam.",
    intro: "INTP tende a desmontar ideias para verificar sua lógica interna. Interessa-se menos por respostas prontas do que por princípios, exceções e novas conexões. Esse estilo pode parecer silencioso por fora e intensamente ativo por dentro.",
    preferences: [["I","Introversão"],["N","Intuição"],["T","Pensamento"],["P","Percepção"]],
    strengths: ["Análise lógica independente.","Facilidade para reformular problemas e detectar inconsistências.","Abertura intelectual para hipóteses incomuns."],
    cautions: ["Pode refinar tanto uma ideia que demora a colocá-la em prática.","Pode subestimar necessidades emocionais ou sociais implícitas.","Perde interesse quando o desafio vira repetição."],
    relations: "Valoriza honestidade intelectual, humor, liberdade e conversas exploratórias. Pode demonstrar afeto compartilhando ideias e atenção concentrada; explicitar sentimentos evita que reserva seja confundida com indiferença.",
    work: "Prospera em problemas complexos, autonomia e espaço para experimentação. Aprende formulando perguntas, comparando modelos e testando exceções; procedimentos sem razão aparente geram resistência.",
    stress: "Sob pressão, pode entrar em ciclos de análise, negligenciar o corpo ou reagir de forma emocionalmente intensa depois de conter demais. Externalizar prioridades e aceitar uma solução provisória ajuda.",
    growth: "Definir o que seria uma resposta suficientemente boa e convidar outras pessoas para o processo transforma clareza conceitual em contribuição concreta.",
  },
  {
    id: "ESFJ", label: "Cuidado em ação", accent: "#d06b59",
    summary: "Caloroso, cooperativo e atento ao que mantém pessoas, compromissos e rotinas funcionando em harmonia.",
    intro: "ESFJ costuma perceber rapidamente necessidades concretas e sinais sociais. Transforma cuidado em presença, organização e continuidade, valorizando relações recíprocas e ambientes nos quais as pessoas saibam que podem contar umas com as outras.",
    preferences: [["E","Extroversão"],["S","Sensação"],["F","Sentimento"],["J","Julgamento"]],
    strengths: ["Atenção prática às necessidades das pessoas.","Confiabilidade para organizar e concluir tarefas.","Habilidade para criar pertencimento e cooperação."],
    cautions: ["Pode assumir responsabilidade demais pelo bem-estar alheio.","Críticas ou falta de reconhecimento podem atingir com força.","Pode manter um costume mesmo quando a situação pede experimentação."],
    relations: "Investe em presença, gestos concretos e continuidade. Gosta de reciprocidade explícita e tende a conversar para restaurar harmonia; limites claros evitam que cuidado se transforme em sobrecarga.",
    work: "Destaca-se em contextos com colaboração, responsabilidades definidas e resultados úteis para pessoas. Aprende por exemplos, prática e troca; mudanças bruscas funcionam melhor quando o motivo e o percurso são claros.",
    stress: "Sob pressão, pode tentar agradar a todos, personalizar desacordos ou controlar detalhes. Separar o que é sua responsabilidade daquilo que pertence ao outro recupera equilíbrio.",
    growth: "Reservar espaço para necessidades próprias e para perspectivas não convencionais torna seu cuidado mais sustentável e menos dependente de aprovação."
  },
  {
    id: "ISTJ", label: "Responsabilidade consistente", accent: "#65758a", summary: "Metódico, confiável e atento a fatos, deveres e procedimentos que sustentam resultados estáveis.",
    intro: "ISTJ tende a comparar o presente com experiências concretas e critérios verificáveis. Prefere saber o que precisa ser feito, assumir uma responsabilidade definida e cumprir o combinado com precisão.", preferences: [["I","Introversão"],["S","Sensação"],["T","Pensamento"],["J","Julgamento"]],
    strengths: ["Organização e constância.","Memória para detalhes relevantes.","Compromisso com normas e acordos claros."], cautions: ["Pode resistir a mudanças sem evidência prática.","Pode cobrar dos outros o mesmo ritmo de responsabilidade.","Tende a comunicar correções antes de reconhecer esforços."],
    relations: "Demonstra confiança por presença, lealdade e ações previsíveis. Precisa de comunicação direta e costuma valorizar quem respeita limites, horários e compromissos.", work: "Aprende por exemplos, prática e aplicação. Em equipes, preserva qualidade, continuidade e registro, mas precisa compreender a razão de uma mudança para adotá-la com segurança.", stress: "Sob pressão, pode se tornar rígido, pessimista ou excessivamente atento ao que pode dar errado.", growth: "Experimentar mudanças pequenas e escutar hipóteses antes de exigir comprovação completa amplia sua capacidade de adaptação."
  },
  {
    id: "ISFJ", label: "Proteção cuidadosa", accent: "#5e8d83", summary: "Atento, discreto e comprometido com o bem-estar concreto das pessoas e a continuidade dos vínculos.",
    intro: "ISFJ costuma guardar detalhes sobre pessoas, rotinas e necessidades. Une memória prática a consideração humana, oferecendo cuidado por meio de presença, preparação e gestos que tornam o cotidiano mais seguro.", preferences: [["I","Introversão"],["S","Sensação"],["F","Sentimento"],["J","Julgamento"]],
    strengths: ["Atenção a necessidades concretas.","Lealdade e confiabilidade.","Capacidade de manter rotinas acolhedoras."], cautions: ["Pode assumir tarefas demais sem pedir ajuda.","Pode evitar conflito até acumular ressentimento.","Mudanças bruscas podem gerar insegurança."],
    relations: "Constrói intimidade por constância, escuta e lembrança de detalhes. Precisa sentir reciprocidade e segurança para expressar incômodos antes que o cuidado se transforme em obrigação.", work: "Prospera em ambientes cooperativos, organizados e úteis para pessoas. Aprende com demonstração, repetição e contexto concreto.", stress: "Sob pressão, pode se fechar, antecipar cenários negativos ou tentar preservar uma rotina que já não funciona.", growth: "Dizer não, tornar necessidades explícitas e testar novas soluções protege sua energia sem diminuir sua generosidade."
  },
  {
    id: "INFJ", label: "Visão humana", accent: "#6f6db0", summary: "Reflexivo, intuitivo e interessado em compreender pessoas, significados e transformações de longo prazo.",
    intro: "INFJ tende a perceber padrões humanos e imaginar como uma situação pode evoluir. Busca coerência entre visão, valores e impacto coletivo, combinando reserva pessoal com forte atenção ao mundo emocional.", preferences: [["I","Introversão"],["N","Intuição"],["F","Sentimento"],["J","Julgamento"]],
    strengths: ["Leitura profunda de motivações.","Síntese de ideias e valores.","Compromisso com mudanças significativas."], cautions: ["Pode idealizar pessoas ou resultados.","Pode ocultar limites para preservar harmonia.","Tende a se esgotar com excesso de responsabilidade emocional."],
    relations: "Procura profundidade, confiança e sentido compartilhado. Precisa de tempo interno e de relações em que possa discordar sem perder segurança emocional.", work: "Aprende conectando teoria, propósito e impacto humano. Contribui com visão, comunicação cuidadosa e planejamento orientado por valores.", stress: "Sob pressão, pode ruminar, se isolar ou fixar-se em detalhes imediatos de forma incomum.", growth: "Substituir expectativas silenciosas por pedidos claros e aceitar soluções imperfeitas torna sua visão mais sustentável."
  },
  {
    id: "ISTP", label: "Domínio prático", accent: "#557e94", summary: "Observador, independente e habilidoso para compreender mecanismos e responder a problemas concretos.",
    intro: "ISTP tende a analisar como algo funciona e agir quando encontra uma solução eficiente. Valoriza liberdade, competência prática e contato direto com a realidade, evitando regras que não demonstram utilidade.", preferences: [["I","Introversão"],["S","Sensação"],["T","Pensamento"],["P","Percepção"]],
    strengths: ["Calma diante de problemas imediatos.","Raciocínio técnico e adaptação prática.","Autonomia para testar soluções."], cautions: ["Pode comunicar pouco o que sente ou pretende.","Pode perder interesse em manutenção prolongada.","Riscos imediatos podem parecer mais atraentes que consequências distantes."],
    relations: "Valoriza espaço, honestidade e convivência sem controle excessivo. Costuma demonstrar cuidado resolvendo problemas ou compartilhando experiências.", work: "Aprende fazendo, desmontando, testando e corrigindo. Funciona bem com autonomia, desafios concretos e resultados observáveis.", stress: "Sob pressão, pode se afastar, agir impulsivamente ou reagir com emoção intensa depois de contê-la.", growth: "Antecipar consequências e verbalizar necessidades antes de se retirar fortalece vínculos e projetos de longo prazo."
  },
  {
    id: "ISFP", label: "Sensibilidade presente", accent: "#619b78", summary: "Gentil, observador e guiado por valores pessoais, experiência direta e liberdade de expressão.",
    intro: "ISFP tende a perceber nuances do ambiente e avaliar escolhas por autenticidade. Prefere responder ao momento com flexibilidade, demonstrando valores por ações, estética e cuidado concreto.", preferences: [["I","Introversão"],["S","Sensação"],["F","Sentimento"],["P","Percepção"]],
    strengths: ["Sensibilidade estética e interpessoal.","Flexibilidade diante do presente.","Respeito pela individualidade."], cautions: ["Pode evitar planejamento distante.","Pode guardar críticas até se afastar.","Ambientes rígidos ou competitivos drenam sua energia."],
    relations: "Busca aceitação, gentileza e espaço para ser espontâneo. Demonstra afeto por atenção concreta e experiências compartilhadas.", work: "Aprende por prática, observação e liberdade para adaptar o método. Contribui com percepção fina, qualidade sensorial e cuidado individual.", stress: "Sob pressão, pode se fechar, sentir-se incompreendido ou tentar controlar resultados de forma incomum.", growth: "Transformar valores em planos simples e comunicar desconfortos cedo ajuda a preservar liberdade sem abandonar continuidade."
  },
  {
    id: "ESTP", label: "Ação estratégica", accent: "#d0714e", summary: "Enérgico, pragmático e atento às oportunidades que exigem decisão, negociação e resposta rápida.",
    intro: "ESTP tende a ler o ambiente em tempo real e agir com base no que está disponível. Gosta de desafios, interação e liberdade para ajustar a estratégia enquanto os acontecimentos se desenvolvem.", preferences: [["E","Extroversão"],["S","Sensação"],["T","Pensamento"],["P","Percepção"]],
    strengths: ["Rapidez para perceber oportunidades.","Pragmatismo em situações de pressão.","Comunicação direta e capacidade de negociação."], cautions: ["Pode agir antes de avaliar efeitos duradouros.","Rotina e preparação prolongada podem gerar impaciência.","Franqueza pode ultrapassar a sensibilidade alheia."],
    relations: "Procura vitalidade, humor e liberdade. Conecta-se por experiências e conversas diretas, mas precisa mostrar continuidade quando o vínculo exige segurança.", work: "Aprende em ação, com desafios reais e retorno imediato. Ajuda equipes a decidir, negociar e sair da paralisia.", stress: "Sob pressão, pode buscar estímulo excessivo, confrontar rapidamente ou imaginar consequências negativas distantes.", growth: "Criar pausas antes de decisões irreversíveis e sustentar compromissos depois da novidade amplia seu impacto."
  },
  {
    id: "ESFP", label: "Entusiasmo compartilhado", accent: "#d57a63", summary: "Expressivo, acolhedor e atento ao presente, às pessoas e às experiências que tornam a vida mais viva.",
    intro: "ESFP tende a responder ao ambiente com espontaneidade e calor. Percebe necessidades imediatas, aproxima pessoas e aprende explorando o que pode ser vivido, sentido e compartilhado.", preferences: [["E","Extroversão"],["S","Sensação"],["F","Sentimento"],["P","Percepção"]],
    strengths: ["Presença social e entusiasmo.","Sensibilidade às reações do ambiente.","Flexibilidade e prazer em colaborar."], cautions: ["Pode evitar conversas difíceis ou planejamento distante.","Pode depender demais da resposta imediata.","A busca por estímulo pode dispersar prioridades."],
    relations: "Demonstra afeto com presença, celebração e gestos concretos. Precisa de reciprocidade visível sem sentir que o vínculo eliminou sua liberdade.", work: "Aprende pela prática, interação e retorno rápido. Contribui com energia, adaptação e atenção à experiência das pessoas.", stress: "Sob pressão, pode se sentir preso, reagir impulsivamente ou antecipar um futuro excessivamente negativo.", growth: "Planejar consequências e permanecer em conversas desconfortáveis transforma espontaneidade em confiança duradoura."
  },
  {
    id: "ENFP", label: "Possibilidades humanas", accent: "#bb6c9f", summary: "Entusiasmado, imaginativo e movido por conexões entre ideias, pessoas e futuros possíveis.",
    intro: "ENFP tende a enxergar alternativas rapidamente e envolver pessoas com energia e significado. Procura liberdade para explorar, mas também coerência com valores pessoais e relações autênticas.", preferences: [["E","Extroversão"],["N","Intuição"],["F","Sentimento"],["P","Percepção"]],
    strengths: ["Imaginação e comunicação inspiradora.","Facilidade para conectar pessoas e ideias.","Abertura a mudanças e perspectivas diferentes."], cautions: ["Pode começar mais projetos do que consegue concluir.","Pode confundir entusiasmo com compromisso.","Rotina prolongada pode reduzir seu foco."],
    relations: "Busca conversa, autenticidade e crescimento compartilhado. Precisa de liberdade, mas também de acordos que deem segurança ao outro.", work: "Aprende explorando possibilidades, debatendo e conectando conteúdo a propósito. Contribui com inovação, motivação e leitura de potencial.", stress: "Sob pressão, pode se dispersar, ruminar detalhes ou tentar controlar rotinas de modo incomum.", growth: "Escolher prioridades e construir sistemas simples de continuidade permite que boas ideias se tornem realizações."
  },
  {
    id: "ENTP", label: "Exploração inventiva", accent: "#8a66b0", summary: "Curioso, argumentativo e interessado em possibilidades, sistemas e maneiras melhores de resolver um problema.",
    intro: "ENTP tende a questionar pressupostos, combinar ideias e testar possibilidades em diálogo. Valoriza liberdade intelectual e costuma ganhar energia quando um problema permite invenção.", preferences: [["E","Extroversão"],["N","Intuição"],["T","Pensamento"],["P","Percepção"]],
    strengths: ["Criatividade conceitual e improvisação.","Facilidade para identificar alternativas.","Argumentação rápida e abertura ao debate."], cautions: ["Pode debater quando o outro precisa ser ouvido.","Pode abandonar a execução depois de resolver a parte interessante.","Questionar tudo pode desgastar acordos necessários."],
    relations: "Valoriza humor, autonomia e troca intelectual. Precisa aprender a distinguir curiosidade argumentativa de invalidação emocional.", work: "Aprende por experimentação, debate e comparação de modelos. Contribui com inovação, diagnóstico e capacidade de contornar obstáculos.", stress: "Sob pressão, pode multiplicar possibilidades, perder prioridades ou fixar-se em detalhes passados.", growth: "Concluir, documentar e reconhecer o impacto do tom transforma inventividade em influência confiável."
  },
  {
    id: "ESTJ", label: "Organização objetiva", accent: "#b76d4e", summary: "Direto, estruturado e orientado a responsabilidades, padrões claros e execução eficiente.",
    intro: "ESTJ tende a organizar pessoas, recursos e prazos para produzir resultados concretos. Confia em critérios claros, experiência verificável e responsabilidade compartilhada.", preferences: [["E","Extroversão"],["S","Sensação"],["T","Pensamento"],["J","Julgamento"]],
    strengths: ["Decisão e capacidade de organização.","Clareza sobre responsabilidades.","Persistência na execução."], cautions: ["Pode impor ritmo ou método sem ouvir alternativas.","Pode tratar necessidades emocionais como obstáculos.","Mudanças sem plano podem parecer irresponsáveis."],
    relations: "Demonstra cuidado assumindo responsabilidades e construindo estabilidade. Precisa combinar franqueza com escuta e reconhecer contribuições que não seguem seu método.", work: "Aprende por aplicação, metas e retorno objetivo. Em equipes, define direção, distribui tarefas e acompanha resultados.", stress: "Sob pressão, pode controlar detalhes, criticar rapidamente ou sentir que tudo depende de sua intervenção.", growth: "Delegar, escutar exceções e separar eficiência de valor pessoal torna sua liderança mais flexível."
  },
  {
    id: "ENFJ", label: "Mobilização humana", accent: "#b7678c", summary: "Comunicativo, empático e orientado a desenvolver pessoas, vínculos e objetivos compartilhados.",
    intro: "ENFJ tende a perceber o potencial de um grupo e organizar relações em torno de uma visão comum. Combina leitura emocional, comunicação e planejamento para mobilizar pessoas.", preferences: [["E","Extroversão"],["N","Intuição"],["F","Sentimento"],["J","Julgamento"]],
    strengths: ["Comunicação calorosa e persuasiva.","Capacidade de coordenar pessoas por propósito.","Percepção das necessidades do grupo."], cautions: ["Pode assumir responsabilidade pelo crescimento alheio.","Pode evitar desapontar pessoas até ultrapassar limites.","Reconhecimento externo pode influenciar demais suas escolhas."],
    relations: "Investe em diálogo, desenvolvimento e reciprocidade. Precisa permitir que o outro escolha o próprio caminho e reservar espaço para necessidades pessoais.", work: "Aprende por troca, visão e aplicação humana. Contribui com liderança, comunicação e construção de compromisso coletivo.", stress: "Sob pressão, pode tentar harmonizar tudo, controlar respostas ou tornar-se criticamente analítico consigo.", growth: "Aceitar desacordo, estabelecer limites e ouvir sem imediatamente orientar torna seu cuidado mais respeitoso."
  },
  {
    id: "ENTJ", label: "Direção estratégica", accent: "#795fa4", summary: "Assertivo, estratégico e interessado em organizar recursos e pessoas para atingir objetivos ambiciosos.",
    intro: "ENTJ tende a avaliar sistemas por eficiência e potencial de crescimento. Define objetivos, toma decisões e mobiliza recursos com naturalidade, especialmente diante de desafios complexos.", preferences: [["E","Extroversão"],["N","Intuição"],["T","Pensamento"],["J","Julgamento"]],
    strengths: ["Visão estratégica e decisão.","Capacidade de organizar projetos complexos.","Disposição para enfrentar problemas difíceis."], cautions: ["Pode avançar mais rápido que a adesão das pessoas.","Pode desvalorizar sinais emocionais pouco explícitos.","Impaciência com hesitação pode inibir contribuições."],
    relations: "Valoriza independência, honestidade e crescimento. Demonstra compromisso investindo energia e planejamento, mas precisa oferecer escuta sem transformar toda conversa em solução.", work: "Aprende por desafio, debate e aplicação estratégica. Em equipes, estabelece direção, cobra padrões e remove obstáculos.", stress: "Sob pressão, pode intensificar controle, trabalhar em excesso ou reagir de modo pessoal a falhas de lealdade.", growth: "Criar espaço real para discordância e reconhecer necessidades afetivas antes de agir fortalece liderança e intimidade."
  }
];

const personalityExtras = {
  INTJ: {
    title: "Arquiteto",
    identityA: "Tende a confiar mais nas próprias conclusões, recuperar-se mais depressa de contratempos e depender menos da aprovação externa. Pode, porém, revisar pouco uma decisão quando já se sente seguro.",
    identityT: "Tende a revisar mais as próprias escolhas, perceber falhas com rapidez e usar a inquietação como impulso de melhoria. Pode sofrer mais com autocobrança e ruminação.",
    processes: [
      ["Processo principal", "Intuição voltada para dentro", "É o modo mais espontâneo de organizar a experiência. Reúne padrões, interpreta significados e imagina a direção de longo prazo antes de expor uma conclusão."],
      ["Processo de apoio", "Pensamento voltado para fora", "Equilibra a visão interna com ação prática. Compara resultados, define critérios, organiza recursos e transforma uma ideia em plano executável."],
      ["Processo em amadurecimento", "Sentimento voltado para dentro", "Tende a ganhar clareza com o tempo. Verifica se decisões respeitam valores pessoais, limites e aquilo que o próprio INTJ considera íntegro."],
      ["Processo menos natural", "Sensação voltada para fora", "Exige mais atenção consciente. Mantém contato com fatos imediatos, sinais do corpo e detalhes do ambiente que uma visão muito abstrata pode ignorar."]
    ],
    compatibility: {
      friendship: "ENTJ, INFJ, INTP e ISTJ compartilham partes importantes de sua linguagem. A amizade pode crescer por respeito à autonomia, conversas profundas, estratégia ou constância.",
      work: "ENTP, ESTJ, ISTP e ENFJ oferecem competências úteis em projetos. Podem acrescentar exploração de alternativas, execução, solução prática e coordenação de pessoas.",
      affection: "ENFP, INFP, ISFP e ISFJ podem combinar profundidade com maior expressão afetiva. A relação pede que autonomia e cuidado sejam comunicados de modo visível.",
      growth: "ESFP, ESFJ e ESTP apresentam contrastes fortes. O contato pode desenvolver presença, espontaneidade e leitura social quando a diferença não é tratada como inferioridade."
    }
  },
  INFP: {
    title: "Mediador",
    identityA: "Tende a sustentar valores com serenidade, absorver menos a desaprovação e recuperar o equilíbrio emocional com maior facilidade. Pode demorar a notar quando uma crítica contém algo útil.",
    identityT: "Tende a observar com intensidade o próprio mundo emocional, buscar aperfeiçoamento e perceber nuances na resposta dos outros. Pode transformar sensibilidade em autocrítica excessiva.",
    processes: [
      ["Processo principal", "Sentimento voltado para dentro", "É o modo mais espontâneo de avaliar experiências. Procura coerência entre escolhas, valores pessoais e aquilo que parece verdadeiro para o próprio INFP."],
      ["Processo de apoio", "Intuição voltada para fora", "Abre possibilidades e conexões. Ajuda a imaginar caminhos, compreender perspectivas diferentes e não transformar um valor pessoal em uma única resposta possível."],
      ["Processo em amadurecimento", "Sensação voltada para dentro", "Tende a ganhar consistência com o tempo. Compara o presente com experiências vividas, preserva referências importantes e cria hábitos que sustentam a imaginação."],
      ["Processo menos natural", "Pensamento voltado para fora", "Exige mais esforço consciente. Converte intenção em prazo, critério, sequência e resultado observável, especialmente quando uma decisão precisa sair do campo das possibilidades."]
    ],
    compatibility: {
      friendship: "ENFP, INFJ, ISFP e INTP podem oferecer identificação, imaginação compartilhada e respeito pelo espaço interno. A proximidade tende a nascer de autenticidade e conversa significativa.",
      work: "ENFJ, INTJ, ISFJ e ENTP podem acrescentar coordenação, estratégia, continuidade e novas hipóteses. O INFP preserva propósito e atenção ao impacto humano.",
      affection: "ENTJ, ESFJ, ISTJ e ESTJ trazem formas diferentes de estrutura e compromisso. A complementaridade pode ser rica quando sensibilidade e objetividade recebem igual respeito.",
      growth: "ESFP, ESTP e ISTP aproximam o INFP da ação, do presente e da experiência direta. O contraste ajuda a transformar intenção em movimento sem abandonar valores."
    }
  },
  INTP: {
    title: "Lógico",
    identityA: "Tende a confiar mais no próprio raciocínio, lidar com erros sem dramatização e expor hipóteses com menos receio. Pode insistir numa análise sem perceber a reação do ambiente.",
    identityT: "Tende a testar mais as próprias ideias, antecipar falhas e aprimorar conceitos continuamente. Pode se prender ao perfeccionismo ou duvidar de uma conclusão já suficiente.",
    processes: [
      ["Processo principal", "Pensamento voltado para dentro", "É o modo mais espontâneo de analisar. Desmonta uma ideia, verifica sua coerência e procura princípios capazes de explicar também as exceções."],
      ["Processo de apoio", "Intuição voltada para fora", "Amplia a análise com hipóteses, associações e alternativas. Impede que a busca por precisão fique presa a uma única explicação."],
      ["Processo em amadurecimento", "Sensação voltada para dentro", "Tende a se fortalecer com o tempo. Recupera experiências, compara detalhes e cria referências estáveis para que nem todo problema precise ser reconstruído do zero."],
      ["Processo menos natural", "Sentimento voltado para fora", "Exige mais atenção consciente. Considera como ideias, decisões e modos de falar afetam o vínculo, a cooperação e o clima entre as pessoas."]
    ],
    compatibility: {
      friendship: "ENTP, INTJ, INFP e ISTP costumam valorizar autonomia, curiosidade e espaço para explorar ideias. A amizade pode sobreviver bem a períodos de silêncio e retomar pelo interesse compartilhado.",
      work: "ENTJ, ESTJ, ISTJ e INFJ podem acrescentar direção, método, continuidade e leitura de consequências humanas. O INTP contribui testando premissas e encontrando inconsistências.",
      affection: "ENFJ, ENFP, ISFJ e ISFP podem tornar afeto e necessidades mais visíveis. A relação melhora quando o INTP verbaliza cuidado e o outro respeita seu tempo de processamento.",
      growth: "ESFJ, ESFP e ESTP aproximam o INTP da reciprocidade explícita, da experiência e da decisão rápida. O contraste é produtivo quando emoção não é reduzida a irracionalidade."
    }
  },
  ESFJ: {
    title: "Cônsul",
    identityA: "Tende a circular socialmente com segurança, estabelecer limites com mais tranquilidade e sofrer menos com avaliações externas. Pode presumir consenso antes de ouvir reservas.",
    identityT: "Tende a captar com intensidade a resposta das pessoas, revisar a própria atuação e buscar melhorar o cuidado oferecido. Pode depender demais de reconhecimento ou assumir culpa alheia.",
    processes: [
      ["Processo principal", "Sentimento voltado para fora", "É o modo mais espontâneo de decidir. Percebe necessidades sociais, busca cooperação e avalia como uma escolha afeta pessoas e valores compartilhados."],
      ["Processo de apoio", "Sensação voltada para dentro", "Oferece continuidade. Compara a situação com experiências anteriores, preserva detalhes importantes e transforma cuidado em rotina confiável."],
      ["Processo em amadurecimento", "Intuição voltada para fora", "Tende a ganhar espaço com o tempo. Ajuda a considerar alternativas, experimentar mudanças e imaginar soluções que não dependem apenas do que já funcionou."],
      ["Processo menos natural", "Pensamento voltado para dentro", "Exige mais atenção consciente. Revisa a lógica de uma decisão por critérios próprios, inclusive quando o grupo prefere manter uma harmonia apenas aparente."]
    ],
    compatibility: {
      friendship: "ISFJ, ESTJ, ESFP e ENFJ podem compartilhar presença, reciprocidade e gosto por manter o vínculo ativo. A proximidade costuma crescer por gestos concretos e convivência regular.",
      work: "ISTJ, ENTJ, ESTP e ISFP podem acrescentar precisão, direção, resposta rápida e sensibilidade prática. O ESFJ ajuda a coordenar pessoas e transformar compromisso em continuidade.",
      affection: "ISTP, ENFP, INFJ e ENTP podem complementar sociabilidade e cuidado com autonomia, imaginação ou reflexão. O vínculo pede negociação clara entre proximidade e espaço individual.",
      growth: "INTP, INTJ e INFP desafiam o ESFJ a tolerar silêncio, abstração e critérios menos dependentes da aprovação do grupo. Em troca, recebem atenção ao impacto humano concreto."
    }
  }
};

const allMbtiCodes = ["ISTJ","ISFJ","INFJ","INTJ","ISTP","ISFP","INFP","INTP","ESTP","ESFP","ENFP","ENTP","ESTJ","ESFJ","ENFJ","ENTJ"];
const processInfo = {
  Si: ["Sensação Introvertida (Si)", "Compara a situação atual com experiências anteriores, preserva detalhes relevantes e procura continuidade."],
  Se: ["Sensação Extravertida (Se)", "Observa o que acontece agora, responde a dados concretos e aprende por contato direto com a experiência."],
  Ni: ["Intuição Introvertida (Ni)", "Reúne padrões e significados até formar uma visão concentrada sobre direção e consequências futuras."],
  Ne: ["Intuição Extravertida (Ne)", "Explora possibilidades, associa ideias e percebe vários caminhos que ainda podem ser desenvolvidos."],
  Ti: ["Pensamento Introvertido (Ti)", "Verifica a coerência de uma ideia por princípios internos, precisão conceitual e análise de exceções."],
  Te: ["Pensamento Extravertido (Te)", "Organiza decisões por critérios observáveis, eficiência, sequência e resultado prático."],
  Fi: ["Sentimento Introvertido (Fi)", "Avalia escolhas pela coerência com valores pessoais, autenticidade e limites internos."],
  Fe: ["Sentimento Extravertido (Fe)", "Considera necessidades compartilhadas, impacto social, cooperação e qualidade do vínculo."]
};
const processRoleInfo = [
  ["Dominante", "É o processo mais espontâneo e confiável para o tipo. Costuma orientar sua atenção e suas escolhas sem exigir esforço consciente."],
  ["Auxiliar", "Equilibra a Dominante e a conecta ao mundo interno ou externo. Ajuda o tipo a não depender de uma única maneira de funcionar."],
  ["Terciária", "Surge de forma menos constante e costuma ganhar maturidade com experiência. Pode ser fonte de criatividade, mas também de uso imaturo."],
  ["Inferior", "É o processo menos confortável e mais fácil de exagerar sob pressão. Desenvolvê-lo amplia o repertório sem apagar as preferências naturais."]
];
const processRoles = processRoleInfo.map(([role]) => role);
const mbtiQuestions = [
  ["EI","I","Antes de responder a uma ideia nova, prefiro organizar o pensamento em silêncio.","E","Entendo melhor a ideia enquanto converso sobre ela."],
  ["EI","E","Depois de um dia cansativo, recupero energia encontrando pessoas ou mudando de ambiente.","I","Depois de um dia cansativo, recupero energia tendo tempo reservado para mim."],
  ["EI","I","Em um grupo novo, observo o ambiente antes de me apresentar.","E","Em um grupo novo, começo a interagir e descubro o ambiente pela conversa."],
  ["EI","E","Quando algo me entusiasma, procuro alguém para compartilhar imediatamente.","I","Quando algo me entusiasma, gosto de explorar a experiência sozinho antes de contar."],
  ["EI","I","Prefiro poucos vínculos com bastante profundidade.","E","Prefiro uma rede ampla, com diferentes graus de proximidade."],
  ["EI","E","Uma agenda com encontros e trocas frequentes costuma me estimular.","I","Uma agenda com bastante espaço sem interação costuma me estimular."],
  ["EI","I","Costumo formular a frase inteira antes de começar a falar.","E","Costumo encontrar a formulação certa enquanto estou falando."],
  ["EI","E","Em atividades coletivas, assumo presença visível com facilidade.","I","Em atividades coletivas, contribuo melhor sem precisar ocupar o centro."],

  ["SN","S","Para aprender algo, começo por exemplos concretos e instruções demonstráveis.","N","Para aprender algo, começo pelo conceito geral e pelas possibilidades."],
  ["SN","N","Ao ouvir uma história, noto primeiro o tema e o significado por trás dos fatos.","S","Ao ouvir uma história, noto primeiro a sequência e os detalhes do que aconteceu."],
  ["SN","S","Confio mais em um método que já mostrou resultados consistentes.","N","Sinto mais interesse por um método novo que pode produzir algo diferente."],
  ["SN","N","Uma ideia me atrai mesmo antes de eu saber exatamente como aplicá-la.","S","Uma ideia me atrai quando consigo visualizar onde e como será aplicada."],
  ["SN","S","Quando recordo um acontecimento, recupero cenas, falas e detalhes específicos.","N","Quando recordo um acontecimento, recupero sobretudo a impressão e o significado."],
  ["SN","N","Em uma explicação, gosto de conexões, analogias e interpretações.","S","Em uma explicação, gosto de etapas, exemplos e informações precisas."],
  ["SN","S","Ao resolver um problema, verifico primeiro os fatos disponíveis.","N","Ao resolver um problema, imagino primeiro hipóteses que ainda não foram testadas."],
  ["SN","N","Percebo rapidamente padrões que ligam assuntos aparentemente distantes.","S","Percebo rapidamente mudanças concretas no ambiente e no modo de executar algo."],

  ["TF","T","Ao decidir, procuro aplicar critérios coerentes mesmo quando a conclusão desagrada.","F","Ao decidir, considero primeiro como cada pessoa será afetada."],
  ["TF","F","Em um conflito, preservar respeito e vínculo é parte central da solução.","T","Em um conflito, esclarecer a causa e corrigir a incoerência é parte central da solução."],
  ["TF","T","Prefiro receber uma crítica direta, específica e orientada à melhoria.","F","Prefiro receber uma crítica cuidadosa, que reconheça intenção e contexto."],
  ["TF","F","Quando alguém desabafa, minha primeira reação é acolher o que a pessoa sente.","T","Quando alguém desabafa, minha primeira reação é investigar o problema e buscar uma saída."],
  ["TF","T","Uma regra justa deve ser aplicada de forma consistente a casos semelhantes.","F","Uma regra justa deve permitir exceções quando as circunstâncias humanas mudam."],
  ["TF","F","Em uma equipe, percebo cedo quando alguém deixou de se sentir incluído.","T","Em uma equipe, percebo cedo quando o plano perdeu lógica ou eficiência."],
  ["TF","T","Mudo de opinião quando os argumentos e as evidências são mais consistentes.","F","Mudo de opinião quando compreendo melhor os valores e necessidades envolvidos."],
  ["TF","F","Uma boa decisão precisa ser vivida como coerente com aquilo que valorizo.","T","Uma boa decisão precisa poder ser defendida por princípios e critérios verificáveis."],

  ["JP","J","Prefiro definir compromissos com antecedência e saber o que acontecerá.","P","Prefiro preservar espaço para decidir conforme a situação se desenvolve."],
  ["JP","P","Em uma viagem, gosto de escolher parte do roteiro quando já estou no destino.","J","Em uma viagem, gosto de sair com reservas e etapas principais definidas."],
  ["JP","J","Sinto alívio quando uma decisão importante finalmente foi encerrada.","P","Sinto alívio quando ainda posso revisar uma decisão importante."],
  ["JP","P","Trabalho melhor em ciclos de exploração, alternando caminhos conforme descubro algo.","J","Trabalho melhor seguindo etapas e acompanhando o avanço até concluir."],
  ["JP","J","Costumo começar cedo para reduzir imprevistos perto do prazo.","P","Costumo ganhar foco quando o prazo se aproxima e as opções se tornam concretas."],
  ["JP","P","Mudanças inesperadas podem tornar um plano mais interessante.","J","Mudanças inesperadas atrapalham até que eu reorganize o plano."],
  ["JP","J","Organizo objetos e informações para encontrá-los de maneira previsível.","P","Organizo objetos e informações de um modo flexível que faz sentido no momento."],
  ["JP","P","Prefiro experimentar antes de fechar regras e procedimentos.","J","Prefiro estabelecer regras e procedimentos antes de começar a execução."]
];
const mbtiTieBreakers = {
  EI: [
    ["E", "Depois de uma semana exigente, a ideia de encontrar pessoas queridas costuma renovar minha disposição."],
    ["I", "Depois de uma semana exigente, a ideia de passar algumas horas em meu próprio ritmo costuma renovar minha disposição."]
  ],
  SN: [
    ["S", "Quando alguém me ensina algo, uma demonstração concreta costuma esclarecer mais do que uma visão geral."],
    ["N", "Quando alguém me ensina algo, compreender primeiro a ideia geral costuma esclarecer mais do que uma demonstração concreta."]
  ],
  TF: [
    ["T", "Em uma decisão difícil, sinto mais segurança quando consigo justificar a escolha com critérios consistentes."],
    ["F", "Em uma decisão difícil, sinto mais segurança quando consigo preservar as necessidades humanas mais importantes."]
  ],
  JP: [
    ["J", "Diante de uma semana cheia, fico mais tranquilo quando compromissos e horários já estão definidos."],
    ["P", "Diante de uma semana cheia, fico mais tranquilo quando ainda existe espaço para adaptar compromissos e horários."]
  ]
};
const missingTypeMeta = {
  ISTJ: ["Logístico", ["Si","Te","Fi","Ne"]], ISFJ: ["Defensor", ["Si","Fe","Ti","Ne"]], INFJ: ["Advogado", ["Ni","Fe","Ti","Se"]],
  ISTP: ["Virtuoso", ["Ti","Se","Ni","Fe"]], ISFP: ["Aventureiro", ["Fi","Se","Ni","Te"]], ESTP: ["Empresário", ["Se","Ti","Fe","Ni"]],
  ESFP: ["Animador", ["Se","Fi","Te","Ni"]], ENFP: ["Ativista", ["Ne","Fi","Te","Si"]], ENTP: ["Inovador", ["Ne","Ti","Fe","Si"]],
  ESTJ: ["Executivo", ["Te","Si","Ne","Fi"]], ENFJ: ["Protagonista", ["Fe","Ni","Se","Ti"]], ENTJ: ["Comandante", ["Te","Ni","Se","Fi"]]
};

function sharedLetters(first, second) {
  return [...first].filter((letter, index) => letter === second[index]).length;
}

function buildCompatibility(type) {
  const available = allMbtiCodes.filter(code => code !== type);
  const take = (score, amount) => {
    const picked = [...available].sort((a,b) => score(b) - score(a) || a.localeCompare(b)).slice(0, amount);
    picked.forEach(code => available.splice(available.indexOf(code), 1));
    return picked;
  };
  const friendship = take(code => sharedLetters(type, code) * 3 + (type[0] === code[0] ? 2 : 0), 4);
  const work = take(code => (type[2] === code[2] ? 4 : 0) + (type[3] === code[3] ? 3 : 0) + (type[1] === code[1] ? 2 : 0), 4);
  const affection = take(code => (type[1] === code[1] ? 4 : 0) + (type[2] !== code[2] ? 3 : 0) + (type[0] !== code[0] ? 1 : 0), 4);
  const growth = [...available];
  return {
    friendship: `${friendship.join(", ")} apresentam mais pontos de familiaridade com ${type}. A amizade pode se desenvolver por identificação, interesses compartilhados e menor necessidade de traduzir o próprio estilo.`,
    work: `${work.join(", ")} oferecem combinações úteis para trabalho. Há aproximação em critérios de decisão, organização ou forma de lidar com informações, com diferenças suficientes para distribuir funções.`,
    affection: `${affection.join(", ")} podem criar complementaridade afetiva. A relação tende a aproximar linguagens semelhantes de percepção e maneiras diferentes de demonstrar cuidado ou tomar decisões.`,
    growth: `${growth.join(", ")} formam contrastes maiores com ${type}. A convivência pode ampliar recursos pouco naturais, desde que diferença não seja tratada como defeito.`
  };
}

Object.entries(missingTypeMeta).forEach(([id, [title, stack]]) => {
  personalityExtras[id] = {
    title,
    identityA: `A variante ${id}-A tende a expressar as características do tipo com maior confiança nas próprias decisões e menor impacto da pressão externa. Pode, porém, revisar menos uma escolha quando já se sente segura.`,
    identityT: `A variante ${id}-T tende a acompanhar o próprio desempenho com mais atenção e usar a insatisfação como impulso de melhoria. Pode, porém, transformar revisão em autocobrança excessiva.`,
    processes: stack.map((code, index) => [processRoles[index], processInfo[code][0], processInfo[code][1]]),
    compatibility: buildCompatibility(id)
  };
});

const signs = [
  {name:"Áries",glyph:"♈",dates:"21 de março a 19 de abril",element:"Fogo",modality:"Cardinal",ruler:"Marte",accent:"#d85b55",keywords:"iniciativa coragem franqueza impulso começo competição",intro:"Áries simboliza o impulso de começar. Sua linguagem é direta, móvel e afirmativa: testa a vida pela ação e prefere descobrir o caminho enquanto avança.",strengths:["Iniciativa e coragem diante do desconhecido.","Franqueza e recuperação rápida depois de obstáculos.","Capacidade de mobilizar ambientes parados."],weaknesses:["Impaciência com ritmos diferentes.","Reações antes da reflexão.","Competição onde cooperação seria mais eficaz."],relations:"Precisa de vitalidade, honestidade e espaço para agir. Relações florescem quando entusiasmo não elimina escuta e quando conflito pode ser resolvido sem jogos indiretos.",balance:"Em equilíbrio, transforma impulso em liderança e coragem em proteção; aprende que esperar também pode ser uma ação consciente."},
  {name:"Touro",glyph:"♉",dates:"20 de abril a 20 de maio",element:"Terra",modality:"Fixo",ruler:"Vênus",accent:"#b69338",keywords:"estabilidade prazer paciência matéria segurança persistência",intro:"Touro simboliza continuidade, corpo e valor. Busca construir algo durável, reconhecer o que nutre e criar segurança por meio de ritmos consistentes.",strengths:["Persistência e lealdade.","Senso prático e atenção à qualidade.","Capacidade de sustentar processos longos."],weaknesses:["Resistência a mudanças necessárias.","Apego a conforto, posses ou certezas.","Teimosia quando se sente pressionado."],relations:"Valoriza confiança, contato, presença e previsibilidade. Abre-se no próprio tempo e prefere vínculos demonstrados em ações constantes.",balance:"Em equilíbrio, preserva sem paralisar e desfruta sem possuir; sua estabilidade vira base para que algo vivo cresça."},
  {name:"Gêmeos",glyph:"♊",dates:"21 de maio a 20 de junho",element:"Ar",modality:"Mutável",ruler:"Mercúrio",accent:"#3e9ea0",keywords:"curiosidade comunicação variedade linguagem troca movimento",intro:"Gêmeos simboliza circulação de ideias. Observa diferenças, faz perguntas, conecta pessoas e aprende ao nomear o mundo por muitos ângulos.",strengths:["Curiosidade e adaptação mental.","Comunicação rápida e versátil.","Facilidade para conectar informações."],weaknesses:["Dispersão e dificuldade de aprofundar.","Mudanças rápidas que confundem os outros.","Intelectualização de sentimentos."],relations:"Precisa de conversa, humor e novidade. O vínculo se fortalece quando variedade convive com presença e as palavras também se transformam em compromisso.",balance:"Em equilíbrio, sua agilidade deixa de ser fuga e se torna tradução: leva uma ideia de um mundo ao outro sem perder o fio."},
  {name:"Câncer",glyph:"♋",dates:"21 de junho a 22 de julho",element:"Água",modality:"Cardinal",ruler:"Lua",accent:"#3b77bd",keywords:"cuidado memória lar proteção sensibilidade pertencimento",intro:"Câncer simboliza abrigo, memória e vínculo. Percebe atmosferas emocionais e procura construir um lugar concreto ou afetivo em que a vida possa ser protegida.",strengths:["Sensibilidade às necessidades emocionais.","Lealdade e instinto protetor.","Memória afetiva e capacidade de acolher."],weaknesses:["Defensividade quando se sente exposto.","Apego ao passado.","Comunicação indireta de necessidades."],relations:"Busca segurança emocional, intimidade e reciprocidade. Precisa sentir que vulnerabilidade não será usada contra si e que cuidado não é uma via de mão única.",balance:"Em equilíbrio, cuida sem controlar e honra o passado sem morar nele; sua sensibilidade vira força de vínculo."},
  {name:"Leão",glyph:"♌",dates:"23 de julho a 22 de agosto",element:"Fogo",modality:"Fixo",ruler:"Sol",accent:"#d85b55",keywords:"expressão criatividade orgulho generosidade presença brilho",intro:"Leão simboliza expressão criativa e centralidade. Quer colocar coração naquilo que faz, ser reconhecido de modo autêntico e encorajar outros a também ocuparem espaço.",strengths:["Generosidade e calor.","Criatividade, presença e lealdade.","Capacidade de inspirar confiança."],weaknesses:["Orgulho ferido diante da indiferença.","Dramatização ou necessidade de validação.","Dificuldade em dividir o centro."],relations:"Precisa de admiração sincera, lealdade e afeto demonstrado. Cresce quando reconhecimento circula e quando brilho não depende de diminuir ninguém.",balance:"Em equilíbrio, lidera pelo coração: expressa sua singularidade e, ao mesmo tempo, ilumina o valor dos outros."},
  {name:"Virgem",glyph:"♍",dates:"23 de agosto a 22 de setembro",element:"Terra",modality:"Mutável",ruler:"Mercúrio",accent:"#b69338",keywords:"análise serviço detalhe método aperfeiçoamento discernimento",intro:"Virgem simboliza discernimento, método e cuidado com o que pode ser aprimorado. Observa detalhes para tornar a vida mais funcional, clara e saudável.",strengths:["Precisão e capacidade de diagnosticar problemas.","Praticidade e senso de serviço.","Aprimoramento contínuo."],weaknesses:["Autocrítica e perfeccionismo.","Ansiedade diante do erro ou da desordem.","Foco no detalhe que perde a totalidade."],relations:"Demonstra afeto ajudando, lembrando e aperfeiçoando. Precisa aprender a perguntar antes de corrigir e a receber cuidado sem provar utilidade.",balance:"Em equilíbrio, distingue sem julgar e melhora sem humilhar; seu rigor torna-se artesanato atento."},
  {name:"Libra",glyph:"♎",dates:"23 de setembro a 22 de outubro",element:"Ar",modality:"Cardinal",ruler:"Vênus",accent:"#3e9ea0",keywords:"equilíbrio parceria estética justiça diplomacia reciprocidade",intro:"Libra simboliza relação, medida e negociação. Compara perspectivas e busca uma forma de convivência em que beleza, justiça e reciprocidade possam existir juntas.",strengths:["Diplomacia e leitura de diferentes perspectivas.","Senso de proporção e estética.","Capacidade de construir acordos."],weaknesses:["Indecisão ao tentar preservar todas as opções.","Evitação de conflito necessário.","Dependência excessiva da resposta alheia."],relations:"Vê a parceria como espaço de construção mútua. Precisa de diálogo, elegância e equidade. Também precisa de coragem para não trocar a própria voz por paz aparente.",balance:"Em equilíbrio, concilia sem se apagar e escolhe sem transformar cada decisão em rejeição do restante."},
  {name:"Escorpião",glyph:"♏",dates:"23 de outubro a 21 de novembro",element:"Água",modality:"Fixo",ruler:"Marte / Plutão",accent:"#3b77bd",keywords:"intensidade transformação segredo intimidade poder profundidade",intro:"Escorpião simboliza profundidade, crise e regeneração. Procura o que existe sob a superfície e leva confiança, perda e transformação com grande seriedade.",strengths:["Percepção psicológica e coragem diante do difícil.","Lealdade intensa.","Capacidade de regeneração."],weaknesses:["Suspeita e necessidade de controle.","Ressentimento quando a dor não é elaborada.","Tudo-ou-nada em situações ambíguas."],relations:"Precisa de honestidade profunda e confiança construída. Intimidade cresce quando intensidade não vira teste, investigação ou posse.",balance:"Em equilíbrio, encara verdades sem usá-las como arma; transforma dor em discernimento e vínculo em escolha livre."},
  {name:"Sagitário",glyph:"♐",dates:"22 de novembro a 21 de dezembro",element:"Fogo",modality:"Mutável",ruler:"Júpiter",accent:"#d85b55",keywords:"expansão viagem verdade filosofia entusiasmo liberdade",intro:"Sagitário simboliza expansão de horizonte. Busca sentido por meio de experiências, ideias e deslocamentos que ampliem aquilo que considera possível.",strengths:["Entusiasmo e visão ampla.","Franqueza e disposição para explorar.","Capacidade de encontrar significado."],weaknesses:["Excesso de promessa ou otimismo.","Franqueza sem tato.","Fuga de limites e detalhes."],relations:"Precisa de liberdade, humor e crescimento compartilhado. Compromisso funciona melhor como aventura consciente do que como confinamento.",balance:"Em equilíbrio, amplia sem colonizar e diz a verdade sem perder gentileza; converte experiência em sabedoria vivida."},
  {name:"Capricórnio",glyph:"♑",dates:"22 de dezembro a 19 de janeiro",element:"Terra",modality:"Cardinal",ruler:"Saturno",accent:"#b69338",keywords:"responsabilidade ambição tempo estrutura disciplina realização",intro:"Capricórnio simboliza responsabilidade, tempo e construção. Mede esforços pela capacidade de produzir resultado duradouro e aprende cedo a lidar com limites.",strengths:["Disciplina e planejamento de longo prazo.","Responsabilidade e resistência.","Capacidade de transformar metas em estrutura."],weaknesses:["Rigidez ou pessimismo defensivo.","Identificação excessiva com desempenho.","Dificuldade de descansar e pedir ajuda."],relations:"Valoriza confiança, maturidade e compromisso comprovado. Afeto pode aparecer como sustentação prática; vulnerabilidade impede que competência vire isolamento.",balance:"Em equilíbrio, a ambição ganha propósito e o limite ganha humanidade; constrói degraus sem esquecer por que começou a subir."},
  {name:"Aquário",glyph:"♒",dates:"20 de janeiro a 18 de fevereiro",element:"Ar",modality:"Fixo",ruler:"Saturno / Urano",accent:"#3e9ea0",keywords:"inovação coletivo independência futuro diferença ideal",intro:"Aquário simboliza visão coletiva e ruptura de padrões. Observa sistemas à distância e imagina formas alternativas de organizar a vida comum.",strengths:["Originalidade e pensamento sistêmico.","Independência intelectual.","Interesse pelo coletivo e pelo futuro."],weaknesses:["Distanciamento emocional.","Rebeldia automática contra expectativas.","Apego paradoxal às próprias ideias."],relations:"Precisa de amizade, liberdade e afinidade mental. Intimidade cresce quando ideais universais também encontram a pessoa concreta à sua frente.",balance:"Em equilíbrio, inova sem se desligar e pertence sem obedecer cegamente; transforma diferença em contribuição."},
  {name:"Peixes",glyph:"♓",dates:"19 de fevereiro a 20 de março",element:"Água",modality:"Mutável",ruler:"Júpiter / Netuno",accent:"#3b77bd",keywords:"imaginação compaixão sonho dissolução arte sensibilidade",intro:"Peixes simboliza permeabilidade, imaginação e ligação com aquilo que ultrapassa o indivíduo. Capta nuances e converte experiência em imagem, compaixão ou sonho.",strengths:["Empatia e imaginação fértil.","Sensibilidade artística e simbólica.","Capacidade de aceitar complexidade emocional."],weaknesses:["Limites frágeis e tendência à fuga.","Idealização ou confusão.","Absorção excessiva do ambiente."],relations:"Busca conexão sensível, inspiração e acolhimento. Precisa de limites claros para que empatia não se transforme em salvamento, fusão ou exaustão.",balance:"Em equilíbrio, sente sem se dissolver e sonha sem abandonar o chão; dá forma compartilhável ao que parecia indizível."}
];

const signExtras = {
  "Áries": {compatible:"Leão e Sagitário acompanham seu ritmo e entusiasmo; Gêmeos e Aquário acrescentam movimento mental sem exigir passividade.", challenging:"Câncer e Capricórnio podem entrar em choque com sua pressa por segurança ou controle; Libra pede negociação onde Áries preferiria decidir sozinho.", rulerMeaning:"Marte associa Áries a impulso, coragem, desejo e capacidade de confronto.", ascendant:"Como ascendente, Áries costuma aparecer numa presença direta, rápida e espontânea: a pessoa tende a iniciar antes de observar por muito tempo.", growth:"Seu amadurecimento passa por distinguir coragem de precipitação. Escutar o ritmo alheio, sustentar o que começou e escolher batalhas transforma impulso em liderança consistente."},
  "Touro": {compatible:"Virgem e Capricórnio compartilham pragmatismo e constância; Câncer e Peixes acrescentam vínculo emocional à segurança taurina.", challenging:"Leão e Aquário também são fixos e podem disputar direção; Escorpião intensifica temas de apego, confiança e controle.", rulerMeaning:"Vênus associa Touro a valor, prazer, vínculo, estética e capacidade de cultivar recursos.", ascendant:"Como ascendente, Touro tende a transmitir calma, presença física e ritmo deliberado; aproxima-se do mundo procurando estabilidade e qualidade.", growth:"Seu amadurecimento pede flexibilidade sem perda de raízes. Abrir espaço para mudanças graduais impede que perseverança se transforme em imobilidade."},
  "Gêmeos": {compatible:"Libra e Aquário acompanham sua curiosidade intelectual; Áries e Leão oferecem dinamismo e experiências que alimentam a conversa.", challenging:"Virgem pode exigir método onde Gêmeos quer variedade; Peixes trabalha por imagens e sentimentos que nem sempre cabem em explicações rápidas; Sagitário confronta detalhe e visão ampla.", rulerMeaning:"Mercúrio associa Gêmeos a linguagem, aprendizagem, mobilidade, comparação e troca de informações.", ascendant:"Como ascendente, Gêmeos costuma aparecer como presença curiosa, comunicativa e adaptável, que primeiro pergunta, observa e conecta.", growth:"Seu amadurecimento está em escolher quais ideias merecem continuidade. Profundidade, silêncio e compromisso transformam informação em conhecimento."},
  "Câncer": {compatible:"Escorpião e Peixes reconhecem sua profundidade afetiva; Touro e Virgem oferecem constância e cuidado concreto.", challenging:"Áries pode parecer brusco, Libra excessivamente racional na negociação e Capricórnio contido; todos ativam diferentes tensões entre intimidade e autonomia.", rulerMeaning:"A Lua associa Câncer a ciclos, memória, necessidades emocionais, cuidado e sensação de pertencimento.", ascendant:"Como ascendente, Câncer tende a transmitir sensibilidade e cautela. A pessoa lê o ambiente antes de se abrir e reage protegendo aquilo que considera íntimo.", growth:"Seu amadurecimento pede nomear necessidades diretamente e diferenciar proteção de controle. Criar limites permite cuidar sem carregar tudo."},
  "Leão": {compatible:"Áries e Sagitário alimentam expressão e entusiasmo; Gêmeos e Libra oferecem troca, leveza e reconhecimento mútuo.", challenging:"Touro e Escorpião podem disputar lealdade e controle; Aquário questiona centralidade e pede espaço para o coletivo.", rulerMeaning:"O Sol associa Leão a identidade, vitalidade, criatividade, visibilidade e vontade de expressar o centro de si.", ascendant:"Como ascendente, Leão tende a produzir uma presença calorosa, expressiva e perceptível, com necessidade de agir de modo autoral.", growth:"Seu amadurecimento transforma necessidade de aplauso em generosidade criativa. Dividir o palco não diminui o brilho: amplia seu alcance."},
  "Virgem": {compatible:"Touro e Capricórnio compartilham realismo e método; Câncer e Escorpião valorizam sua atenção cuidadosa.", challenging:"Gêmeos dispersa o que Virgem quer organizar; Sagitário relativiza detalhes; Peixes convida a aceitar ambiguidades que não podem ser corrigidas.", rulerMeaning:"Mercúrio associa Virgem a análise, classificação, linguagem aplicada, discernimento e aperfeiçoamento.", ascendant:"Como ascendente, Virgem tende a transmitir observação, discrição e prontidão para organizar. A aproximação inicial costuma ser prática e criteriosa.", growth:"Seu amadurecimento envolve trocar perfeição por precisão suficiente. Descanso, tolerância ao erro e visão do conjunto tornam o cuidado mais humano."},
  "Libra": {compatible:"Gêmeos e Aquário estimulam diálogo e perspectiva; Leão e Sagitário acrescentam calor, decisão e movimento.", challenging:"Câncer e Capricórnio priorizam seguranças diferentes; Áries expõe diretamente o conflito que Libra poderia tentar suavizar.", rulerMeaning:"Vênus associa Libra a reciprocidade, estética, vínculo, valor e construção de acordos.", ascendant:"Como ascendente, Libra tende a transmitir cortesia, senso de proporção e atenção ao outro, buscando primeiro compreender a dinâmica da relação.", growth:"Seu amadurecimento pede escolhas claras e tolerância ao desconforto de desagradar. A verdadeira harmonia inclui diferença e posicionamento."},
  "Escorpião": {compatible:"Câncer e Peixes compreendem sua intensidade emocional; Virgem e Capricórnio oferecem lealdade e consistência.", challenging:"Touro confronta apego e posse; Leão disputa poder e reconhecimento; Aquário resiste à fusão emocional e preserva distância.", rulerMeaning:"Marte, regente tradicional, liga Escorpião a desejo e confronto; Plutão, regente moderno, reforça crise, poder e transformação.", ascendant:"Como ascendente, Escorpião tende a transmitir intensidade, reserva e percepção penetrante. A pessoa observa motivações antes de oferecer confiança.", growth:"Seu amadurecimento está em trocar testes por diálogo e controle por escolha consciente. Vulnerabilidade não elimina poder; torna a intimidade possível."},
  "Sagitário": {compatible:"Áries e Leão compartilham entusiasmo e franqueza; Libra e Aquário ampliam ideias, redes e horizontes.", challenging:"Virgem cobra detalhe, Peixes pede sensibilidade ao implícito e Gêmeos multiplica informações; os três desafiam a transformar convicção em escuta.", rulerMeaning:"Júpiter associa Sagitário a expansão, fé, conhecimento, viagem, excesso e busca de significado.", ascendant:"Como ascendente, Sagitário tende a transmitir abertura, humor e impulso explorador, aproximando-se do mundo como território de descoberta.", growth:"Seu amadurecimento pede responsabilidade pelas próprias promessas. A liberdade se fortalece quando existe direção, escuta e respeito aos limites concretos."},
  "Capricórnio": {compatible:"Touro e Virgem acompanham seu compromisso com resultados; Escorpião e Peixes acrescentam profundidade e imaginação.", challenging:"Áries pode apressar seus planos, Câncer expõe necessidades emocionais e Libra exige negociação; todos desafiam sua tendência a centralizar responsabilidade.", rulerMeaning:"Saturno associa Capricórnio a tempo, limite, responsabilidade, estrutura, maturidade e conquista gradual.", ascendant:"Como ascendente, Capricórnio tende a transmitir seriedade, autocontrole e competência. A pessoa costuma avaliar riscos antes de ocupar uma posição.", growth:"Seu amadurecimento inclui reconhecer valor fora do desempenho. Pedir ajuda, celebrar etapas e flexibilizar o plano preservam a ambição sem endurecimento."},
  "Aquário": {compatible:"Gêmeos e Libra acompanham ideias e independência; Áries e Sagitário estimulam experimentação e projetos voltados ao futuro.", challenging:"Touro resiste à ruptura, Leão pede reconhecimento pessoal e Escorpião busca intimidade intensa; os três confrontam seu distanciamento.", rulerMeaning:"Saturno, regente tradicional, liga Aquário a sistemas e princípios; Urano, regente moderno, reforça inovação, ruptura e liberdade.", ascendant:"Como ascendente, Aquário tende a transmitir singularidade, independência e certa distância observadora, abordando o mundo por ideias e diferenças.", growth:"Seu amadurecimento pede presença emocional e compromisso com pessoas reais, não apenas com ideias coletivas. Pertencer também pode ser uma forma de liberdade."},
  "Peixes": {compatible:"Câncer e Escorpião reconhecem sua linguagem afetiva; Touro e Capricórnio oferecem chão e continuidade aos seus sonhos.", challenging:"Gêmeos racionaliza e dispersa, Virgem delimita e corrige, Sagitário busca uma verdade ampla; os três desafiam sua permeabilidade e ambiguidade.", rulerMeaning:"Júpiter, regente tradicional, liga Peixes a fé e expansão; Netuno, regente moderno, reforça imaginação, dissolução e sensibilidade simbólica.", ascendant:"Como ascendente, Peixes tende a transmitir suavidade, receptividade e adaptação ao ambiente, com fronteiras iniciais mais fluidas.", growth:"Seu amadurecimento depende de limites, rotina e discernimento. Dar forma ao que sente protege sua sensibilidade e transforma imaginação em criação compartilhável."}
};

const state = { mode: "mbti", view: "types", query: "" };
const body = document.body;
const grid = document.querySelector("#card-grid");
const search = document.querySelector("#search");
const count = document.querySelector("#result-count");
const empty = document.querySelector("#empty-state");
const dialog = document.querySelector("#detail-dialog");
const dialogContent = document.querySelector("#dialog-content");
const matchFirst = document.querySelector("#match-first");
const matchSecond = document.querySelector("#match-second");
const matchFirstList = document.querySelector("#match-first-list");
const matchSecondList = document.querySelector("#match-second-list");
const birthChartTab = document.querySelector("#birth-chart-tab");
const mbtiTestTab = document.querySelector("#mbti-test-tab");
const matchResult = document.querySelector("#match-result");
const matchError = document.querySelector("#match-error");

const normalize = value => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
document.querySelector("#function-order").innerHTML = processRoleInfo.map(([role, description], index) => `<p><strong>${index + 1}. ${role}</strong><span>${description}</span></p>`).join("");
const highlightedNames = [...allMbtiCodes, ...signs.map(item => item.name)].sort((a, b) => b.length - a.length);
const emphasizeNames = value => highlightedNames.reduce((text, name) => text.replaceAll(name, `<strong>${name}</strong>`), value);
const listText = items => `<ul>${items.map(item => `<li>${emphasizeNames(item)}</li>`).join("")}</ul>`;

function setMode(mode) {
  state.mode = mode;
  if (mode === "mbti" && state.view === "birth-chart") state.view = "types";
  if (mode === "astro" && state.view === "test") state.view = "types";
  state.query = "";
  search.value = "";
  body.classList.toggle("mode-astro", mode === "astro");
  body.classList.toggle("mode-mbti", mode === "mbti");
  document.querySelectorAll(".mode-label").forEach(el => el.classList.toggle("active", el.dataset.mode === mode));
  document.querySelector(".switch-arrow").setAttribute("aria-pressed", mode === "astro");
  document.querySelector("meta[name=theme-color]").content = mode === "astro" ? "#07152f" : "#e9ecef";
  document.querySelector("#catalogue-kicker").textContent = mode === "astro" ? "OS DOZE SIGNOS" : "TIPOS DISPONÍVEIS";
  document.querySelector("#catalogue-title").textContent = mode === "astro" ? "Signos" : "Tipos MBTI";
  search.placeholder = mode === "astro" ? "Pesquisar signo, elemento ou característica…" : "Pesquisar código, título ou característica…";
  birthChartTab.hidden = mode !== "astro";
  mbtiTestTab.hidden = mode !== "mbti";
  document.querySelectorAll(".view-switch button").forEach(button => button.classList.toggle("active", button.dataset.view === state.view));
  prepareMatch();
  updateVisibility();
  render();
}

function setView(view) {
  if (view === "birth-chart" && state.mode !== "astro") return;
  if (view === "test" && state.mode !== "mbti") return;
  state.view = view;
  document.querySelectorAll(".view-switch button").forEach(button => button.classList.toggle("active", button.dataset.view === view));
  if (view === "match") prepareMatch();
  updateVisibility();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateVisibility() {
  document.querySelectorAll(".mbti-only, .astro-only, .types-view, .about-view, .match-view, .test-view, .birth-chart-view").forEach(element => {
    const correctMode = (!element.classList.contains("mbti-only") || state.mode === "mbti") && (!element.classList.contains("astro-only") || state.mode === "astro");
    const correctView = (!element.classList.contains("types-view") || state.view === "types") && (!element.classList.contains("about-view") || state.view === "about") && (!element.classList.contains("match-view") || state.view === "match") && (!element.classList.contains("test-view") || state.view === "test") && (!element.classList.contains("birth-chart-view") || state.view === "birth-chart");
    element.hidden = !(correctMode && correctView);
  });
}

function searchable(item) {
  return state.mode === "mbti"
    ? [item.id,personalityExtras[item.id].title,item.label,item.summary,item.intro,item.strengths,item.cautions,item.relations,item.work,item.preferences.flat()].flat().join(" ")
    : [item.name,item.element,item.modality,item.ruler,item.keywords,item.intro,item.strengths,item.weaknesses,item.relations].flat().join(" ");
}

function matchesQuery(item, query) {
  if (!query) return true;
  const haystack = normalize(searchable(item));
  const tokens = haystack.split(/[^a-z0-9]+/).filter(Boolean);
  return query.split(/\s+/).every(part => part.length <= 2 ? tokens.includes(part) : haystack.includes(part));
}

function render() {
  const source = state.mode === "mbti" ? [...personalities].sort((a,b) => a.id.localeCompare(b.id)) : signs;
  const q = normalize(state.query.trim());
  const items = source.filter(item => matchesQuery(item, q));
  count.textContent = `${items.length} ${state.mode === "mbti" ? (items.length === 1 ? "tipo encontrado" : "tipos encontrados") : (items.length === 1 ? "signo encontrado" : "signos encontrados")}`;
  empty.hidden = items.length !== 0;
  grid.hidden = items.length === 0;
  grid.innerHTML = items.map((item, index) => state.mode === "mbti" ? personalityCard(item, index) : signCard(item, index)).join("");
  grid.querySelectorAll("button[data-id]").forEach(button => button.addEventListener("click", () => openDetail(button.dataset.id)));
}

function personalityCard(item, index) {
  const extra = personalityExtras[item.id];
  return `<button class="catalogue-card" style="--accent:${item.accent}" data-id="${item.id}" type="button">
    <span class="card-top"><span class="card-index">${String(index + 1).padStart(2,"0")}</span><span class="card-arrow" aria-hidden="true">›</span></span>
    <h3>${item.id}</h3><h4 class="type-title">${extra.title}</h4><p class="subtitle"><strong>${item.id}</strong>: ${item.summary}</p>
    <span class="letter-code" aria-label="${item.preferences.map(p => p[1]).join(", ")}; identidade Assertiva ou Turbulenta">${item.id.split("").map(letter => `<span>${letter}</span>`).join("")}<span class="identity-letter">A/T</span></span>
  </button>`;
}

function signCard(item, index) {
  return `<button class="catalogue-card" style="--accent:${item.accent}" data-id="${item.name}" type="button">
    <span class="card-top"><span class="card-index">${String(index + 1).padStart(2,"0")}</span><span class="card-arrow" aria-hidden="true">›</span></span>
    <h3>${item.name}</h3><p class="subtitle">${emphasizeNames(item.intro)}</p>
    <span class="sign-meta"><span>${item.element} · ${item.dates}</span><span class="sign-glyph" aria-hidden="true">${item.glyph}</span></span>
  </button>`;
}

function openDetail(id) {
  if (state.mode === "mbti") {
    const item = personalities.find(entry => entry.id === id);
    const extra = personalityExtras[item.id];
    dialog.style.setProperty("--dialog-accent", item.accent);
    dialogContent.innerHTML = `<header class="detail-hero"><span class="detail-overline">TIPO MBTI · ${item.label}</span><h2>${item.id}</h2><p class="detail-type-title">${extra.title}</p><p>${emphasizeNames(item.intro)}</p>
      <div class="pref-row">${item.preferences.map(([letter,label]) => `<span>${letter}<small>${label}</small></span>`).join("")}</div></header>
      <div class="detail-sections">
        <section class="detail-block"><h3>Pontos fortes</h3>${listText(item.strengths)}</section>
        <section class="detail-block"><h3>Pontos fracos</h3>${listText(item.cautions)}</section>
        <section class="detail-block"><h3>Relações e socialização</h3><p>${emphasizeNames(item.relations)}</p></section>
        <section class="detail-block"><h3>Trabalho e modo de agir</h3><p>${emphasizeNames(item.work)}</p></section>
        <section class="detail-block full"><h3>Afinidades por contexto</h3><div class="compatibility-grid"><div><strong>Amizade e similaridade</strong><p>${emphasizeNames(extra.compatibility.friendship)}</p></div><div><strong>Trabalho e respeito</strong><p>${emphasizeNames(extra.compatibility.work)}</p></div><div><strong>Afeto e complemento</strong><p>${emphasizeNames(extra.compatibility.affection)}</p></div><div><strong>Crescimento e diferença</strong><p>${emphasizeNames(extra.compatibility.growth)}</p></div></div></section>
        <section class="detail-block full"><h3>Equilíbrio e desenvolvimento</h3><p><strong>Sob pressão:</strong> ${emphasizeNames(item.stress)}</p><p class="spaced"><strong>Para desenvolver:</strong> ${emphasizeNames(item.growth)}</p></section>
        <section class="detail-block full"><h3>Dinâmica das funções</h3><div class="process-grid">${extra.processes.map(([,name,description], index) => `<div><span>${processRoleInfo[index][0]}</span><strong>${standardizeProcessName(name)}</strong><p>${processRoleInfo[index][1]} ${description}</p></div>`).join("")}</div></section>
        <section class="detail-block full identity-block"><h3>Identidade: ${item.id}-A ou ${item.id}-T</h3><p class="section-note">Este quinto eixo pertence ao modelo do 16Personalities, não ao MBTI oficial. Ele modifica a forma como o mesmo tipo-base reage à confiança, à cobrança e ao estresse.</p><div class="identity-compare"><div><strong>${item.id}-A · Assertivo</strong><p>${emphasizeNames(extra.identityA)}</p></div><div><strong>${item.id}-T · Turbulento</strong><p>${emphasizeNames(extra.identityT)}</p></div></div></section>
      </div>`;
  } else {
    const item = signs.find(entry => entry.name === id);
    const extra = signExtras[item.name];
    dialog.style.setProperty("--dialog-accent", item.accent);
    dialogContent.innerHTML = `<header class="detail-hero"><span class="detail-overline">${item.element} · ${item.modality} · regência: ${item.ruler}</span><h2><span class="sign-glyph-title">${item.glyph}</span><span class="sign-name">${item.name}</span></h2><p class="sign-dates"><strong>${item.dates}</strong></p><p class="sign-intro">${emphasizeNames(item.intro)}</p></header>
      <div class="detail-sections">
        <section class="detail-block full"><h3>Palavras-chave</h3><p>${item.keywords.split(" ").join(" · ")}</p></section>
        <section class="detail-block"><h3>Pontos fortes</h3>${listText(item.strengths)}</section>
        <section class="detail-block"><h3>Pontos fracos</h3>${listText(item.weaknesses)}</section>
        <section class="detail-block"><h3>Compatibilidades tradicionais</h3><p>${emphasizeNames(extra.compatible)}</p></section>
        <section class="detail-block"><h3>Relações mais desafiadoras</h3><p>${emphasizeNames(extra.challenging)}</p></section>
        <section class="detail-block"><h3>Planeta regente</h3><p>${emphasizeNames(extra.rulerMeaning)}</p></section>
        <section class="detail-block"><h3>${item.name} como ascendente</h3><p>${emphasizeNames(extra.ascendant)}</p></section>
        <section class="detail-block full"><h3>Caminhos de amadurecimento</h3><p>${emphasizeNames(extra.growth)}</p></section>
      </div>`;
  }
  dialog.showModal();
  dialog.querySelector(".dialog-close").focus();
}

function prepareMatch() {
  const mbti = state.mode === "mbti";
  document.querySelector("#match-kicker").textContent = mbti ? "COMPARAÇÃO ENTRE TIPOS" : "COMPARAÇÃO ENTRE SIGNOS";
  document.querySelector("#match-title").innerHTML = mbti ? "Match de<br><em>MBTI.</em>" : "Match de<br><em>signos.</em>";
  document.querySelector("#match-copy").textContent = mbti
    ? "Escolha dois tipos para compreender como suas preferências podem aparecer na amizade, no trabalho, no afeto e no crescimento conjunto."
    : "Escolha dois signos para comparar elemento, ritmo de ação e tendências tradicionais de convivência em quatro áreas da vida.";
  document.querySelectorAll(".match-selectors label > span:first-child").forEach((label, index) => label.textContent = `${index === 0 ? "PRIMEIRO" : "SEGUNDO"} ${mbti ? "TIPO" : "SIGNO"}`);
  closeMatchSuggestions(matchFirst, matchFirstList);
  closeMatchSuggestions(matchSecond, matchSecondList);
  matchFirst.value = "";
  matchSecond.value = "";
  matchResult.hidden = true;
  matchError.hidden = true;
}

function standardizeProcessName(name) {
  const normalized = normalize(name);
  const code = Object.keys(processInfo).find(key => {
    const [label] = processInfo[key];
    const family = normalize(label.split(" ")[0]);
    const direction = key[1] === "i" ? "dentro" : "fora";
    return normalized.includes(family) && (normalized.includes(direction) || normalized.includes(key.toLowerCase()));
  });
  return code ? processInfo[code][0] : name;
}

function matchSource() {
  return state.mode === "mbti" ? [...personalities].sort((a,b) => a.id.localeCompare(b.id)) : signs;
}

function matchValue(item) {
  return state.mode === "mbti" ? item.id : item.name;
}

function closeMatchSuggestions(input, panel) {
  panel.hidden = true;
  input.setAttribute("aria-expanded", "false");
}

function showMatchSuggestions(input, panel, showAll = false) {
  const typed = showAll ? "" : normalize(input.value.trim());
  const items = matchSource().filter(item => {
    const detail = state.mode === "mbti" ? `${item.id} ${personalityExtras[item.id].title}` : `${item.name} ${item.element} ${item.modality}`;
    return !typed || normalize(detail).includes(typed);
  });
  panel.innerHTML = items.length
    ? items.map(item => `<button type="button" role="option" data-value="${matchValue(item)}"><strong>${matchValue(item)}</strong><small>${state.mode === "mbti" ? personalityExtras[item.id].title : `${item.element} · ${item.modality}`}</small></button>`).join("")
    : `<span class="suggestion-empty">Nenhuma opção encontrada.</span>`;
  panel.hidden = false;
  input.setAttribute("aria-expanded", "true");
  panel.querySelectorAll("button").forEach(button => button.addEventListener("pointerdown", event => {
    event.preventDefault();
    input.value = button.dataset.value;
    closeMatchSuggestions(input, panel);
    matchResult.hidden = true;
    matchError.hidden = true;
  }));
}

[[matchFirst, matchFirstList], [matchSecond, matchSecondList]].forEach(([input, panel]) => {
  input.addEventListener("focus", () => showMatchSuggestions(input, panel, true));
  input.addEventListener("click", () => showMatchSuggestions(input, panel, true));
  input.addEventListener("input", () => { showMatchSuggestions(input, panel); matchResult.hidden = true; });
  input.addEventListener("keydown", event => { if (event.key === "Escape") closeMatchSuggestions(input, panel); });
});

document.addEventListener("pointerdown", event => {
  if (!event.target.closest(".match-input-wrap")) {
    closeMatchSuggestions(matchFirst, matchFirstList);
    closeMatchSuggestions(matchSecond, matchSecondList);
  }
});

function findMatchChoice(value) {
  const source = state.mode === "mbti" ? personalities : signs;
  return source.find(item => normalize(state.mode === "mbti" ? item.id : item.name) === normalize(value.trim()));
}

function mbtiMatch(first, second) {
  const same = [...first.id].map((letter, index) => letter === second.id[index]);
  const total = same.filter(Boolean).length;
  const friendship = `${same[0]
    ? first.id[0] === "I"
      ? `${first.id} e ${second.id} não precisam preencher todo silêncio para confirmar a amizade. Conversas profundas, encontros com propósito e a liberdade de desaparecer por alguns dias podem criar uma proximidade muito confortável.`
      : `${first.id} e ${second.id} tendem a alimentar a amizade por movimento: convites, conversas em tempo real e experiências compartilhadas. A relação ganha vida com facilidade, desde que ninguém transforme disponibilidade em obrigação constante.`
    : `${first.id} costuma se aproximar com ${first.id[0] === "E" ? "mais presença externa e iniciativa" : "seletividade e tempo para confiar"}, enquanto ${second.id} chega pela via oposta. Um pode abrir a porta para novas experiências e o outro transformar contato em intimidade, desde que respeitem pausas sem chamá-las de desinteresse.`} ${same[1]
    ? first.id[1] === "N"
      ? `Os assuntos facilmente saltam do cotidiano para ideias, hipóteses e projetos futuros. É uma amizade que pode passar horas imaginando o que ainda não existe, mas se beneficia quando alguém também cuida dos detalhes práticos.`
      : `A conexão cresce por acontecimentos reais, hábitos, lembranças e ajuda concreta. Os dois reconhecem carinho em quem aparece e faz, embora valha reservar espaço para sonhos que ainda não têm forma definida.`
    : `Quando conversam, ${first.id} nota primeiro ${first.id[1] === "S" ? "o que aconteceu e os detalhes observáveis" : "o significado e as possibilidades por trás do ocorrido"}; ${second.id} completa a cena pelo outro ângulo. Essa troca fica rica quando pergunta vem antes de correção.`}`;
  const work = `${same[1]
    ? first.id[1] === "S"
      ? `Num projeto, ambos querem saber o que precisa ser entregue, quais recursos existem e qual procedimento já funciona.`
      : `Num projeto, ambos enxergam conexões e melhorias antes de todas as etapas estarem definidas; reuniões de criação tendem a render muito.`
    : `Num projeto, ${first.id} contribui mais naturalmente com ${first.id[1] === "S" ? "dados, sequência e viabilidade imediata" : "direção, alternativas e visão de longo prazo"}, enquanto ${second.id} traz ${second.id[1] === "S" ? "dados, sequência e viabilidade imediata" : "direção, alternativas e visão de longo prazo"}.`} ${same[2]
    ? `Como os dois avaliam decisões por ${first.id[2] === "T" ? "lógica e consistência" : "valores e impacto nas pessoas"}, os critérios parecem familiares, mas uma equipe saudável ainda precisa perguntar pelo lado que não surgiu espontaneamente.`
    : `${first.id} testa a decisão pela ${first.id[2] === "T" ? "coerência" : "repercussão humana"}; ${second.id}, pela ${second.id[2] === "T" ? "coerência" : "repercussão humana"}. Em vez de discutir quem está sendo frio ou subjetivo, eles funcionam melhor quando transformam cada perspectiva em um critério explícito.`} ${same[3]
    ? first.id[3] === "J" ? `Prazos e responsabilidades tendem a ficar claros, embora mudanças tardias possam irritar os dois.` : `Há espaço para experimentar e corrigir a rota, mas alguém precisa converter possibilidades em uma entrega final.`
    : `${first.id} ajuda a ${first.id[3] === "J" ? "definir etapas e encerrar decisões" : "manter alternativas abertas e reagir ao imprevisto"}; ${second.id} faz o contraponto. Um cronograma com partes fixas e margens de adaptação aproveita o melhor dos dois.`}`;
  const affection = `${same[2]
    ? first.id[2] === "F"
      ? `Os dois costumam perceber cuidado na escuta, na validação e na atenção ao clima emocional. Em uma discussão, podem proteger tanto a harmonia que deixam o problema sem nome; falar com delicadeza não precisa significar evitar o assunto.`
      : `Os dois tendem a demonstrar cuidado tentando compreender, resolver e tornar a situação mais coerente. Em uma discussão, oferecer solução pode parecer amor para ambos, mas perguntar "você quer ajuda ou apenas companhia?" evita que sentimentos importantes virem um problema técnico.`
    : `${first.id} costuma demonstrar afeto por ${first.id[2] === "F" ? "acolhimento e sintonia com necessidades" : "clareza, lealdade e busca de soluções"}; ${second.id}, por ${second.id[2] === "F" ? "acolhimento e sintonia com necessidades" : "clareza, lealdade e busca de soluções"}. O vínculo melhora quando cada um aprende a reconhecer a intenção carinhosa antes de exigir que ela venha no próprio idioma.`} ${same[0]
    ? first.id[0] === "I" ? `A intimidade pode ser discreta e profunda, construída em pequenos rituais a dois.` : `A intimidade costuma crescer com troca frequente, planos e presença visível.`
    : `Também é importante combinar quanto contato aproxima e quanto espaço reorganiza: para um, conversar restaura o vínculo; para o outro, respirar antes da conversa pode ser o caminho mais honesto de voltar.`}`;
  const differences = ["energia e atenção", "modo de perceber", "critério de decisão", "ritmo de organização"].filter((_, index) => !same[index]);
  const growth = total === 4
    ? `${first.id} e ${second.id} funcionam como espelhos: reconhecem rapidamente o método um do outro, mas também podem confirmar os mesmos pontos cegos. O crescimento aparece quando um deles pergunta o que nenhum dos dois costuma perguntar e convida perspectivas externas antes de fechar uma conclusão.`
    : `${first.id} e ${second.id} se desafiam principalmente em ${differences.join(differences.length > 1 ? ", " : "")}. Na prática, ${first.id} pode observar como ${second.id} realiza com naturalidade algo que lhe custa energia, e o inverso também vale. O objetivo não é trocar de personalidade, mas ampliar o repertório: experimentar o método do outro em situações pequenas ajuda a transformar estranhamento em aprendizado.`;
  const strengths = [
    total >= 3 ? `${first.id} e ${second.id} reconhecem com rapidez o ritmo mental um do outro.` : `A dupla reúne recursos diferentes e pode chegar a respostas que nenhum dos dois produziria sozinho.`,
    same[1] ? `Existe familiaridade na maneira de perceber e explicar uma situação.` : `${first.id} e ${second.id} podem unir possibilidade e realidade concreta.`,
    same[2] ? `Os critérios de decisão são compreendidos sem muita tradução.` : `As escolhas podem equilibrar coerência e impacto humano.`
  ];
  const weaknesses = [
    same[0] ? `O mesmo ritmo social pode reforçar ${first.id[0] === "I" ? "isolamento" : "excesso de estímulo"}.` : `Necessidades diferentes de contato e silêncio podem ser interpretadas como rejeição ou invasão.`,
    same[3] ? `A preferência comum por ${first.id[3] === "J" ? "controle e fechamento" : "abertura e improvisação"} pode crescer sem contrapeso.` : `Planejamento e espontaneidade podem virar uma disputa sobre quem define o ritmo.`,
    total <= 1 ? `Há muitas diferenças simultâneas; suposições custam mais do que perguntas diretas.` : `A sensação de familiaridade pode esconder necessidades que não são realmente iguais.`
  ];
  const overview = total === 4 ? `Dois estilos muito próximos: a identificação é imediata, mas os pontos cegos também podem ser compartilhados.` : total >= 2 ? `Há familiaridade suficiente para criar ponte e contraste suficiente para ampliar a visão.` : `É uma combinação de linguagens diferentes que pede curiosidade, tradução e acordos claros.`;
  return `<header><span>${total} DE 4 PREFERÊNCIAS COMPARTILHADAS</span><h2>${first.id} + ${second.id}</h2><p>${personalityExtras[first.id].title} encontra ${personalityExtras[second.id].title}. ${overview}</p></header><div class="match-context-grid"><article><h3>Amizade e socialização</h3><p>${friendship}</p></article><article><h3>Trabalho e projetos</h3><p>${work}</p></article><article><h3>Afeto e convivência</h3><p>${affection}</p></article><article><h3>Aprendizado e crescimento</h3><p>${growth}</p></article></div><div class="match-balance"><article><h3>Pontos fortes</h3>${listText(strengths)}</article><article><h3>Pontos fracos</h3>${listText(weaknesses)}</article></div><section class="match-advice"><h3>Conselho geral</h3><p>${total >= 3 ? `${first.id} e ${second.id} não devem confundir facilidade de identificação com leitura de pensamento. Continuem dizendo o que precisam e procurem deliberadamente uma terceira perspectiva quando os dois chegam depressa demais à mesma resposta.` : `Em vez de decidir qual estilo é o correto, deem funções às diferenças. Antes de um conflito, combinem quando é hora de ouvir, analisar, decidir e adaptar; assim ${first.id} e ${second.id} preservam a própria natureza sem transformar contraste em competição.`}</p></section>`;
}

const elementRelations = {
  "Ar-Fogo": "Ar amplia ideias e circulação; Fogo acrescenta coragem e iniciativa. A combinação tende a ganhar movimento rapidamente.",
  "Água-Terra": "Terra oferece estabilidade e forma; Água acrescenta intimidade e sensibilidade. A combinação pode unir cuidado e continuidade.",
  "Fogo-Água": "Fogo reage pela ação e Água pela experiência emocional. A intensidade é comum, mas ritmo e linguagem precisam ser traduzidos.",
  "Ar-Terra": "Ar explora ideias e Terra procura aplicação concreta. A diferença é produtiva quando planejamento não sufoca possibilidades e abstração não ignora limites.",
  "Fogo-Terra": "Fogo acelera e Terra consolida. Um pode iniciar enquanto o outro sustenta, mas pressa e cautela precisam negociar.",
  "Ar-Água": "Ar organiza pela linguagem e Água percebe pelo vínculo. A relação cresce quando explicar e sentir deixam de competir."
};

function astrologyMatch(first, second) {
  const sameElement = first.element === second.element;
  const sameRhythm = first.modality === second.modality;
  const elementVoice = {Fogo:"coragem, presença e desejo", Terra:"constância, realidade e construção", Ar:"ideias, diálogo e liberdade", Água:"sensibilidade, memória e vínculo"};
  const elementCare = {Fogo:"entusiasmo e incentivo", Terra:"presença confiável e gestos concretos", Ar:"conversa, curiosidade e espaço", Água:"escuta, proteção e intimidade"};
  const modalityAction = {Cardinal:"iniciar e escolher uma direção", Fixo:"sustentar, aprofundar e proteger o que importa", Mutável:"adaptar, conectar e renovar a rota"};
  const relation = elementRelations[`${first.element}-${second.element}`] || elementRelations[`${second.element}-${first.element}`] || `${first.element} e ${second.element} falam idiomas diferentes, mas podem ampliar a experiência um do outro.`;
  const friendship = sameElement
    ? `${first.name} e ${second.name} reconhecem no outro a linguagem de ${elementVoice[first.element]}. Se combinarem um fim de semana, a afinidade aparece no que escolhem valorizar; o risco é ambos esperarem que o outro adivinhe necessidades que parecem óbvias por pertencerem ao mesmo elemento. A amizade fica mais viva quando também convida ritmos e interesses que não surgiriam naturalmente entre os dois.`
    : `Na amizade, ${first.name} costuma demonstrar consideração por ${elementCare[first.element]}, enquanto ${second.name} reconhece proximidade por ${elementCare[second.element]}. Em vez de repetir a teoria dos elementos, a convivência revela situações concretas: um convite recusado, uma demora na resposta ou uma mudança de plano pode ter significados muito diferentes para cada um. Perguntar antes de interpretar preserva a leveza da conexão.`;
  const work = sameRhythm
    ? `${first.name} e ${second.name} têm ritmo ${first.modality.toLowerCase()} e chegam ao projeto querendo ${modalityAction[first.modality]}. ${first.modality === "Cardinal" ? "Os dois veem rapidamente o começo; para não disputar o volante, precisam dividir quem lidera cada etapa." : first.modality === "Fixo" ? "Os dois dão continuidade e profundidade; um prazo intermediário ajuda a impedir que convicção vire imobilidade." : "Os dois percebem mudanças e alternativas; uma definição escrita evita que a flexibilidade dissolva a entrega."}`
    : `${first.name}, de ritmo ${first.modality.toLowerCase()}, tende a ${modalityAction[first.modality]}; ${second.name}, de ritmo ${second.modality.toLowerCase()}, tende a ${modalityAction[second.modality]}. Em trabalho, isso permite uma divisão orgânica: quem abre caminho não precisa executar tudo, e quem mantém ou ajusta o percurso não deve ser tratado como lento ou indeciso.`;
  const affection = sameElement
    ? `No afeto, ambos procuram sinais ligados a ${elementCare[first.element]}. A sensação de ser compreendido pode ser intensa, mas o excesso do elemento também cresce: ${first.element === "Fogo" ? "orgulho e reações rápidas" : first.element === "Terra" ? "apego ao conhecido e dificuldade de mudar" : first.element === "Ar" ? "explicar demais e permanecer pouco tempo no sentimento" : "absorver o clima e guardar mágoas sem nomeá-las"}. ${first.name} e ${second.name} se aproximam quando transformam intuição em pedidos claros.`
    : `${first.name} lê carinho principalmente por ${elementCare[first.element]}; ${second.name}, por ${elementCare[second.element]}. Em um dia difícil, um pode oferecer exatamente o que gostaria de receber e ainda assim não alcançar o outro. Dizer "hoje preciso de companhia", "preciso conversar" ou "preciso de uma solução prática" traduz o afeto sem apagar a personalidade de nenhum dos dois.`;
  const growth = sameRhythm
    ? `Como compartilham o impulso de ${modalityAction[first.modality]}, ${first.name} e ${second.name} podem formar uma dupla muito coerente, mas pouco disposta a exercer a função oposta. O aprendizado está em reconhecer o momento de iniciar, sustentar ou mudar, mesmo quando esse movimento não é o mais confortável para nenhum dos dois.`
    : `${first.name} ensina, pelo exemplo, o valor de ${modalityAction[first.modality]}; ${second.name} apresenta a sabedoria de ${modalityAction[second.modality]}. A relação amadurece quando o ritmo alheio deixa de parecer defeito e passa a ser usado no momento certo, como duas estações diferentes trabalhando no mesmo ciclo.`;
  const strengths = [sameElement ? "Compreensão intuitiva da linguagem emocional e motivacional do outro." : "Capacidade de acrescentar uma perspectiva que o outro não produz sozinho.", sameRhythm ? "Ritmo semelhante para iniciar, sustentar ou adaptar situações." : "Ritmos diferentes podem distribuir funções e reduzir pontos cegos.", `As qualidades de ${first.name} podem dialogar com as de ${second.name} sem que um signo precise imitar o outro.`];
  const weaknesses = [sameElement ? `Excessos de ${first.element} podem ser reforçados pelos dois.` : "Necessidades diferentes podem parecer falta de interesse ou compreensão.", sameRhythm ? "O mesmo ritmo pode produzir disputa, rigidez ou falta de conclusão." : "Diferenças de tempo e resposta precisam de acordos explícitos.", "Expectativas baseadas apenas no signo solar podem esconder diferenças individuais importantes."];
  return `<header><span>${first.element.toUpperCase()} + ${second.element.toUpperCase()}</span><h2>${first.name} + ${second.name}</h2><p>${sameElement ? `Dois signos de ${first.element} reconhecem a mesma matéria simbólica, mas a expressam em ritmos próprios.` : relation} ${sameRhythm ? `Os dois compartilham o modo ${first.modality.toLowerCase()} de movimentar a vida.` : `Seus ritmos diferentes podem se alternar como partes do mesmo ciclo.`}</p></header><div class="match-context-grid"><article><h3>Amizade e socialização</h3><p>${friendship}</p></article><article><h3>Trabalho e projetos</h3><p>${work}</p></article><article><h3>Afeto e convivência</h3><p>${affection}</p></article><article><h3>Aprendizado e crescimento</h3><p>${growth}</p></article></div><div class="match-balance"><article><h3>Pontos fortes</h3>${listText(strengths)}</article><article><h3>Pontos fracos</h3>${listText(weaknesses)}</article></div><section class="match-advice"><h3>Conselho geral</h3><p>Quando ${first.name} e ${second.name} se estranharem, procurem a necessidade escondida antes de discutir o comportamento visível. Falem concretamente sobre tempo, atenção, iniciativa e espaço emocional. A combinação floresce quando cada um conserva sua própria linguagem e, ainda assim, aprende algumas palavras da linguagem do outro.</p></section>`;
}

function calculateMatch() {
  const first = findMatchChoice(matchFirst.value);
  const second = findMatchChoice(matchSecond.value);
  matchError.hidden = Boolean(first && second);
  matchResult.hidden = !(first && second);
  if (!first || !second) return;
  const result = state.mode === "mbti" ? mbtiMatch(first, second) : astrologyMatch(first, second);
  matchResult.innerHTML = emphasizeNames(result);
  matchResult.scrollIntoView({behavior:"smooth", block:"start"});
}

const testAnswers = new Map();

function renderMbtiTest() {
  const questionList = document.querySelector("#question-list");
  questionList.innerHTML = mbtiQuestions.map((question, index) => {
    const [, , statement] = question;
    const labels = ["Discordo muito", "Discordo", "Neutro", "Concordo", "Concordo muito"];
    return `<fieldset class="test-question"><legend><span>${String(index + 1).padStart(2,"0")}</span>${statement}</legend><div class="answer-scale" aria-label="O quanto você concorda com esta afirmação">${[-2,-1,0,1,2].map((value, choiceIndex) => `<label><input type="radio" name="question-${index}" value="${value}" data-index="${index}"><span aria-hidden="true">${choiceIndex === 2 ? "•" : ""}</span><small>${labels[choiceIndex]}</small></label>`).join("")}</div></fieldset>`;
  }).join("");
  questionList.querySelectorAll("input").forEach(input => input.addEventListener("change", () => {
    testAnswers.set(Number(input.dataset.index), Number(input.value));
    updateTestProgress();
  }));
  updateTestProgress();
}

function updateTestProgress() {
  const answered = testAnswers.size;
  document.querySelector("#test-progress-label").textContent = `${answered} de ${mbtiQuestions.length} respondidas`;
  document.querySelector("#test-progress-bar").style.width = `${answered / mbtiQuestions.length * 100}%`;
  document.querySelector("#test-submit").disabled = answered !== mbtiQuestions.length;
  document.querySelector("#test-incomplete").hidden = answered === mbtiQuestions.length;
}

function calculateMbtiTest(event) {
  event.preventDefault();
  if (testAnswers.size !== mbtiQuestions.length) return;
  const scores = {EI:{E:0,I:0},SN:{S:0,N:0},TF:{T:0,F:0},JP:{J:0,P:0}};
  mbtiQuestions.forEach(([axis,leftCode,,rightCode], index) => {
    const value = testAnswers.get(index);
    if (value > 0) scores[axis][leftCode] += value;
    if (value < 0) scores[axis][rightCode] += Math.abs(value);
  });
  const axes = [["EI","E","I"],["SN","S","N"],["TF","T","F"],["JP","J","P"]];
  const ties = axes.filter(([axis,a,b]) => scores[axis][a] === scores[axis][b]);
  if (ties.length) {
    renderTieBreakers(scores, ties);
    return;
  }
  renderMbtiResult(scores);
}

function renderTieBreakers(scores, ties) {
  const resultNode = document.querySelector("#test-result");
  resultNode.innerHTML = `<header><span>DESEMPATE NECESSÁRIO</span><h2>Falta uma escolha.</h2><p>Suas respostas ficaram perfeitamente equilibradas em ${ties.length === 1 ? "um eixo" : `${ties.length} eixos`}. Escolha, em cada situação abaixo, a alternativa que seria mais natural na maior parte dos dias. Nenhuma letra do resultado é revelada nesta etapa.</p></header><form class="tie-break-form" id="tie-break-form">${ties.map(([axis]) => `<fieldset><legend>Qual situação combina mais com você?</legend>${mbtiTieBreakers[axis].map(([code,text], index) => `<label><input type="radio" name="tie-${axis}" value="${code}"><span>${index + 1}</span><p>${text}</p></label>`).join("")}</fieldset>`).join("")}<p class="test-incomplete" id="tie-incomplete" hidden>Escolha uma alternativa em cada desempate.</p><button class="test-submit" type="submit">CONCLUIR RESULTADO</button></form>`;
  resultNode.hidden = false;
  resultNode.querySelector("#tie-break-form").addEventListener("submit", tieEvent => {
    tieEvent.preventDefault();
    const choices = ties.map(([axis]) => resultNode.querySelector(`input[name="tie-${axis}"]:checked`));
    if (choices.some(choice => !choice)) {
      resultNode.querySelector("#tie-incomplete").hidden = false;
      return;
    }
    choices.forEach((choice, index) => {
      const axis = ties[index][0];
      scores[axis][choice.value] += 1;
    });
    renderMbtiResult(scores);
  });
  resultNode.scrollIntoView({behavior:"smooth", block:"start"});
}

function renderMbtiResult(scores) {
  const axes = [["EI","E","I"],["SN","S","N"],["TF","T","F"],["JP","J","P"]];
  const result = axes.map(([axis,a,b]) => scores[axis][a] > scores[axis][b] ? a : b).join("");
  const exact = personalityExtras[result];
  const resultNode = document.querySelector("#test-result");
  const axisRows = axes.map(([axis,a,b]) => {
    const total = scores[axis][a] + scores[axis][b];
    const leftPercent = total ? Math.round(scores[axis][a] / total * 100) : 50;
    return `<div><span><b>${a}</b> ${leftPercent}%</span><i><b style="width:${leftPercent}%"></b></i><span>${100-leftPercent}% <b>${b}</b></span></div>`;
  }).join("");
  resultNode.innerHTML = `<header><span>RESULTADO INDICATIVO</span><h2>${result}</h2><p>O padrão mais próximo foi <strong>${result}</strong>, conhecido aqui como <strong>${exact.title}</strong>.</p></header><div class="test-axis-result">${axisRows}</div><p class="test-result-note">Seu resultado representa as preferências que mais combinam com você hoje. Elas podem ganhar novas formas conforme suas experiências e seu momento de vida mudam, mas oferecem uma base valiosa para compreender como você percebe o mundo, toma decisões e se relaciona.</p><div class="test-result-actions"><button type="button" data-result-type="${result}">ABRIR FICHA DE ${result}</button><button type="button" id="reset-test">REFAZER TESTE</button></div>`;
  resultNode.hidden = false;
  resultNode.querySelector("[data-result-type]")?.addEventListener("click", buttonEvent => openDetail(buttonEvent.currentTarget.dataset.resultType));
  resultNode.querySelector("#reset-test").addEventListener("click", resetMbtiTest);
  resultNode.scrollIntoView({behavior:"smooth", block:"start"});
}

function resetMbtiTest() {
  testAnswers.clear();
  document.querySelector("#mbti-test-form").reset();
  document.querySelector("#test-result").hidden = true;
  updateTestProgress();
  document.querySelector(".test-page").scrollIntoView({behavior:"smooth", block:"start"});
}

document.querySelectorAll(".mode-label").forEach(button => button.addEventListener("click", () => setMode(button.dataset.mode)));
document.querySelector(".switch-arrow").addEventListener("click", () => setMode(state.mode === "mbti" ? "astro" : "mbti"));
document.querySelectorAll(".view-switch button").forEach(button => button.addEventListener("click", () => setView(button.dataset.view)));
document.querySelectorAll("[data-open-test]").forEach(button => button.addEventListener("click", () => setView("test")));
search.addEventListener("input", event => { state.query = event.target.value; render(); });
document.querySelector("#clear-search").addEventListener("click", () => { search.value = ""; state.query = ""; render(); search.focus(); });
document.querySelector("#calculate-match").addEventListener("click", calculateMatch);
document.querySelector("#mbti-test-form").addEventListener("submit", calculateMbtiTest);
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
document.addEventListener("keydown", event => { if (event.key === "/" && document.activeElement !== search) { event.preventDefault(); search.focus(); } });
window.addEventListener("online", updateOnline); window.addEventListener("offline", updateOnline);
function updateOnline() { const label = document.querySelector(".offline-status span"); label.textContent = navigator.onLine ? "Disponível offline" : "Modo offline"; }
if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("sw.js"));
renderMbtiTest();
setMode("mbti");
