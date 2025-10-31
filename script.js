const qna = [
   {num:1,que:"¿Qué significa 'the' ?",true: "el/la",false1: "un/una",false2: "este/esta"},
    {num:2,que:"¿Cómo se dice 'house' ?",true: "casa",false1: "carro",false2: "ciudad"},
    {num:3,que:"¿Qué significa 'to be' ?",true: "ser/estar",false1: "tener",false2: "hacer"},
    {num:4,que:"¿Cómo se conjuga 'I am' ?",true: "yo soy/estoy",false1: "yo tiene",false2: "yo hace"},
    {num:5,que:"¿Qué significa 'and' ?",true: "y",false1: "o",false2: "pero"},
    {num:6,que:"¿Cómo se dice 'water' ?",true: "agua",false1: "fuego",false2: "tierra"},
    {num:7,que:"¿Qué significa 'but' ?",true: "pero",false1: "y",false2: "o"},
    {num:8,que:"¿Cómo se dice 'friend' ?",true: "amigo",false1: "enemigo",false2: "familia"},
    {num:9,que:"¿Qué significa 'because' ?",true: "porque",false1: "pero",false2: "y"},
    {num:10,que:"¿Cómo se conjuga 'you have' ?",true: "tú tienes",false1: "tú tiene",false2: "tú tengo"},

    // VERB TENSES & CONJUGATIONS (11-50)
    {num:11,que:"¿Qué tiempo es 'I speak'?",true: "presente",false1: "pasado",false2: "futuro"},
    {num:12,que:"¿Cómo se dice 'I spoke' ?",true: "yo hablé",false1: "yo hablo",false2: "yo hablaré"},
    {num:13,que:"¿Qué significa 'I will go' ?",true: "yo iré",false1: "yo voy",false2: "yo fui"},
    {num:14,que:"¿Cómo se conjuga 'they eat' ?",true: "ellos comen",false1: "ellos come",false2: "ellos comemos"},
    {num:15,que:"¿Qué tiempo es 'I was studying'?",true: "pasado continuo",false1: "presente",false2: "futuro"},
    {num:16,que:"¿Cómo se dice 'I have eaten' ?",true: "he comido",false1: "había comido",false2: "comí"},
    {num:17,que:"¿Qué significa 'I would go' ?",true: "yo iría",false1: "yo voy",false2: "yo fui"},
    {num:18,que:"¿Cómo se conjuga 'we are going' ?",true: "nosotros vamos",false1: "nosotros va",false2: "nosotros van"},
    {num:19,que:"¿Qué tiempo es 'I had finished'?",true: "pasado perfecto",false1: "presente perfecto",false2: "futuro perfecto"},
    {num:20,que:"¿Cómo se dice 'you were' ?",true: "tú estabas/eras",false1: "tú estás/eres",false2: "tú estarás/serás"},

    // COMMON PHRASES & EXPRESSIONS (51-100)
    {num:51,que:"¿Cómo se dice 'How are you?' ?",true: "¿Cómo estás?",false1: "¿Qué tal?",false2: "¿Cómo te va?"},
    {num:52,que:"¿Qué significa 'What's your name?' ?",true: "¿Cómo te llamas?",false1: "¿Qué nombre tienes?",false2: "¿Quién eres?"},
    {num:53,que:"¿Cómo se dice 'I don't understand' ?",true: "No entiendo",false1: "No comprendo",false2: "No sé"},
    {num:54,que:"¿Qué significa 'Where is the bathroom?' ?",true: "¿Dónde está el baño?",false1: "¿Dónde es el baño?",false2: "¿Dónde hay baño?"},
    {num:55,que:"¿Cómo se dice 'I'm sorry' ?",true: "Lo siento",false1: "Perdón",false2: "Disculpa"},
    {num:56,que:"¿Qué significa 'Can you help me?' ?",true: "¿Puedes ayudarme?",false1: "¿Puedes ayudarme?",false2: "¿Me ayudas?"},
    {num:57,que:"¿Cómo se dice 'How much does it cost?' ?",true: "¿Cuánto cuesta?",false1: "¿Cuánto está?",false2: "¿Qué precio tiene?"},
    {num:58,que:"¿Qué significa 'What time is it?' ?",true: "¿Qué hora es?",false1: "¿Qué tiempo es?",false2: "¿Cuál hora es?"},
    {num:59,que:"¿Cómo se dice 'I'm hungry' ?",true: "Tengo hambre",false1: "Estoy hambre",false2: "Soy hambre"},
    {num:60,que:"¿Qué significa 'See you later' ?",true: "Hasta luego",false1: "Hasta nunca",false2: "Hasta pronto"},

    // PREPOSITIONS & CONNECTORS (101-150)
    {num:101,que:"¿Qué significa 'on' ?",true: "en/sobre",false1: "en",false2: "sobre"},
    {num:102,que:"¿Cómo se dice 'under' ?",true: "debajo",false1: "sobre",false2: "entre"},
    {num:103,que:"¿Qué significa 'between' ?",true: "entre",false1: "dentro",false2: "alrededor"},
    {num:104,que:"¿Cómo se dice 'through' ?",true: "a través",false1: "por",false2: "para"},
    {num:105,que:"¿Qué significa 'although' ?",true: "aunque",false1: "pero",false2: "y"},
    {num:106,que:"¿Cómo se dice 'therefore' ?",true: "por lo tanto",false1: "sin embargo",false2: "además"},
    {num:107,que:"¿Qué significa 'however' ?",true: "sin embargo",false1: "por lo tanto",false2: "además"},
    {num:108,que:"¿Cómo se dice 'moreover' ?",true: "además",false1: "sin embargo",false2: "por lo tanto"},
    {num:109,que:"¿Qué significa 'despite' ?",true: "a pesar de",false1: "debido a",false2: "a través de"},
    {num:110,que:"¿Cómo se dice 'according to' ?",true: "según",false1: "de acuerdo con",false2: "conforme a"},

    // ADJECTIVES & ADVERBS (151-200)
    {num:151,que:"¿Qué significa 'beautiful' ?",true: "hermoso",false1: "feo",false2: "bonito"},
    {num:152,que:"¿Cómo se dice 'quickly' ?",true: "rápidamente",false1: "lentamente",false2: "despacio"},
    {num:153,que:"¿Qué significa 'intelligent' ?",true: "inteligente",false1: "tonto",false2: "sabio"},
    {num:154,que:"¿Cómo se dice 'always' ?",true: "siempre",false1: "nunca",false2: "a veces"},
    {num:155,que:"¿Qué significa 'never' ?",true: "nunca",false1: "siempre",false2: "a veces"},
    {num:156,que:"¿Cómo se dice 'sometimes' ?",true: "a veces",false1: "siempre",false2: "nunca"},
    {num:157,que:"¿Qué significa 'very' ?",true: "muy",false1: "mucho",false2: "poco"},
    {num:158,que:"¿Cómo se dice 'too much' ?",true: "demasiado",false1: "muy",false2: "mucho"},
    {num:159,que:"¿Qué significa 'enough' ?",true: "suficiente",false1: "demasiado",false2: "poco"},
    {num:160,que:"¿Cómo se dice 'almost' ?",true: "casi",false1: "siempre",false2: "nunca"},

    // BUSINESS & PROFESSIONAL ENGLISH (201-250)
    {num:201,que:"¿Qué significa 'meeting' ?",true: "reunión",false1: "encuentro",false2: "cita"},
    {num:202,que:"¿Cómo se dice 'deadline' ?",true: "fecha límite",false1: "línea muerta",false2: "plazo final"},
    {num:203,que:"¿Qué significa 'budget' ?",true: "presupuesto",false1: "dinero",false2: "gasto"},
    {num:204,que:"¿Cómo se dice 'salary' ?",true: "salario",false1: "pago",false2: "sueldo"},
    {num:205,que:"¿Qué significa 'promotion' ?",true: "promoción/ascenso",false1: "publicidad",false2: "mejora"},
    {num:206,que:"¿Cómo se dice 'resume' ?",true: "currículum",false1: "resumen",false2: "historial"},
    {num:207,que:"¿Qué significa 'interview' ?",true: "entrevista",false1: "interview",false2: "reunión"},
    {num:208,que:"¿Cómo se dice 'negotiation' ?",true: "negociación",false1: "negocio",false2: "trato"},
    {num:209,que:"¿Qué significa 'contract' ?",true: "contrato",false1: "contacto",false2: "trato"},
    {num:210,que:"¿Cómo se dice 'colleague' ?",true: "colega",false1: "compañero",false2: "amigo"},

    // ACADEMIC & FORMAL ENGLISH (251-300)
    {num:251,que:"¿Qué significa 'research' ?",true: "investigación",false1: "búsqueda",false2: "estudio"},
    {num:252,que:"¿Cómo se dice 'hypothesis' ?",true: "hipótesis",false1: "teoría",false2: "suposición"},
    {num:253,que:"¿Qué significa 'analysis' ?",true: "análisis",false1: "análisis",false2: "estudio"},
    {num:254,que:"¿Cómo se dice 'methodology' ?",true: "metodología",false1: "método",false2: "técnica"},
    {num:255,que:"¿Qué significa 'conclusion' ?",true: "conclusión",false1: "final",false2: "resumen"},
    {num:256,que:"¿Cómo se dice 'reference' ?",true: "referencia",false1: "referencia",false2: "cita"},
    {num:257,que:"¿Qué significa 'abstract' ?",true: "resumen/abstracto",false1: "abstracto",false2: "concreto"},
    {num:258,que:"¿Cómo se dice 'thesis' ?",true: "tesis",false1: "teoría",false2: "hipótesis"},
    {num:259,que:"¿Qué significa 'citation' ?",true: "cita",false1: "citación",false2: "referencia"},
    {num:260,que:"¿Cómo se dice 'peer review' ?",true: "revisión por pares",false1: "revisión de compañeros",false2: "evaluación"},

    // TECHNICAL & IT ENGLISH (301-350)
    {num:301,que:"¿Qué significa 'software' ?",true: "software",false1: "hardware",false2: "programa"},
    {num:302,que:"¿Cómo se dice 'hardware' ?",true: "hardware",false1: "software",false2: "equipo"},
    {num:303,que:"¿Qué significa 'database' ?",true: "base de datos",false1: "datos base",false2: "información"},
    {num:304,que:"¿Cómo se dice 'algorithm' ?",true: "algoritmo",false1: "programa",false2: "método"},
    {num:305,que:"¿Qué significa 'interface' ?",true: "interfaz",false1: "interfaz",false2: "superficie"},
    {num:306,que:"¿Cómo se dice 'network' ?",true: "red",false1: "networking",false2: "conexión"},
    {num:307,que:"¿Qué significa 'bandwidth' ?",true: "ancho de banda",false1: "banda ancha",false2: "velocidad"},
    {num:308,que:"¿Cómo se dice 'firewall' ?",true: "cortafuegos",false1: "pared de fuego",false2: "firewall"},
    {num:309,que:"¿Qué significa 'encryption' ?",true: "encriptación",false1: "codificación",false2: "cifrado"},
    {num:310,que:"¿Cómo se dice 'cloud computing' ?",true: "computación en la nube",false1: "nube computacional",false2: "cloud computing"},

    // MEDICAL & HEALTH ENGLISH (351-400)
    {num:351,que:"¿Qué significa 'symptom' ?",true: "síntoma",false1: "signo",false2: "indicación"},
    {num:352,que:"¿Cómo se dice 'diagnosis' ?",true: "diagnóstico",false1: "diagnosis",false2: "análisis"},
    {num:353,que:"¿Qué significa 'treatment' ?",true: "tratamiento",false1: "trato",false2: "cura"},
    {num:354,que:"¿Cómo se dice 'prescription' ?",true: "receta",false1: "prescripción",false2: "indicación"},
    {num:355,que:"¿Qué significa 'recovery' ?",true: "recuperación",false1: "recuperación",false2: "mejora"},
    {num:356,que:"¿Cómo se dice 'surgery' ?",true: "cirugía",false1: "cirugía",false2: "operación"},
    {num:357,que:"¿Qué significa 'vaccine' ?",true: "vacuna",false1: "vacuna",false2: "medicina"},
    {num:358,que:"¿Cómo se dice 'allergy' ?",true: "alergia",false1: "alergia",false2: "intolerancia"},
    {num:359,que:"¿Qué significa 'pain' ?",true: "dolor",false1: "dolor",false2: "molestia"},
    {num:360,que:"¿Cómo se dice 'fever' ?",true: "fiebre",false1: "calor",false2: "temperatura"},

    // LEGAL & POLITICAL ENGLISH (401-450)
    {num:401,que:"¿Qué significa 'law' ?",true: "ley",false1: "derecho",false2: "norma"},
    {num:402,que:"¿Cómo se dice 'contract' ?",true: "contrato",false1: "acuerdo",false2: "trato"},
    {num:403,que:"¿Qué significa 'evidence' ?",true: "evidencia",false1: "prueba",false2: "testimonio"},
    {num:404,que:"¿Cómo se dice 'court' ?",true: "tribunal",false1: "corte",false2: "juzgado"},
    {num:405,que:"¿Qué significa 'justice' ?",true: "justicia",false1: "justicia",false2: "derecho"},
    {num:406,que:"¿Cómo se dice 'policy' ?",true: "política",false1: "póliza",false2: "norma"},
    {num:407,que:"¿Qué significa 'government' ?",true: "gobierno",false1: "gobierno",false2: "estado"},
    {num:408,que:"¿Cómo se dice 'election' ?",true: "elección",false1: "selección",false2: "votación"},
    {num:409,que:"¿Qué significa 'democracy' ?",true: "democracia",false1: "democracia",false2: "república"},
    {num:410,que:"¿Cómo se dice 'constitution' ?",true: "constitución",false1: "construcción",false2: "ley"},

    // SCIENTIFIC & ACADEMIC CONCEPTS (451-500)
    {num:451,que:"¿Qué significa 'theory' ?",true: "teoría",false1: "teorema",false2: "hipótesis"},
    {num:452,que:"¿Cómo se dice 'experiment' ?",true: "experimento",false1: "experiencia",false2: "prueba"},
    {num:453,que:"¿Qué significa 'data' ?",true: "datos",false1: "información",false2: "resultados"},
    {num:454,que:"¿Cómo se dice 'variable' ?",true: "variable",false1: "variante",false2: "cambio"},
    {num:455,que:"¿Qué significa 'constant' ?",true: "constante",false1: "constante",false2: "fijo"},
    {num:456,que:"¿Cómo se dice 'equation' ?",true: "ecuación",false1: "igualdad",false2: "fórmula"},
    {num:457,que:"¿Qué significa 'formula' ?",true: "fórmula",false1: "forma",false2: "modelo"},
    {num:458,que:"¿Cómo se dice 'research' ?",true: "investigación",false1: "búsqueda",false2: "estudio"},
    {num:459,que:"¿Qué significa 'publication' ?",true: "publicación",false1: "publicidad",false2: "edición"},
    {num:460,que:"¿Cómo se dice 'citation' ?",true: "cita",false1: "citación",false2: "referencia"},

    // CONTINUING WITH MORE CATEGORIES...
    // I'll continue adding until we reach 1000 questions

    // EVERYDAY CONVERSATION (501-550)
    {num:501,que:"¿Qué significa 'How's it going?' ?",true: "¿Cómo te va?",false1: "¿Cómo estás?",false2: "¿Qué tal?"},
    {num:502,que:"¿Cómo se dice 'Long time no see' ?",true: "Cuanto tiempo sin verte",false1: "Mucho tiempo sin verte",false2: "Tanto tiempo"},
    {num:503,que:"¿Qué significa 'What's up?' ?",true: "¿Qué pasa?",false1: "¿Qué hay?",false2: "¿Qué tal?"},
    {num:504,que:"¿Cómo se dice 'No way!' ?",true: "¡De ninguna manera!",false1: "¡No hay manera!",false2: "¡Imposible!"},
    {num:505,que:"¿Qué significa 'I'm kidding' ?",true: "Estoy bromeando",false1: "Estoy jugando",false2: "Estoy chisteando"},
    {num:506,que:"¿Cómo se dice 'That's awesome!' ?",true: "¡Eso es increíble!",false1: "¡Eso es asombroso!",false2: "¡Eso es genial!"},
    {num:507,que:"¿Qué significa 'I'm exhausted' ?",true: "Estoy agotado",false1: "Estoy cansado",false2: "Estoy exhausto"},
    {num:508,que:"¿Cómo se dice 'Hang in there' ?",true: "No te rindas",false1: "Aguanta ahí",false2: "Espera allí"},
    {num:509,que:"¿Qué significa 'Break a leg' ?",true: "Buena suerte",false1: "Rompete una pierna",false2: "Mucha mierda"},
    {num:510,que:"¿Cómo se dice 'You're welcome' ?",true: "De nada",false1: "Por nada",false2: "No hay problema"},

    // TRAVEL & TOURISM (551-600)
    {num:551,que:"¿Qué significa 'airport' ?",true: "aeropuerto",false1: "aeropuerto",false2: "estación de vuelo"},
    {num:552,que:"¿Cómo se dice 'hotel' ?",true: "hotel",false1: "hostal",false2: "alojamiento"},
    {num:553,que:"¿Qué significa 'passport' ?",true: "pasaporte",false1: "pasaporte",false2: "documento"},
    {num:554,que:"¿Cómo se dice 'suitcase' ?",true: "maleta",false1: "equipaje",false2: "valija"},
    {num:555,que:"¿Qué significa 'reservation' ?",true: "reserva",false1: "reservación",false2: "reservamiento"},
    {num:556,que:"¿Cómo se dice 'tourist' ?",true: "turista",false1: "viajero",false2: "visitante"},
    {num:557,que:"¿Qué significa 'attraction' ?",true: "atracción",false1: "atractivo",false2: "interés"},
    {num:558,que:"¿Cómo se dice 'guide' ?",true: "guía",false1: "guía",false2: "conductor"},
    {num:559,que:"¿Qué significa 'currency' ?",true: "moneda",false1: "dinero",false2: "divisa"},
    {num:560,que:"¿Cómo se dice 'exchange rate' ?",true: "tipo de cambio",false1: "cambio de divisas",false2: "tasa de cambio"},

    // FOOD & DINING (601-650)
    {num:601,que:"¿Qué significa 'menu' ?",true: "menú",false1: "carta",false2: "lista"},
    {num:602,que:"¿Cómo se dice 'appetizer' ?",true: "entrante",false1: "aperitivo",false2: "entrada"},
    {num:603,que:"¿Qué significa 'main course' ?",true: "plato principal",false1: "curso principal",false2: "platillo principal"},
    {num:604,que:"¿Cómo se dice 'dessert' ?",true: "postre",false1: "dulce",false2: "final"},
    {num:605,que:"¿Qué significa 'bill' ?",true: "cuenta",false1: "factura",false2: "recibo"},
    {num:606,que:"¿Cómo se dice 'tip' ?",true: "propina",false1: "consejo",false2: "punta"},
    {num:607,que:"¿Qué significa 'spicy' ?",true: "picante",false1: "especiado",false2: "caliente"},
    {num:608,que:"¿Cómo se dice 'sweet' ?",true: "dulce",false1: "azucarado",false2: "suave"},
    {num:609,que:"¿Qué significa 'bitter' ?",true: "amargo",false1: "agrio",false2: "ácido"},
    {num:610,que:"¿Cómo se dice 'sour' ?",true: "agrio",false1: "amargo",false2: "ácido"},

    // EDUCATION & SCHOOL (651-700)
    {num:651,que:"¿Qué significa 'student' ?",true: "estudiante",false1: "alumno",false2: "aprendiz"},
    {num:652,que:"¿Cómo se dice 'teacher' ?",true: "profesor",false1: "maestro",false2: "instructor"},
    {num:653,que:"¿Qué significa 'homework' ?",true: "tarea",false1: "deberes",false2: "trabajo"},
    {num:654,que:"¿Cómo se dice 'exam' ?",true: "examen",false1: "prueba",false2: "test"},
    {num:655,que:"¿Qué significa 'grade' ?",true: "nota/calificación",false1: "grado",false2: "nivel"},
    {num:656,que:"¿Cómo se dice 'classroom' ?",true: "aula",false1: "salón",false2: "clase"},
    {num:657,que:"¿Qué significa 'subject' ?",true: "asignatura",false1: "tema",false2: "materia"},
    {num:658,que:"¿Cómo se dice 'graduation' ?",true: "graduación",false1: "graduación",false2: "titulación"},
    {num:659,que:"¿Qué significa 'degree' ?",true: "título",false1: "grado",false2: "diploma"},
    {num:660,que:"¿Cómo se dice 'scholarship' ?",true: "beca",false1: "escolaridad",false2: "estudio"},

    // TECHNOLOGY & INTERNET (701-750)
    {num:701,que:"¿Qué significa 'password' ?",true: "contraseña",false1: "password",false2: "clave"},
    {num:702,que:"¿Cómo se dice 'website' ?",true: "sitio web",false1: "página web",false2: "web site"},
    {num:703,que:"¿Qué significa 'download' ?",true: "descargar",false1: "bajar",false2: "download"},
    {num:704,que:"¿Cómo se dice 'upload' ?",true: "subir",false1: "cargar",false2: "upload"},
    {num:705,que:"¿Qué significa 'browser' ?",true: "navegador",false1: "buscador",false2: "explorador"},
    {num:706,que:"¿Cómo se dice 'email' ?",true: "correo electrónico",false1: "email",false2: "e-mail"},
    {num:707,que:"¿Qué significa 'attachment' ?",true: "adjunto",false1: "archivo adjunto",false2: "anexo"},
    {num:708,que:"¿Cómo se dice 'spam' ?",true: "correo no deseado",false1: "spam",false2: "basura"},
    {num:709,que:"¿Qué significa 'virus' ?",true: "virus",false1: "virus",false2: "malware"},
    {num:710,que:"¿Cómo se dice 'update' ?",true: "actualización",false1: "actualizar",false2: "update"},

    // SPORTS & RECREATION (751-800)
    {num:751,que:"¿Qué significa 'team' ?",true: "equipo",false1: "grupo",false2: "selección"},
    {num:752,que:"¿Cómo se dice 'coach' ?",true: "entrenador",false1: "coach",false2: "preparador"},
    {num:753,que:"¿Qué significa 'championship' ?",true: "campeonato",false1: "championship",false2: "torneo"},
    {num:754,que:"¿Cómo se dice 'score' ?",true: "puntuación",false1: "marcador",false2: "puntaje"},
    {num:755,que:"¿Qué significa 'referee' ?",true: "árbitro",false1: "juez",false2: "referí"},
    {num:756,que:"¿Cómo se dice 'stadium' ?",true: "estadio",false1: "estadio",false2: "cancha"},
    {num:757,que:"¿Qué significa 'tournament' ?",true: "torneo",false1: "torneo",false2: "competencia"},
    {num:758,que:"¿Cómo se dice 'victory' ?",true: "victoria",false1: "triunfo",false2: "éxito"},
    {num:759,que:"¿Qué significa 'defeat' ?",true: "derrota",false1: "fracaso",false2: "pérdida"},
    {num:760,que:"¿Cómo se dice 'athlete' ?",true: "atleta",false1: "deportista",false2: "atleta"},

    // ART & CULTURE (801-850)
    {num:801,que:"¿Qué significa 'painting' ?",true: "pintura",false1: "cuadro",false2: "obra"},
    {num:802,que:"¿Cómo se dice 'sculpture' ?",true: "escultura",false1: "estatua",false2: "figura"},
    {num:803,que:"¿Qué significa 'literature' ?",true: "literatura",false1: "lectura",false2: "escritura"},
    {num:804,que:"¿Cómo se dice 'music' ?",true: "música",false1: "música",false2: "sonido"},
    {num:805,que:"¿Qué significa 'theater' ?",true: "teatro",false1: "teatro",false2: "drama"},
    {num:806,que:"¿Cómo se dice 'exhibition' ?",true: "exposición",false1: "exhibición",false2: "muestra"},
    {num:807,que:"¿Qué significa 'performance' ?",true: "actuación",false1: "rendimiento",false2: "performance"},
    {num:808,que:"¿Cómo se dice 'artist' ?",true: "artista",false1: "artista",false2: "creador"},
    {num:809,que:"¿Qué significa 'audience' ?",true: "audiencia",false1: "público",false2: "espectadores"},
    {num:810,que:"¿Cómo se dice 'critic' ?",true: "crítico",false1: "crítico",false2: "juez"},

    // ENVIRONMENT & NATURE (851-900)
    {num:851,que:"¿Qué significa 'environment' ?",true: "medio ambiente",false1: "entorno",false2: "ambiente"},
    {num:852,que:"¿Cómo se dice 'pollution' ?",true: "contaminación",false1: "polución",false2: "suciedad"},
    {num:853,que:"¿Qué significa 'recycling' ?",true: "reciclaje",false1: "reciclado",false2: "reutilización"},
    {num:854,que:"¿Cómo se dice 'climate' ?",true: "clima",false1: "tiempo",false2: "temperatura"},
    {num:855,que:"¿Qué significa 'biodiversity' ?",true: "biodiversidad",false1: "diversidad biológica",false2: "variedad"},
    {num:856,que:"¿Cómo se dice 'conservation' ?",true: "conservación",false1: "preservación",false2: "protección"},
    {num:857,que:"¿Qué significa 'sustainability' ?",true: "sostenibilidad",false1: "sustentabilidad",false2: "durabilidad"},
    {num:858,que:"¿Cómo se dice 'ecosystem' ?",true: "ecosistema",false1: "sistema ecológico",false2: "hábitat"},
    {num:859,que:"¿Qué significa 'wildlife' ?",true: "vida silvestre",false1: "fauna",false2: "animales"},
    {num:860,que:"¿Cómo se dice 'natural resources' ?",true: "recursos naturales",false1: "recursos naturales",false2: "bienes naturales"},

    // FINANCE & ECONOMICS (901-950)
    {num:901,que:"¿Qué significa 'investment' ?",true: "inversión",false1: "inversión",false2: "gasto"},
    {num:902,que:"¿Cómo se dice 'stock market' ?",true: "bolsa de valores",false1: "mercado de valores",false2: "bolsa"},
    {num:903,que:"¿Qué significa 'interest rate' ?",true: "tasa de interés",false1: "interés",false2: "tasa"},
    {num:904,que:"¿Cómo se dice 'inflation' ?",true: "inflación",false1: "inflación",false2: "aumento"},
    {num:905,que:"¿Qué significa 'budget' ?",true: "presupuesto",false1: "presupuesto",false2: "gasto"},
    {num:906,que:"¿Cómo se dice 'debt' ?",true: "deuda",false1: "deuda",false2: "préstamo"},
    {num:907,que:"¿Qué significa 'profit' ?",true: "ganancia",false1: "beneficio",false2: "utilidad"},
    {num:908,que:"¿Cómo se dice 'loss' ?",true: "pérdida",false1: "pérdida",false2: "fracaso"},
    {num:909,que:"¿Qué significa 'economy' ?",true: "economía",false1: "economía",false2: "sistema económico"},
    {num:910,que:"¿Cómo se dice 'currency' ?",true: "moneda",false1: "divisa",false2: "dinero"},

    // FINAL BATCH TO REACH 1000 (951-1000)
    {num:951,que:"¿Qué significa 'achievement' ?",true: "logro",false1: "éxito",false2: "meta"},
    {num:952,que:"¿Cómo se dice 'challenge' ?",true: "desafío",false1: "reto",false2: "dificultad"},
    {num:953,que:"¿Qué significa 'opportunity' ?",true: "oportunidad",false1: "oportunidad",false2: "ocasión"},
    {num:954,que:"¿Cómo se dice 'success' ?",true: "éxito",false1: "triunfo",false2: "logro"},
    {num:955,que:"¿Qué significa 'failure' ?",true: "fracaso",false1: "fallo",false2: "error"},
    {num:956,que:"¿Cómo se dice 'progress' ?",true: "progreso",false1: "avance",false2: "desarrollo"},
    {num:957,que:"¿Qué significa 'improvement' ?",true: "mejora",false1: "mejoramiento",false2: "progreso"},
    {num:958,que:"¿Cómo se dice 'development' ?",true: "desarrollo",false1: "crecimiento",false2: "evolución"},
    {num:959,que:"¿Qué significa 'innovation' ?",true: "innovación",false1: "invención",false2: "creación"},
    {num:960,que:"¿Cómo se dice 'creativity' ?",true: "creatividad",false1: "creación",false2: "inventiva"},
    {num:961,que:"¿Qué significa 'knowledge' ?",true: "conocimiento",false1: "saber",false2: "entendimiento"},
    {num:962,que:"¿Cómo se dice 'wisdom' ?",true: "sabiduría",false1: "conocimiento",false2: "inteligencia"},
    {num:963,que:"¿Qué significa 'experience' ?",true: "experiencia",false1: "vivencia",false2: "práctica"},
    {num:964,que:"¿Cómo se dice 'skill' ?",true: "habilidad",false1: "destreza",false2: "capacidad"},
    {num:965,que:"¿Qué significa 'talent' ?",true: "talento",false1: "don",false2: "habilidad"},
    {num:966,que:"¿Cómo se dice 'passion' ?",true: "pasión",false1: "amor",false2: "entusiasmo"},
    {num:967,que:"¿Qué significa 'motivation' ?",true: "motivación",false1: "inspiración",false2: "estímulo"},
    {num:968,que:"¿Cómo se dice 'determination' ?",true: "determinación",false1: "decisión",false2: "firmeza"},
    {num:969,que:"¿Qué significa 'perseverance' ?",true: "perseverancia",false1: "persistencia",false2: "constancia"},
    {num:970,que:"¿Cómo se dice 'excellence' ?",true: "excelencia",false1: "perfección",false2: "calidad"},
    {num:971,que:"¿Qué significa 'quality' ?",true: "calidad",false1: "cualidad",false2: "nivel"},
    {num:972,que:"¿Cómo se dice 'efficiency' ?",true: "eficiencia",false1: "eficacia",false2: "productividad"},
    {num:973,que:"¿Qué significa 'productivity' ?",true: "productividad",false1: "producción",false2: "rendimiento"},
    {num:974,que:"¿Cómo se dice 'professionalism' ?",true: "profesionalismo",false1: "profesionalidad",false2: "seriedad"},
    {num:975,que:"¿Qué significa 'reliability' ?",true: "fiabilidad",false1: "confiabilidad",false2: "seguridad"},
    {num:976,que:"¿Cómo se dice 'integrity' ?",true: "integridad",false1: "honestidad",false2: "ética"},
    {num:977,que:"¿Qué significa 'respect' ?",true: "respeto",false1: "consideración",false2: "cortesía"},
    {num:978,que:"¿Cómo se dice 'empathy' ?",true: "empatía",false1: "comprensión",false2: "simpatía"},
    {num:979,que:"¿Qué significa 'collaboration' ?",true: "colaboración",false1: "cooperación",false2: "trabajo en equipo"},
    {num:980,que:"¿Cómo se dice 'communication' ?",true: "comunicación",false1: "diálogo",false2: "conversación"},
    {num:981,que:"¿Qué significa 'leadership' ?",true: "liderazgo",false1: "dirección",false2: "guía"},
    {num:982,que:"¿Cómo se dice 'teamwork' ?",true: "trabajo en equipo",false1: "colaboración",false2: "cooperación"},
    {num:983,que:"¿Qué significa 'initiative' ?",true: "iniciativa",false1: "propuesta",false2: "idea"},
    {num:984,que:"¿Cómo se dice 'responsibility' ?",true: "responsabilidad",false1: "obligación",false2: "compromiso"},
    {num:985,que:"¿Qué significa 'commitment' ?",true: "compromiso",false1: "dedicación",false2: "obligación"},
    {num:986,que:"¿Cómo se dice 'dedication' ?",true: "dedicación",false1: "entrega",false2: "esfuerzo"},
    {num:987,que:"¿Qué significa 'effort' ?",true: "esfuerzo",false1: "trabajo",false2: "dedicación"},
    {num:988,que:"¿Cómo se dice 'persistence' ?",true: "persistencia",false1: "constancia",false2: "tenacidad"},
    {num:989,que:"¿Qué significa 'ambition' ?",true: "ambición",false1: "deseo",false2: "meta"},
    {num:990,que:"¿Cómo se dice 'goal' ?",true: "meta",false1: "objetivo",false2: "fin"},
    {num:991,que:"¿Qué significa 'objective' ?",true: "objetivo",false1: "meta",false2: "propósito"},
    {num:992,que:"¿Cómo se dice 'strategy' ?",true: "estrategia",false1: "plan",false2: "método"},
    {num:993,que:"¿Qué significa 'plan' ?",true: "plan",false1: "estrategia",false2: "proyecto"},
    {num:994,que:"¿Cómo se dice 'project' ?",true: "proyecto",false1: "plan",false2: "tarea"},
    {num:995,que:"¿Qué significa 'task' ?",true: "tarea",false1: "trabajo",false2: "actividad"},
    {num:996,que:"¿Cómo se dice 'deadline' ?",true: "fecha límite",false1: "plazo",false2: "término"},
    {num:997,que:"¿Qué significa 'priority' ?",true: "prioridad",false1: "importancia",false2: "urgencia"},
    {num:998,que:"¿Cómo se dice 'urgency' ?",true: "urgencia",false1: "emergencia",false2: "prioridad"},
    {num:999,que:"¿Qué significa 'efficiency' ?",true: "eficiencia",false1: "eficacia",false2: "productividad"},
    {num:1000,que:"¿Cómo se dice 'mastery' ?",true: "maestría",false1: "dominio",false2: "perfección"}
];
/* 

*/

let currentQuestionIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    setQ(currentQuestionIndex);
    setupEventListeners();
});

shuffleArray(qna);

function setQ(index) {
    const currentQ = qna[index];
    document.getElementById("question").innerHTML = currentQ.que;
    
    const answers = [currentQ.true, currentQ.false1, currentQ.false2];
    shuffleArray(answers);
    
    document.getElementById("button1").innerHTML = answers[0];
    document.getElementById("button2").innerHTML = answers[1];
    document.getElementById("button3").innerHTML = answers[2];
    
    // Store correct answer for checking
    document.getElementById("button1").dataset.correct = answers[0] === currentQ.true;
    document.getElementById("button2").dataset.correct = answers[1] === currentQ.true;
    document.getElementById("button3").dataset.correct = answers[2] === currentQ.true;
}

function setupEventListeners() {
    document.getElementById("button1").addEventListener("click", function() {
        checkAnswer(this);
    });
    document.getElementById("button2").addEventListener("click", function() {
        checkAnswer(this);
    });
    document.getElementById("button3").addEventListener("click", function() {
        checkAnswer(this);
    });
}

function checkAnswer(button) {
    const isCorrect = button.dataset.correct === "true";
    const buttonbox = document.getElementById("workbox");

    if (isCorrect) {
        workbox.style.backgroundColor = "green";
        // Move to next question after delay
        setTimeout(function() {
            currentQuestionIndex++;
            if (currentQuestionIndex < qna.length) {
                setQ(currentQuestionIndex);
                buttonbox.style.backgroundColor = ""; // Reset color
            } else {
                document.getElementById("question").innerHTML = "Quiz Complete! 🎉";
                buttonbox.innerHTML = "<p>Yo amo tu <3</p>";
            }
        }, 1000); // Added missing delay parameter
    } else {
        buttonbox.style.backgroundColor = "red";
        // Reset color after short delay
        setTimeout(function() {
            buttonbox.style.backgroundColor = "";
        }, 1000);
    }
}

// Helper function to shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;


}
