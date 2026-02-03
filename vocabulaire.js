const DATA = {
  francais_soutenu: [
    // --- ACTIONS ET VERBES (25) ---
    {q: "entamer", a: "commencer"}, {q: "achever", a: "finir"}, {q: "seconder", a: "aider"},
    {q: "révoquer", a: "annuler"}, {q: "dissimuler", a: "cacher"}, {q: "saisir", a: "comprendre"},
    {q: "solliciter", a: "demander"}, {q: "énoncer", a: "dire"}, {q: "octroyer", a: "donner"},
    {q: "ouïr", a: "écouter"}, {q: "entraver", a: "empêcher"}, {q: "ôter", a: "enlever"},
    {q: "tenter", a: "essayer"}, {q: "accomplir", a: "faire"}, {q: "résider", a: "habiter"},
    {q: "se restaurer", a: "manger"}, {q: "déambuler", a: "marcher"}, {q: "exhiber", a: "montrer"},
    {q: "songer", a: "penser"}, {q: "larmoyer", a: "pleurer"}, {q: "contempler", a: "regarder"},
    {q: "prospérer", a: "réussir"}, {q: "œuvrer", a: "travailler"}, {q: "employer", a: "utiliser"},
    {q: "aspirer", a: "vouloir"},

    // --- QUALITÉS ET ADJECTIFS (25) ---
    {q: "somptueux", a: "beau"}, {q: "singulier", a: "bizarre"}, {q: "excellent", a: "bon"},
    {q: "serein", a: "calme"}, {q: "limpide", a: "clair"}, {q: "ardent", a: "difficile"},
    {q: "cocasse", a: "drôle"}, {q: "irascible", a: "énervé"}, {q: "éreinté", a: "fatigué"},
    {q: "affable", a: "gentil"}, {q: "éminent", a: "grand"}, {q: "comblé", a: "heureux"},
    {q: "perspicace", a: "intelligent"}, {q: "vain", a: "inutile"}, {q: "juvénile", a: "jeune"},
    {q: "indolent", a: "lent"}, {q: "néfaste", a: "mauvais"}, {q: "novateur", a: "nouveau"},
    {q: "indigent", a: "pauvre"}, {q: "exigu", a: "petit"}, {q: "immaculé", a: "propre"},
    {q: "opulent", a: "riche"}, {q: "mélancolique", a: "triste"}, {q: "séculaire", a: "vieux"},
    {q: "authentique", a: "vrai"},

    // --- NOMS ET OBJETS (25) ---
    {q: "allié", a: "ami"}, {q: "pécune", a: "argent"}, {q: "vacarme", a: "bruit"},
    {q: "présent", a: "cadeau"}, {q: "sentier", a: "chemin"}, {q: "dilemme", a: "choix"},
    {q: "courroux", a: "colère"}, {q: "prémices", a: "début"}, {q: "méprise", a: "erreur"},
    {q: "festivités", a: "fête"}, {q: "issue", a: "fin"}, {q: "vêture", a: "habit"},
    {q: "conjoncture", a: "hasard"}, {q: "récit", a: "histoire"}, {q: "concept", a: "idée"},
    {q: "ouvrage", a: "livre"}, {q: "demeure", a: "maison"}, {q: "amalgame", a: "mélange"},
    {q: "trépas", a: "mort"}, {q: "injonction", a: "ordre"}, {q: "effroi", a: "peur"},
    {q: "écueil", a: "problème"}, {q: "réplique", a: "réponse"}, {q: "labeur", a: "travail"},
    {q: "atours", a: "vêtement"},

    // --- ÉMOTIONS ET ÉTATS (25) ---
    {q: "effervescence", a: "agitation"}, {q: "inclination", a: "amour"}, {q: "opinion", a: "avis"},
    {q: "nécessité", a: "besoin"}, {q: "aubaine", a: "chance"}, {q: "panache", a: "charme"},
    {q: "lucidité", a: "clarté"}, {q: "assurance", a: "confiance"}, {q: "vaillance", a: "courage"},
    {q: "péril", a: "danger"}, {q: "convoitise", a: "désir"}, {q: "altercation", a: "dispute"},
    {q: "incertitude", a: "doute"}, {q: "lassitude", a: "ennui"}, {q: "espérance", a: "espoir"},
    {q: "défaillance", a: "faiblesse"}, {q: "vigueur", a: "force"}, {q: "aversion", a: "haine"},
    {q: "allégresse", a: "joie"}, {q: "allégation", a: "mensonge"}, {q: "quiétude", a: "paix"},
    {q: "commisération", a: "pitié"}, {q: "chimère", a: "rêve"}, {q: "stupeur", a: "surprise"},
    {q: "néant", a: "vide"}
  ],
  anglais: [
    // --- LES BASES (20) ---
    {q: "Hello", a: "bonjour"}, {q: "Thank you", a: "merci"}, {q: "Yes", a: "oui"}, 
    {q: "No", a: "non"}, {q: "Please", a: "s'il vous plaît"}, {q: "Excuse me", a: "excusez-moi"},
    {q: "You're welcome", a: "de rien"}, {q: "Goodbye", a: "au revoir"}, {q: "Sorry", a: "désolé"},
    {q: "I", a: "je"}, {q: "You", a: "tu"}, {q: "We", a: "nous"},
    {q: "This", a: "ceci"}, {q: "That", a: "cela"}, {q: "Who", a: "qui"},
    {q: "What", a: "quoi"}, {q: "Where", a: "où"}, {q: "When", a: "quand"},
    {q: "Why", a: "pourquoi"}, {q: "How", a: "comment"},

    // --- PERSONNES ET FAMILLE (15) ---
    {q: "Family", a: "famille"}, {q: "Father", a: "père"}, {q: "Mother", a: "mère"},
    {q: "Brother", a: "frère"}, {q: "Sister", a: "sœur"}, {q: "Son", a: "fils"},
    {q: "Daughter", a: "fille"}, {q: "Child", a: "enfant"}, {q: "Friend", a: "ami"},
    {q: "Man", a: "homme"}, {q: "Woman", a: "femme"}, {q: "Boy", a: "garçon"},
    {q: "Girl", a: "fille"}, {q: "Teacher", a: "professeur"}, {q: "Doctor", a: "médecin"},

    // --- CHIFFRES ET TEMPS (15) ---
    {q: "One", a: "un"}, {q: "Two", a: "deux"}, {q: "Three", a: "trois"},
    {q: "Ten", a: "dix"}, {q: "Hundred", a: "cent"}, {q: "Today", a: "aujourd'hui"},
    {q: "Yesterday", a: "hier"}, {q: "Tomorrow", a: "demain"}, {q: "Now", a: "maintenant"},
    {q: "Hour", a: "heure"}, {q: "Minute", a: "minute"}, {q: "Day", a: "jour"},
    {q: "Week", a: "semaine"}, {q: "Month", a: "mois"}, {q: "Year", a: "an"},

    // --- NOURRITURE ET MAISON (15) ---
    {q: "Water", a: "eau"}, {q: "Bread", a: "pain"}, {q: "Coffee", a: "café"},
    {q: "Milk", a: "lait"}, {q: "Eat", a: "manger"}, {q: "Drink", a: "boire"},
    {q: "Meat", a: "viande"}, {q: "Vegetables", a: "légumes"}, {q: "Fruit", a: "fruit"},
    {q: "Delicious", a: "délicieux"}, {q: "Hungry", a: "faim"}, {q: "Thirsty", a: "soif"},
    {q: "Kitchen", a: "cuisine"}, {q: "House", a: "maison"}, {q: "Table", a: "table"},

    // --- LIEUX ET TRANSPORT (15) ---
    {q: "School", a: "école"}, {q: "Work", a: "travail"}, {q: "City", a: "ville"},
    {q: "Street", a: "rue"}, {q: "Car", a: "voiture"}, {q: "Bus", a: "bus"},
    {q: "Train", a: "train"}, {q: "Station", a: "gare"}, {q: "Store", a: "magasin"},
    {q: "Hospital", a: "hôpital"}, {q: "Bathroom", a: "toilettes"}, {q: "Book", a: "livre"},
    {q: "Phone", a: "téléphone"}, {q: "Money", a: "argent"}, {q: "Beach", a: "plage"},

    // --- VERBES ET ADJECTIFS (20) ---
    {q: "Go", a: "aller"}, {q: "Come", a: "venir"}, {q: "See", a: "voir"},
    {q: "Listen", a: "écouter"}, {q: "Speak", a: "parler"}, {q: "Do", a: "faire"},
    {q: "Buy", a: "acheter"}, {q: "Sleep", a: "dormir"}, {q: "Write", a: "écrire"},
    {q: "Read", a: "lire"}, {q: "Big", a: "grand"}, {q: "Small", a: "petit"},
    {q: "Good", a: "bon"}, {q: "Bad", a: "mauvais"}, {q: "Fast", a: "rapide"},
    {q: "Slow", a: "lent"}, {q: "Much", a: "beaucoup"}, {q: "Little", a: "peu"},
    {q: "New", a: "nouveau"}, {q: "Old", a: "vieux"}
  ],
  espagnol: [
    // --- LES BASES (20) ---
    {q: "Hola", a: "bonjour"}, {q: "Gracias", a: "merci"}, {q: "Sí", a: "oui"}, 
    {q: "No", a: "non"}, {q: "Por favor", a: "s'il vous plaît"}, {q: "Perdón", a: "pardon"},
    {q: "De nada", a: "de rien"}, {q: "Adiós", a: "au revoir"}, {q: "Hasta luego", a: "à plus tard"},
    {q: "Yo", a: "moi"}, {q: "Tú", a: "toi"}, {q: "Nosotros", a: "nous"},
    {q: "Esto", a: "ceci"}, {q: "Eso", a: "cela"}, {q: "Quién", a: "qui"},
    {q: "Qué", a: "quoi"}, {q: "Dónde", a: "où"}, {q: "Cuándo", a: "quand"},
    {q: "Por qué", a: "pourquoi"}, {q: "Cómo", a: "comment"},

    // --- PERSONNES ET FAMILLE (15) ---
    {q: "Familia", a: "famille"}, {q: "Padre", a: "père"}, {q: "Madre", a: "mère"},
    {q: "Hermano", a: "frère"}, {q: "Hermana", a: "sœur"}, {q: "Hijo", a: "fils"},
    {q: "Niño", a: "enfant"}, {q: "Amigo", a: "ami"}, {q: "Hombre", a: "homme"},
    {q: "Mujer", a: "femme"}, {q: "Chico", a: "garçon"}, {q: "Chica", a: "fille"},
    {q: "Maestro", a: "maître"}, {q: "Médico", a: "médecin"}, {q: "Gente", a: "gens"},

    // --- CHIFFRES ET TEMPS (15) ---
    {q: "Uno", a: "un"}, {q: "Dos", a: "deux"}, {q: "Tres", a: "trois"},
    {q: "Diez", a: "dix"}, {q: "Cien", a: "cent"}, {q: "Hoy", a: "aujourd'hui"},
    {q: "Ayer", a: "hier"}, {q: "Mañana", a: "demain"}, {q: "Ahora", a: "maintenant"},
    {q: "Hora", a: "heure"}, {q: "Minuto", a: "minute"}, {q: "Día", a: "jour"},
    {q: "Semana", a: "semaine"}, {q: "Mes", a: "mois"}, {q: "Año", a: "an"},

    // --- NOURRITURE ET MAISON (15) ---
    {q: "Agua", a: "eau"}, {q: "Pan", a: "pain"}, {q: "Café", a: "café"},
    {q: "Leche", a: "lait"}, {q: "Comer", a: "manger"}, {q: "Beber", a: "boire"},
    {q: "Carne", a: "viande"}, {q: "Verdura", a: "légume"}, {q: "Fruta", a: "fruit"},
    {q: "Rico", a: "délicieux"}, {q: "Hambre", a: "faim"}, {q: "Sed", a: "soif"},
    {q: "Cocina", a: "cuisine"}, {q: "Casa", a: "maison"}, {q: "Silla", a: "chaise"},

    // --- LIEUX ET TRANSPORT (15) ---
    {q: "Escuela", a: "école"}, {q: "Trabajo", a: "travail"}, {q: "Ciudad", a: "ville"},
    {q: "Calle", a: "rue"}, {q: "Coche", a: "voiture"}, {q: "Autobús", a: "bus"},
    {q: "Tren", a: "train"}, {q: "Estación", a: "gare"}, {q: "Tienda", a: "magasin"},
    {q: "Hospital", a: "hôpital"}, {q: "Baño", a: "toilettes"}, {q: "Libro", a: "livre"},
    {q: "Teléfono", a: "téléphone"}, {q: "Dinero", a: "argent"}, {q: "Playa", a: "plage"},

    // --- VERBES ET ADJECTIFS (20) ---
    {q: "Ir", a: "aller"}, {q: "Venir", a: "venir"}, {q: "Ver", a: "voir"},
    {q: "Escuchar", a: "écouter"}, {q: "Hablar", a: "parler"}, {q: "Hacer", a: "faire"},
    {q: "Comprar", a: "acheter"}, {q: "Dormir", a: "dormir"}, {q: "Escribir", a: "écrire"},
    {q: "Leer", a: "lire"}, {q: "Grande", a: "grand"}, {q: "Pequeño", a: "petit"},
    {q: "Bueno", a: "bon"}, {q: "Malo", a: "mauvais"}, {q: "Rápido", a: "rapide"},
    {q: "Lento", a: "lent"}, {q: "Mucho", a: "beaucoup"}, {q: "Poco", a: "peu"},
    {q: "Nuevo", a: "nouveau"}, {q: "Viejo", a: "vieux"}
  ],
  italien: [
    // --- LES BASES (20) ---
    {q: "Ciao", a: "bonjour"}, {q: "Grazie", a: "merci"}, {q: "Sì", a: "oui"}, 
    {q: "No", a: "non"}, {q: "Per favore", a: "s'il vous plaît"}, {q: "Scusa", a: "excusez-moi"},
    {q: "Prego", a: "de rien"}, {q: "Arrivederci", a: "au revoir"}, {q: "Io", a: "moi"},
    {q: "Tu", a: "toi"}, {q: "Noi", a: "nous"}, {q: "Questo", a: "ceci"},
    {q: "Quello", a: "cela"}, {q: "Chi", a: "qui"}, {q: "Cosa", a: "quoi"},
    {q: "Dove", a: "où"}, {q: "Quando", a: "quand"}, {q: "Perché", a: "pourquoi"},
    {q: "Come", a: "comment"}, {q: "Forse", a: "peut-être"},

    // --- PERSONNES ET FAMILLE (15) ---
    {q: "Famiglia", a: "famille"}, {q: "Padre", a: "père"}, {q: "Madre", a: "mère"},
    {q: "Fratello", a: "frère"}, {q: "Sorella", a: "sœur"}, {q: "Figlio", a: "fils"},
    {q: "Bambino", a: "enfant"}, {q: "Amico", a: "ami"}, {q: "Uomo", a: "homme"},
    {q: "Donna", a: "femme"}, {q: "Ragazzo", a: "garçon"}, {q: "Ragazza", a: "fille"},
    {q: "Insegnante", a: "professeur"}, {q: "Dottore", a: "médecin"}, {q: "Persona", a: "personne"},

    // --- CHIFFRES ET TEMPS (15) ---
    {q: "Uno", a: "un"}, {q: "Due", a: "deux"}, {q: "Tre", a: "trois"},
    {q: "Dieci", a: "dix"}, {q: "Cento", a: "cent"}, {q: "Oggi", a: "aujourd'hui"},
    {q: "Ieri", a: "hier"}, {q: "Domani", a: "demain"}, {q: "Adesso", a: "maintenant"},
    {q: "Ora", a: "heure"}, {q: "Minuto", a: "minute"}, {q: "Giorno", a: "jour"},
    {q: "Settimana", a: "semaine"}, {q: "Mese", a: "mois"}, {q: "Anno", a: "an"},

    // --- NOURRITURE ET MAISON (15) ---
    {q: "Acqua", a: "eau"}, {q: "Pane", a: "pain"}, {q: "Caffè", a: "café"},
    {q: "Latte", a: "lait"}, {q: "Mangiare", a: "manger"}, {q: "Bere", a: "boire"},
    {q: "Carne", a: "viande"}, {q: "Verdura", a: "légumes"}, {q: "Frutta", a: "fruits"},
    {q: "Buono", a: "bon"}, {q: "Fame", a: "faim"}, {q: "Sete", a: "soif"},
    {q: "Cucina", a: "cuisine"}, {q: "Casa", a: "maison"}, {q: "Tavolo", a: "table"},

    // --- LIEUX ET TRANSPORT (15) ---
    {q: "Scuola", a: "école"}, {q: "Lavoro", a: "travail"}, {q: "Città", a: "ville"},
    {q: "Strada", a: "rue"}, {q: "Macchina", a: "voiture"}, {q: "Autobus", a: "bus"},
    {q: "Treno", a: "train"}, {q: "Stazione", a: "gare"}, {q: "Negozio", a: "magasin"},
    {q: "Ospedale", a: "hôpital"}, {q: "Bagno", a: "toilettes"}, {q: "Libro", a: "livre"},
    {q: "Telefono", a: "téléphone"}, {q: "Soldi", a: "argent"}, {q: "Spiaggia", a: "plage"},

    // --- VERBES ET ADJECTIFS (20) ---
    {q: "Andare", a: "aller"}, {q: "Venire", a: "venir"}, {q: "Vedere", a: "voir"},
    {q: "Ascoltare", a: "écouter"}, {q: "Parlare", a: "parler"}, {q: "Fare", a: "faire"},
    {q: "Comprare", a: "acheter"}, {q: "Dormire", a: "dormir"}, {q: "Scrivere", a: "écrire"},
    {q: "Leggere", a: "lire"}, {q: "Grande", a: "grand"}, {q: "Piccolo", a: "petit"},
    {q: "Bello", a: "beau"}, {q: "Brutto", a: "laid"}, {q: "Veloce", a: "rapide"},
    {q: "Lento", a: "lent"}, {q: "Molto", a: "beaucoup"}, {q: "Poco", a: "peu"},
    {q: "Nuovo", a: "nouveau"}, {q: "Vecchio", a: "vieux"}
  ],
  allemand: [
    // --- LES BASES (20) ---
    {q: "Hallo", a: "bonjour"}, {q: "Danke", a: "merci"}, {q: "Ja", a: "oui"}, 
    {q: "Nein", a: "non"}, {q: "Bitte", a: "s'il vous plaît"}, {q: "Entschuldigung", a: "excusez-moi"},
    {q: "Gern geschehen", a: "de rien"}, {q: "Tschüss", a: "salut"}, {q: "Auf Wiedersehen", a: "au revoir"},
    {q: "Ich", a: "moi"}, {q: "Du", a: "toi"}, {q: "Wir", a: "nous"},
    {q: "Das", a: "ceci"}, {q: "Wer", a: "qui"}, {q: "Was", a: "quoi"},
    {q: "Wo", a: "où"}, {q: "Wann", a: "quand"}, {q: "Warum", a: "pourquoi"},
    {q: "Wie", a: "comment"}, {q: "Vielleicht", a: "peut-être"},

    // --- PERSONNES ET FAMILLE (15) ---
    {q: "Familie", a: "famille"}, {q: "Vater", a: "père"}, {q: "Mutter", a: "mère"},
    {q: "Bruder", a: "frère"}, {q: "Schwester", a: "sœur"}, {q: "Kind", a: "enfant"},
    {q: "Freund", a: "ami"}, {q: "Lehrer", a: "professeur"}, {q: "Schüler", a: "élève"},
    {q: "Mann", a: "homme"}, {q: "Frau", a: "femme"}, {q: "Baby", a: "bébé"},
    {q: "Arzt", a: "médecin"}, {q: "Mädchen", a: "fille"}, {q: "Junge", a: "garçon"},

    // --- TEMPS ET CHIFFRES (15) ---
    {q: "Eins", a: "un"}, {q: "Zwei", a: "deux"}, {q: "Drei", a: "trois"},
    {q: "Zehn", a: "dix"}, {q: "Hundert", a: "cent"}, {q: "Heute", a: "aujourd'hui"},
    {q: "Gestern", a: "hier"}, {q: "Morgen", a: "demain"}, {q: "Jetzt", a: "maintenant"},
    {q: "Uhr", a: "heure"}, {q: "Minute", a: "minute"}, {q: "Tag", a: "jour"},
    {q: "Woche", a: "semaine"}, {q: "Monat", a: "mois"}, {q: "Jahr", a: "an"},

    // --- NOURRITURE ET VIE QUOTIDIENNE (15) ---
    {q: "Wasser", a: "eau"}, {q: "Brot", a: "pain"}, {q: "Kaffee", a: "café"},
    {q: "Milch", a: "lait"}, {q: "Essen", a: "manger"}, {q: "Trinken", a: "boire"},
    {q: "Apfel", a: "pomme"}, {q: "Fleisch", a: "viande"}, {q: "Gemüse", a: "légumes"},
    {q: "Obst", a: "fruits"}, {q: "Lecker", a: "délicieux"}, {q: "Hunger", a: "faim"},
    {q: "Durst", a: "soif"}, {q: "Küche", a: "cuisine"}, {q: "Frühstück", a: "petit-déjeuner"},

    // --- LIEUX ET OBJETS (15) ---
    {q: "Haus", a: "maison"}, {q: "Schule", a: "école"}, {q: "Arbeit", a: "travail"},
    {q: "Stadt", a: "ville"}, {q: "Straße", a: "rue"}, {q: "Auto", a: "voiture"},
    {q: "Bus", a: "bus"}, {q: "Zug", a: "train"}, {q: "Bahnhof", a: "gare"},
    {q: "Buch", a: "livre"}, {q: "Handy", a: "téléphone"}, {q: "Tisch", a: "table"},
    {q: "Geld", a: "argent"}, {q: "Krankenhaus", a: "hôpital"}, {q: "Toilette", a: "toilettes"},

    // --- VERBES ET ADJECTIFS (20) ---
    {q: "Gehen", a: "aller"}, {q: "Kommen", a: "venir"}, {q: "Sehen", a: "voir"},
    {q: "Hören", a: "entendre"}, {q: "Sprechen", a: "parler"}, {q: "Machen", a: "faire"},
    {q: "Kaufen", a: "acheter"}, {q: "Schlafen", a: "dormir"}, {q: "Schreiben", a: "écrire"},
    {q: "Lesen", a: "lire"}, {q: "Groß", a: "grand"}, {q: "Klein", a: "petit"},
    {q: "Gut", a: "bon"}, {q: "Schlecht", a: "mauvais"}, {q: "Schnell", a: "rapide"},
    {q: "Langsam", a: "lent"}, {q: "Viel", a: "beaucoup"}, {q: "Wenig", a: "peu"},
    {q: "Schön", a: "beau"}, {q: "Neu", a: "nouveau"}
  ],
  chinois: [
    // --- LES BASES (20) ---
    {q: "你好", a: "bonjour"}, {q: "谢谢", a: "merci"}, {q: "对", a: "oui"}, 
    {q: "不", a: "non"}, {q: "请", a: "s'il vous plaît"}, {q: "对不起", a: "pardon"},
    {q: "没关系", a: "de rien"}, {q: "再见", a: "au revoir"}, {q: "我", a: "moi"},
    {q: "你", a: "toi"}, {q: "他", a: "lui"}, {q: "我们", a: "nous"},
    {q: "这", a: "ceci"}, {q: "那", a: "cela"}, {q: "谁", a: "qui"},
    {q: "什么", a: "quoi"}, {q: "哪里", a: "où"}, {q: "什么时候", a: "quand"},
    {q: "为什么", a: "pourquoi"}, {q: "怎么", a: "comment"},

    // --- PERSONNES ET FAMILLE (15) ---
    {q: "家", a: "famille"}, {q: "爸爸", a: "père"}, {q: "妈妈", a: "mère"},
    {q: "哥哥", a: "grand frère"}, {q: "弟弟", a: "petit frère"}, {q: "姐姐", a: "grande sœur"},
    {q: "妹妹", a: "petite sœur"}, {q: "孩子", a: "enfant"}, {q: "朋友", a: "ami"},
    {q: "老师", a: "professeur"}, {q: "学生", a: "étudiant"}, {q: "医生", a: "médecin"},
    {q: "男人", a: "homme"}, {q: "女人", a: "femme"}, {q: "人", a: "humain"},

    // --- CHIFFRES ET TEMPS (15) ---
    {q: "一", a: "un"}, {q: "二", a: "deux"}, {q: "三", a: "trois"},
    {q: "十", a: "dix"}, {q: "百", a: "cent"}, {q: "现在", a: "maintenant"},
    {q: "今天", a: "aujourd'hui"}, {q: "昨天", a: "hier"}, {q: "明天", a: "demain"},
    {q: "点", a: "heure"}, {q: "分钟", a: "minute"}, {q: "年", a: "année"},
    {q: "月", a: "mois"}, {q: "日", a: "jour"}, {q: "星期", a: "semaine"},

    // --- NOURRITURE ET CORPS (15) ---
    {q: "水", a: "eau"}, {q: "茶", a: "thé"}, {q: "咖啡", a: "café"},
    {q: "米饭", a: "riz"}, {q: "面条", a: "nouilles"}, {q: "肉", a: "viande"},
    {q: "水果", a: "fruit"}, {q: "苹果", a: "pomme"}, {q: "好吃", a: "délicieux"},
    {q: "喝", a: "boire"}, {q: "吃", a: "manger"}, {q: "头", a: "tête"},
    {q: "手", a: "main"}, {q: "眼睛", a: "yeux"}, {q: "口", a: "bouche"},

    // --- LIEUX ET OBJETS (15) ---
    {q: "学校", a: "école"}, {q: "商店", a: "magasin"}, {q: "医院", a: "hôpital"},
    {q: "洗手间", a: "toilettes"}, {q: "房间", a: "chambre"}, {q: "书", a: "livre"},
    {q: "手机", a: "téléphone"}, {q: "电脑", a: "ordinateur"}, {q: "钱", a: "argent"},
    {q: "衣服", a: "vêtement"}, {q: "桌子", a: "table"}, {q: "椅子", a: "chaise"},
    {q: "车", a: "voiture"}, {q: "路", a: "route"}, {q: "北京", a: "Pékin"},

    // --- VERBES ET ADJECTIFS (20) ---
    {q: "看", a: "regarder"}, {q: "听", a: "écouter"}, {q: "说", a: "parler"},
    {q: "读", a: "lire"}, {q: "写", a: "écrire"}, {q: "做", a: "faire"},
    {q: "去", a: "aller"}, {q: "来", a: "venir"}, {q: "买", a: "acheter"},
    {q: "开", a: "ouvrir"}, {q: "大", a: "grand"}, {q: "小", a: "petit"},
    {q: "多", a: "beaucoup"}, {q: "少", a: "peu"}, {q: "好", a: "bon"},
    {q: "冷", a: "froid"}, {q: "热", a: "chaud"}, {q: "漂亮", a: "beau"},
    {q: "高兴", a: "heureux"}, {q: "认识", a: "connaître"}
  ],
  coreen: [
    // --- LES BASES (20) ---
    {q: "안녕하세요", a: "bonjour"}, {q: "감사합니다", a: "merci"}, {q: "네", a: "oui"}, 
    {q: "아니요", a: "non"}, {q: "주세요", a: "s'il vous plaît"}, {q: "실례합니다", a: "excusez-moi"},
    {q: "천만에요", a: "de rien"}, {q: "미안합니다", a: "pardon"}, {q: "안녕히 계세요", a: "au revoir"},
    {q: "안녕히 가세요", a: "au revoir"}, {q: "저", a: "moi"}, {q: "너", a: "toi"},
    {q: "이것", a: "ceci"}, {q: "그것", a: "cela"}, {q: "누구", a: "qui"},
    {q: "무엇", a: "quoi"}, {q: "어디", a: "où"}, {q: "언제", a: "quand"},
    {q: "왜", a: "pourquoi"}, {q: "어떻게", a: "comment"},

    // --- PERSONNES ET FAMILLE (15) ---
    {q: "친구", a: "ami"}, {q: "사람", a: "personne"}, {q: "학생", a: "étudiant"},
    {q: "선생님", a: "professeur"}, {q: "아버지", a: "père"}, {q: "어머니", a: "mère"},
    {q: "형", a: "frère"}, {q: "오빠", a: "grand frère"},
    {q: "누나", a: "grande sœur"}, {q: "언니", a: "sœur"},
    {q: "아이", a: "enfant"}, {q: "남자", a: "homme"}, {q: "여자", a: "femme"},
    {q: "아기", a: "bébé"}, {q: "의사", a: "médecin"},

    // --- NOURRITURE ET BOISSONS (15) ---
    {q: "물", a: "eau"}, {q: "밥", a: "riz"}, {q: "빵", a: "pain"},
    {q: "고기", a: "viande"}, {q: "야채", a: "légumes"}, {q: "과일", a: "fruits"},
    {q: "사과", a: "pomme"}, {q: "우유", a: "lait"}, {q: "커피", a: "café"},
    {q: "차", a: "thé"}, {q: "술", a: "alcool"}, {q: "맛있어요", a: "délicieux"},
    {q: "배고파요", a: "faim"}, {q: "식당", a: "restaurant"}, {q: "메뉴", a: "menu"},

    // --- LIEUX ET TRANSPORT (15) ---
    {q: "집", a: "maison"}, {q: "학교", a: "école"}, {q: "회사", a: "entreprise"},
    {q: "화장실", a: "toilettes"}, {q: "가게", a: "magasin"}, {q: "병원", a: "hôpital"},
    {q: "은행", a: "banque"}, {q: "공원", a: "parc"}, {q: "길", a: "rue"},
    {q: "차", a: "voiture"}, {q: "버스", a: "bus"}, {q: "지하철", a: "métro"},
    {q: "기차", a: "train"}, {q: "비행기", a: "avion"}, {q: "역", a: "gare"},

    // --- TEMPS ET CHIFFRES (15) ---
    {q: "오늘", a: "aujourd'hui"}, {q: "어제", a: "hier"}, {q: "내일", a: "demain"},
    {q: "지금", a: "maintenant"}, {q: "시", a: "heure"}, {q: "분", a: "minute"},
    {q: "아침", a: "matin"}, {q: "밤", a: "nuit"}, {q: "일", a: "un"},
    {q: "이", a: "deux"}, {q: "삼", a: "trois"}, {q: "사", a: "quatre"},
    {q: "오", a: "cinq"}, {q: "십", a: "dix"}, {q: "백", a: "cent"},

    // --- VERBES ET ADJECTIFS COURANTS (20) ---
    {q: "가다", a: "aller"}, {q: "오다", a: "venir"}, {q: "먹다", a: "manger"},
    {q: "마시다", a: "boire"}, {q: "자다", a: "dormir"}, {q: "보다", a: "voir"},
    {q: "듣다", a: "écouter"}, {q: "말하다", a: "parler"}, {q: "읽다", a: "lire"},
    {q: "쓰다", a: "écrire"}, {q: "좋아하다", a: "aimer"}, {q: "싫어하다", a: "détester"},
    {q: "하다", a: "faire"}, {q: "사다", a: "acheter"}, {q: "배우다", a: "apprendre"},
    {q: "크다", a: "grand"}, {q: "작다", a: "petit"}, {q: "많이", a: "beaucoup"},
    {q: "조금", a: "un peu"}, {q: "어렵다", a: "difficile"}
  ],
  arabe: [
    // --- LES BASES (20) ---
    {q: "مرحبا", a: "bonjour"}, {q: "شكرا", a: "merci"}, {q: "نعم", a: "oui"}, 
    {q: "لا", a: "non"}, {q: "من فضلك", a: "s'il vous plaît"}, {q: "عفوا", a: "pardon"},
    {q: "بكل سرور", a: "de rien"}, {q: "وداعا", a: "au revoir"}, {q: "أنا", a: "moi"},
    {q: "أنت", a: "toi"}, {q: "نحن", a: "nous"}, {q: "هذا", a: "ceci"},
    {q: "ذلك", a: "cela"}, {q: "من", a: "qui"}, {q: "ماذا", a: "quoi"},
    {q: "أين", a: "où"}, {q: "متى", a: "quand"}, {q: "لماذا", a: "pourquoi"},
    {q: "كيف", a: "comment"}, {q: "ربما", a: "peut-être"},

    // --- PERSONNES ET FAMILLE (15) ---
    {q: "عائلة", a: "famille"}, {q: "أب", a: "père"}, {q: "أم", a: "mère"},
    {q: "أخ", a: "frère"}, {q: "أخت", a: "sœur"}, {q: "ابن", a: "fils"},
    {q: "ابنة", a: "fille"}, {q: "طفل", a: "enfant"}, {q: "صديق", a: "ami"},
    {q: "رجل", a: "homme"}, {q: "امرأة", a: "femme"}, {q: "ولد", a: "garçon"},
    {q: "بنت", a: "fille"}, {q: "معلم", a: "professeur"}, {q: "طبيب", a: "médecin"},

    // --- CHIFFRES ET TEMPS (15) ---
    {q: "واحد", a: "un"}, {q: "اثنان", a: "deux"}, {q: "ثلاثة", a: "trois"},
    {q: "عشرة", a: "dix"}, {q: "مئة", a: "cent"}, {q: "اليوم", a: "aujourd'hui"},
    {q: "أمس", a: "hier"}, {q: "غدا", a: "demain"}, {q: "الآن", a: "maintenant"},
    {q: "ساعة", a: "heure"}, {q: "دقيقة", a: "minute"}, {q: "يوم", a: "jour"},
    {q: "أسبوع", a: "semaine"}, {q: "شهر", a: "mois"}, {q: "سنة", a: "an"},

    // --- NOURRITURE ET MAISON (15) ---
    {q: "ماء", a: "eau"}, {q: "خبز", a: "pain"}, {q: "قهوة", a: "café"},
    {q: "حليب", a: "lait"}, {q: "أكل", a: "manger"}, {q: "شرب", a: "boire"},
    {q: "لحم", a: "viande"}, {q: "خضروات", a: "légumes"}, {q: "فواكه", a: "fruits"},
    {q: "لذيذ", a: "délicieux"}, {q: "جائع", a: "faim"}, {q: "عطشان", a: "soif"},
    {q: "مطبخ", a: "cuisine"}, {q: "بيت", a: "maison"}, {q: "طاولة", a: "table"},

    // --- LIEUX ET TRANSPORT (15) ---
    {q: "مدرسة", a: "école"}, {q: "عمل", a: "travail"}, {q: "مدينة", a: "ville"},
    {q: "شارع", a: "rue"}, {q: "سيارة", a: "voiture"}, {q: "حافلة", a: "bus"},
    {q: "قطار", a: "train"}, {q: "محطة", a: "gare"}, {q: "متجر", a: "magasin"},
    {q: "مستشفى", a: "hôpital"}, {q: "حمام", a: "toilettes"}, {q: "كتاب", a: "livre"},
    {q: "هاتف", a: "téléphone"}, {q: "مال", a: "argent"}, {q: "شاطئ", a: "plage"},

    // --- VERBES ET ADJECTIFS (20) ---
    {q: "ذهب", a: "aller"}, {q: "جاء", a: "venir"}, {q: "رأى", a: "voir"},
    {q: "سمع", a: "entendre"}, {q: "تكلم", a: "parler"}, {q: "فعل", a: "faire"},
    {q: "اشترى", a: "acheter"}, {q: "نام", a: "dormir"}, {q: "كتب", a: "écrire"},
    {q: "قرأ", a: "lire"}, {q: "كبير", a: "grand"}, {q: "صغير", a: "petit"},
    {q: "جيد", a: "bon"}, {q: "سيء", a: "mauvais"}, {q: "سريع", a: "rapide"},
    {q: "بطيء", a: "lent"}, {q: "كثير", a: "beaucoup"}, {q: "قليل", a: "peu"},
    {q: "جديد", a: "nouveau"}, {q: "قديم", a: "vieux"}
  ],
  russe: [
    // --- LES BASES (20) ---
    {q: "Привет", a: "salut"}, {q: "Спасибо", a: "merci"}, {q: "Да", a: "oui"}, 
    {q: "Нет", a: "non"}, {q: "Пожалуйста", a: "s'il vous plaît"}, {q: "Извините", a: "pardon"},
    {q: "Не за что", a: "de rien"}, {q: "До свидания", a: "au revoir"}, {q: "Я", a: "moi"},
    {q: "Ты", a: "toi"}, {q: "Мы", a: "nous"}, {q: "Это", a: "ceci"},
    {q: "То", a: "cela"}, {q: "Кто", a: "qui"}, {q: "Что", a: "quoi"},
    {q: "Где", a: "où"}, {q: "Когда", a: "quand"}, {q: "Почему", a: "pourquoi"},
    {q: "Как", a: "comment"}, {q: "Может быть", a: "peut-être"},

    // --- PERSONNES ET FAMILLE (15) ---
    {q: "Семья", a: "famille"}, {q: "Отец", a: "père"}, {q: "Мать", a: "mère"},
    {q: "Брат", a: "frère"}, {q: "Сестра", a: "sœur"}, {q: "Сын", a: "fils"},
    {q: "Дочь", a: "fille"}, {q: "Ребенок", a: "enfant"}, {q: "Друг", a: "ami"},
    {q: "Мужчина", a: "homme"}, {q: "Женщина", a: "femme"}, {q: "Мальчик", a: "garçon"},
    {q: "Девочка", a: "fille"}, {q: "Учитель", a: "professeur"}, {q: "Врач", a: "médecin"},

    // --- CHIFFRES ET TEMPS (15) ---
    {q: "Один", a: "un"}, {q: "Два", a: "deux"}, {q: "Три", a: "trois"},
    {q: "Десять", a: "dix"}, {q: "Сто", a: "cent"}, {q: "Сегодня", a: "aujourd'hui"},
    {q: "Вчера", a: "hier"}, {q: "Завтра", a: "demain"}, {q: "Сейчас", a: "maintenant"},
    {q: "Час", a: "heure"}, {q: "Минута", a: "minute"}, {q: "День", a: "jour"},
    {q: "Неделя", a: "semaine"}, {q: "Месяц", a: "mois"}, {q: "Год", a: "an"},

    // --- NOURRITURE ET MAISON (15) ---
    {q: "Вода", a: "eau"}, {q: "Хлеб", a: "pain"}, {q: "Кофе", a: "café"},
    {q: "Молоко", a: "lait"}, {q: "Есть", a: "manger"}, {q: "Пить", a: "boire"},
    {q: "Мясо", a: "viande"}, {q: "Овощи", a: "légumes"}, {q: "Фрукты", a: "fruits"},
    {q: "Вкусно", a: "délicieux"}, {q: "Голодный", a: "faim"}, {q: "Жажда", a: "soif"},
    {q: "Кухня", a: "cuisine"}, {q: "Дом", a: "maison"}, {q: "Стол", a: "table"},

    // --- LIEUX ET TRANSPORT (15) ---
    {q: "Школа", a: "école"}, {q: "Работа", a: "travail"}, {q: "Город", a: "ville"},
    {q: "Улица", a: "rue"}, {q: "Машина", a: "voiture"}, {q: "Автобус", a: "bus"},
    {q: "Поезд", a: "train"}, {q: "Вокзал", a: "gare"}, {q: "Магазин", a: "magasin"},
    {q: "Больница", a: "hôpital"}, {q: "Туалет", a: "toilettes"}, {q: "Книга", a: "livre"},
    {q: "Телефон", a: "téléphone"}, {q: "Деньги", a: "argent"}, {q: "Пляж", a: "plage"},

    // --- VERBES ET ADJECTIFS (20) ---
    {q: "Идти", a: "aller"}, {q: "Приходить", a: "venir"}, {q: "Видеть", a: "voir"},
    {q: "Слушать", a: "écouter"}, {q: "Говорить", a: "parler"}, {q: "Делать", a: "faire"},
    {q: "Купить", a: "acheter"}, {q: "Спать", a: "dormir"}, {q: "Писать", a: "écrire"},
    {q: "Читать", a: "lire"}, {q: "Большой", a: "grand"}, {q: "Маленький", a: "petit"},
    {q: "Хороший", a: "bon"}, {q: "Плохой", a: "mauvais"}, {q: "Быстрый", a: "rapide"},
    {q: "Медленный", a: "lent"}, {q: "Много", a: "beaucoup"}, {q: "Мало", a: "peu"},
    {q: "Новый", a: "nouveau"}, {q: "Старый", a: "vieux"}
  ],
  basque: [
    // --- LES BASES (20) ---
    {q: "Kaixo", a: "bonjour"}, {q: "Eskerrik asko", a: "merci"}, {q: "Bai", a: "oui"}, 
    {q: "Ez", a: "non"}, {q: "Mesedez", a: "s'il vous plaît"}, {q: "Barkatu", a: "pardon"},
    {q: "Ez horregatik", a: "de rien"}, {q: "Agur", a: "au revoir"}, {q: "Ni", a: "moi"},
    {q: "Zu", a: "toi"}, {q: "Gu", a: "nous"}, {q: "Hau", a: "ceci"},
    {q: "Hori", a: "cela"}, {q: "Nor", a: "qui"}, {q: "Zer", a: "quoi"},
    {q: "Non", a: "où"}, {q: "Noiz", a: "quand"}, {q: "Zergatik", a: "pourquoi"},
    {q: "Nola", a: "comment"}, {q: "Agian", a: "peut-être"},

    // --- PERSONNES ET FAMILLE (15) ---
    {q: "Familia", a: "famille"}, {q: "Aita", a: "père"}, {q: "Ama", a: "mère"},
    {q: "Anaia", a: "frère"}, {q: "Ahizpa", a: "sœur"}, {q: "Semea", a: "fils"},
    {q: "Alaba", a: "fille"}, {q: "Umea", a: "enfant"}, {q: "Laguna", a: "ami"},
    {q: "Gizona", a: "homme"}, {q: "Emakumea", a: "femme"}, {q: "Mutila", a: "garçon"},
    {q: "Neska", a: "fille"}, {q: "Irakaslea", a: "professeur"}, {q: "Medikua", a: "médecin"},

    // --- CHIFFRES ET TEMPS (15) ---
    {q: "Bat", a: "un"}, {q: "Bi", a: "deux"}, {q: "Hiru", a: "trois"},
    {q: "Hamar", a: "dix"}, {q: "Ehun", a: "cent"}, {q: "Gaur", a: "aujourd'hui"},
    {q: "Atzo", a: "hier"}, {q: "Bihar", a: "demain"}, {q: "Orain", a: "maintenant"},
    {q: "Ordua", a: "heure"}, {q: "Minutua", a: "minute"}, {q: "Eguna", a: "jour"},
    {q: "Astea", a: "semaine"}, {q: "Hilabetea", a: "mois"}, {q: "Urtea", a: "an"},

    // --- NOURRITURE ET MAISON (15) ---
    {q: "Ura", a: "eau"}, {q: "Ogia", a: "pain"}, {q: "Kafea", a: "café"},
    {q: "Esnea", a: "lait"}, {q: "Jan", a: "manger"}, {q: "Edan", a: "boire"},
    {q: "Haragia", a: "viande"}, {q: "Barazkiak", a: "légumes"}, {q: "Fruta", a: "fruit"},
    {q: "Goxoa", a: "délicieux"}, {q: "Gose", a: "faim"}, {q: "Egarri", a: "soif"},
    {q: "Sukaldea", a: "cuisine"}, {q: "Etxea", a: "maison"}, {q: "Mahaia", a: "table"},

    // --- LIEUX ET TRANSPORT (15) ---
    {q: "Eskola", a: "école"}, {q: "Lana", a: "travail"}, {q: "Hiria", a: "ville"},
    {q: "Kalea", a: "rue"}, {q: "Autoa", a: "voiture"}, {q: "Autobusa", a: "bus"},
    {q: "Trena", a: "train"}, {q: "Geltokia", a: "gare"}, {q: "Denda", a: "magasin"},
    {q: "Ospitalea", a: "hôpital"}, {q: " komunak", a: "toilettes"}, {q: "Liburua", a: "livre"},
    {q: "Telefonoa", a: "téléphone"}, {q: "Dirua", a: "argent"}, {q: "Hondartza", a: "plage"},

    // --- VERBES ET ADJECTIFS (20) ---
    {q: "Joan", a: "aller"}, {q: "Etorri", a: "venir"}, {q: "Ikusi", a: "voir"},
    {q: "Entzun", a: "écouter"}, {q: "Hitz egin", a: "parler"}, {q: "Egin", a: "faire"},
    {q: "Erosi", a: "acheter"}, {q: "Lo egin", a: "dormir"}, {q: "Idatzi", a: "écrire"},
    {q: "Irakurri", a: "lire"}, {q: "Handia", a: "grand"}, {q: "Txikia", a: "petit"},
    {q: "Ona", a: "bon"}, {q: "Txarra", a: "mauvais"}, {q: "Azkarra", a: "rapide"},
    {q: "Hidatzi", a: "lent"}, {q: "Asko", a: "beaucoup"}, {q: "Gutxi", a: "peu"},
    {q: "Berria", a: "nouveau"}, {q: "Zaharra", a: "vieux"}
  ],
  grec: [
    // --- LES BASES (20) ---
    {q: "Γεια σας", a: "bonjour"}, {q: "Ευχαριστώ", a: "merci"}, {q: "Ναι", a: "oui"}, 
    {q: "Όχι", a: "non"}, {q: "Παρακαλώ", a: "s'il vous plaît"}, {q: "Συγνώμη", a: "pardon"},
    {q: "Τίποτα", a: "de rien"}, {q: "Αντίο", a: "au revoir"}, {q: "Εγώ", a: "moi"},
    {q: "Εσύ", a: "toi"}, {q: "Εμείς", a: "nous"}, {q: "Αυτό", a: "ceci"},
    {q: "Εκείνο", a: "cela"}, {q: "Ποιος", a: "qui"}, {q: "Τι", a: "quoi"},
    {q: "Πού", a: "où"}, {q: "Πότε", a: "quand"}, {q: "Γιατί", a: "pourquoi"},
    {q: "Πώς", a: "comment"}, {q: "Ίσως", a: "peut-être"},

    // --- PERSONNES ET FAMILLE (15) ---
    {q: "Οικογένεια", a: "famille"}, {q: "Πατέρας", a: "père"}, {q: "Μητέρα", a: "mère"},
    {q: "Αδελφός", a: "frère"}, {q: "Αδελφή", a: "sœur"}, {q: "Γιος", a: "fils"},
    {q: "Κόρη", a: "fille"}, {q: "Παιδί", a: "enfant"}, {q: "Φίλος", a: "ami"},
    {q: "Άντρας", a: "homme"}, {q: "Γυναίκα", a: "femme"}, {q: "Αγόρι", a: "garçon"},
    {q: "Κορίτσι", a: "fille"}, {q: "Δάσκαλος", a: "professeur"}, {q: "Γιατρός", a: "médecin"},

    // --- CHIFFRES ET TEMPS (15) ---
    {q: "Ένα", a: "un"}, {q: "Δύο", a: "deux"}, {q: "Τρία", a: "trois"},
    {q: "Δέκα", a: "dix"}, {q: "Εκατό", a: "cent"}, {q: "Σήμερα", a: "aujourd'hui"},
    {q: "Χθες", a: "hier"}, {q: "Αύριο", a: "αύριο"}, {q: "Τώρα", a: "maintenant"},
    {q: "Ώρα", a: "heure"}, {q: "Λεπτό", a: "minute"}, {q: "Ημέρα", a: "jour"},
    {q: "Εβδομάδα", a: "semaine"}, {q: "Μήνας", a: "mois"}, {q: "Έτος", a: "an"},

    // --- NOURRITURE ET MAISON (15) ---
    {q: "Νερό", a: "eau"}, {q: "Ψωμί", a: "pain"}, {q: "Καφές", a: "café"},
    {q: "Γάλα", a: "lait"}, {q: "Τρώω", a: "manger"}, {q: "Πίνω", a: "boire"},
    {q: "Κρέας", a: "viande"}, {q: "Λαχανικά", a: "légumes"}, {q: "Φρούτα", a: "fruits"},
    {q: "Νόστιμο", a: "délicieux"}, {q: "Πεινάω", a: "faim"}, {q: "Διψάω", a: "soif"},
    {q: "Κουζίνα", a: "cuisine"}, {q: "Σπίτι", a: "maison"}, {q: "Τραπέζι", a: "table"},

    // --- LIEUX ET TRANSPORT (15) ---
    {q: "Σχολείο", a: "école"}, {q: "Εργασία", a: "travail"}, {q: "Πόλη", a: "ville"},
    {q: "Δρόμος", a: "rue"}, {q: "Αυτοκίνητο", a: "voiture"}, {q: "Λεωφορείο", a: "bus"},
    {q: "Τρένο", a: "train"}, {q: "Σταθμός", a: "gare"}, {q: "Κατάστημα", a: "magasin"},
    {q: "Νοσοκομείο", a: "νοσοκομείο"}, {q: "Τουαλέτα", a: "toilettes"}, {q: "Βιβλίο", a: "livre"},
    {q: "Τηλέφωνο", a: "téléphone"}, {q: "Χρήματα", a: "argent"}, {q: "Παραλία", a: "plage"},

    // --- VERBES ET ADJECTIFS (20) ---
    {q: "Πηγαίνω", a: "aller"}, {q: "Έρχομαι", a: "venir"}, {q: "Βλέπω", a: "voir"},
    {q: "Ακούω", a: "entendre"}, {q: "Μιλάω", a: "parler"}, {q: "Κάνω", a: "faire"},
    {q: "Αγοράζω", a: "acheter"}, {q: "Κοιμάμαι", a: "dormir"}, {q: "Γράφω", a: "écrire"},
    {q: "Διαβάζω", a: "lire"}, {q: "Μεγάλος", a: "grand"}, {q: "Μικρός", a: "petit"},
    {q: "Καλός", a: "bon"}, {q: "Κακός", a: "mauvais"}, {q: "Γρήγορος", a: "rapide"},
    {q: "Αργός", a: "lent"}, {q: "Πολύ", a: "beaucoup"}, {q: "Λίγο", a: "peu"},
    {q: "Νέος", a: "nouveau"}, {q: "Παλαιός", a: "vieux"}
  ],
  hindi: [
    // --- LES BASES (20) ---
    {q: "नमस्ते", a: "bonjour"}, {q: "धन्यवाद", a: "merci"}, {q: "हाँ", a: "oui"}, 
    {q: "नहीं", a: "non"}, {q: "कृपया", a: "s'il vous plaît"}, {q: "क्षमा करें", a: "pardon"},
    {q: "कोई बात नहीं", a: "de rien"}, {q: "अलविदा", a: "au revoir"}, {q: "मैं", a: "moi"},
    {q: "तुम", a: "toi"}, {q: "हम", a: "nous"}, {q: "यह", a: "ceci"},
    {q: "वह", a: "cela"}, {q: "कौन", a: "qui"}, {q: "क्या", a: "quoi"},
    {q: "कहाँ", a: "où"}, {q: "कब", a: "quand"}, {q: "क्यों", a: "pourquoi"},
    {q: "कैसे", a: "comment"}, {q: "शायद", a: "peut-être"},

    // --- PERSONNES ET FAMILLE (15) ---
    {q: "परिवार", a: "famille"}, {q: "पिता", a: "père"}, {q: "माँ", a: "mère"},
    {q: "भाई", a: "frère"}, {q: "बहन", a: "बहन"}, {q: "बेटा", a: "fils"},
    {q: "बेटी", a: "fille"}, {q: "बच्चा", a: "enfant"}, {q: "दोस्त", a: "ami"},
    {q: "आदमी", a: "homme"}, {q: "महिला", a: "femme"}, {q: "लड़का", a: "garçon"},
    {q: "लड़की", a: "fille"}, {q: "शिक्षक", a: "professeur"}, {q: "डॉक्टर", a: "médecin"},

    // --- CHIFFRES ET TEMPS (15) ---
    {q: "एक", a: "un"}, {q: "दो", a: "deux"}, {q: "तीन", a: "trois"},
    {q: "दस", a: "dix"}, {q: "सौ", a: "cent"}, {q: "आज", a: "aujourd'hui"},
    {q: "कल", a: "hier"}, {q: "कल (आने वाला)", a: "demain"}, {q: "अब", a: "maintenant"},
    {q: "घंटा", a: "heure"}, {q: "मिनट", a: "minute"}, {q: "दिन", a: "jour"},
    {q: "हफ्ता", a: "semaine"}, {q: "महीना", a: "mois"}, {q: "साल", a: "an"},

    // --- NOURRITURE ET MAISON (15) ---
    {q: "पानी", a: "eau"}, {q: "रोटी", a: "pain"}, {q: "कॉफी", a: "café"},
    {q: "दूध", a: "lait"}, {q: "खाना", a: "manger"}, {q: "पीना", a: "boire"},
    {q: "मांस", a: "viande"}, {q: "सब्जियां", a: "légumes"}, {q: "फल", a: "fruits"},
    {q: "स्वादिष्ट", a: "délicieux"}, {q: "भूख", a: "faim"}, {q: "प्यास", a: "soif"},
    {q: "रसोई", a: "cuisine"}, {q: "घर", a: "maison"}, {q: "मेज", a: "table"},

    // --- LIEUX ET TRANSPORT (15) ---
    {q: "स्कूल", a: "école"}, {q: "काम", a: "travail"}, {q: "शहर", a: "ville"},
    {q: "सड़क", a: "rue"}, {q: "गाड़ी", a: "voiture"}, {q: "बस", a: "bus"},
    {q: "ट्रेन", a: "train"}, {q: "स्टेशन", a: "gare"}, {q: "दुकान", a: "magasin"},
    {q: "अस्पताल", a: "hôpital"}, {q: "शौचालय", a: "toilettes"}, {q: "किताब", a: "livre"},
    {q: "फ़ोन", a: "téléphone"}, {q: "पैसा", a: "argent"}, {q: "समुद्र तट", a: "plage"},

    // --- VERBES ET ADJECTIFS (20) ---
    {q: "जाना", a: "aller"}, {q: "आना", a: "venir"}, {q: "देखना", a: "voir"},
    {q: "सुनना", a: "entendre"}, {q: "बोलना", a: "parler"}, {q: "करना", a: "faire"},
    {q: "खरीदना", a: "acheter"}, {q: "सोना", a: "dormir"}, {q: "लिखना", a: "écrire"},
    {q: "पढ़ना", a: "lire"}, {q: "बड़ा", a: "grand"}, {q: "छोटा", a: "petit"},
    {q: "अच्छा", a: "bon"}, {q: "बुरा", a: "mauvais"}, {q: "तेज़", a: "rapide"},
    {q: "धीरे", a: "lent"}, {q: "बहुत", a: "beaucoup"}, {q: "कम", a: "peu"},
    {q: "नया", a: "nouveau"}, {q: "पुराना", a: "vieux"}
  ],
  egyptien: [
    { q: "𓇳", a: "soleil" },      // Rê
    { q: "𓇹", a: "lune" },        // Iah
    { q: "𓈖", a: "eau" },         // Noun
    { q: "𓉐", a: "maison" },      // Per
    { q: "𓀀", a: "homme" },       // Zes
    { q: "𓁐", a: "femme" },       // Set
    { q: "𓋹", a: "vie" },         // Ankh
    { q: "𓊽", a: "stabilité" },   // Djed
    { q: "𓌃", a: "parole" },      // Medou
    { q: "𓂋", a: "bouche" }        // Er
  ],
  morse_lettres: [
    { q: "A", a: ".-", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "B", a: "-...", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "C", a: "-.-.", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "D", a: "-..", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "E", a: ".", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "F", a: "..-.", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "G", a: "--.", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "H", a: "....", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "I", a: "..", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "J", a: ".---", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "K", a: "-.-", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "L", a: ".-..", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "M", a: "--", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "N", a: "-.", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "O", a: "---", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "P", a: ".--.", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "Q", a: "--.-", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "R", a: ".-.", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "S", a: "...", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "T", a: "-", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "U", a: "..-", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "V", a: "...-", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "W", a: ".--", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "X", a: "-..-", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "Y", a: "-.--", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "Z", a: "--..", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "0", a: "-----", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "1", a: ".----", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "2", a: "..---", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "3", a: "...--", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "4", a: "....-", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "5", a: ".....", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "6", a: "-....", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "7", a: "--...", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "8", a: "---..", score: 0, fails: 0, scoreOral: 0, failsOral: 0 },
    { q: "9", a: "----.", score: 0, fails: 0, scoreOral: 0, failsOral: 0 }
  ],
  morse_mots: [
    { q: "HELLO", a: ".... . .-.. .-.. ---" },
    { q: "SOS", a: "... --- ..." },
    { q: "TEST", a: "- . ... -" },
    { q: "OK", a: "--- -.-" },
    { q: "WEB", a: ".-- . -..." },
    { q: "CODE", a: "-.-. --- -.. ." },
    { q: "RADIO", a: ".-. .- -.. .. ---" },
    { q: "SIGNAL", a: "... .. --. -. .- .-.." }
  ],
};

const MORSE_MAP = {'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.'};

