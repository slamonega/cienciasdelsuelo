const courseData = {
    title: "Trivia de Física y Conservación de Suelos",
    description: "Evaluación de conocimientos de nivel universitario correspondiente a las materias del Área de Suelos del Departamento de Agronomía de la Universidad Nacional del Sur (UNS), con foco en el sudeste bonaerense. Creado para la actividad educativa del 7 de Julio, Día Nacional de la Conservación del Suelo.",
    activities: [
        {
            id: "ACT_001",
            type: "choice",
            title: "Causas de la Erosión Hídrica",
            objective: "Identificar la principal causa de la erosión hídrica",
            question: "¿Cuál es la principal causa de la erosión hídrica?",
            options: [
                { id: "A", text: "El viento" },
                { id: "B", text: "El agua de lluvia y escorrentía" },
                { id: "C", text: "La salinidad" },
                { id: "D", text: "La compactación" }
            ],
            correctId: "B",
            feedback: "Correcto. El agua de lluvia y la escorrentía superficial son los principales agentes de la erosión hídrica, desprendiendo y transportando partículas del suelo.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/001" }
        },
        {
            id: "ACT_002",
            type: "choice",
            title: "Prácticas Anti-erosión Hídrica",
            objective: "Reconocer la práctica más efectiva para disminuir la erosión hídrica",
            question: "¿Qué práctica ayuda más a disminuir la erosión hídrica?",
            options: [
                { id: "A", text: "Dejar el suelo desnudo" },
                { id: "B", text: "Remover el suelo varias veces al año" },
                { id: "C", text: "Mantener cobertura vegetal o residuos" },
                { id: "D", text: "Aumentar el tránsito de maquinaria" }
            ],
            correctId: "C",
            feedback: "Correcto. Mantener cobertura vegetal o residuos en superficie protege el suelo del impacto directo de las gotas de lluvia y reduce la escorrentía.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/002" }
        },
        {
            id: "ACT_003",
            type: "choice",
            title: "Condiciones de Erosión Eólica",
            objective: "Identificar las condiciones que favorecen la erosión eólica",
            question: "¿En qué condición ocurre con mayor facilidad la erosión eólica?",
            options: [
                { id: "A", text: "Suelo húmedo y cubierto" },
                { id: "B", text: "Suelo seco y desnudo" },
                { id: "C", text: "Suelo inundado" },
                { id: "D", text: "Suelo con abundante materia orgánica" }
            ],
            correctId: "B",
            feedback: "Correcto. El suelo seco y desnudo carece de cohesión y cobertura, lo que permite que el viento desprenda y transporte las partículas fácilmente.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/003" }
        },
        {
            id: "ACT_004",
            type: "choice",
            title: "Salinización del Suelo",
            objective: "Comprender el proceso de salinización",
            question: "La salinización del suelo ocurre cuando:",
            options: [
                { id: "A", text: "Disminuye la cantidad de arena" },
                { id: "B", text: "Se acumulan sales solubles" },
                { id: "C", text: "Aumenta la materia orgánica" },
                { id: "D", text: "Disminuye la temperatura" }
            ],
            correctId: "B",
            feedback: "Correcto. La salinización es la acumulación excesiva de sales solubles en el perfil del suelo, lo que afecta negativamente el crecimiento de los cultivos.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/004" }
        },
        {
            id: "ACT_005",
            type: "choice",
            title: "Factores que Favorecen la Salinización",
            objective: "Identificar las condiciones que promueven la salinización",
            question: "¿Cuál de estas situaciones favorece la salinización?",
            options: [
                { id: "A", text: "Buen drenaje" },
                { id: "B", text: "Exceso de lluvias" },
                { id: "C", text: "Riego con agua salina y mal drenaje" },
                { id: "D", text: "Rotación de cultivos" }
            ],
            correctId: "C",
            feedback: "Correcto. El riego con agua salina combinado con un mal drenaje provoca la acumulación de sales en el perfil del suelo.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/005" }
        },
        {
            id: "ACT_006",
            type: "choice",
            title: "Consecuencias de la Compactación",
            objective: "Reconocer los efectos de la compactación del suelo",
            question: "¿Qué consecuencia tiene un suelo compactado?",
            options: [
                { id: "A", text: "Mayor infiltración de agua" },
                { id: "B", text: "Mayor crecimiento radicular" },
                { id: "C", text: "Menor infiltración y menor desarrollo de raíces" },
                { id: "D", text: "Mayor contenido de materia orgánica" }
            ],
            correctId: "C",
            feedback: "Correcto. La compactación reduce la porosidad del suelo, disminuyendo la infiltración de agua y limitando el desarrollo de las raíces.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/006" }
        },
        {
            id: "ACT_007",
            type: "choice",
            title: "Beneficios de la Materia Orgánica",
            objective: "Comprender el rol de la materia orgánica en el suelo",
            question: "La materia orgánica del suelo contribuye a:",
            options: [
                { id: "A", text: "Reducir la fertilidad" },
                { id: "B", text: "Mejorar la estructura y retención de agua" },
                { id: "C", text: "Aumentar la erosión" },
                { id: "D", text: "Incrementar la salinidad" }
            ],
            correctId: "B",
            feedback: "Correcto. La materia orgánica mejora la estructura del suelo al promover la agregación y aumenta la capacidad de retención de agua.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/007" }
        },
        {
            id: "ACT_008",
            type: "choice",
            title: "Prácticas que Aumentan la Materia Orgánica",
            objective: "Identificar prácticas que incrementan la materia orgánica del suelo",
            question: "¿Cuál de estas prácticas aumenta la materia orgánica del suelo?",
            options: [
                { id: "A", text: "Quema de residuos" },
                { id: "B", text: "Cultivos de cobertura y aplicación de compost" },
                { id: "C", text: "Labranza intensiva" },
                { id: "D", text: "Sobrepastoreo" }
            ],
            correctId: "B",
            feedback: "Correcto. Los cultivos de cobertura y la aplicación de compost aportan biomasa que se incorpora al suelo, incrementando el contenido de materia orgánica.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/008" }
        },
        {
            id: "ACT_009",
            type: "choice",
            title: "Beneficios de los Cultivos de Cobertura",
            objective: "Reconocer los beneficios de los cultivos de cobertura",
            question: "¿Qué beneficio aportan los cultivos de cobertura?",
            options: [
                { id: "A", text: "Dejan el suelo descubierto" },
                { id: "B", text: "Protegen el suelo y aportan materia orgánica" },
                { id: "C", text: "Aumentan la erosión" },
                { id: "D", text: "Favorecen la evaporación" }
            ],
            correctId: "B",
            feedback: "Correcto. Los cultivos de cobertura protegen el suelo de la erosión y, al descomponerse, aportan materia orgánica que mejora sus propiedades.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/009" }
        },
        {
            id: "ACT_010",
            type: "choice",
            title: "Práctica Integral de Conservación",
            objective: "Identificar la práctica que aborda múltiples problemas de degradación",
            question: "¿Cuál de las siguientes prácticas ayuda simultáneamente a reducir la erosión, aumentar la materia orgánica y mejorar la infiltración?",
            options: [
                { id: "A", text: "Quema de rastrojos" },
                { id: "B", text: "Siembra directa con cultivos de cobertura" },
                { id: "C", text: "Labranza intensiva" },
                { id: "D", text: "Sobrepastoreo" }
            ],
            correctId: "B",
            feedback: "Correcto. La siembra directa con cultivos de cobertura protege el suelo, aporta residuos que incrementan la materia orgánica y mejora la infiltración al mantener la estructura del suelo.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/010" }
        },
        {
            id: "ACT_011",
            type: "choice",
            title: "Procesos de Degradación del Suelo",
            objective: "Distinguir los procesos que constituyen degradación del suelo",
            question: "¿Cuál de estos procesos NO corresponde a una forma de degradación del suelo?",
            options: [
                { id: "A", text: "Erosión hídrica" },
                { id: "B", text: "Compactación" },
                { id: "C", text: "Salinización" },
                { id: "D", text: "Humificación" }
            ],
            correctId: "D",
            feedback: "Correcto. La humificación es un proceso natural de transformación de la materia orgánica que contribuye a la formación de humus, no es una forma de degradación.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/011" }
        },
        {
            id: "ACT_012",
            type: "multiple-choice",
            title: "Suelos Arenosos",
            objective: "Identificar las características de los suelos con predominio de arena",
            question: "Si en un suelo predomina la arena, podemos decir que:",
            options: [
                "El riesgo de erosión por viento será alto.",
                "El riesgo de erosión por viento será bajo.",
                "La cantidad de poros grandes será alta.",
                "La cantidad de poros grandes será baja."
            ],
            correctAnswers: [
                "El riesgo de erosión por viento será alto.",
                "La cantidad de poros grandes será alta."
            ],
            feedback: "Correcto. Los suelos arenosos tienen alta macroporosidad (poros grandes) y son muy susceptibles a la erosión eólica por su baja cohesión.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/012" }
        },
        {
            id: "ACT_013",
            type: "multiple-choice",
            title: "Horizonte Petrocálcico (Tosca)",
            objective: "Reconocer las propiedades de la tosca y su impacto en el suelo",
            question: "La tosca:",
            options: [
                "Está endurecida y cementada con carbonato de calcio.",
                "Si está cerca de la superficie, limita el crecimiento de las raíces.",
                "Si está cerca de la superficie, no afecta el crecimiento de las raíces.",
                "La puedo romper fácilmente con la pala."
            ],
            correctAnswers: [
                "Está endurecida y cementada con carbonato de calcio.",
                "Si está cerca de la superficie, limita el crecimiento de las raíces."
            ],
            feedback: "Correcto. La tosca es un horizonte endurecido cementado con carbonato de calcio que, cuando está próximo a la superficie, restringe la profundidad efectiva del suelo y el desarrollo radicular.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/013" }
        },
        {
            id: "ACT_014",
            type: "multiple-choice",
            title: "Origen del Material Parental",
            objective: "Identificar los agentes de depositación del material que origina el suelo de ladera",
            question: "El material que le dio origen al suelo de la ladera:",
            options: [
                "fue depositado por el viento",
                "fue depositado por el agua",
                "fue depositado por el hombre",
                "fue depositado por gravedad desde zonas más altas"
            ],
            correctAnswers: [
                "fue depositado por el viento",
                "fue depositado por gravedad desde zonas más altas"
            ],
            feedback: "Correcto. Los suelos de ladera pueden formarse a partir de materiales transportados por el viento (loess) o por gravedad desde zonas más altas (coluvio).",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/014" }
        },
        {
            id: "ACT_015",
            type: "choice",
            title: "Formas de Nitrógeno en el Suelo",
            objective: "Comprender la distribución del nitrógeno en sus formas orgánica e inorgánica",
            question: "El nitrógeno en el suelo se encuentra:",
            options: [
                { id: "A", text: "50 % en forma orgánica y 50 % en forma inorgánica" },
                { id: "B", text: "95-98 % en forma inorgánica y 5-2 % en forma orgánica" },
                { id: "C", text: "95-98 % en forma orgánica y 5-2 % en forma inorgánica" }
            ],
            correctId: "C",
            feedback: "Correcto. La mayor parte del nitrógeno del suelo se encuentra en forma orgánica formando parte de la materia orgánica, y solo una pequeña fracción está en forma inorgánica (nitratos y amonio) disponible para las plantas.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/015" }
        },
        {
            id: "ACT_016",
            type: "boolean",
            title: "Absorción de Nitrógeno",
            objective: "Reconocer las formas de nitrógeno que absorben las plantas",
            question: "¿Las plantas absorben el nitrógeno del suelo en forma de nitrato y amonio?",
            correctAnswer: true,
            feedback: "Correcto. Las plantas absorben el nitrógeno principalmente como nitrato (NO₃⁻) y amonio (NH₄⁺), que son las formas inorgánicas disponibles en el suelo.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/016" }
        },
        {
            id: "ACT_017",
            type: "choice",
            title: "Desafío de los Cultivos de Servicio",
            objective: "Identificar los ambientes donde es más desafiante incluir cultivos de servicio",
            question: "El desafío de incluir cultivos de servicio es mayor en ambientes:",
            options: [
                { id: "A", text: "Húmedos" },
                { id: "B", text: "Semiáridos" },
                { id: "C", text: "Subhúmedos" }
            ],
            correctId: "B",
            feedback: "Correcto. En ambientes semiáridos la limitación hídrica dificulta la implementación de cultivos de servicio, ya que compiten por el agua con los cultivos de renta.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/017" }
        },
        {
            id: "ACT_018",
            type: "choice",
            title: "Origen del Agua de Riego",
            objective: "Identificar la fuente última del agua de riego en el sur bonaerense",
            question: "¿De dónde proviene, en última instancia, el agua que permite regar los cultivos del sur de la provincia de Buenos Aires?",
            options: [
                { id: "A", text: "Del océano Atlántico." },
                { id: "B", text: "De napas subterráneas locales." },
                { id: "C", text: "De la Cordillera de los Andes, a través de la cuenca del río Colorado." },
                { id: "D", text: "De las lluvias del sudoeste bonaerense." }
            ],
            correctId: "C",
            feedback: "Correcto. El agua de riego del sur bonaerense proviene principalmente de la cordillera de los Andes, transportada por el río Colorado y sus derivaciones.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/018" }
        },
        {
            id: "ACT_019",
            type: "choice",
            title: "Función de Glaciares de Escombros",
            objective: "Reconocer la importancia de los glaciares de escombros y el permafrost de montaña",
            question: "¿Cuál es una de las principales funciones de los glaciares de escombros y del permafrost de montaña?",
            options: [
                { id: "A", text: "Formar únicamente nuevas montañas." },
                { id: "B", text: "Producir minerales." },
                { id: "C", text: "Almacenar agua y liberarla lentamente hacia ríos y acuíferos." },
                { id: "D", text: "Evitar completamente las inundaciones." }
            ],
            correctId: "C",
            feedback: "Correcto. Los glaciares de escombros y el permafrost de montaña actúan como reservorios de agua, liberándola gradualmente y regulando el caudal de ríos y la recarga de acuíferos.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/019" }
        },
        {
            id: "ACT_020",
            type: "choice",
            title: "Conservación de Suelos de Alta Montaña",
            objective: "Comprender el beneficio aguas abajo de conservar suelos de alta montaña",
            question: "¿Por qué conservar los suelos de la alta montaña también beneficia a quienes vivimos cientos de kilómetros aguas abajo?",
            options: [
                { id: "A", text: "Mejora el paisaje turístico." },
                { id: "B", text: "Aumenta únicamente la producción minera." },
                { id: "C", text: "Ayuda a conservar el agua que abastece a poblaciones, ecosistemas y actividades productivas." },
                { id: "D", text: "Disminuye la temperatura del océano." }
            ],
            correctId: "C",
            feedback: "Correcto. La conservación de los suelos de alta montaña protege las cuencas hidrográficas, garantizando la provisión de agua a poblaciones, ecosistemas y actividades productivas aguas abajo.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/020" }
        },
        {
            id: "ACT_021",
            type: "choice",
            title: "Composición Mineral del Suelo",
            objective: "Identificar los compuestos minerales predominantes en la fracción sólida del suelo",
            question: "¿Qué tipo de compuestos minerales conforman la arena, limo y arcilla del suelo?",
            options: [
                { id: "A", text: "Silicatos" },
                { id: "B", text: "Carbonatos" },
                { id: "C", text: "Sulfatos" },
                { id: "D", text: "Nitratos" }
            ],
            correctId: "A",
            feedback: "Correcto. Los silicatos son los minerales más abundantes en la corteza terrestre y constituyen la mayor parte de las fracciones arena, limo y arcilla del suelo.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/021" }
        },
        {
            id: "ACT_022",
            type: "choice",
            title: "Definición de Geoforma",
            objective: "Comprender el concepto de geoforma en el estudio del paisaje",
            question: "¿Qué es una geoforma?",
            options: [
                { id: "A", text: "una porción del paisaje definida por su relieve" },
                { id: "B", text: "un tipo de elevación serrana" },
                { id: "C", text: "un sector del terreno caracterizado por la presencia de rocas" },
                { id: "D", text: "un tipo de geoda" }
            ],
            correctId: "A",
            feedback: "Correcto. Una geoforma es una porción del paisaje con características de relieve particulares, resultado de procesos geológicos y geomorfológicos.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/022" }
        },
        {
            id: "ACT_023",
            type: "choice",
            title: "Concepto de Meteorización",
            objective: "Definir el proceso de meteorización de los minerales",
            question: "¿Qué es la meteorización?",
            options: [
                { id: "A", text: "la erosión generada por fenómenos climáticos concretos" },
                { id: "B", text: "la alteración de los minerales" },
                { id: "C", text: "la presencia de meteoritos entre los componentes del suelo" },
                { id: "D", text: "la degradación de la materia orgánica" }
            ],
            correctId: "B",
            feedback: "Correcto. La meteorización es el proceso de alteración física y química de los minerales de las rocas expuestos en la superficie terrestre.",
            xapi: { verb: "answered", objectId: "http://uns.edu.ar/act/023" }
        }
    ]
};
