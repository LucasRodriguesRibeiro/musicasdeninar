/* ==========================================================
   DADOS DAS ROTAS SEO — Música de Ninar
   Cada objeto = 1 rota/URL otimizada para uma intenção de busca
   ========================================================== */

export interface RouteData {
    slug: string;           // URL: /musica-de-ninar-para-bebe
    title: string;          // <title> único por página
    metaDescription: string;// <meta description> único
    h1: string;             // Headline principal (com emoji)
    subheadline: string;    // Frase emocional abaixo do H1
    trackName: string;      // Nome da faixa exibida no player
    intentId: string;       // ID de intenção padrão (calm/sleep/gospel/routine)
    seoText: {
        intro: string;        // Parágrafo de introdução (SEO)
        body: string[];       // Parágrafos do corpo (300–600 palavras)
        closing: string;      // Parágrafo de fechamento emocional
    };
}

export const routesData: RouteData[] = [
    /* ── 1. Home / raiz ─────────────────────────────────────── */
    {
        slug: '/',
        title: 'Música de Ninar 🌙 — Sono Profundo e Relaxante para Bebês',
        metaDescription:
            'Músicas de ninar calmantes para ajudar seu bebê a dormir com tranquilidade. Sem anúncios em áudio, ambiente seguro e pensado para mães.',
        h1: '🌙 Música de Ninar para Bebê',
        subheadline:
            'Enquanto as melodias tocam, sussurre palavras de amor. As suas palavras e a música juntas criam o ambiente perfeito para o sono do seu filho.',
        trackName: 'Noite Suave',
        intentId: 'calm',
        seoText: {
            intro:
                'Cada bebê merece uma noite de sono tranquila — e cada mãe merece descansar sabendo que seu filho está bem. A música de ninar existe há séculos exatamente para isso: criar um ambiente seguro, previsível e amoroso que convida o bebê a relaxar.',
            body: [
                'Sons constantes e suaves ativam o reflexo de calmaria nos recém-nascidos. Antes de nascer, o bebê já estava imerso no som do coração da mãe, da respiração, dos movimentos. A música de ninar imita essa sensação de segurança e continuidade.',
                'Pesquisas em neurociência neonatal mostram que melodias lentas (abaixo de 60 BPM) sincronizam a frequência cardíaca do bebê com a do cuidador, promovendo um estado de co-regulação emocional. É ciência e amor ao mesmo tempo.',
                'Ao criar uma rotina musical consistente — sempre a mesma melodia antes de dormir — você está ensinando o cérebro do bebê a associar esse som ao sono. Em poucas semanas, só o início da música já aciona o modo "hora de descansar".',
                'Neste site, você encontra músicas instrumentais pensadas especialmente para bebês: sem letras que estimulem, sem batidas rápidas, sem surpresas sonoras. Apenas melodias suaves que deixam a mente descansar.',
            ],
            closing:
                'Diga ao seu bebê que o ama enquanto a música toca. 🤍 Essas palavras, combinadas com a melodia, criam memórias afetivas que duram a vida inteira.',
        },
    },

    /* ── 2. /musica-de-ninar-para-bebe ──────────────────────── */
    {
        slug: '/musica-de-ninar-para-bebe',
        title: 'Música de Ninar para Bebê 🌙 — Melodias Suaves para Adormecer',
        metaDescription:
            'Música de ninar para bebê: melodias instrumentais suaves e calmantes, sem anúncios em áudio, para ajudar seu filho a adormecer com paz e segurança.',
        h1: '🌙 Música de Ninar para Bebê',
        subheadline:
            'Melodias suaves pensadas para o sono do seu pequenininho. Sem interrupções, sem pressa — apenas paz.',
        trackName: 'Canção de Ninar Suave',
        intentId: 'sleep',
        seoText: {
            intro:
                'A música de ninar é uma das ferramentas mais antigas e eficazes para acalmar bebês. Por séculos, mães ao redor do mundo cantaram melodias suaves para ajudar seus filhos a adormecer — e a ciência confirma que essa prática funciona.',
            body: [
                'Bebês respondem de forma natural a melodias lentas e repetitivas. O ritmo constante da música imita a batida do coração que o bebê ouvia dentro do útero, criando uma sensação profunda de segurança e pertencimento.',
                'Para recém-nascidos e bebês nos primeiros meses de vida, ambientes sonoros previsíveis são especialmente importantes. Sons inesperados ou muito variados podem ativar o sistema nervoso e dificultar o adormecer. A música instrumental suave faz o oposto: ela "avisa" o cérebro de que é hora de descansar.',
                'Estudos publicados em revistas de pediatria mostram que bebês expostos a músicas de ninar apresentam menor frequência cardíaca, menor nível de cortisol (hormônio do estresse) e adormecem mais rapidamente do que bebês em ambientes sem estímulo musical adequado.',
                'Aqui, todas as faixas são instrumentais — sem letras que possam estimular a atenção do bebê, sem variações bruscas de volume, sem efeitos sonoros. Apenas melodia pura, projetada para guiar o seu bebê suavemente para o soninho.',
            ],
            closing:
                'Coloque a música, diminua as luzes e aproveite esses momentos únicos. 😴 O abraço de uma mãe e uma melodia suave são tudo o que o seu bebê precisa esta noite.',
        },
    },

    /* ── 3. /musica-para-bebe-dormir ────────────────────────── */
    {
        slug: '/musica-para-bebe-dormir',
        title: 'Música para Bebê Dormir 😴 — Sons Relaxantes sem Interrupções',
        metaDescription:
            'Música para bebê dormir: sons instrumentais relaxantes, loop ativado, sem anúncios sonoros. Ideal para criar a rotina do sono do seu bebê.',
        h1: '😴 Música para Bebê Dormir',
        subheadline:
            'Sons especialmente selecionados para guiar seu bebê a um sono profundo e tranquilo.',
        trackName: 'Noite Estrelada Profunda',
        intentId: 'sleep',
        seoText: {
            intro:
                'Quando o bebê não quer dormir, a exaustão da mãe torna tudo mais difícil. A música certa pode ser a aliada que você precisava — não como milagre, mas como ferramenta real de apoio à rotina do sono.',
            body: [
                'O sono do bebê passa por ciclos de 45 a 50 minutos. Em cada transição entre ciclos, ele desperta levemente e precisa "reaprender" a dormir. A música contínua — especialmente com loop ativado — serve como ancora sonora que o ajuda a retornar ao sono sem precisar acordar completamente.',
                'Sons na frequência de 432 Hz e melodias em modo menor estão entre os mais eficazes para induzir o sono infantil. Essas características acústicas ativam o sistema parassimpático — o modo de "descanso e digestão" do corpo — tanto no bebê quanto na mãe.',
                'Evite músicas com letras, sons animados ou variações rítmicas bruscas. O cérebro do bebê ainda está amadurecendo e processa estímulos de forma muito diferente do cérebro adulto. O que soa "calmo" para um adulto pode ser superestimulante para um recém-nascido.',
                'A rotina importa mais do que a perfeição. Colocar a mesma música, no mesmo volume, à mesma hora, ensina o cérebro do bebê a reconhecer o padrão. Em semanas, ele começará a cochilar antes mesmo de a música tocar por completo.',
            ],
            closing:
                'Você está fazendo um trabalho incrível, mamãe. 🤍 Que esta noite seja leve para vocês dois.',
        },
    },

    /* ── 4. /musica-de-ninar-para-acalmar ───────────────────── */
    {
        slug: '/musica-de-ninar-para-acalmar',
        title: 'Música de Ninar para Acalmar Bebê 🤍 — Melodias Anti-Choro',
        metaDescription:
            'Música de ninar para acalmar bebê agitado ou choroso. Melodias instrumentais suaves que reduzem o estresse e trazem paz para o ambiente.',
        h1: '🤍 Música de Ninar para Acalmar',
        subheadline:
            'Quando o choro não para, a música certa pode trazer a calma que você e seu bebê precisam.',
        trackName: 'Suavidade da Tarde',
        intentId: 'calm',
        seoText: {
            intro:
                'Bebê chorando sem motivo aparente é uma das situações mais angustiantes para qualquer mãe. Você já amamentou, trocou, verificou a temperatura — e o choro continua. Antes de desesperar, tente a música.',
            body: [
                'O choro excessivo em bebês muitas vezes está ligado a sobrecarga sensorial — seja de luz, de movimento, de contato, ou simplesmente de experiências novas demais. A música de ninar age criando um "campo sonoro" estável que ajuda o sistema nervoso do bebê a se reorganizar.',
                'O efeito calmante da música não é psicológico: é fisiológico. Melodias lentas e repetitivas estimulam a produção de oxitocina — o hormônio do vínculo e da calma — e reduzem o cortisol, o hormônio do estresse. Isso acontece tanto no bebê quanto na mãe.',
                'Se seu bebê está agitado, experimente: segure-o perto do peito, ligue a música suavemente e balanceie devagar. O ritmo da música, o seu toque e o som do seu coração criam um trio poderoso de sinalização de segurança para o sistema nervoso infantil.',
                'Você não precisa cantar afinado. Não precisa usar a "voz certa". A sua voz, por si só, já é a mais tranquilizadora que existe para o seu filho. Use a música como suporte — mas saiba que você já é a peça mais importante desse momento.',
            ],
            closing:
                '🌙 Respira fundo, mamãe. Você está presente, e isso é o suficiente. A música vai ajudar a fazer o resto.',
        },
    },

    /* ── 5. /musica-de-ninar-gospel ─────────────────────────── */
    {
        slug: '/musica-de-ninar-gospel',
        title: 'Música de Ninar Gospel 🙏 — Instrumentais de Paz e Fé para Bebê',
        metaDescription:
            'Música de ninar gospel instrumental: hinos e melodias cristãs suaves para bebês. Ore enquanto a música toca e abençoe o sono do seu filho.',
        h1: '🙏 Música de Ninar Gospel',
        subheadline:
            'Melodias de fé para envolver o sono do seu bebê com paz e bênção. Ore enquanto a música toca.',
        trackName: 'Instrumental de Paz',
        intentId: 'gospel',
        seoText: {
            intro:
                'Para famílias de fé, a hora de dormir do bebê é também um momento de oração e entrega. A música gospel instrumental cria uma atmosfera de paz espiritual que faz do sono uma experiência de comunhão — para a mãe e para o bebê.',
            body: [
                'Hinos e melodias cristãs arrangiadas de forma instrumental — sem a ativação cognitiva que as letras provocam — são perfeitos para o ambiente do sono. Eles carregam o registro emocional da fé sem estimular a mente do bebê.',
                'Muitas mães cristãs usam esses momentos para orar em voz baixa sobre o filho — abençoando sua saúde, seu propósito, seu caráter. A música instrumental serve como pano de fundo sagrado para essas declarações de fé, tornando o ritual noturno algo profundamente significativo.',
                'Há algo poderoso em criar memórias afetivas ligadas à fé desde os primeiros dias de vida. Bebês criados em ambientes onde a espiritualidade é parte da rotina desenvolvem uma sensação de segurança e pertencimento que os acompanha por toda a vida.',
                'Aonde quer que você seja, seja evangélica, católica ou de outra tradição cristã, a linguagem da música de adoração é universal. As melodias aqui foram pensadas para trazer paz, independentemente do estilo de culto da sua família.',
            ],
            closing:
                '🤍 Deus abençoe o sono do seu filho esta noite. Que os anjos guardem o seu descanso — e o seu também, mamãe.',
        },
    },

    /* ── 6. /musica-de-ninar-instrumental ───────────────────── */
    {
        slug: '/musica-de-ninar-instrumental',
        title: 'Música de Ninar Instrumental 🎵 — Sem Letras, Puro Relaxamento',
        metaDescription:
            'Música de ninar instrumental para bebê: sem letras, sem vozes, apenas melodias suaves. Ideal para bebês que se distraem facilmente com letras cantadas.',
        h1: '🎵 Música de Ninar Instrumental',
        subheadline:
            'Sem letras, sem palavras — apenas melodia pura para um sono sem interrupções.',
        trackName: 'Melodia Instrumental Suave',
        intentId: 'calm',
        seoText: {
            intro:
                'Muitas mães percebem que seus bebês ficam mais atentos — não mais sonolentos — quando a música tem letra. Isso acontece porque o cérebro humano, mesmo no primeiro ano de vida, é naturalmente programado para prestar atenção a padrões de fala. A solução? Música instrumental.',
            body: [
                'Melodias instrumentais — piano, violino, flauta, cordas suaves — oferecem riqueza musical sem o processamento linguístico que as letras exigem. O cérebro do bebê pode "nadar" na melodia sem tentar decodificar palavras, o que favorece o relaxamento profundo.',
                'Instrumentos de timbre suave como o piano e o violoncelo produzem frequências que se sobrepõem às frequências de ruído doméstico — televisão, conversas, tráfego — criando uma espécie de "bolha sonora" tranquilizante ao redor do bebê.',
                'A música instrumental também é ideal para bebês em ambientes com outras pessoas. Porque não tem letra, ela não "compete" com as conversas dos adultos — ela simplesmente existe como pano de fundo tranquilizador, sem chamar atenção nem criar distração.',
                'Se você está amamentando, fazendo a troca, ou simplesmente segurando o bebê para adormecer, a música instrumental respeita o silêncio do momento. Ela preenche o espaço sem invadir — completa sem sobrecarregar.',
            ],
            closing:
                '🌙 A melodia certa transforma qualquer cantinho em um ninho de paz. Que o sono do seu bebê seja profundo e restaurador esta noite.',
        },
    },

    /* ── 7. /musica-para-recem-nascido ──────────────────────── */
    {
        slug: '/musica-para-recem-nascido',
        title: 'Música para Recém-Nascido 👶 — Sons Seguros para Bebês de 0 a 3 Meses',
        metaDescription:
            'Música para recém-nascido: melodias suaves e seguras para bebês de 0 a 3 meses. Frequências baixas, volume controlado, sem surpresas sonoras.',
        h1: '👶 Música para Recém-Nascido',
        subheadline:
            'Os primeiros dias são os mais delicados. A música certa cria o ambiente seguro que o seu recém-nascido precisa.',
        trackName: 'Aconchego do Berço',
        intentId: 'sleep',
        seoText: {
            intro:
                'Os primeiros 90 dias de vida são conhecidos como o "quarto trimestre" — o período em que o bebê ainda está se adaptando ao mundo fora do útero. Nesse momento, tudo é novo, tudo é intenso, e o sistema nervoso está a todo vapor tentando processar a novidade de existir.',
            body: [
                'Recém-nascidos são extremamente sensíveis a estímulos auditivos. O sistema auditivo é um dos primeiros a se desenvolver no útero, e ao nascer, o bebê já reconhece sons que ouviu durante a gestação. Por isso, vozes conhecidas e melodias repetitivas trazem uma familiaridade reconfortante.',
                'Para bebês de 0 a 3 meses, a recomendação é manter o volume da música entre 50 e 60 decibéis — equivalente a uma conversa tranquila. Volumes muito altos, mesmo de música suave, podem causar sobrecarga auditiva e o efeito contrário ao desejado.',
                'Evite músicas com variações bruscas de ritmo ou volume. O sistema nervoso do recém-nascido ainda não tem mecanismos eficientes de filtro sensorial — qualquer mudança inesperada no ambiente sonoro pode ser interpretada como alerta de perigo, ativando o choro.',
                'A constância é a chave: mesma música, mesmo volume, mesmo momento do dia. Em poucas semanas, o seu recém-nascido começará a responder com relaxamento visível assim que reconhecer a melodia — fechando os olhinhos, soltando a tensão dos ombros, respirando mais devagar.',
            ],
            closing:
                '🌙 Você está fazendo o mais difícil e o mais bonito ao mesmo tempo. Que a música seja sua aliada nessa jornada de amor.',
        },
    },
];

export function getRouteBySlug(slug: string): RouteData | undefined {
    return routesData.find((r) => r.slug === slug);
}
