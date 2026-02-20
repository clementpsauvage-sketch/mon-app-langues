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
    {q: "Milk", a: "lait"}, {q: "Eat", a: "manger"},
    {q: "Fruit", a: "fruit"},
    {q: "Delicious", a: "délicieux"}, {q: "Hungry", a: "faim"}, {q: "Thirsty", a: "soif"},
    {q: "Kitchen", a: "cuisine"}, {q: "House", a: "maison"},

    // --- LIEUX ET TRANSPORT (15) ---
    {q: "Work", a: "travail"}, {q: "City", a: "ville"},
    {q: "Street", a: "rue"}, {q: "Car", a: "voiture"}, {q: "Bus", a: "bus"},
    {q: "Train", a: "train"}, {q: "Station", a: "gare"},
    {q: "Bathroom", a: "toilettes"}, {q: "Book", a: "livre"},
    {q: "Phone", a: "téléphone"}, {q: "Money", a: "argent"}, {q: "Beach", a: "plage"},

    // --- VERBES ET ADJECTIFS (20) ---
    {q: "Go", a: "aller"}, {q: "Come", a: "venir"}, {q: "See", a: "voir"},
    {q: "Listen", a: "écouter"}, {q: "Speak", a: "parler"}, {q: "Do", a: "faire"},
    {q: "Buy", a: "acheter"}, {q: "Sleep", a: "dormir"}, {q: "Write", a: "écrire"},
    {q: "Read", a: "lire"}, {q: "Big", a: "grand"}, {q: "Small", a: "petit"},
    {q: "Good", a: "bon"}, {q: "Bad", a: "mauvais"}, {q: "Fast", a: "rapide"},
    {q: "Slow", a: "lent"}, {q: "Much", a: "beaucoup"}, {q: "Little", a: "peu"},
    {q: "New", a: "nouveau"},

    // --- NATURE & MÉTÉO (25) ---
    {q: "Sun", a: "soleil"}, {q: "Moon", a: "lune"}, {q: "Star", a: "étoile"},
    {q: "Sky", a: "ciel"}, {q: "Cloud", a: "nuage"}, {q: "Rain", a: "pluie"},
    {q: "Snow", a: "neige"}, {q: "Wind", a: "vent"}, {q: "Storm", a: "orage"},
    {q: "Thunder", a: "tonnerre"}, {q: "Lightning", a: "éclair"}, {q: "Fog", a: ["brouillard", "brume"]},
    {q: "Tree", a: "arbre"}, {q: "Flower", a: "fleur"}, {q: "Leaf", a: "feuille"},
    {q: "Grass", a: "herbe"}, {q: "Sea", a: "mer"}, {q: "Ocean", a: "océan"},
    {q: "Lake", a: "lac"}, {q: "River", a: "rivière"}, {q: "Mountain", a: "montagne"},
    {q: "Valley", a: "vallée"}, {q: "Island", a: "île"}, {q: "Sand", a: "sable"},
    {q: "Forest", a: ["forêt", "bois"]},

    // --- CORPS HUMAIN (25) ---
    {q: "Body", a: "corps"}, {q: "Head", a: "tête"}, {q: "Face", a: "visage"},
    {q: "Eye", a: "œil"}, {q: "Eyes", a: "yeux"}, {q: "Ear", a: "oreille"},
    {q: "Nose", a: "nez"}, {q: "Mouth", a: "bouche"}, {q: "Tooth", a: "dent"},
    {q: "Tongue", a: "langue"}, {q: "Hair", a: "cheveux"}, {q: "Neck", a: "cou"},
    {q: "Shoulder", a: "épaule"}, {q: "Arm", a: "bras"}, {q: "Hand", a: "main"},
    {q: "Finger", a: "doigt"}, {q: "Chest", a: "poitrine"}, {q: "Back", a: "dos"},
    {q: "Stomach", a: ["ventre", "estomac"]}, {q: "Leg", a: "jambe"},
    {q: "Knee", a: "genou"}, {q: "Foot", a: "pied"}, {q: "Blood", a: "sang"},
    {q: "Heart", a: "cœur"}, {q: "Brain", a: "cerveau"},

    // --- ÉMOTIONS & ADJECTIFS (40) ---
    {q: "Happy", a: ["heureux", "content"]}, {q: "Sad", a: "triste"}, {q: "Angry", a: ["en colère", "fâché"]},
    {q: "Tired", a: "fatigué"}, {q: "Scared", a: ["effrayé", "peur"]}, {q: "Surprised", a: "surpris"},
    {q: "Bored", a: "ennuyé"}, {q: "Sick", a: "malade"}, {q: "Strong", a: "fort"},
    {q: "Weak", a: "faible"}, {q: "Rich", a: "riche"}, {q: "Poor", a: "pauvre"},
    {q: "Easy", a: "facile"}, {q: "Hard", a: ["difficile", "dur"]},
    {q: "Late", a: "tard"}, {q: "Beautiful", a: ["beau", "belle"]}, {q: "Ugly", a: "laid"},
    {q: "Young", a: "jeune"}, {q: "Old", a: "vieux"}, {q: "Hot", a: "chaud"},
    {q: "Cold", a: "froid"}, {q: "Dirty", a: "sale"},
    {q: "Full", a: "plein"}, {q: "Empty", a: "vide"}, {q: "Tall", a: "grand"},
    {q: "Short", a: "petit"}, {q: "Long", a: "long"}, {q: "Deep", a: "profond"},
    {q: "Quiet", a: ["calme", "silencieux"]}, {q: "Loud", a: "bruyant"}, {q: "Light", a: ["léger", "lumière"]},
    {q: "Heavy", a: "lourd"}, {q: "Soft", a: ["doux", "mou"]},
    {q: "Brave", a: "courageux"}, {q: "Funny", a: ["drôle", "amusant"]}, {q: "Serious", a: "sérieux"},
    {q: "Kind", a: ["gentil", "aimable"]},

    // --- HABITS (20) ---
    {q: "Clothes", a: "vêtements"}, {q: "Shirt", a: "chemise"}, {q: "T-shirt", a: "t-shirt"},
    {q: "Pants", a: "pantalon"}, {q: "Dress", a: "robe"}, {q: "Skirt", a: "jupe"},
    {q: "Coat", a: "manteau"}, {q: "Jacket", a: "veste"}, {q: "Hat", a: "chapeau"},
    {q: "Shoes", a: "chaussures"}, {q: "Socks", a: "chaussettes"}, {q: "Gloves", a: "gants"},
    {q: "Scarf", a: "écharpe"}, {q: "Belt", a: "ceinture"},
    {q: "Glasses", a: "lunettes"}, {q: "Bag", a: "sac"}, {q: "Wallet", a: "portefeuille"},
    {q: "Ring", a: "bague"}, {q: "Umbrella", a: "parapluie"},

    // --- MAISON & OBJETS (40) ---
    {q: "Room", a: ["chambre", "pièce"]}, {q: "Wall", a: "mur"}, {q: "Floor", a: "sol"},
    {q: "Ceiling", a: "plafond"}, {q: "Door", a: "porte"}, {q: "Window", a: "fenêtre"},
    {q: "Key", a: "clé"}, {q: "Bed", a: "lit"}, {q: "Pillow", a: "oreiller"},
    {q: "Blanket", a: "couverture"}, {q: "Closet", a: ["armoire", "placard"]}, {q: "Mirror", a: "miroir"},
    {q: "Soap", a: "savon"}, {q: "Towel", a: "serviette"}, {q: "Toothbrush", a: "brosse à dents"},
    {q: "Shampoo", a: "shampooing"}, {q: "Plate", a: "assiette"}, {q: "Cup", a: "tasse"},
    {q: "Glass", a: "verre"}, {q: "Fork", a: "fourchette"}, {q: "Knife", a: "couteau"},
    {q: "Spoon", a: "cuillère"}, {q: "Fridge", a: "frigo"}, {q: "Oven", a: "four"},
    {q: "Stove", a: "cuisinière"}, {q: "Sink", a: "évier"}, {q: "Computer", a: "ordinateur"},
    {q: "Laptop", a: "ordinateur portable"}, {q: "Keyboard", a: "clavier"},
    {q: "Screen", a: "écran"}, {q: "Printer", a: "imprimante"}, {q: "Table", a: "table"},
    {q: "Chair", a: "chaise"}, {q: "Desk", a: "bureau"}, {q: "Shelf", a: "étagère"},
    {q: "Lamp", a: "lampe"}, {q: "Candle", a: "bougie"}, {q: "Fan", a: "ventilateur"},
    {q: "Box", a: ["boîte", "caisse"]},

    // --- ANIMAUX (30) ---
    {q: "Animal", a: "animal"}, {q: "Dog", a: "chien"}, {q: "Cat", a: "chat"},
    {q: "Bird", a: "oiseau"}, {q: "Horse", a: "cheval"},
    {q: "Cow", a: "vache"}, {q: "Pig", a: "cochon"}, {q: "Sheep", a: "mouton"},
    {q: "Chicken", a: ["poulet", "poule"]}, {q: "Lion", a: "lion"}, {q: "Tiger", a: "tigre"},
    {q: "Elephant", a: "éléphant"}, {q: "Bear", a: "ours"}, {q: "Monkey", a: "singe"},
    {q: "Snake", a: "serpent"}, {q: "Spider", a: "araignée"}, {q: "Mouse", a: "souris"},
    {q: "Rabbit", a: "lapin"}, {q: "Duck", a: "canard"}, {q: "Bee", a: "abeille"},
    {q: "Butterfly", a: "papillon"}, {q: "Ant", a: "fourmi"}, {q: "Wolf", a: "loup"},
    {q: "Fox", a: "renard"}, {q: "Frog", a: "grenouille"}, {q: "Whale", a: "baleine"},
    {q: "Shark", a: "requin"}, {q: "Dolphin", a: "dauphin"}, {q: "Turtle", a: "tortue"},

    // --- VILLE & TRANSPORT (30) ---
    {q: "Town", a: "petite ville"},
    {q: "Road", a: "route"}, {q: "Park", a: "parc"}, {q: "Bridge", a: "pont"},
    {q: "Building", a: "immeuble"}, {q: "Store", a: "magasin"}, {q: "Market", a: "marché"},
    {q: "Restaurant", a: "restaurant"}, {q: "Hotel", a: "hôtel"}, {q: "Hospital", a: "hôpital"},
    {q: "Pharmacy", a: "pharmacie"}, {q: "Bank", a: "banque"}, {q: "Museum", a: "musée"},
    {q: "Cinema", a: "cinéma"}, {q: "Library", a: "bibliothèque"}, {q: "School", a: "école"},
    {q: "Airport", a: "aéroport"}, {q: "Bus stop", a: "arrêt de bus"},
    {q: "Subway", a: "métro"}, {q: "Bicycle", a: ["vélo", "bicyclette"]},
    {q: "Motorcycle", a: "moto"}, {q: "Boat", a: "bateau"}, {q: "Plane", a: "avion"},
    {q: "Ticket", a: "billet"}, {q: "Map", a: "carte"}, {q: "Traffic", a: "circulation"},

    // --- ALIMENTS (30) ---
    {q: "Food", a: "nourriture"}, {q: "Drink", a: ["boisson","boire"]}, {q: "Apple", a: "pomme"},
    {q: "Banana", a: "banane"}, {q: "Orange", a: "orange"}, {q: "Strawberry", a: "fraise"},
    {q: "Vegetables", a: "légumes"}, {q: "Potato", a: "pomme de terre"}, {q: "Tomato", a: "tomate"},
    {q: "Onion", a: "oignon"}, {q: "Garlic", a: "ail"}, {q: "Carrot", a: "carotte"},
    {q: "Meat", a: "viande"}, {q: "Beef", a: "bœuf"},
    {q: "Fish", a: "poisson"}, {q: "Egg", a: "œuf"}, {q: "Cheese", a: "fromage"},
    {q: "Rice", a: "riz"}, {q: "Pasta", a: "pâtes"},
    {q: "Soup", a: "soupe"}, {q: "Salt", a: "sel"}, {q: "Sugar", a: "sucre"},
    {q: "Pepper", a: "poivre"}, {q: "Oil", a: "huile"}, {q: "Butter", a: "beurre"},
    {q: "Ice cream", a: "glace"}, {q: "Chocolate", a: "chocolat"}, {q: "Cake", a: "gâteau"},

    // --- VERBES D'ACTION (50) ---
    {q: "Run", a: "courir"}, {q: "Walk", a: "marcher"}, {q: "Jump", a: "sauter"},
    {q: "Sit", a: "s'asseoir"}, {q: "Stand", a: "se tenir debout"}, {q: "Lie down", a: "s'allonger"},
    {q: "Wait", a: "attendre"}, {q: "Search", a: ["chercher", "rechercher"]}, {q: "Find", a: "trouver"},
    {q: "Give", a: "donner"}, {q: "Take", a: "prendre"}, {q: "Hold", a: "tenir"},
    {q: "Push", a: "pousser"}, {q: "Pull", a: "tirer"}, {q: "Open", a: "ouvrir"},
    {q: "Close", a: "fermer"}, {q: "Break", a: "casser"}, {q: "Fix", a: "réparer"},
    {q: "Wash", a: "laver"}, {q: "Clean", a: "nettoyer"}, {q: "Cook", a: "cuisiner"},
    {q: "Cut", a: "couper"}, {q: "Draw", a: "dessiner"}, {q: "Paint", a: "peindre"},
    {q: "Sing", a: "chanter"}, {q: "Dance", a: "danser"}, {q: "Play", a: "jouer"},
    {q: "Win", a: "gagner"}, {q: "Lose", a: "perdre"}, {q: "Learn", a: "apprendre"},
    {q: "Think", a: "penser"}, {q: "Know", a: "savoir"}, {q: "Believe", a: "croire"},
    {q: "Understand", a: "comprendre"}, {q: "Remember", a: "se souvenir"}, {q: "Forget", a: "oublier"},
    {q: "Choose", a: "choisir"}, {q: "Help", a: "aider"},
    {q: "Study", a: "étudier"}, {q: "Travel", a: "voyager"}, {q: "Drive", a: "conduire"},
    {q: "Fly", a: "voler"}, {q: "Swim", a: "nager"}, {q: "Fight", a: "se battre"},
    {q: "Laugh", a: "rire"}, {q: "Cry", a: "pleurer"}, {q: "Smile", a: "sourire"},
    {q: "Watch", a: "regarder"},

    // --- CHIFFRES & TEMPS (40) ---
    {q: "Four", a: "quatre"}, {q: "Five", a: "cinq"}, {q: "Six", a: "six"},
    {q: "Seven", a: "sept"}, {q: "Eight", a: "huit"}, {q: "Nine", a: "neuf"},
    {q: "Eleven", a: "onze"}, {q: "Twelve", a: "douze"}, {q: "Twenty", a: "vingt"},
    {q: "Thirty", a: "trente"}, {q: "Forty", a: "quarante"}, {q: "Fifty", a: "cinquante"},
    {q: "Zero", a: "zéro"}, {q: "First", a: "premier"}, {q: "Second", a: "deuxième"},
    {q: "Last", a: "dernier"}, {q: "Monday", a: "lundi"}, {q: "Tuesday", a: "mardi"},
    {q: "Wednesday", a: "mercredi"}, {q: "Thursday", a: "jeudi"}, {q: "Friday", a: "vendredi"},
    {q: "Saturday", a: "samedi"}, {q: "Sunday", a: "dimanche"}, {q: "Spring", a: "printemps"},
    {q: "Summer", a: "été"}, {q: "Autumn", a: "automne"}, {q: "Winter", a: "hiver"},
    {q: "Morning", a: "matin"}, {q: "Afternoon", a: "après-midi"}, {q: "Evening", a: "soir"},
    {q: "Night", a: "nuit"}, {q: "Noon", a: "midi"}, {q: "Midnight", a: "minuit"},
    {q: "Early", a: "tôt"}, {q: "Soon", a: "bientôt"}, {q: "Always", a: "toujours"},
    {q: "Never", a: "jamais"}, {q: "Sometimes", a: "parfois"}, {q: "Often", a: "souvent"},
    {q: "Again", a: "encore"},

    // --- DIVERS & PRONOMS (50) ---
    {q: "Everything", a: "tout"}, {q: "Nothing", a: "rien"}, {q: "Something", a: "quelque chose"},
    {q: "Someone", a: "quelqu'un"}, {q: "Everyone", a: "tout le monde"}, {q: "Nobody", a: "personne"},
    {q: "Everywhere", a: "partout"}, {q: "Nowhere", a: "nulle part"}, {q: "Here", a: "ici"},
    {q: "There", a: "là-bas"}, {q: "Maybe", a: ["peut-être", "probablement"]}, {q: "Of course", a: "bien sûr"},
    {q: "Really", a: ["vraiment", "réellement"]}, {q: "Very", a: "très"}, {q: "Too much", a: "trop"},
    {q: "Enough", a: "assez"}, {q: "Almost", a: "presque"}, {q: "Only", a: "seulement"},
    {q: "Together", a: "ensemble"}, {q: "Alone", a: "seul"}, {q: "With", a: "avec"},
    {q: "Without", a: "sans"}, {q: "About", a: ["environ", "au sujet de"]}, {q: "Between", a: "entre"},
    {q: "Under", a: "sous"}, {q: "Over", a: "sur"}, {q: "Inside", a: "à l'intérieur"},
    {q: "Outside", a: "à l'extérieur"}, {q: "Before", a: "avant"}, {q: "After", a: "après"},
    {q: "During", a: "pendant"}, {q: "Because", a: "parce que"}, {q: "If", a: "si"},
    {q: "But", a: "mais"}, {q: "And", a: "et"}, {q: "Or", a: "ou"},
    {q: "Also", a: "aussi"}, {q: "Then", a: "ensuite"}, {q: "More", a: "plus"},
    {q: "Less", a: "moins"}, {q: "Most", a: "le plus"}, {q: "Same", a: "même"},
    {q: "Different", a: "différent"}, {q: "Both", a: "les deux"}, {q: "Other", a: "autre"},
    {q: "Some", a: "quelques"}, {q: "Many", a: "beaucoup"}, {q: "Each", a: "chaque"},
    {q: "Such", a: "tel"}, {q: "Already", a: "déjà"}
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
    {q: "Rico", a: ["délicieux","riche"]}, {q: "Hambre", a: "faim"}, {q: "Sed", a: "soif"},
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
    {q: "Dormir", a: "dormir"}, {q: "Escribir", a: "écrire"},
    {q: "Leer", a: "lire"}, {q: "Grande", a: "grand"}, {q: "Pequeño", a: "petit"},
    {q: "Bueno", a: "bon"}, {q: "Malo", a: "mauvais"}, {q: "Rápido", a: "rapide"},
    {q: "Lento", a: "lent"}, {q: "Mucho", a: "beaucoup"}, {q: "Poco", a: "peu"},
    {q: "Nuevo", a: "nouveau"}, {q: "Viejo", a: "vieux"},

    // --- Météo ---
    {q: "Sol", a: "soleil"}, {q: "Luna", a: "lune"}, {q: "Estrella", a: "étoile"},
    {q: "Cielo", a: "ciel"}, {q: "Río", a: "rivière"},
    {q: "Montaña", a: "montagne"}, {q: "Árbol", a: "arbre"}, {q: "Flor", a: "fleur"},
    {q: "Tiempo", a: "temps"}, {q: "Calor", a: "chaleur"}, {q: "Frío", a: "froid"},
    {q: "Lluvia", a: "pluie"}, {q: "Nieve", a: "neige"}, {q: "Viento", a: "vent"},
    {q: "Nube", a: "nuage"}, {q: "Tierra", a: "terre"}, {q: "Fuego", a: "feu"},
    {q: "Aire", a: "air"}, {q: "Bosque", a: "forêt"},

    // --- CORPS HUMAIN ---
    {q: "Cuerpo", a: "corps"}, {q: "Cabeza", a: "tête"}, {q: "Cara", a: "visage"},
    {q: "Ojo", a: "œil"}, {q: "Oreja", a: "oreille"}, {q: "Nariz", a: "nez"},
    {q: "Boca", a: "bouche"}, {q: "Diente", a: "dent"}, {q: "Pelo", a: "cheveux"},
    {q: "Cuello", a: "cou"}, {q: "Hombro", a: "épaule"}, {q: "Brazo", a: "bras"},
    {q: "Mano", a: "main"}, {q: "Dedo", a: "doigt"}, {q: "Pecho", a: "poitrine"},
    {q: "Espalda", a: "dos"}, {q: "Pierna", a: "jambe"}, {q: "Rodilla", a: "genou"},
    {q: "Pie", a: "pied"}, {q: "Corazón", a: "cœur"},

    // --- VETEMENTS ---
    {q: "Ropa", a: "vêtements"}, {q: "Camisa", a: "chemise"}, {q: "Camiseta", a: "t-shirt"},
    {q: "Pantalones", a: "pantalon"}, {q: "Vestido", a: "robe"}, {q: "Falda", a: "jupe"},
    {q: "Chaqueta", a: "veste"}, {q: "Abrigo", a: "manteau"}, {q: "Zapatos", a: "chaussures"},
    {q: "Calcetines", a: "chaussettes"}, {q: "Sombrero", a: "chapeau"}, {q: "Gafas", a: "lunettes"},
    {q: "Bolsillo", a: "poche"}, {q: "Bolso", a: "sac"}, {q: "Cinturón", a: "ceinture"},
    {q: "Reloj", a: "montre"}, {q: "Guantes", a: "gants"}, {q: "Paraguas", a: "parapluie"},
    {q: "Botas", a: "bottes"}, {q: "Pijama", a: "pyjama"},

    // --- LA MAISON (DETAILS) ---
    {q: "Puerta", a: "porte"}, {q: "Ventana", a: "fenêtre"}, {q: "Pared", a: "mur"},
    {q: "Suelo", a: "sol"}, {q: "Techo", a: "plafond"}, {q: "Escalera", a: "escalier"},
    {q: "Habitación", a: "chambre"}, {q: "Cama", a: "lit"}, {q: "Almohada", a: "oreiller"},
    {q: "Mesa", a: "table"}, {q: "Espejo", a: "miroir"}, {q: "Lámpara", a: "lampe"},
    {q: "Nevera", a: "frigo"}, {q: "Horno", a: "four"}, {q: "Plato", a: "assiette"},
    {q: "Vaso", a: "verre"}, {q: "Cuchara", a: "cuillère"}, {q: "Cuchillo", a: "couteau"},
    {q: "Tenedor", a: "fourchette"}, {q: "Servilleta", a: "serviette"}, {q: "Llave", a: "clé"},
    {q: "Jabón", a: "savon"}, {q: "Toalla", a: "serviette de bain"}, {q: "Cepillo", a: "brosse"},
    {q: "Papel", a: "papier"},

    // --- EMOTIONS ---
    {q: "Feliz", a: "heureux"}, {q: "Triste", a: "triste"}, {q: "Cansado", a: "fatigué"},
    {q: "Enfadado", a: "en colère"}, {q: "Enfermo", a: "malade"}, {q: "Asustado", a: "effrayé"},
    {q: "Sorprendido", a: "surpris"}, {q: "Aburrido", a: "ennuyé"}, {q: "Preocupado", a: "inquiet"},
    {q: "Amor", a: "amour"}, {q: "Odio", a: "haine"}, {q: "Risa", a: "rire"},
    {q: "Llanto", a: "pleur"}, {q: "Paz", a: "paix"}, {q: "Fuerza", a: "force"},
    {q: "Miedo", a: "peur"}, {q: "Sueño", a: "rêve"}, {q: "Esperanza", a: "espoir"},
    {q: "Cariño", a: "affection"}, {q: "Ganas", a: "envie"},

    // --- ANIMAUX ---
    {q: "Animal", a: "animal"}, {q: "Perro", a: "chien"}, {q: "Gato", a: "chat"},
    {q: "Caballo", a: "cheval"}, {q: "Vaca", a: "vache"}, {q: "Cerdo", a: "cochon"},
    {q: "Oveja", a: "mouton"}, {q: "Pollo", a: "poulet"}, {q: "Pájaro", a: "oiseau"},
    {q: "Pez", a: "poisson"}, {q: "León", a: "lion"}, {q: "Tigre", a: "tigre"},
    {q: "Elefante", a: "éléphant"}, {q: "Mono", a: "singe"}, {q: "Oso", a: "ours"},
    {q: "Ratón", a: "souris"}, {q: "Serpiente", a: "serpent"}, {q: "Rana", a: "grenouille"},
    {q: "Insecto", a: "insecte"}, {q: "Abeja", a: "abeille"}, {q: "Mariposa", a: "papillon"},
    {q: "Araña", a: "araignée"}, {q: "Lobo", a: "loup"}, {q: "Zorro", a: "renard"},
    {q: "Conejo", a: "lapin"},
    
    // --- COULEURS ET FORMES ---
    {q: "Color", a: "couleur"}, {q: "Rojo", a: "rouge"}, {q: "Azul", a: "bleu"},
    {q: "Verde", a: "vert"}, {q: "Amarillo", a: "jaune"}, {q: "Blanco", a: "blanc"},
    {q: "Negro", a: "noir"}, {q: "Gris", a: "gris"}, {q: "Naranja", a: "orange"},
    {q: "Rosa", a: "rose"}, {q: "Morado", a: "violet"}, {q: "Marrón", a: "marron"},
    {q: "Claro", a: "clair"}, {q: "Oscuro", a: "foncé"}, {q: "Círculo", a: "cercle"},
    {q: "Cuadrado", a: "carré"}, {q: "Triángulo", a: "triangle"}, {q: "Línea", a: "ligne"},
    {q: "Punto", a: "point"}, {q: "Forma", a: "forme"},

    // --- METIERS ET TRAVAILS
    {q: "Profesor", a: "professeur"}, {q: "Estudiante", a: "étudiant"}, {q: "Ingeniero", a: "ingénieur"},
    {q: "Abogado", a: "avocat"}, {q: "Policía", a: "policier"}, {q: "Bombero", a: "pompier"},
    {q: "Cocinero", a: "cuisinier"}, {q: "Camarero", a: "serveur"}, {q: "Vendedor", a: "vendeur"},
    {q: "Artista", a: "artiste"}, {q: "Músico", a: "musicien"}, {q: "Escritor", a: "écrivain"},
    {q: "Actor", a: "acteur"}, {q: "Secretario", a: "secrétaire"}, {q: "Jefe", a: "patron"},
    {q: "Empresa", a: "entreprise"}, {q: "Oficina", a: "bureau"}, {q: "Reunión", a: "réunion"},
    {q: "Sueldo", a: "salaire"}, {q: "Paro", a: "chômage"}, {q: "Jubilación", a: "retraite"},
    {q: "Herramienta", a: "outil"}, {q: "Ordenador", a: "ordinateur"},
    {q: "Firma", a: "signature"},

    // --- ADJECTIF DE DESCRIPTION
    {q: "Hermoso", a: "beau"}, {q: "Feo", a: "laid"}, {q: "Alto", a: ["haut","grand"]},
    {q: "Bajo", a: ["bas","petit"]},
    {q: "Inteligente", a: "intelligent"}, {q: "Tonto", a: "bête"}, {q: "Joven", a: "jeune"},
    {q: "Pobre", a: "pauvre"}, {q: "Limpio", a: "propre"},
    {q: "Sucio", a: "sale"}, {q: "Abierto", a: "ouvert"}, {q: "Cerrado", a: "fermé"},
    {q: "Lleno", a: "plein"}, {q: "Vacío", a: "vide"}, {q: "Pesado", a: "lourd"},
    {q: "Ligero", a: "léger"}, {q: "Difícil", a: "difficile"}, {q: "Fácil", a: "facile"},
    {q: "Seguro", a: "sûr"}, {q: "Peligroso", a: "dangereux"}, {q: "Caro", a: "cher"},
    {q: "Barato", a: "bon marché"}, {q: "Duro", a: "dur"}, {q: "Blando", a: "mou"},
    {q: "Ancho", a: "large"}, {q: "Estrecho", a: "étroit"}, {q: "Igual", a: ["égal","pareil"]},

    // --- VOYAGE ET VACANCE
    {q: "Viaje", a: "voyage"}, {q: "Maleta", a: "valise"}, {q: "Pasaporte", a: "passeport"},
    {q: "Avión", a: "avion"}, {q: "Aeropuerto", a: "aéroport"}, {q: "Billetes", a: "billets"},
    {q: "Turista", a: "touriste"}, {q: "Mapa", a: "carte"}, {q: "Guía", a: "guide"},
    {q: "Vacaciones", a: "vacances"}, {q: "Hotel", a: "hôtel"}, {q: "Reserva", a: "réservation"},
    {q: "Piscina", a: "piscine"}, {q: "Isla", a: "île"},
    {q: "Extranjero", a: "étranger"}, {q: "Aventura", a: "aventure"}, {q: "Visita", a: "visite"},
    {q: "Foto", a: "photo"}, {q: "Recuerdo", a: "souvenir"},
    {q: "Arena", a: "sable"}, {q: "Mar", a: "mer"}, {q: "Océano", a: "océan"},

    // --- TECHNOLOGIE ET COMMUNICATION ---
    {q: "Internet", a: "internet"}, {q: "Página web", a: "page web"}, {q: "Enlace", a: "lien"},
    {q: "Correo", a: ["email","courrier"]}, {q: "Mensaje", a: "message"}, {q: "Llamada", a: "appel"},
    {q: "Pantalla", a: "écran"}, {q: "Teclado", a: "clavier"},
    {q: "Batería", a: "batterie"}, {q: "Cargador", a: "chargeur"}, {q: "Redes sociales", a: "réseaux sociaux"},
    {q: "Aplicación", a: "application"}, {q: "Contraseña", a: "mot de passe"}, {q: "Usuario", a: "utilisateur"},
    {q: "Archivo", a: "fichier"}, {q: "Descargar", a: "télécharger"}, {q: "Subir", a: "téléverser"},
    {q: "Vídeo", a: "vidéo"}, {q: "Audio", a: "audio"}, {q: "Auriculares", a: "écouteurs"},
    {q: "Altavoz", a: "haut-parleur"}, {q: "Cámara", a: ["caméra","appareil photo"]}, {q: "Botón", a: "bouton"}, {q: "Luz", a: "lumière"},

    // --- TEMPS ET FREQUENCES
    {q: "Siempre", a: "toujours"}, {q: "Nunca", a: "jamais"}, {q: "A veces", a: "parfois"},
    {q: "A menudo", a: "souvent"}, {q: "Pronto", a: "bientôt"}, {q: "Tarde", a: "tard"},
    {q: "Temprano", a: "tôt"}, {q: "Antes", a: "avant"}, {q: "Después", a: "après"},
    {q: "Durante", a: "pendant"}, {q: "Mientras", a: "pendant que"}, {q: "Todavía", a: "encore"},
    {q: "Ya", a: "déjà"}, {q: "Luego", a: "puis"}, {q: "Entonces", a: "alors"},
    {q: "Próximo", a: "prochain"}, {q: "Pasado", a: "passé"}, {q: "Futuro", a: "futur"},
    {q: "Siglo", a: "siècle"}, {q: "Momento", a: "moment"},

    // --- SANTE ET BIEN-ETRE ---
    {q: "Salud", a: "santé"}, {q: "Dolor", a: "douleur"}, {q: "Medicina", a: "médicament"},
    {q: "Pastilla", a: "pilule"}, {q: "Gripe", a: "grippe"}, {q: "Tos", a: "toux"},
    {q: "Cita", a: "rendez-vous"}, {q: "Receta", a: "ordonnance"}, {q: "Sangre", a: "sang"},
    {q: "Fiebre", a: "fièvre"}, {q: "Descanso", a: "repos"},
    {q: "Ejercicio", a: "exercice"}, {q: "Gimnasio", a: "salle de sport"}, {q: "Dieta", a: "régime"},
    {q: "Energía", a: "énergie"}, {q: "Fuerte", a: "fort"}, {q: "Débil", a: "faible"},
    {q: "Vida", a: "vie"}, {q: "Muerte", a: "mort"},

    // --- SHOPPONG ET ARGENT ---
    {q: "Precio", a: "prix"}, {q: "Costo", a: "coût"}, {q: "Recibo", a: "ticket de caisse"},
    {q: "Tarjeta", a: "carte"}, {q: "Efectivo", a: "espèces"}, {q: "Moneda", a: "monnaie"},
    {q: "Bolsa", a: "sac"}, {q: "Caja", a: "caisse"}, {q: "Descuento", a: "réduction"},
    {q: "Rebajas", a: "soldes"}, {q: "Probar", a: "essayer"}, {q: "Talla", a: "taille (vêtement)"},
    {q: "Comprar", a: "acheter"}, {q: "Vender", a: "vendre"}, {q: "Pagar", a: "payer"},
    {q: "Gastar", a: "dépenser"}, {q: "Ahorrar", a: "économiser"}, {q: "Banco", a: "banque"},
    {q: "Cuenta", a: ["compte","addition"]}, {q: "Gratis", a: "gratuit"},

    // --- VILLE ET ORIENTATION ---
    {q: "Esquina", a: ["coin","angle"]}, {q: "Derecha", a: "droite"}, {q: "Izquierda", a: "gauche"},
    {q: "Recto", a: "tout droit"}, {q: "Cerca", a: "près"}, {q: "Lejos", a: "loin"},
    {q: "Arriba", a: "en haut"}, {q: "Abajo", a: "en bas"}, {q: "Dentro", a: "dedans"},
    {q: "Fuera", a: "dehors"}, {q: "Entre", a: "entre"}, {q: "Detrás", a: "derrière"},
    {q: "Delante", a: "devant"}, {q: "Lugar", a: "endroit"}, {q: "Edificio", a: "immeuble"},
    {q: "Parque", a: "parc"}, {q: "Puente", a: "pont"}, {q: "Plaza", a: "place"},
    {q: "Barrio", a: "quartier"}, {q: "Centro", a: "centre"}
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
    {q: "Nuovo", a: "nouveau"}, {q: "Vecchio", a: "vieux"},

    // --- NATURE ET MÉTÉO (25) ---
    {q: "Sole", a: "soleil"}, {q: "Luna", a: "lune"}, {q: "Stella", a: "étoile"},
    {q: "Cielo", a: "ciel"}, {q: "Mare", a: "mer"}, {q: "Montagna", a: "montagne"},
    {q: "Albero", a: "arbre"}, {q: "Fiore", a: "fleur"}, {q: "Erba", a: "herbe"},
    {q: "Fiume", a: "rivière"}, {q: "Lago", a: "lac"}, {q: "Pioggia", a: "pluie"},
    {q: "Neve", a: "neige"}, {q: "Vento", a: "vent"}, {q: "Fuoco", a: "feu"},
    {q: "Terra", a: "terre"}, {q: "Aria", a: "air"}, {q: "Caldo", a: "chaud"},
    {q: "Freddo", a: "froid"}, {q: "Nuvola", a: "nuage"}, {q: "Tempesta", a: "tempête"},
    {q: "Isola", a: "île"}, {q: "Bosco", a: "forêt"},
    {q: "Campagna", a: "campagne"},

    // --- CORPS HUMAIN (25) ---
    {q: "Testa", a: "tête"}, {q: "Corpo", a: "corps"}, {q: "Mano", a: "main"},
    {q: "Braccio", a: "bras"}, {q: "Gamba", a: "jambe"}, {q: "Piede", a: "pied"},
    {q: "Dito", a: "doigt"}, {q: "Occhio", a: "œil"}, {q: "Orecchio", a: "oreille"},
    {q: "Naso", a: "nez"}, {q: "Bocca", a: "bouche"}, {q: "Denti", a: "dents"},
    {q: "Lingua", a: "langue"}, {q: "Capelli", a: "cheveux"}, {q: "Collo", a: "cou"},
    {q: "Spalla", a: "épaule"}, {q: "Schiena", a: "dos"}, {q: "Cuore", a: "cœur"},
    {q: "Sangue", a: "sang"}, {q: "Ossa", a: "os"}, {q: "Pelle", a: "peau"},
    {q: "Viso", a: "visage"}, {q: "Ginocchio", a: "genou"}, {q: "Gomito", a: "coude"},
    {q: "Stomaco", a: "estomac"},

    // --- ANIMAUX (25) ---
    {q: "Cane", a: "chien"}, {q: "Gatto", a: "chat"}, {q: "Cavallo", a: "cheval"},
    {q: "Uccello", a: "oiseau"}, {q: "Pesce", a: "poisson"}, {q: "Muccca", a: "vache"},
    {q: "Maiale", a: "cochon"}, {q: "Pecora", a: "mouton"}, {q: "Leone", a: "lion"},
    {q: "Tigre", a: "tigre"}, {q: "Orso", a: "ours"}, {q: "Elefante", a: "éléphant"},
    {q: "Scimmia", a: "singe"}, {q: "Serpente", a: "serpent"}, {q: "Ragno", a: "araignée"},
    {q: "Insetto", a: "insecte"}, {q: "Mosca", a: "mouche"}, {q: "Farfalla", a: "papillon"},
    {q: "Lupo", a: "loup"}, {q: "Coniglio", a: "lapin"}, {q: "Topo", a: "souris"},
    {q: "Gallina", a: "poule"}, {q: "Gallo", a: "coq"}, {q: "Anatra", a: "canard"},
    {q: "Ape", a: "abeille"},

    // --- VÊTEMENTS ET ACCESSOIRES (25) ---
    {q: "Vestiti", a: "vêtements"}, {q: "Camicia", a: "chemise"}, {q: "Pantaloni", a: "pantalon"},
    {q: "Gonna", a: "jupe"}, {q: "Abito", a: "robe"}, {q: "Giacca", a: "veste"},
    {q: "Cappotto", a: "manteau"}, {q: "Scarpe", a: "chaussures"}, {q: "Calze", a: "chaussettes"},
    {q: "Cappello", a: "chapeau"}, {q: "Guanti", a: "gants"}, {q: "Sciarpa", a: "écharpe"},
    {q: "Cintura", a: "ceinture"}, {q: "Borsa", a: "sac"}, {q: "Occhiali", a: "lunettes"},
    {q: "Orologio", a: "montre"}, {q: "Portafoglio", a: "portefeuille"}, {q: "Ombrello", a: "parapluie"},
    {q: "Maglione", a: "pull"}, {q: "Costume da bagno", a: "maillot de bain"}, {q: "Stivali", a: "bottes"},
    {q: "Cravatta", a: "cravate"}, {q: "Pigiama", a: "pyjama"}, {q: "Mutande", a: "sous-vêtements"},
    {q: "Tascia", a: "poche"},

    // --- ÉMOTIONS ET SENSATIONS (25) ---
    {q: "Felice", a: "heureux"}, {q: "Triste", a: "triste"}, {q: "Arrabbiato", a: "fâché"},
    {q: "Stanco", a: "fatigué"}, {q: "Malato", a: "malade"}, {q: "Paura", a: "peur"},
    {q: "Sorpresa", a: "surprise"}, {q: "Amore", a: "amour"}, {q: "Odio", a: "haine"},
    {q: "Speranza", a: "espoir"}, {q: "Sogno", a: "rêve"}, {q: "Piacere", a: "plaisir"},
    {q: "Dolore", a: "douleur"}, {q: "Noia", a: "ennui"}, {q: "Vergogna", a: "honte"},
    {q: "Coraggio", a: "courage"}, {q: "Gentile", a: "gentil"}, {q: "Cattivo", a: "méchant"},
    {q: "Calmo", a: "calme"}, {q: "Preoccupato", a: "inquiet"}, {q: "Sicuro", a: "sûr"},
    {q: "Orgoglioso", a: "fier"}, {q: "Geloso", a: "jaloux"}, {q: "Divertente", a: "amusant"},
    {q: "Serio", a: "sérieux"},

    // --- À LA MAISON (OBJETS) (25) ---
    {q: "Porta", a: "porte"}, {q: "Finestra", a: "fenêtre"}, {q: "Muro", a: "mur"},
    {q: "Tetto", a: "toit"}, {q: "Pavimento", a: "sol"}, {q: "Letto", a: "lit"},
    {q: "Sedia", a: "chaise"}, {q: "Divano", a: "canapé"}, {q: "Armadio", a: "armoire"},
    {q: "Specchio", a: "miroir"}, {q: "Lampada", a: "lampe"}, {q: "Chiave", a: "clé"},
    {q: "Orologio da muro", a: "horloge"}, {q: "Quadro", a: "tableau"}, {q: "Tenda", a: "rideau"},
    {q: "Cuscino", a: "oreiller"}, {q: "Coperta", a: "couverture"}, {q: "Asciugamano", a: "serviette"},
    {q: "Sapone", a: "savon"}, {q: "Spazzolino", a: "brosse à dents"}, {q: "Piatto", a: "assiette"},
    {q: "Bicchiere", a: "verre"}, {q: "Coltello", a: "couteau"}, {q: "Forchetta", a: "fourchette"},
    {q: "Cucchiaio", a: "cuillère"},

    // --- TRAVAIL ET ÉDUCATION (25) ---
    {q: "Ufficio", a: "bureau"}, {q: "Azienda", a: "entreprise"}, {q: "Collega", a: "collègue"},
    {q: "Capo", a: "chef"}, {q: "Stipendio", a: "salaire"}, {q: "Riunione", a: "réunion"},
    {q: "Computer", a: "ordinateur"}, {q: "Tastiera", a: "clavier"},
    {q: "Stampante", a: "imprimante"}, {q: "Carta", a: "papier"}, {q: "Penna", a: "stylo"},
    {q: "Matita", a: "crayon"}, {q: "Zaino", a: "sac à dos"}, {q: "Studente", a: "étudiant"},
    {q: "Lezione", a: "leçon"}, {q: "Esame", a: "examen"}, {q: "Voto", a: "note"},
    {q: "Laurea", a: "diplôme"}, {q: "Biblioteca", a: "bibliothèque"}, {q: "Lavagna", a: "tableau noir"},
    {q: "Domanda", a: "question"}, {q: "Risposta", a: "réponse"}, {q: "Esercizio", a: "exercice"},
    {q: "Scienza", a: "science"},

    // --- TEMPS ET CALENDRIER (SUITE) (25) ---
    {q: "Lunedì", a: "lundi"}, {q: "Martedì", a: "mardi"}, {q: "Mercoledì", a: "mercredi"},
    {q: "Giovedì", a: "jeudi"}, {q: "Venerdì", a: "vendredi"}, {q: "Sabato", a: "samedi"},
    {q: "Domenica", a: "dimanche"}, {q: "Gennaio", a: "janvier"}, {q: "Febbraio", a: "février"},
    {q: "Marzo", a: "mars"}, {q: "Aprile", a: "avril"}, {q: "Maggio", a: "mai"},
    {q: "Giugno", a: "juin"}, {q: "Luglio", a: "juillet"}, {q: "Agosto", a: "août"},
    {q: "Settembre", a: "septembre"}, {q: "Ottobre", a: "octobre"}, {q: "Novembre", a: "novembre"},
    {q: "Dicembre", a: "décembre"}, {q: "Primavera", a: "printemps"}, {q: "Estate", a: "été"},
    {q: "Autunno", a: "automne"}, {q: "Inverno", a: "hiver"}, {q: "Mattina", a: "matin"},
    {q: "Pomeriggio", a: "après-midi"},

    // --- NOURRITURE ET BOISSONS (SUITE) (25) ---
    {q: "Pasta", a: "pâtes"}, {q: "Riso", a: "riz"}, {q: "Zuppa", a: "soupe"},
    {q: "Insalata", a: "salade"}, {q: "Pollo", a: "poulet"},
    {q: "Formaggio", a: "fromage"}, {q: "Uovo", a: "œuf"}, {q: "Zucchero", a: "sucre"},
    {q: "Sale", a: "sel"}, {q: "Pepe", a: "poivre"}, {q: "Olio", a: "huile"},
    {q: "Burro", a: "beurre"}, {q: "Vino", a: "vin"}, {q: "Birra", a: "bière"},
    {q: "Succo", a: "jus"}, {q: "Tè", a: "thé"}, {q: "Dolce", a: ["dessert","sucré"]},
    {q: "Torta", a: "gâteau"}, {q: "Biscotto", a: "biscuit"}, {q: "Ghiaccio", a: "glace"},
    {q: "Cena", a: "dîner"}, {q: "Pranzo", a: "déjeuner"}, {q: "Colazione", a: "petit-déjeuner"},
    {q: "Spuntino", a: "goûter"},

    // --- VOYAGE ET LIEUX (25) ---
    {q: "Aereo", a: "avion"}, {q: "Aeroporto", a: "aéroport"}, {q: "Biglietto", a: "billet"},
    {q: "Valigia", a: "valise"}, {q: "Passaporto", a: "passeport"}, {q: "Hotel", a: "hôtel"},
    {q: "Prenotazione", a: "réservation"}, {q: "Mappa", a: "carte"}, {q: "Turista", a: "touriste"},
    {q: "Museo", a: "musée"}, {q: "Chiesa", a: "église"}, {q: "Piazza", a: "place"},
    {q: "Ponte", a: "pont"}, {q: "Parco", a: "parc"},
    {q: "Estero", a: "étranger"},
    {q: "Paese", a: "pays"}, {q: "Nazione", a: "nation"}, {q: "Confine", a: "frontière"},
    {q: "Guida", a: "guide"}, {q: "Viaggio", a: "voyage"}, {q: "Vacanze", a: "vacances"},
    {q: "Partenza", a: "départ"},

    // --- COULEURS (15) ---
    {q: "Rosso", a: "rouge"}, {q: "Blu", a: "bleu"}, {q: "Verde", a: "vert"},
    {q: "Giallo", a: "jaune"}, {q: "Nero", a: "noir"}, {q: "Bianco", a: "blanc"},
    {q: "Grigio", a: "gris"}, {q: "Marrone", a: "marron"}, {q: "Arancione", a: "orange"},
    {q: "Rosa", a: "rose"}, {q: "Viola", a: "violet"}, {q: "Azzurro", a: "bleu clair"},
    {q: "Oro", a: "or"}, {q: "Argento", a: "argent"}, {q: "Colore", a: "couleur"},

    // --- VERBES D'ACTION (30) ---
    {q: "Dare", a: "donner"}, {q: "Prendere", a: "prendre"}, {q: "Trovare", a: "trouver"},
    {q: "Cercare", a: "chercher"}, {q: "Pensare", a: "penser"}, {q: "Sapere", a: "savoir"},
    {q: "Capire", a: "comprendre"}, {q: "Volere", a: "vouloir"}, {q: "Potere", a: "pouvoir"},
    {q: "Uscire", a: "sortir"}, {q: "Entrare", a: "entrer"},
    {q: "Aprire", a: "ouvrir"}, {q: "Chiudere", a: "fermer"}, {q: "Ridere", a: "rire"},
    {q: "Piangere", a: "pleurer"}, {q: "Giocare", a: "jouer"}, {q: "Lavorare", a: "travailler"},
    {q: "Studiare", a: "étudier"}, {q: "Vivere", a: "vivre"}, {q: "Morire", a: "mourir"},
    {q: "Chiamare", a: "appeler"}, {q: "Aiutare", a: "aider"}, {q: "Aspettare", a: "attendre"},
    {q: "Camminare", a: "marcher"}, {q: "Correre", a: "courir"}, {q: "Nuotare", a: "nager"},
    {q: "Volare", a: "voler"}, {q: "Cucinare", a: "cuisiner"}, {q: "Pulire", a: "nettoyer"},

    // --- ADJECTIFS (30) ---
    {q: "Forte", a: "fort"}, {q: "Debole", a: "faible"}, {q: "Alto", a: ["haut","grand"]},
    {q: "Basso", a: ["bas","petit"]}, {q: "Lungo", a: "long"}, {q: "Corto", a: "court"},
    {q: "Ricco", a: "riche"}, {q: "Povero", a: "pauvre"}, {q: "Giovane", a: "jeune"},
    {q: "Pesante", a: "lourd"}, {q: "Leggero", a: "léger"}, {q: "Difficile", a: "difficile"},
    {q: "Facile", a: "facile"}, {q: "Vero", a: "vrai"}, {q: "Falso", a: "faux"},
    {q: "Giusto", a: "juste"}, {q: "Sbagliato", a: ["faux","erroné"]}, {q: "Simpatico", a: "sympathique"},
    {q: "Antipatico", a: "antipathique"}, {q: "Intelligente", a: "intelligent"}, {q: "Stupido", a: "stupide"},
    {q: "Pulito", a: "propre"}, {q: "Sporco", a: "sale"}, {q: "Pieno", a: "plein"},
    {q: "Vuoto", a: "vide"}, {q: "Aperto", a: "ouvert"}, {q: "Chiuso", a: "fermé"},
    {q: "Pronto", a: "prêt"},

    // --- MOTS DE LIAISON ET DIVERS (30) ---
    {q: "E", a: "et"}, {q: "O", a: "ou"}, {q: "Ma", a: "mais"},
    {q: "Anche", a: "aussi"}, {q: "Ancora", a: "encore"}, {q: "Sempre", a: "toujours"},
    {q: "Mai", a: "jamais"}, {q: "Spesso", a: "souvent"}, {q: "Tutti", a: "tous"},
    {q: "Niente", a: "rien"}, {q: "Qualcosa", a: "quelque chose"}, {q: "Qualcuno", a: "quelqu'un"},
    {q: "Qui", a: "ici"}, {q: "Lì", a: "là"}, {q: "Sopra", a: "dessus"},
    {q: "Sotto", a: "dessous"}, {q: "Davanti", a: "devant"}, {q: "Dietro", a: "derrière"},
    {q: "Dentro", a: "dedans"}, {q: "Fuori", a: "dehors"}, {q: "Vicino", a: "proche"},
    {q: "Lontano", a: "loin"}, {q: "Prima", a: "avant"}, {q: "Dopo", a: "après"},
    {q: "Insieme", a: "ensemble"}, {q: "Senza", a: "sans"}, {q: "Contro", a: "contre"},
    {q: "Circa", a: "environ"}, {q: "Solo", a: "seulement"}, {q: "Troppo", a: "trop"},

    // --- SOCIÉTÉ ET SANTÉ (30) ---
    {q: "Legge", a: "loi"}, {q: "Guerra", a: "guerre"}, {q: "Pace", a: "paix"},
    {q: "Stato", a: "état"}, {q: "Governo", a: "gouvernement"}, {q: "Politica", a: "politique"},
    {q: "Mondo", a: "monde"}, {q: "Salute", a: "santé"}, {q: "Medicina", a: "médicament"},
    {q: "Febbre", a: "fièvre"}, {q: "Raffreddore", a: "rhume"},
    {q: "Ricetta", a: "ordonnance"}, {q: "Emergenza", a: "urgence"}, {q: "Aiuto", a: "aide"},
    {q: "Sicurezza", a: "sécurité"}, {q: "Pericolo", a: "danger"}, {q: "Libertà", a: "liberté"},
    {q: "Diritto", a: "droit"}, {q: "Dovere", a: "devoir"}, {q: "Religione", a: "religion"},
    {q: "Storia", a: "histoire"}, {q: "Cultura", a: "culture"}, {q: "Arte", a: "art"},
    {q: "Musica", a: "musique"}, {q: "Film", a: "film"}, {q: "Sport", a: "sport"},
    {q: "Squadra", a: "équipe"}, {q: "Vittoria", a: "victoire"}, {q: "Sconfitta", a: "défaite"},

    // --- TECHNOLOGIE ET MÉDIA (20) ---
    {q: "Internet", a: "internet"}, {q: "Sito", a: "site"}, {q: "Email", a: "email"},
    {q: "Password", a: "mot de passe"}, {q: "Messaggio", a: "message"}, {q: "Foto", a: "photo"},
    {q: "Video", a: "vidéo"}, {q: "Televisore", a: "téléviseur"}, {q: "Radio", a: "radio"},
    {q: "Giornale", a: "journal"}, {q: "Notizia", a: "nouvelle"}, {q: "Batteria", a: "batterie"},
    {q: "Caricabatterie", a: "chargeur"}, {q: "Schermo", a: "écran"}, {q: "Tasto", a: "touche"},
    {q: "Connessione", a: "connexion"}, {q: "Social", a: "réseaux sociaux"}, {q: "App", a: "application"},
    {q: "Digitale", a: "numérique"}, {q: "Privato", a: "privé"}
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
    {q: "Uhr", a: ["heure","montre"]}, {q: "Minute", a: "minute"}, {q: "Tag", a: "jour"},
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
    {q: "Schön", a: "beau"}, {q: "Neu", a: "nouveau"},

    // --- CORPS HUMAIN (25) ---
    {q: "Kopf", a: "tête"}, {q: "Haare", a: "cheveux"}, {q: "Gesicht", a: "visage"}, {q: "Auge", a: "œil"}, {q: "Ohr", a: "oreille"},
    {q: "Nase", a: "nez"}, {q: "Mund", a: "bouche"}, {q: "Zahn", a: "dent"}, {q: "Hals", a: "cou"}, {q: "Schulter", a: "épaule"},
    {q: "Arm", a: ["bras","pauvre"]}, {q: "Hand", a: "main"}, {q: "Finger", a: "doigt"}, {q: "Rücken", a: "dos"}, {q: "Brust", a: "poitrine"},
    {q: "Bauch", a: "ventre"}, {q: "Bein", a: "jambe"}, {q: "Knie", a: "genou"}, {q: "Fuß", a: "pied"}, {q: "Blut", a: "sang"},
    {q: "Herz", a: "cœur"}, {q: "Lunge", a: "poumon"}, {q: "Haut", a: "peau"}, {q: "Knochen", a: "os"}, {q: "Körper", a: "corps"},

    // --- ÉMOTIONS ET SENSATIONS (25) ---
    {q: "Glücklich", a: "heureux"}, {q: "Traurig", a: "triste"}, {q: "Wütend", a: "en colère"}, {q: "Müde", a: "fatigué"}, {q: "Angst", a: "peur"},
    {q: "Liebe", a: "amour"}, {q: "Hass", a: "haine"}, {q: "Lustig", a: "drôle"}, {q: "Ernst", a: "sérieux"}, {q: "Stolz", a: "fier"},
    {q: "Überrascht", a: "surpris"}, {q: "Nervös", a: "nerveux"}, {q: "Ruhig", a: "calme"}, {q: "Langweilig", a: "ennuyeux"}, {q: "Interessant", a: "intéressant"},
    {q: "Heiß", a: "chaud"}, {q: "Süß", a: ["sucré","mignon"]}, {q: "Sauer", a: "acide"}, {q: "Scharf", a: "épicé"},
    {q: "Schmerz", a: "douleur"}, {q: "Hoffnung", a: "espoir"}, {q: "Geduld", a: "patience"}, {q: "Freude", a: "joie"}, {q: "Einsam", a: "seul"},

    // --- NATURE ET MÉTÉO (30) ---
    {q: "Sonne", a: "soleil"}, {q: "Mond", a: "lune"}, {q: "Stern", a: "étoile"}, {q: "Himmel", a: "ciel"}, {q: "Wolke", a: "nuage"},
    {q: "Regen", a: "pluie"}, {q: "Schnee", a: "neige"}, {q: "Wind", a: "vent"}, {q: "Wetter", a: "météo"}, {q: "Gewitter", a: "orage"},
    {q: "Baum", a: "arbre"}, {q: "Blume", a: "fleur"}, {q: "Wald", a: "forêt"}, {q: "Gras", a: "herbe"}, {q: "Berg", a: "montagne"},
    {q: "See", a: "lac"}, {q: "Meer", a: "mer"}, {q: "Fluss", a: "rivière"}, {q: "Strand", a: "plage"}, {q: "Insel", a: "île"},
    {q: "Erde", a: "terre"}, {q: "Luft", a: "air"}, {q: "Feuer", a: "feu"}, {q: "Stein", a: "pierre"}, {q: "Sand", a: "sable"},
    {q: "Pflanze", a: "plante"}, {q: "Garten", a: "jardin"}, {q: "Natur", a: "nature"}, {q: "Umwelt", a: "environnement"}, {q: "Welt", a: "monde"},

    // --- ANIMAUX (25) ---
    {q: "Tier", a: "animal"}, {q: "Hund", a: "chien"}, {q: "Katze", a: "chat"}, {q: "Pferd", a: "cheval"}, {q: "Vogel", a: "oiseau"},
    {q: "Fisch", a: "poisson"}, {q: "Maus", a: "souris"}, {q: "Kuh", a: "vache"}, {q: "Schwein", a: "porc"}, {q: "Huhn", a: "poule"},
    {q: "Hase", a: "lapin"}, {q: "Bär", a: "ours"}, {q: "Löwe", a: "lion"}, {q: "Elefant", a: "éléphant"}, {q: "Spinne", a: "araignée"},
    {q: "Schlange", a: "serpent"}, {q: "Biene", a: "abeille"}, {q: "Fliege", a: "mouche"}, {q: "Ente", a: "canard"}, {q: "Schaf", a: "mouton"},
    {q: "Affe", a: "singe"}, {q: "Schildkröte", a: "tortue"}, {q: "Wölfe", a: "loups"}, {q: "Frosch", a: "grenouille"}, {q: "Insekt", a: "insecte"},

    // --- VÊTEMENTS ET MODE (25) ---
    {q: "Kleidung", a: "vêtements"}, {q: "Hose", a: "pantalon"}, {q: "Hemd", a: "chemise"}, {q: "T-Shirt", a: "t-shirt"}, {q: "Kleid", a: "robe"},
    {q: "Rock", a: "jupe"}, {q: "Jacke", a: "veste"}, {q: "Mantel", a: "manteau"}, {q: "Schuh", a: "chaussure"}, {q: "Socke", a: "chaussette"},
    {q: "Hut", a: "chapeau"}, {q: "Handschuh", a: "gant"}, {q: "Schal", a: "écharpe"}, {q: "Gürtel", a: "ceinture"}, {q: "Tasche", a: "sac"},
    {q: "Brille", a: "lunettes"}, {q: "Schmuck", a: "bijoux"}, {q: "Ring", a: "bague"}, {q: "Anzug", a: "costume"},
    {q: "Unterwäsche", a: "sous-vêtements"}, {q: "Pullover", a: "pull"}, {q: "Stiefel", a: "bottes"}, {q: "Kappe", a: "casquette"}, {q: "Knopf", a: "bouton"},

    // --- MAISON ET MOBILIER (30) ---
    {q: "Zimmer", a: "chambre"}, {q: "Wohnzimmer", a: "salon"}, {q: "Schlafzimmer", a: "chambre à coucher"}, {q: "Bad", a: "salle de bain"}, {q: "Flur", a: "couloir"},
    {q: "Tür", a: "porte"}, {q: "Fenster", a: "fenêtre"}, {q: "Wand", a: "mur"}, {q: "Boden", a: "sol"}, {q: "Dach", a: "toit"},
    {q: "Bett", a: "lit"}, {q: "Stuhl", a: "chaise"}, {q: "Schrank", a: "armoire"}, {q: "Sofa", a: "canapé"}, {q: "Regal", a: "étagère"},
    {q: "Lampe", a: "lampe"}, {q: "Spiegel", a: "miroir"}, {q: "Teppich", a: "tapis"}, {q: "Kissen", a: "oreiller"}, {q: "Decke", a: "couverture"},
    {q: "Schlüssel", a: "clé"}, {q: "Schloss", a: "serrure"}, {q: "Treppe", a: "escalier"}, {q: "Balkon", a: "balcon"}, {q: "Keller", a: "cave"},
    {q: "Licht", a: "lumière"}, {q: "Heizung", a: "chauffage"}, {q: "Müll", a: "déchets"}, {q: "Seife", a: "savon"}, {q: "Handtuch", a: "serviette"},

    // --- TRAVAIL ET ÉDUCATION (30) ---
    {q: "Beruf", a: "métier"}, {q: "Chef", a: "patron"}, {q: "Kollege", a: "collègue"}, {q: "Büro", a: "bureau"}, {q: "Computer", a: "ordinateur"},
    {q: "Internet", a: "internet"}, {q: "E-Mail", a: "e-mail"}, {q: "Telefon", a: "téléphone"}, {q: "Papier", a: "papier"}, {q: "Stift", a: "stylo"},
    {q: "Notiz", a: "note"}, {q: "Besprechung", a: "réunion"}, {q: "Projekt", a: "projet"}, {q: "Erfolg", a: "succès"}, {q: "Fehler", a: "erreur"},
    {q: "Universität", a: "université"}, {q: "Student", a: "étudiant"}, {q: "Kurs", a: "cours"}, {q: "Prüfung", a: "examen"}, {q: "Zeugnis", a: "bulletin"},
    {q: "Wissen", a: "savoir"}, {q: "Lernen", a: "apprendre"}, {q: "Verstehen", a: "comprendre"}, {q: "Frage", a: "question"}, {q: "Antwort", a: "réponse"},
    {q: "Beispiel", a: "exemple"}, {q: "Seite", a: "page"}, {q: "Wort", a: "mot"}, {q: "Sprache", a: "langue"}, {q: "Wörterbuch", a: "dictionnaire"},

    // --- VILLE ET TRANSPORTS (30) ---
    {q: "Platz", a: "place"}, {q: "Park", a: "park"}, {q: "Kirche", a: "église"}, {q: "Brücke", a: "pont"}, {q: "Museum", a: "musée"},
    {q: "Kino", a: "cinéma"}, {q: "Theater", a: "théâtre"}, {q: "Hotel", a: "hôtel"}, {q: "Restaurant", a: "restaurant"}, {q: "Café", a: "café"},
    {q: "Laden", a: "magasin"}, {q: "Supermarkt", a: "supermarché"}, {q: "Bäckerei", a: "boulangerie"}, {q: "Apotheke", a: "pharmacie"}, {q: "Bank", a: "banque"},
    {q: "Post", a: "poste"}, {q: "Polizei", a: "police"}, {q: "Flughafen", a: "aéroport"}, {q: "Flugzeug", a: "avion"}, {q: "Fahrrad", a: "vélo"},
    {q: "Motorrad", a: "moto"}, {q: "Taxi", a: "taxi"}, {q: "Ticket", a: "billet"}, {q: "Ampel", a: "feu rouge"}, {q: "Verkehr", a: "trafic"},
    {q: "Reise", a: "voyage"}, {q: "Urlaub", a: "vacances"}, {q: "Koffer", a: "valise"}, {q: "Karte", a: "carte"}, {q: "Richtung", a: "direction"},

    // --- TEMPS ET CALENDRIER (30) ---
    {q: "Frühling", a: "printemps"}, {q: "Sommer", a: "été"}, {q: "Herbst", a: "automne"}, {q: "Winter", a: "hiver"}, {q: "Montag", a: "lundi"},
    {q: "Dienstag", a: "mardi"}, {q: "Mittwoch", a: "mercredi"}, {q: "Donnerstag", a: "jeudi"}, {q: "Freitag", a: "vendredi"}, {q: "Samstag", a: "samedi"},
    {q: "Sonntag", a: "dimanche"}, {q: "Wochenende", a: "week-end"}, {q: "Vormittag", a: "matinée"}, {q: "Mittag", a: "midi"}, {q: "Nachmittag", a: "après-midi"},
    {q: "Abend", a: "soir"}, {q: "Nacht", a: "nuit"}, {q: "Mitternacht", a: "minuit"}, {q: "Sekunde", a: "seconde"}, {q: "Früh", a: "tôt"},
    {q: "Spät", a: "tard"}, {q: "Pünktlich", a: "à l'heure"}, {q: "Zukunft", a: "futur"}, {q: "Vergangenheit", a: "passé"}, {q: "Gegenwart", a: "présent"},
    {q: "Dauer", a: "durée"}, {q: "Mal", a: "fois"}, {q: "Oft", a: "souvent"}, {q: "Selten", a: "rarement"}, {q: "Immer", a: "toujours"},

    // --- VERBES D'ACTION (40) ---
    {q: "Glauben", a: "croire"}, {q: "Denken", a: "penser"}, {q: "Fühlen", a: "sentir"}, {q: "Wollen", a: "vouloir"},
    {q: "Können", a: "pouvoir"}, {q: "Müssen", a: "devoir"}, {q: "Sollen", a: "devrait"}, {q: "Dürfen", a: "avoir l'autorisation"}, {q: "Mögen", a: "aimer"},
    {q: "Geben", a: "donner"}, {q: "Nehmen", a: "prendre"}, {q: "Helfen", a: "aider"}, {q: "Suchen", a: "chercher"}, {q: "Finden", a: "trouver"},
    {q: "Bringen", a: "apporter"}, {q: "Fragen", a: "demander"}, {q: "Antworten", a: "répondre"}, {q: "Arbeiten", a: "travailler"}, {q: "Spielen", a: "jouer"},
    {q: "Singen", a: "chanter"}, {q: "Tanzen", a: "danser"}, {q: "Lachen", a: "rire"}, {q: "Weinen", a: "pleurer"}, {q: "Schwimmen", a: "nager"},
    {q: "Laufen", a: "courir"}, {q: "Fahren", a: ["conduire","aller"]}, {q: "Bleiben", a: "rester"}, {q: "Werden", a: "devenir"}, {q: "Lassen", a: "laisser"},
    {q: "Sagen", a: "dire"}, {q: "Zeigen", a: "montrer"}, {q: "Öffnen", a: "ouvrir"}, {q: "Schließen", a: "fermer"}, {q: "Warten", a: "attendre"},
    {q: "Vergessen", a: "oublier"}, {q: "Erinnern", a: "se souvenir"}, {q: "Waschen", a: "laver"}, {q: "Putzen", a: "nettoyer"}, {q: "Kochen", a: "cuisiner"},

    // --- ADJECTIFS QUALIFICATIFS (40) ---
    {q: "Alt", a: "vieux"}, {q: "Jung", a: "jeune"}, {q: "Kalt", a: "froid"}, {q: "Warm", a: "chaud"}, {q: "Heller", a: "clair"},
    {q: "Dunkel", a: "sombre"}, {q: "Schwer", a: ["lourd","difficile"]}, {q: "Leicht", a: ["léger","facile"]}, {q: "Stark", a: "fort"}, {q: "Schwach", a: "faible"},
    {q: "Reich", a: "riche"}, {q: "Gesund", a: "sain"}, {q: "Krank", a: "malade"}, {q: "Sauber", a: "propre"},
    {q: "Schmutzig", a: "sale"}, {q: "Voll", a: "plein"}, {q: "Leer", a: "vide"}, {q: "Hart", a: "dur"}, {q: "Weich", a: "mou"},
    {q: "Teuer", a: "cher"}, {q: "Billig", a: "pas cher"}, {q: "Wichtig", a: "important"}, {q: "Richtig", a: ["juste","vrai"]}, {q: "Falsch", a: "faux"},
    {q: "Gefährlich", a: "dangereux"}, {q: "Sicher", a: "sûr"}, {q: "Nah", a: "proche"}, {q: "Fern", a: "loin"}, {q: "Breit", a: "large"},
    {q: "Schmal", a: "étroit"}, {q: "Hoch", a: "haut"}, {q: "Tief", a: "profond"}, {q: "Einfach", a: "simple"}, {q: "Kompliziert", a: "compliqué"},
    {q: "Möglich", a: "possible"}, {q: "Unmöglich", a: "impossible"}, {q: "Gleich", a: "pareil"}, {q: "Anders", a: "différent"}, {q: "Echt", a: ["vrai","authentique"]},

    // --- ALIMENTATION (30) ---
    {q: "Salz", a: "sel"}, {q: "Zucker", a: "sucre"}, {q: "Pfeffer", a: "poivre"}, {q: "Öl", a: "huile"}, {q: "Essig", a: "vinaigre"},
    {q: "Reis", a: "riz"}, {q: "Nudeln", a: "pâtes"}, {q: "Kartoffel", a: "pomme de terre"}, {q: "Suppe", a: "soupe"}, {q: "Salat", a: "salade"},
    {q: "Käse", a: "fromage"}, {q: "Ei", a: "œuf"}, {q: "Wurst", a: "saucisse"}, {q: "Hähnchen", a: "poulet"}, {q: "Rindfleisch", a: "bœuf"},
    {q: "Banane", a: "banane"}, {q: "Zitrone", a: "citron"}, {q: "Erdbeere", a: "fraise"}, {q: "Saft", a: "jus"},
    {q: "Bier", a: "bière"}, {q: "Wein", a: "vin"}, {q: "Tee", a: "thé"}, {q: "Glas", a: "verre"}, {q: "Tasse", a: "tasse"},
    {q: "Teller", a: "assiette"}, {q: "Messer", a: "couteau"}, {q: "Gabel", a: "fourchette"}, {q: "Löffel", a: "cuillère"}, {q: "Rechnung", a: "addition"},

    // --- SOCIÉTÉ ET DIVERS (30) ---
    {q: "Staat", a: "état"}, {q: "Land", a: "pays"}, {q: "Volk", a: "peuple"}, {q: "Gesetz", a: "loi"}, {q: "Recht", a: "droit"},
    {q: "Politik", a: "politique"}, {q: "Krieg", a: "guerre"}, {q: "Frieden", a: "paix"}, {q: "Freiheit", a: "liberté"}, {q: "Sicherheit", a: "sécurité"},
    {q: "Geschichte", a: "histoire"}, {q: "Kultur", a: "culture"}, {q: "Kunst", a: "art"}, {q: "Musik", a: "musique"}, {q: "Bild", a: ["image","tableau"]},
    {q: "Farbe", a: "couleur"}, {q: "Schwarz", a: "noir"}, {q: "Weiß", a: "blanc"}, {q: "Rot", a: "rouge"}, {q: "Blau", a: "bleu"},
    {q: "Grün", a: "vert"}, {q: "Gelb", a: "jaune"}, {q: "Nummer", a: "numéro"}, {q: "Teil", a: "partie"}, {q: "Form", a: "forme"},
    {q: "System", a: "système"}, {q: "Grund", a: "raison"}, {q: "Sinn", a: "sens"}, {q: "Idee", a: "idée"}, {q: "Geist", a: "esprit"},

    // --- PETITS MOTS ET CONNECTEURS (25) ---
    {q: "Und", a: "et"}, {q: "Oder", a: "ou"}, {q: "Aber", a: "mais"}, {q: "Denn", a: "car"}, {q: "Sondern", a: "mais (opposition)"},
    {q: "Weil", a: "parce que"}, {q: "Dass", a: "que"}, {q: "Wenn", a: ["si","quand"]}, {q: "Ob", a: "si (doute)"}, {q: "Obwohl", a: "bien que"},
    {q: "Trotzdem", a: "pourtant"}, {q: "Dann", a: "ensuite"}, {q: "Also", a: "donc"}, {q: "Sehr", a: "très"}, {q: "Ganz", a: "tout à fait"},
    {q: "Nur", a: "seulement"}, {q: "Auch", a: "aussi"}, {q: "Noch", a: "encore"}, {q: "Schon", a: "déjà"}, {q: "Wieder", a: "encore une fois"},
    {q: "Hier", a: "ici"}, {q: "Dort", a: "là-bas"}, {q: "Überall", a: "partout"}, {q: "Etwas", a: "quelque chose"}, {q: "Nichts", a: "rien"}
  ],
  chinois: [
    // --- LES BASES (20) ---
    {q: "你好", a: "bonjour"}, {q: "谢谢", a: "merci"}, {q: "对", a: ["oui","juste"]}, 
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
    {q: "冷", a: "froid"}, {q: "热", a: "chaud"},
    {q: "高兴", a: "heureux"}, {q: "认识", a: "connaître"},

    // --- CORPS HUMAIN ET SANTÉ (30) ---
    {q: "身体", a: "corps"}, {q: "脸", a: "visage"}, {q: "耳朵", a: "oreille"}, {q: "鼻子", a: "nez"}, {q: "牙齿", a: "dent"},
    {q: "脖子", a: "cou"}, {q: "肩膀", a: "épaule"}, {q: "手臂", a: "bras"}, {q: "脚", a: "pied"}, {q: "腿", a: "jambe"},
    {q: "手指", a: "doigt"}, {q: "背", a: "dos"}, {q: "心脏", a: "cœur"}, {q: "胃", a: "estomac"}, {q: "血", a: "sang"},
    {q: "骨头", a: "os"}, {q: "头发", a: "cheveux"}, {q: "皮肤", a: "peau"}, {q: "生病", a: "malade"}, {q: "感冒", a: "rhume"},
    {q: "药", a: "médicament"}, {q: "疼", a: "douleur"}, {q: "检查", a: "examen"}, {q: "护士", a: "infirmier"}, {q: "健康", a: "santé"},
    {q: "累", a: "fatigué"}, {q: "饿", a: "faim"}, {q: "药店", a: "pharmacie"},

    // --- ÉMOTIONS ET QUALITÉS (30) ---
    {q: "爱", a: "amour"}, {q: "恨", a: "haine"}, {q: "生气", a: "en colère"}, {q: "担心", a: "s'inquiéter"}, {q: "害怕", a: "peur"},
    {q: "难过", a: "triste"}, {q: "伤心", a: "peiné"}, {q: "奇怪", a: "étrange"}, {q: "聪明", a: "intelligent"}, {q: "笨", a: "bête"},
    {q: "努力", a: "diligent"}, {q: "懒", a: "paresseux"}, {q: "热情", a: "enthousiaste"}, {q: "安静", a: "calme"}, {q: "认真", a: "sérieux"},
    {q: "幽默", a: "humour"}, {q: "礼貌", a: "poli"}, {q: "勇敢", a: "courageux"}, {q: "自信", a: "confiant"}, {q: "坏", a: "mauvais"},
    {q: "重要", a: "important"}, {q: "真", a: "vrai"}, {q: "假", a: "faux"}, {q: "新", a: "nouveau"}, {q: "旧", a: "vieux (objet)"},
    {q: "老", a: "vieux (personne)"}, {q: "容易", a: "facile"}, {q: "难", a: "difficile"}, {q: "错", a: "faux"},

    // --- NATURE ET MÉTÉO (35) ---
    {q: "天", a: "ciel"}, {q: "地", a: "terre"}, {q: "太阳", a: "soleil"}, {q: "月亮", a: "lune"}, {q: "星星", a: "étoile"},
    {q: "云", a: "nuage"}, {q: "风", a: "vent"}, {q: "雨", a: "pluie"}, {q: "雪", a: "neige"}, {q: "雷", a: "tonnerre"},
    {q: "天气", a: "météo"}, {q: "阴天", a: "nuageux"}, {q: "晴天", a: "ensoleillé"}, {q: "山", a: "montagne"},
    {q: "河", a: "rivière"}, {q: "海", a: "mer"}, {q: "湖", a: "lac"}, {q: "树", a: "arbre"}, {q: "草", a: "herbe"},
    {q: "花", a: "fleur"}, {q: "森林", a: "forêt"}, {q: "环境", a: "environnement"}, {q: "空气", a: "air"}, {q: "自然", a: "nature"},
    {q: "光", a: "lumière"}, {q: "石头", a: "pierre"}, {q: "沙子", a: "sable"}, {q: "世界", a: "monde"}, {q: "岛", a: "île"},
    {q: "季节", a: "saison"}, {q: "春天", a: "printemps"}, {q: "夏天", a: "été"}, {q: "秋天", a: "automne"}, {q: "冬天", a: "hiver"},

    // --- ANIMAUX (25) ---
    {q: "动物", a: "animal"}, {q: "狗", a: "chien"}, {q: "猫", a: "chat"}, {q: "马", a: "cheval"}, {q: "牛", a: "vache"},
    {q: "羊", a: "mouton"}, {q: "猪", a: "porc"}, {q: "鸡", a: "poule"}, {q: "鸭", a: "canard"}, {q: "鸟", a: "oiseau"},
    {q: "鱼", a: "poisson"}, {q: "大象", a: "éléphant"}, {q: "狮子", a: "lion"}, {q: "老虎", a: "tigre"}, {q: "熊猫", a: "panda"},
    {q: "猴子", a: "singe"}, {q: "蛇", a: "serpent"}, {q: "兔子", a: "lapin"}, {q: "老鼠", a: "souris"}, {q: "龙", a: "dragon"},
    {q: "苍蝇", a: "mouche"}, {q: "蚊子", a: "moustique"}, {q: "蚂蚁", a: "fourmi"}, {q: "蝴蝶", a: "papillon"}, {q: "蜘蛛", a: "araignée"},

    // --- MAISON ET QUOTIDIEN (35) ---
    {q: "房子", a: "maison"}, {q: "厨房", a: "cuisine"}, {q: "客厅", a: "salon"}, {q: "浴室", a: "salle de bain"}, {q: "门", a: "porte"},
    {q: "窗户", a: "fenêtre"}, {q: "墙", a: "mur"}, {q: "灯", a: "lampe"}, {q: "床", a: "lit"}, {q: "被子", a: "couette"},
    {q: "枕头", a: "oreiller"}, {q: "镜子", a: "miroir"}, {q: "钥匙", a: "clé"}, {q: "电视", a: "télévision"}, {q: "冰箱", a: "frigo"},
    {q: "洗衣机", a: "lave-linge"}, {q: "空调", a: "climatisation"}, {q: "垃圾桶", a: "poubelle"}, {q: "毛巾", a: "serviette"}, {q: "肥皂", a: "savon"},
    {q: "牙刷", a: "brosse à dents"}, {q: "伞", a: "parapluie"}, {q: "包", a: "sac"}, {q: "纸", a: "papier"}, {q: "笔", a: "stylo"},
    {q: "眼镜", a: "lunettes"}, {q: "表", a: "montre"}, {q: "报纸", a: "journal"}, {q: "礼物", a: "cadeau"}, {q: "照片", a: "photo"},
    {q: "事情", a: ["chose","affaire"]}, {q: "东西", a: "objet"}, {q: "生活", a: "vie"}, {q: "帮忙", a: "aider"}, {q: "准备", a: "préparer"},

    // --- NOURRITURE ET RESTAURATION (35) ---
    {q: "面包", a: "pain"}, {q: "鸡蛋", a: "œuf"}, {q: "牛奶", a: "lait"}, {q: "果汁", a: "jus"}, {q: "啤酒", a: "bière"},
    {q: "葡萄酒", a: "vin"}, {q: "糖", a: "sucre"}, {q: "盐", a: "sel"}, {q: "酱油", a: "sauce soja"}, {q: "醋", a: "vinaigre"},
    {q: "辣椒", a: "piment"}, {q: "蔬菜", a: "légumes"}, {q: "白菜", a: "chou"}, {q: "土豆", a: "pomme de terre"}, {q: "番茄", a: "tomate"},
    {q: "香蕉", a: "banane"}, {q: "西瓜", a: "pastèque"}, {q: "葡萄", a: "raisin"}, {q: "点心", a: ["dim sum","goûter"]}, {q: "蛋糕", a: "gâteau"},
    {q: "饼干", a: "biscuit"}, {q: "包子", a: "brioche vapeur"}, {q: "饺子", a: "ravioli"}, {q: "火锅", a: "fondue"}, {q: "早饭", a: "petit-déjeuner"},
    {q: "午饭", a: "déjeuner"}, {q: "晚饭", a: "dîner"}, {q: "菜单", a: "menu"}, {q: "买单", a: "l'addition"}, {q: "服务员", a: "serveur"},
    {q: "筷子", a: "baguettes"}, {q: "碗", a: "bol"}, {q: "盘子", a: "assiette"}, {q: "杯子", a: "verre"}, {q: "勺子", a: "cuillère"},

    // --- VILLE ET TRANSPORTS (35) ---
    {q: "城市", a: "ville"}, {q: "街道", a: "rue"}, {q: "公园", a: "parc"}, {q: "银行", a: "banque"}, {q: "邮局", a: "poste"},
    {q: "超市", a: "supermarché"}, {q: "饭馆", a: "restaurant"}, {q: "图书馆", a: "bibliothèque"}, {q: "电影院", a: "cinéma"}, {q: "机场", a: "aéroport"},
    {q: "火车站", a: "gare"}, {q: "地铁", a: "métro"}, {q: "公交车", a: "bus"}, {q: "出租车", a: "taxi"}, {q: "自行车", a: "vélo"},
    {q: "飞机", a: "avion"}, {q: "船", a: "bateau"}, {q: "票", a: "billet"}, {q: "地图", a: "carte"}, {q: "地址", a: "adresse"},
    {q: "宾馆", a: "hôtel"}, {q: "旅游", a: "voyager"}, {q: "护照", a: "passeport"}, {q: "行李", a: "bagage"}, {q: "站", a: ["arrêt","station","se tenir debout"]},
    {q: "左边", a: "gauche"}, {q: "右边", a: "droite"}, {q: "前面", a: "devant"}, {q: "后面", a: "derrière"}, {q: "中间", a: "milieu"},
    {q: "附近", a: "proche"}, {q: "远", a: "loin"}, {q: "地方", a: "endroit"}, {q: "路口", a: "intersection"}, {q: "拐", a: "tourner"},

    // --- TRAVAIL ET ÉDUCATION (35) ---
    {q: "办公室", a: "bureau"}, {q: "公司", a: "entreprise"}, {q: "经理", a: "directeur"}, {q: "同事", a: "collègue"}, {q: "生意", a: "affaires"},
    {q: "会议", a: "réunion"}, {q: "工作", a: "travail"}, {q: "工资", a: "salaire"}, {q: "机会", a: "opportunité"}, {q: "压力", a: "pression"},
    {q: "大学", a: "université"}, {q: "课", a: "cours"}, {q: "作业", a: "devoirs"}, {q: "考试", a: "examen"}, {q: "学习", a: "étudier"},
    {q: "练习", a: "s'exercer"}, {q: "复习", a: "réviser"}, {q: "毕业", a: "diplômé"}, {q: "成绩", a: "notes"}, {q: "字典", a: "dictionnaire"},
    {q: "知识", a: "savoir"}, {q: "文化", a: "culture"}, {q: "历史", a: "histoire"}, {q: "科学", a: "science"}, {q: "数学", a: "maths"},
    {q: "汉语", a: "chinois (langue)"}, {q: "英语", a: "anglais"}, {q: "翻译", a: "traduire"}, {q: "解释", a: "expliquer"}, {q: "明白", a: "comprendre"},
    {q: "句子", a: "phrase"}, {q: "词语", a: "vocabulaire"}, {q: "故事", a: "histoire (récit)"}, {q: "水平", a: "niveau"}, {q: "记得", a: "se souvenir"},

    // --- VERBES D'ACTION ET MOUVEMENT (50) ---
    {q: "给", a: "donner"}, {q: "找", a: "chercher"}, {q: "等", a: "attendre"}, {q: "拿", a: "prendre"}, {q: "放", a: "poser"},
    {q: "用", a: "utiliser"}, {q: "觉得", a: ["penser","ressentir"]}, {q: "认为", a: "estimer"}, {q: "希望", a: "espérer"}, {q: "需要", a: "avoir besoin"},
    {q: "喜欢", a: "aimer"}, {q: "想要", a: "vouloir"}, {q: "会", a: "savoir faire"}, {q: "能", a: "pouvoir"}, {q: "可以", a: "autorisé à"},
    {q: "坐", a: "s'asseoir"}, {q: "走", a: "marcher"}, {q: "跑", a: "courir"}, {q: "跳", a: "sauter"},
    {q: "睡觉", a: "dormir"}, {q: "起床", a: "se lever"}, {q: "洗澡", a: "se doucher"}, {q: "洗", a: "laver"}, {q: "打", a: ["frapper","appeler"]},
    {q: "玩", a: "jouer"}, {q: "笑", a: "rire"}, {q: "哭", a: "pleurer"}, {q: "唱歌", a: "chanter"}, {q: "跳舞", a: "danser"},
    {q: "运动", a: "faire du sport"}, {q: "游泳", a: "nager"}, {q: "踢足球", a: "jouer au foot"}, {q: "看书", a: "lire"},
    {q: "开始", a: "commencer"}, {q: "结束", a: "finir"}, {q: "停", a: "arrêter"}, {q: "变成", a: "devenir"}, {q: "决定", a: "décider"},
    {q: "照顾", a: "s'occuper de"}, {q: "变化", a: "changer"}, {q: "讲", a: "raconter"}, {q: "告诉", a: "dire à"}, {q: "要求", a: "exiger"},
    {q: "发现", a: "découvrir"}, {q: "忘记", a: "oublier"}, {q: "打算", a: "prévoir"}, {q: "参加", a: "participer"}, {q: "离开", a: "quitter"},

    // --- ADJECTIFS ET COMPARAISONS (40) ---
    {q: "快", a: "rapide"}, {q: "慢", a: "lent"}, {q: "重", a: "lourd"}, {q: "轻", a: "léger"}, {q: "长", a: "long"},
    {q: "短", a: "court"}, {q: "高", a: ["haut","grand"]}, {q: "矮", a: "petit (taille)"}, {q: "圆", a: "rond"}, {q: "方", a: "carré"},
    {q: "甜", a: "sucré"}, {q: "苦", a: "amer"}, {q: "辣", a: "épicé"}, {q: "咸", a: "salé"}, {q: "酸", a: "acide"},
    {q: "干净", a: "propre"}, {q: "脏", a: "sale"}, {q: "清楚", a: "clair"}, {q: "模糊", a: "flou"}, {q: "便宜", a: "bon marché"},
    {q: "贵", a: "cher"}, {q: "简单", a: "simple"}, {q: "复杂", a: "compliqué"}, {q: "安全", a: "sûr"}, {q: "危险", a: "dangereux"},
    {q: "各种各样", a: "toutes sortes de"}, {q: "特别", a: ["spécial","particulièrement"]}, {q: "一般", a: "ordinaire"}, {q: "相同", a: "identique"}, {q: "不同", a: "différent"},
    {q: "舒服", a: ["confortable","agréable"]}, {q: "难受", a: "inconfortable"}, {q: "饱", a: "rassasié"}, {q: "渴", a: "soif"}, {q: "有名", a: "célèbre"},
    {q: "新鲜", a: "frais"}, {q: "漂亮", a: ["joli","beau"]}, {q: "帅", a: "beau (homme)"}, {q: "可爱", a: "mignon"},

    // --- TEMPS, QUANTITÉ ET CONNECTEURS (30) ---
    {q: "以前以前", a: "avant"}, {q: "以后", a: "après"}, {q: "已经", a: "déjà"}, {q: "总是", a: "toujours"}, {q: "经常", a: "souvent"},
    {q: "有时", a: "parfois"}, {q: "很少", a: "rarement"}, {q: "从未", a: "jamais"}, {q: "刚才", a: "à l'instant"}, {q: "马上", a: "tout de suite"},
    {q: "一块儿", a: "ensemble"}, {q: "一共", a: "au total"}, {q: "一半", a: "moitié"}, {q: "只有", a: "seulement"}, {q: "还要", a: "encore"},
    {q: "最", a: "le plus"}, {q: "更", a: ["plus","encore plus"]}, {q: "太", a: "trop"}, {q: "非常", a: ["très","beaucoup"]},
    {q: "和", a: "et"}, {q: "因为", a: "parce que"}, {q: "所以", a: "donc"}, {q: "虽然", a: "bien que"}, {q: "但是", a: "mais"},
    {q: "如果", a: "si (hypothèse)"}, {q: "还是", a: "ou (choix)"}, {q: "或者", a: "ou (affirmation)"}, {q: "然后", a: "ensuite"}, {q: "最后", a: "enfin"}
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
    {q: "차", a: ["thé","voiture"]}, {q: "술", a: "alcool"}, {q: "맛있어요", a: "délicieux"},
    {q: "배고파요", a: "faim"}, {q: "식당", a: "restaurant"}, {q: "메뉴", a: "menu"},

    // --- LIEUX ET TRANSPORT (15) ---
    {q: "집", a: "maison"}, {q: "학교", a: "école"}, {q: "회사", a: "entreprise"},
    {q: "화장실", a: "toilettes"}, {q: "가게", a: "magasin"}, {q: "병원", a: "hôpital"},
    {q: "은행", a: "banque"}, {q: "공원", a: "parc"}, {q: "길", a: "rue"},
    {q: "버스", a: "bus"}, {q: "지하철", a: "métro"},
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
    {q: "좋아하다", a: "aimer"}, {q: "싫어하다", a: "détester"},
    {q: "하다", a: "faire"}, {q: "사다", a: "acheter"}, {q: "배우다", a: "apprendre"},
    {q: "크다", a: "grand"}, {q: "작다", a: "petit"}, {q: "많이", a: "beaucoup"},
    {q: "조금", a: "un peu"},

    // --- CORPS HUMAIN & SANTÉ (30) ---
    {q: "머리", a: "tête"}, {q: "눈", a: ["œil","neige"]}, {q: "코", a: "nez"}, {q: "입", a: "bouche"}, {q: "귀", a: "oreille"},
    {q: "얼굴", a: "visage"}, {q: "손", a: "main"}, {q: "발", a: "pied"}, {q: "팔", a: "bras"}, {q: "다리", a: "jambe"},
    {q: "손가락", a: "doigt"}, {q: "몸", a: "corps"}, {q: "심장", a: "cœur"}, {q: "피", a: "sang"}, {q: "아프다", a: "avoir mal"},
    {q: "약", a: "médicament"}, {q: "감기", a: "rhume"}, {q: "기침", a: "toux"}, {q: "열", a: "fièvre"}, {q: "치과", a: "dentiste"},
    {q: "안경", a: "lunettes"}, {q: "키", a: "taille (hauteur)"}, {q: "건강", a: "santé"}, {q: "운동", a: "exercice"}, {q: "뚱뚱하다", a: "être gros"},
    {q: "날씬하다", a: "être mince"}, {q: "예쁘다", a: "être jolie"}, {q: "잘생기다", a: "être beau"}, {q: "피곤하다", a: "être fatigué"}, {q: "웃다", a: "rire"},

    // --- NATURE & MÉTÉO (35) ---
    {q: "하늘", a: "ciel"}, {q: "해", a: "soleil"}, {q: "별", a: "étoile"}, {q: "구름", a: "nuage"},
    {q: "비", a: "pluie"}, {q: "바람", a: "vent"}, {q: "산", a: "montagne"}, {q: "바다", a: "mer"},
    {q: "강", a: "rivière"}, {q: "나무", a: "arbre"}, {q: "꽃", a: "fleur"}, {q: "숲", a: "forêt"}, {q: "땅", a: "terre"},
    {q: "돌", a: "pierre"}, {q: "날씨", a: "météo"}, {q: "덥다", a: "faire chaud"}, {q: "춥다", a: "faire froid"}, {q: "따뜻하다", a: "être doux"},
    {q: "시원하다", a: "être frais"}, {q: "맑다", a: "être dégagé"}, {q: "흐리다", a: "être nuageux"}, {q: "공기", a: "air"}, {q: "환경", a: "environnement"},
    {q: "자연", a: "nature"}, {q: "동물", a: "animal"}, {q: "개", a: "chien"}, {q: "고양이", a: "chat"}, {q: "새", a: "oiseau"},
    {q: "물고기", a: "poisson"}, {q: "호랑이", a: "tigre"}, {q: "코끼리", a: "éléphant"}, {q: "벌레", a: "insecte"}, {q: "뱀", a: "serpent"},

    // --- MAISON & OBJETS DU QUOTIDIEN (40) ---
    {q: "방", a: "chambre"}, {q: "거실", a: "salon"}, {q: "부엌", a: "cuisine"}, {q: "침대", a: "lit"}, {q: "책상", a: "bureau"},
    {q: "의자", a: "chaise"}, {q: "문", a: "porte"}, {q: "창문", a: "fenêtre"}, {q: "거울", a: "miroir"}, {q: "시계", a: "horloge"},
    {q: "전화기", a: "téléphone"}, {q: "컴퓨터", a: "ordinateur"}, {q: "냉장고", a: "frigo"}, {q: "세탁기", a: "machine à laver"}, {q: "텔레비전", a: "télévision"},
    {q: "옷장", a: "armoire"}, {q: "이불", a: "couverture"}, {q: "수건", a: "serviette"}, {q: "비누", a: "savon"}, {q: "치약", a: "dentifrice"},
    {q: "칫솔", a: "brosse à dents"}, {q: "샴푸", a: "shampooing"}, {q: "휴지", a: "papier toilette"}, {q: "컵", a: "tasse"}, {q: "그릇", a: "bol"},
    {q: "수저", a: "cuillère et baguettes"}, {q: "칼", a: "couteau"}, {q: "가위", a: "ciseaux"}, {q: "열쇠", a: "clé"}, {q: "가방", a: "sac"},
    {q: "지갑", a: "portefeuille"}, {q: "우산", a: "parapluie"}, {q: "책", a: "livre"}, {q: "공책", a: "cahier"}, {q: "연필", a: "crayon"},
    {q: "볼펜", a: "stylo"}, {q: "종이", a: "papier"}, {q: "지도", a: "carte"}, {q: "사진", a: "photo"}, {q: "카메라", a: "appareil photo"},

    // --- VÊTEMENTS & COULEURS (30) ---
    {q: "옷", a: "vêtement"}, {q: "바지", a: "pantalon"}, {q: "치마", a: "jupe"}, {q: "셔츠", a: "chemise"}, {q: "티셔츠", a: "t-shirt"},
    {q: "코트", a: "manteau"}, {q: "양말", a: "chaussettes"}, {q: "신발", a: "chaussures"}, {q: "운동화", a: "baskets"}, {q: "모자", a: "chapeau"},
    {q: "장갑", a: "gants"}, {q: "목도리", a: "écharpe"}, {q: "속옷", a: "sous-vêtements"}, {q: "수영복", a: "maillot de bain"}, {q: "입다", a: "porter (vêtement)"},
    {q: "신다", a: "porter (chaussures)"}, {q: "벗다", a: "enlever"}, {q: "색깔", a: "couleur"}, {q: "빨간색", a: "rouge"}, {q: "파란색", a: "bleu"},
    {q: "노란색", a: "jaune"}, {q: "초록색", a: "vert"}, {q: "검은색", a: "noir"}, {q: "하얀색", a: "blanc"}, {q: "보라색", a: "violet"},
    {q: "주황색", a: "orange"}, {q: "갈색", a: "marron"}, {q: "회색", a: "gris"}, {q: "분홍색", a: "rose"}, {q: "밝다", a: ["être clair","être lumineux"]},

    // --- ÉMOTIONS & ÉTATS (30) ---
    {q: "기쁘다", a: "être joyeux"}, {q: "슬프다", a: "être triste"}, {q: "행복하다", a: "être heureux"}, {q: "화나다", a: "être en colère"}, {q: "무섭다", a: "avoir peur"},
    {q: "놀라다", a: "être surpris"}, {q: "심심하다", a: "s'ennuyer"}, {q: "재미있다", a: ["être intéressant","amusant"]}, {q: "재미없다", a: "être ennuyeux"}, {q: "걱정하다", a: "s'inquiéter"},
    {q: "생각하다", a: "penser"}, {q: "믿다", a: "croire"}, {q: "기억하다", a: "se souvenir"}, {q: "잊어버리다", a: "oublier"}, {q: "이해하다", a: "comprendre"},
    {q: "모르다", a: "ne pas savoir"}, {q: "알다", a: "savoir"}, {q: "원하다", a: "vouloir"}, {q: "필요하다", a: "avoir besoin"}, {q: "기다리다", a: "attendre"},
    {q: "돕다", a: "aider"}, {q: "부탁하다", a: "demander une faveur"}, {q: "약속하다", a: "promettre"}, {q: "사랑하다", a: "aimer (amour)"}, {q: "싸우다", a: "se disputer"},
    {q: "친절하다", a: "être gentil"}, {q: "착하다", a: "être bon"}, {q: "나쁘다", a: "être mauvais"}, {q: "이상하다", a: "être bizarre"}, {q: "똑똑하다", a: "être intelligent"},

    // --- TRAVAIL & ÉTUDES (30) ---
    {q: "직업", a: "métier"}, {q: "공부", a: "étude"}, {q: "숙제", a: "devoirs"}, {q: "시험", a: "examen"}, {q: "질문", a: "question"},
    {q: "대답", a: "réponse"}, {q: "수업", a: "cours"}, {q: "대학교", a: "université"}, {q: "전공", a: "majeure (études)"}, {q: "졸업", a: "diplôme"},
    {q: "취직", a: "embauche"}, {q: "회의", a: "réunion"}, {q: "서류", a: "document"}, {q: "보고서", a: "rapport"}, {q: "출장", a: "voyage d'affaires"},
    {q: "월급", a: "salaire"}, {q: "사장님", a: "directeur"}, {q: "동료", a: "collègue"}, {q: "기술", a: "technologie"}, {q: "성공", a: "succès"},
    {q: "실패", a: "échec"}, {q: "열심히", a: "avec ardeur"}, {q: "바쁘다", a: "être occupé"}, {q: "쉬다", a: "se reposer"}, {q: "휴가", a: "vacances (travail)"},
    {q: "방학", a: "vacances (scolaires)"}, {q: "사무실", a: "bureau (pièce)"}, {q: "회의실", a: "salle de réunion"}, {q: "경찰", a: "police"}, {q: "요리사", a: "cuisinier"},

    // --- TEMPS & CALENDRIER (35) ---
    {q: "시간", a: ["temps","heure"]}, {q: "초", a: "seconde"}, {q: "날짜", a: "date"}, {q: "주", a: "semaine"}, {q: "달", a: ["mois","lune"]},
    {q: "년", a: "année"}, {q: "이번 주", a: "cette semaine"}, {q: "지난 주", a: "la semaine dernière"}, {q: "다음 주", a: "la semaine prochaine"}, {q: "주말", a: "week-end"},
    {q: "평일", a: "jours de la semaine"}, {q: "월요일", a: "lundi"}, {q: "화요일", a: "mardi"}, {q: "수요일", a: "mercredi"}, {q: "목요일", a: "jeudi"},
    {q: "금요일", a: "vendredi"}, {q: "토요일", a: "samedi"}, {q: "일요일", a: "dimanche"}, {q: "봄", a: "printemps"}, {q: "여름", a: "été"},
    {q: "가을", a: "automne"}, {q: "겨울", a: "hiver"}, {q: "매일", a: "chaque jour"},
    {q: "전혀", a: "jamais"}, {q: "아직", a: "pas encore"}, {q: "일찍", a: "tôt"},
    {q: "늦게", a: "tard"}, {q: "낮", a: "journée"}, {q: "새벽", a: "aube"}, {q: "오전", a: "matin (AM)"}, {q: "오후", a: "après-midi (PM)"},

    // --- LOISIRS & VOYAGES (30) ---
    {q: "취미", a: "hobby"}, {q: "여행", a: "voyage"}, {q: "음악", a: "musique"}, {q: "노래", a: "chanson"}, {q: "춤", a: "danse"},
    {q: "영화", a: "film"}, {q: "드라마", a: ["série","drama"]}, {q: "게임", a: "jeu"}, {q: "그림", a: ["dessin","peinture"]}, {q: "운동장", a: "terrain de sport"},
    {q: "수영장", a: "piscine"}, {q: "축구", a: "football"}, {q: "야구", a: "baseball"}, {q: "농구", a: "basketball"}, {q: "등산", a: "randonnée"},
    {q: "산책", a: "promenade"}, {q: "자전거", a: "vélo"}, {q: "쇼핑", a: "shopping"}, {q: "백화점", a: "grand magasin"}, {q: "시장", a: "marché"},
    {q: "영화관", a: "cinéma"}, {q: "박물관", a: "musée"}, {q: "미술관", a: "galerie d'art"}, {q: "바닷가", a: "bord de mer"}, {q: "공항", a: "aéroport"},
    {q: "여권", a: "passeport"}, {q: "비자", a: "visa"}, {q: "표", a: "billet"}, {q: "예약", a: "réservation"}, {q: "호텔", a: "hôtel"},

    // --- ADJECTIFS & DESCRIPTIONS (50) ---
    {q: "좋다", a: "être bien"}, {q: "싫다", a: "être détestable"}, {q: "많다", a: "être nombreux"}, {q: "적다", a: "être peu nombreux"}, {q: "비싸다", a: "être cher"},
    {q: "싸다", a: "être bon marché"}, {q: "멀다", a: "être loin"}, {q: "가깝다", a: "être proche"}, {q: "쉽다", a: "être facile"}, {q: "어렵다", a: ["être difficile","difficile"]},
    {q: "맵다", a: "être pimenté"}, {q: "짜다", a: "être salé"}, {q: "달다", a: "être sucré"}, {q: "시다", a: "être acide"}, {q: "쓰다", a: ["être amer","écrire","utiliser"]},
    {q: "싱겁다", a: "être fade"}, {q: "무겁다", a: "être lourd"}, {q: "가볍다", a: "être léger"}, {q: "빠르다", a: "être rapide"}, {q: "느리다", a: "être lent"},
    {q: "넓다", a: "être large"}, {q: "좁다", a: "être étroit"}, {q: "길다", a: "être long"}, {q: "짧다", a: "être court"}, {q: "높다", a: "être haut"},
    {q: "낮다", a: "être bas"}, {q: "깨끗하다", a: "être propre"}, {q: "더럽다", a: "être sale"}, {q: "조용하다", a: "être calme"}, {q: "시끄럽다", a: "être bruyant"},
    {q: "복잡하다", a: ["être complexe","bondé"]}, {q: "편하다", a: "être confortable"}, {q: "불편하다", a: "être inconfortable"}, {q: "위험하다", a: "être dangereux"}, {q: "안전하다", a: "être sûr"},
    {q: "중요하다", a: "être important"}, {q: "유명하다", a: "être célèbre"}, {q: "비슷하다", a: "être similaire"}, {q: "다르다", a: "être différent"}, {q: "같다", a: "être pareil"},
    {q: "어리다", a: "être jeune"}, {q: "젊다", a: "être jeune (adulte)"}, {q: "늙다", a: "être vieux"}, {q: "튼튼하다", a: "être solide"}, {q: "약하다", a: "être faible"},
    {q: "어둡다", a: "être sombre"}, {q: "딱딱하다", a: "être dur"}, {q: "부드럽다", a: ["être mou","doux"]}, {q: "강하다", a: "être fort"},

    // --- VERBES D'ACTION (50) ---
    {q: "만나다", a: "rencontrer"}, {q: "전화하다", a: "téléphoner"}, {q: "이야기하다", a: "bavarder"}, {q: "묻다", a: "demander"}, {q: "대답하다", a: "répondre"},
    {q: "주다", a: "donner"}, {q: "받다", a: "recevoir"}, {q: "빌리다", a: "emprunter"}, {q: "빌려주다", a: "prêter"}, {q: "보내다", a: "envoyer"},
    {q: "도착하다", a: "arriver"}, {q: "출발하다", a: "partir"}, {q: "앉다", a: "s'asseoir"}, {q: "서다", a: "se tenir debout"},
    {q: "눕다", a: "s'allonger"}, {q: "걷다", a: "marcher"}, {q: "뛰다", a: "courir"}, {q: "타다", a: "monter dans (transport)"}, {q: "내리다", a: "descendre de"},
    {q: "열다", a: "ouvrir"}, {q: "닫다", a: "fermer"}, {q: "켜다", a: "allumer"}, {q: "끄다", a: "éteindre"}, {q: "만들다", a: "fabriquer"},
    {q: "사용하다", a: "utiliser"}, {q: "청소하다", a: "nettoyer"}, {q: "빨래하다", a: "faire la lessive"}, {q: "요리하다", a: "cuisiner"},
    {q: "운전하다", a: "conduire"}, {q: "가르치다", a: "enseigner"}, {q: "준비하다", a: "(se) préparer"}, {q: "시작하다", a: "commencer"},
    {q: "끝나다", a: "finir"}, {q: "생기다", a: ["apparaître","se produire"]}, {q: "찾다", a: ["chercher","trouver"]}, {q: "잃어버리다", a: "perdre"}, {q: "팔다", a: "vendre"},
    {q: "지불하다", a: "payer"}, {q: "결정하다", a: "décider"}, {q: "노력하다", a: "faire des efforts"}, {q: "이기다", a: "gagner"},
    {q: "지다", a: "perdre (défaite)"}, {q: "울다", a: "pleurer"}, {q: "태어나다", a: "naître"}, {q: "죽다", a: "mourir"},

    // --- ADVERBES & MOTS DE LIAISON (40) ---
    {q: "진짜", a: "vraiment"}, {q: "정말", a: "réellement"}, {q: "아주", a: "très"}, {q: "매우", a: "extrêmement"}, {q: "가장", a: "le plus"},
    {q: "특히", a: "particulièrement"}, {q: "빨리", a: "vite"}, {q: "천천히", a: "lentement"},
    {q: "함께", a: "ensemble"}, {q: "혼자", a: "seul"}, {q: "먼저", a: "d'abord"}, {q: "나중에", a: "plus tard"}, {q: "벌써", a: "déjà"},
    {q: "갑자기", a: "soudainement"}, {q: "아마", a: "peut-être"}, {q: "절대로", a: "absolument pas"}, {q: "다시", a: ["encore","à nouveau"]}, {q: "항상", a: "toujours"},
    {q: "보통", a: "d'habitude"}, {q: "가끔", a: "parfois"}, {q: "자주", a: "souvent"}, {q: "그리고", a: ["et","ensuite"]}, {q: "하지만", a: "mais"},
    {q: "그래서", a: ["donc","c'est pourquoi"]}, {q: "그러면", a: "alors"}, {q: "그런데", a: ["au fait","cependant"]}, {q: "때문에", a: "à cause de"}, {q: "만약", a: "si (condition)"},
    {q: "같이", a: ["comme","avec"]}, {q: "서로", a: "l'un l'autre"}, {q: "대부분", a: "la plupart"}, {q: "전부", a: "tout"}, {q: "따로", a: "séparément"},
    {q: "이미", a: "déjà (fait)"}, {q: "드디어", a: "enfin"}, {q: "결국", a: "finalement"}, {q: "직접", a: "directement"}, {q: "반드시", a: "certainement"},
        
  ],
  arabe: [
    // --- LES BASES (20) ---
    {q: "مرحبا", a: "bonjour"}, {q: "شكرا", a: "merci"}, {q: "نعم", a: "oui"}, 
    {q: "لا", a: "non"}, {q: "من فضلك", a: "s'il vous plaît"}, {q: "عفوا", a: "pardon"},
    {q: "بكل سرور", a: "de rien"}, {q: "وداعا", a: "au revoir"}, {q: "أنا", a: "moi"},
    {q: "أنت", a: "toi"}, {q: "نحن", a: "nous"}, {q: "هذا", a: "ceci"},
    {q: "ذلك", a: "cela"}, {q: "ماذا", a: "quoi"},
    {q: "أين", a: "où"}, {q: "متى", a: "quand"}, {q: "لماذا", a: "pourquoi"},
    {q: "كيف", a: "comment"}, {q: "ربما", a: "peut-être"},

    // --- PERSONNES ET FAMILLE (15) ---
    {q: "عائلة", a: "famille"}, {q: "أب", a: "père"}, {q: "أم", a: "mère"},
    {q: "أخ", a: "frère"}, {q: "أخت", a: "sœur"}, {q: "ابن", a: "fils"},
    {q: "ابنة", a: "fille"}, {q: "طفل", a: "enfant"}, {q: "صديق", a: "ami"},
    {q: "رجل", a: ["homme","jambe"]}, {q: "امرأة", a: "femme"}, {q: "ولد", a: "garçon"},
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
    {q: "مدرسة", a: "école"}, {q: "عمل", a: ["travail","travailler"]}, {q: "مدينة", a: "ville"},
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
    {q: "بطيء", a: ["lent","lentement"]}, {q: "كثير", a: "beaucoup"}, {q: "قليل", a: "peu"},
    {q: "جديد", a: "nouveau"}, {q: "قديم", a: "vieux"},

    // --- LE CORPS ET LA SANTÉ (35) ---
    {q: "رأس", a: "tête"}, {q: "عين", a: "œil"}, {q: "أنف", a: "nez"}, {q: "فم", a: "bouche"}, {q: "أذن", a: "oreille"},
    {q: "وجه", a: "visage"}, {q: "يد", a: "main"}, {q: "قدم", a: "pied"}, {q: "ظهر", a: ["dos","midi"]},
    {q: "قلب", a: "cœur"}, {q: "دم", a: "sang"}, {q: "عقل", a: "esprit"}, {q: "صحة", a: "santé"}, {q: "مريض", a: "malade"},
    {q: "دواء", a: "médicament"}, {q: "ألم", a: "douleur"}, {q: "صيدلية", a: "pharmacie"}, {q: "إسعاف", a: "ambulance"}, {q: "وزن", a: "poids"},
    {q: "طويل", a: "grand (taille)"}, {q: "قصير", a: "petit (taille)"}, {q: "نحيف", a: "mince"}, {q: "سمين", a: "gros"}, {q: "جميل", a: "beau"},
    {q: "قوي", a: "fort"}, {q: "ضعيف", a: "faible"}, {q: "تعب", a: "fatigue"}, {q: "راحة", a: "repos"}, {q: "نوم", a: "sommeil"},
    {q: "ممرضة", a: "infirmière"}, {q: "علاج", a: "traitement"}, {q: "فحص", a: "examen"}, {q: "جسم", a: "corps"}, {q: "شعر", a: ["cheveux","ressentir"]},

    // --- NATURE ET MÉTÉO (35) ---
    {q: "سماء", a: "ciel"}, {q: "شمس", a: "soleil"}, {q: "قمر", a: "lune"}, {q: "نجم", a: "étoile"}, {q: "سحاب", a: "nuage"},
    {q: "مطر", a: "pluie"}, {q: "ثلج", a: "neige"}, {q: "ريح", a: "vent"}, {q: "بحر", a: "mer"}, {q: "نهر", a: "rivière"},
    {q: "جبل", a: "montagne"}, {q: "شجرة", a: "arbre"}, {q: "وردة", a: "fleur"}, {q: "غابة", a: "forêt"}, {q: "صحراء", a: "désert"},
    {q: "أرض", a: "terre"}, {q: "جزيرة", a: "île"}, {q: "طبيعة", a: "nature"}, {q: "حيوان", a: "animal"}, {q: "كلب", a: "chien"},
    {q: "قط", a: "chat"}, {q: "طائر", a: "oiseau"}, {q: "سمك", a: "poisson"}, {q: "حصان", a: "cheval"}, {q: "أسد", a: "lion"},
    {q: "جو", a: "climat"}, {q: "حار", a: "chaud"}, {q: "بارد", a: "froid"}, {q: "معتدل", a: "tempéré"}, {q: "مشمس", a: "ensoleillé"},
    {q: "غائم", a: "nuageux"}, {q: "عاصفة", a: "tempête"}, {q: "فضاء", a: "espace"}, {q: "كوكب", a: "planète"}, {q: "بيئة", a: "environnement"},

    // --- MAISON ET MOBILIER (40) ---
    {q: "غرفة", a: "chambre"}, {q: "باب", a: "porte"}, {q: "نافذة", a: "fenêtre"}, {q: "سرير", a: "lit"}, {q: "كرسي", a: "chaise"},
    {q: "مكتب", a: "bureau"}, {q: "خزانة", a: "armoire"}, {q: "مرآة", a: "miroir"}, {q: "مصباح", a: "lampe"}, {q: "سجادة", a: "tapis"},
    {q: "ستارة", a: "rideau"}, {q: "جدار", a: "mur"}, {q: "سقف", a: "plafond"}, {q: "أرضية", a: "sol"}, {q: "درج", a: "escalier"},
    {q: "مفتاح", a: "clé"}, {q: "قفل", a: "verrou"}, {q: "تلفاز", a: ["télévision","télé"]}, {q: "حاسوب", a: "ordinateur"}, {q: "ثلاجة", a: "frigo"},
    {q: "غسالة", a: "machine à laver"}, {q: "فرن", a: "four"}, {q: "صحن", a: "assiette"}, {q: "ملعقة", a: "cuillère"}, {q: "شوكة", a: "fourchette"},
    {q: "سكين", a: "couteau"}, {q: "كوب", a: "verre"}, {q: "صابون", a: "savon"}, {q: "منشفة", a: "serviette"}, {q: "فرشاة", a: "brosse"},
    {q: "حقيبة", a: "sac"}, {q: "صورة", a: "image"}, {q: "ساعة حائط", a: "horloge"}, {q: "رسالة", a: "lettre"}, {q: "ورقة", a: "papier"},
    {q: "قلم", a: "stylo"}, {q: "ممحة", a: "gomme"}, {q: "مسطرة", a: "règle"}, {q: "محفظة", a: "portefeuille"}, {q: "مظلة", a: "parapluie"},

    // --- VÊTEMENTS ET COULEURS (35) ---
    {q: "ملابس", a: "vêtements"}, {q: "قميص", a: "chemise"}, {q: "بنطلون", a: "pantalon"}, {q: "فستان", a: "robe"}, {q: "تنورة", a: "jupe"},
    {q: "معطف", a: "manteau"}, {q: "حذاء", a: "chaussures"}, {q: "جورب", a: "chaussette"}, {q: "قبعة", a: "chapeau"}, {q: "وشاح", a: "écharpe"},
    {q: "قفازات", a: "gants"}, {q: "نظارات", a: "lunettes"}, {q: "خاتم", a: "bague"}, {q: "ساعة يد", a: "montre"}, {q: "لون", a: "couleur"},
    {q: "أبيض", a: "blanc"}, {q: "أسود", a: "noir"}, {q: "أحمر", a: "rouge"}, {q: "أزرق", a: "bleu"}, {q: "أخضر", a: "vert"},
    {q: "أصفر", a: "jaune"}, {q: "برتقالي", a: "orange"}, {q: "بنفسجي", a: "violet"}, {q: "بني", a: "marron"}, {q: "رمادي", a: "gris"},
    {q: "وردي", a: "rose"}, {q: "ذهبي", a: "doré"}, {q: "فضي", a: "argenté"}, {q: "غامق", a: "foncé"}, {q: "فاتح", a: "clair"},
    {q: "حرير", a: "soie"}, {q: "قطن", a: "coton"}, {q: "جلد", a: "cuir"}, {q: "صوف", a: "laine"}, {q: "جمال", a: "beauté"},

    // --- TRAVAIL ET ÉDUCATION (35) ---
    {q: "مدير", a: "directeur"}, {q: "موظف", a: "employé"}, {q: "مهندس", a: "ingénieur"}, {q: "محامي", a: "avocat"}, {q: "محاسب", a: "comptable"},
    {q: "طالب", a: "étudiant"}, {q: "جامعة", a: "université"}, {q: "صف", a: "classe"}, {q: "درس", a: ["leçon","étudier"]}, {q: "امتحان", a: "examen"},
    {q: "شهادة", a: "diplôme"}, {q: "علم", a: "science"}, {q: "تاريخ", a: "histoire"}, {q: "رياضيات", a: "maths"}, {q: "لغة", a: "langue"},
    {q: "شركة", a: "entreprise"}, {q: "اجتماع", a: "réunion"}, {q: "تقرير", a: "rapport"}, {q: "مشروع", a: "projet"}, {q: "نجاح", a: "succès"},
    {q: "فشل", a: "échec"}, {q: "خبرة", a: "expérience"}, {q: "مهارة", a: "compétence"}, {q: "وظيفة", a: "poste"}, {q: "مكتبة", a: "bibliothèque"},
    {q: "قلم رصاص", a: "crayon"}, {q: "دفتر", a: "cahier"}, {q: "قاموس", a: "dictionnaire"}, {q: "ترجمة", a: "traduction"}, {q: "سؤال", a: "question"},
    {q: "جواب", a: "réponse"}, {q: "موضوع", a: "sujet"}, {q: "فكرة", a: "idée"}, {q: "بحث", a: ["recherche","chercher"]}, {q: "معلومات", a: "informations"},

    // --- TEMPS ET CALENDRIER (35) ---
    {q: "ثانية", a: "seconde"}, {q: "لحظة", a: "instant"}, {q: "صباح", a: "matin"}, {q: "مساء", a: "soir"},
    {q: "ليل", a: "nuit"}, {q: "فجر", a: "aube"}, {q: "موعد", a: "rendez-vous"}, {q: "عطلة", a: "vacances"}, {q: "نهاية الأسبوع", a: "week-end"},
    {q: "الاثنين", a: "lundi"}, {q: "الثلاثاء", a: "mardi"}, {q: "الأربعاء", a: "mercredi"}, {q: "الخميس", a: "jeudi"}, {q: "الجمعة", a: "vendredi"},
    {q: "السبت", a: "samedi"}, {q: "الأحد", a: "dimanche"}, {q: "فصل", a: "saison"}, {q: "الربيع", a: "printemps"}, {q: "الصيف", a: "été"},
    {q: "الخريف", a: "automne"}, {q: "الشتاء", a: "hiver"}, {q: "عيد ميلاد", a: "anniversaire"}, {q: "مستقبل", a: "futur"}, {q: "ماضي", a: "passé"},
    {q: "حاضر", a: "présent"}, {q: "دائما", a: "toujours"}, {q: "أحيانا", a: "parfois"}, {q: "أبدا", a: "jamais"}, {q: "غالبا", a: "souvent"},
    {q: "مبكر", a: "tôt"}, {q: "متأخر", a: "tard"}, {q: "بسرعة", a: ["vite","rapidement"]}, {q: "قريبا", a: "bientôt"},

    // --- ÉMOTIONS ET ÉTATS (35) ---
    {q: "سعيد", a: "heureux"}, {q: "حزين", a: "triste"}, {q: "غاضب", a: "colère"}, {q: "خائف", a: "peur"}, {q: "مندهش", a: "surpris"},
    {q: "مضحك", a: "drôle"}, {q: "ملل", a: "ennui"}, {q: "حب", a: "amour"}, {q: "كره", a: "haine"}, {q: "أمل", a: "espoir"},
    {q: "صبر", a: "patience"}, {q: "ذكاء", a: "intelligence"}, {q: "صدق", a: "honnêteté"}, {q: "كذب", a: "mensonge"}, {q: "شجاع", a: "courageux"},
    {q: "لطيف", a: "gentil"}, {q: "هادئ", a: "calme"}, {q: "قلق", a: "inquiétude"}, {q: "ثقة", a: "confiance"}, {q: "فخور", a: "fier"},
    {q: "خجل", a: "timidité"}, {q: "وحيد", a: "seul"}, {q: "مرتاح", a: "confortable"}, {q: "مهم", a: "important"}, {q: "ضروري", a: "nécessaire"},
    {q: "مستحيل", a: "impossible"}, {q: "ممكن", a: "possible"}, {q: "صحيح", a: "vrai"}, {q: "خطأ", a: "faux"}, {q: "واضح", a: "clair"},
    {q: "غريب", a: "étrange"}, {q: "مشهور", a: "célèbre"}, {q: "أمين", a: "fidèle"}, {q: "كريم", a: "généreux"}, {q: "بخيل", a: "avare"},

    // --- LOISIRS ET VOYAGES (30) ---
    {q: "سفر", a: "voyage"}, {q: "سياحة", a: "tourisme"}, {q: "فندق", a: "hôtel"}, {q: "جواز سفر", a: "passeport"}, {q: "تذكرة", a: "billet"},
    {q: "طائرة", a: "avion"}, {q: "مطار", a: "aéroport"}, {q: "متحف", a: "musée"}, {q: "حديقة", a: "parc"}, {q: "مقهى", a: "café (lieu)"},
    {q: "مطعم", a: "restaurant"}, {q: "سينما", a: "cinéma"}, {q: "موسيقى", a: "musique"}, {q: "رياضة", a: "sport"}, {q: "كرة القدم", a: "football"},
    {q: "سباحة", a: "natation"}, {q: "رقص", a: "danse"}, {q: "رسم", a: "dessin"}, {q: "تصوير", a: "photo (activité)"}, {q: "لعبة", a: "jeu"},
    {q: "قارب", a: "bateau"}, {q: "دراجة", a: "vélo"}, {q: "طريق", a: "route"}, {q: "جولة", a: "tournée"}, {q: "تخييم", a: "camping"},
    {q: "تسلق", a: "escalade"}, {q: "مغامرة", a: "aventure"}, {q: "هواية", a: "hobby"}, {q: "راديو", a: "radio"},

    // --- VERBES D'ACTION (60) ---
    {q: "فهم", a: "comprendre"}, {q: "عرف", a: "savoir"}, {q: "تعلم", a: "apprendre"},
    {q: "وجد", a: "trouver"}, {q: "أعطى", a: "donner"}, {q: "أخذ", a: "prendre"}, {q: "وضع", a: "mettre"}, {q: "حمل", a: "porter"},
    {q: "فتح", a: "ouvrir"}, {q: "أغلق", a: "fermer"}, {q: "بدأ", a: "commencer"}, {q: "انتهى", a: "finir"},
    {q: "لعب", a: "jouer"}, {q: "ساعد", a: "aider"}, {q: "سأل", a: "demander"}, {q: "أجاب", a: "répondre"}, {q: "تذكر", a: "se souvenir"},
    {q: "نسي", a: "oublier"}, {q: "أراد", a: "vouloir"}, {q: "استطاع", a: "pouvoir"}, {q: "ظن", a: "penser"},
    {q: "ضحك", a: "rire"}, {q: "بكى", a: "pleurer"}, {q: "انتظر", a: "attendre"}, {q: "حاول", a: "essayer"}, {q: "استخدم", a: "utiliser"},
    {q: "سافر", a: "voyager"}, {q: "مشى", a: "marcher"}, {q: "جرى", a: "courir"}, {q: "قفز", a: "sauter"}, {q: "جلس", a: "s'asseoir"},
    {q: "وقف", a: "s'arrêter"}, {q: "طبخ", a: "cuisiner"}, {q: "غسل", a: "laver"}, {q: "نظف", a: "nettoyer"}, {q: "رتب", a: "ranger"},
    {q: "بنى", a: "construire"}, {q: "كسر", a: "casser"}, {q: "أصلح", a: "réparer"}, {q: "باع", a: "vendre"}, {q: "دفع", a: "payer"},
    {q: "ربح", a: "gagner"}, {q: "خسر", a: "perdre"}, {q: "شرح", a: "expliquer"}, {q: "وعد", a: "promettre"}, {q: "قابل", a: "rencontrer"},
    {q: "اتصل", a: "appeler"}, {q: "أرسل", a: "envoyer"}, {q: "استقبل", a: "recevoir"}, {q: "غير", a: "changer"}, {q: "قرر", a: "décider"},
    {q: "وافق", a: "accepter"}, {q: "رفض", a: "refuser"}, {q: "شكر", a: "remercier"}, {q: "سكن", a: "habiter"}, {q: "تمنى", a: "espérer"},

    // --- ADVERBES ET CONNECTEURS (60) ---
    {q: "أيضا", a: "aussi"}, {q: "جدا", a: "très"}, {q: "معا", a: "ensemble"}, {q: "فقط", a: "seulement"}, {q: "بدون", a: "sans"},
    {q: "بين", a: "entre"}, {q: "تحت", a: "sous"}, {q: "فوق", a: "au-dessus"}, {q: "أمام", a: "devant"}, {q: "خلف", a: "derrière"},
    {q: "داخل", a: "dedans"}, {q: "خارج", a: "dehors"}, {q: "هنا", a: "ici"}, {q: "هناك", a: "là-bas"}, {q: "قبل", a: "avant"},
    {q: "بعد", a: "après"}, {q: "حتى", a: "jusqu'à"}, {q: "حول", a: "autour"}, {q: "أولاً", a: "premièrement"}, {q: "أخيراً", a: "enfin"},
    {q: "لكن", a: "mais"}, {q: "لأن", a: "parce que"}, {q: "إذاً", a: "donc"}, {q: "إذا", a: "si"}, {q: "مثل", a: "comme"},
    {q: "كل", a: "chaque"}, {q: "بعض", a: "certains"}, {q: "شيء", a: "quelque chose"}, {q: "شخص", a: "quelqu'un"}, {q: "لا أحد", a: "personne"},
    {q: "دائماً", a: "toujours"}, {q: "عادة", a: "d'habitude"}, {q: "مجددا", a: "encore"}, {q: "بالطبع", a: "bien sûr"}, {q: "حقا", a: "vraiment"},
    {q: "تقريبا", a: "presque"}, {q: "جيدا", a: "bien"}, {q: "سيئا", a: "mal"}, {q: "أكثر", a: "plus"},
    {q: "أقل", a: "moins"}, {q: "تماما", a: "complètement"}, {q: "ببطء", a: "lentement"}, {q: "بهدوء", a: "calmement"},
    {q: "بصعوبة", a: "difficilement"}, {q: "بسهولة", a: "facilement"}, {q: "فورا", a: "immédiatement"}, {q: "خاصة", a: "surtout"}, {q: "عن", a: ["sur","à propos de"]},
    {q: "إلى", a: "vers"}, {q: "من", a: ["de","depuis","qui"]}, {q: "في", a: "dans"}, {q: "بـ", a: ["avec","par"]}, {q: "لـ", a: "pour"},
    {q: "كـ", a: "comme"}, {q: "من أجل", a: "en faveur de"}, {q: "ضد", a: "contre"}, {q: "بسبب", a: "à cause de"}, {q: "رغم", a: "malgré"},
  ],
  russe: [
    // --- LES BASES (20) ---
    {q: "Привет", a: "salut"}, {q: "Спасибо", a: "merci"}, {q: "Да", a: "oui"}, 
    {q: "Нет", a: "non"}, {q: "Пожалуйста", a: "s'il vous plaît"}, {q: "Извините", a: "pardon"},
    {q: "Не за что", a: "de rien"}, {q: "До свидания", a: "au revoir"}, {q: "Я", a: "moi"},
    {q: "Ты", a: "toi"}, {q: "Мы", a: "nous"}, {q: "Это", a: "ceci"},
    {q: "То", a: "cela"}, {q: "Кто", a: "qui"}, {q: "Что", a: "quoi"},
    {q: "Где", a: "où"}, {q: "Когда", a: "quand"}, {q: "Почему", a: "pourquoi"},
    {q: "Как", a: ["comment","comme"]}, {q: "Может быть", a: "peut-être"},

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
    {q: "Новый", a: "nouveau"}, {q: "Старый", a: "vieux"},

    // --- LE CORPS ET LA SANTÉ (35) ---
    {q: "Голова", a: "tête"}, {q: "Глаз", a: "œil"}, {q: "Нос", a: "nez"}, {q: "Рот", a: "bouche"}, {q: "Ухо", a: "oreille"},
    {q: "Лицо", a: "visage"}, {q: "Рука", a: ["main","bras"]}, {q: "Нога", a: ["jambe","pied"]}, {q: "Спина", a: "dos"}, {q: "Живот", a: "ventre"},
    {q: "Сердце", a: "cœur"}, {q: "Кровь", a: "sang"}, {q: "Тело", a: "corps"}, {q: "Здоровье", a: "santé"}, {q: "Больной", a: "malade"},
    {q: "Лекарство", a: "médicament"}, {q: "Боль", a: "douleur"}, {q: "Аптека", a: "pharmacie"}, {q: "Зуб", a: "dent"}, {q: "Волосы", a: "cheveux"},
    {q: "Высокий", a: "grand (taille)"}, {q: "Низкий", a: "petit (taille)"}, {q: "Худой", a: "mince"}, {q: "Толстый", a: "gros"}, {q: "Красивый", a: "beau"},
    {q: "Сильный", a: "fort"}, {q: "Слабый", a: "faible"}, {q: "Усталость", a: "fatigue"}, {q: "Отдых", a: "repos"}, {q: "Сон", a: "sommeil"},
    {q: "Медсестра", a: "infirmière"}, {q: "Улыбка", a: "sourire"}, {q: "Очки", a: "lunettes"}, {q: "Горло", a: "gorge"}, {q: "Палец", a: "doigt"},

    // --- NATURE ET MÉTÉO (35) ---
    {q: "Небо", a: "ciel"}, {q: "Солнце", a: "soleil"}, {q: "Луна", a: "lune"}, {q: "Звезда", a: "étoile"}, {q: "Облако", a: "nuage"},
    {q: "Дождь", a: "pluie"}, {q: "Снег", a: "neige"}, {q: "Ветер", a: "vent"}, {q: "Море", a: "mer"}, {q: "Река", a: "rivière"},
    {q: "Гора", a: "montagne"}, {q: "Дерево", a: "arbre"}, {q: "Цветок", a: "fleur"}, {q: "Лес", a: "forêt"}, {q: "Земля", a: "terre"},
    {q: "Озеро", a: "lac"}, {q: "Природа", a: "nature"}, {q: "Животное", a: "animal"}, {q: "Собака", a: "chien"}, {q: "Кошка", a: "chat"},
    {q: "Птица", a: "oiseau"}, {q: "Рыба", a: "poisson"}, {q: "Лошадь", a: "cheval"}, {q: "Медведь", a: "ours"}, {q: "Погода", a: "météo"},
    {q: "Жарко", a: "chaud"}, {q: "Холодно", a: "froid"}, {q: "Тепло", a: ["doux","bon"]}, {q: "Свет", a: "lumière"}, {q: "Воздух", a: "air"},
    {q: "Мир", a: ["monde","paix"]}, {q: "Остров", a: "île"}, {q: "Камень", a: "pierre"}, {q: "Трава", a: "herbe"}, {q: "Огонь", a: "feu"},

    // --- MAISON ET QUOTIDIEN (45) ---
    {q: "Комната", a: ["chambre","pièce"]}, {q: "Дверь", a: "porte"}, {q: "Окно", a: "fenêtre"}, {q: "Кровать", a: "lit"}, {q: "Стул", a: "chaise"},
    {q: "Шкаф", a: "armoire"}, {q: "Зеркало", a: "miroir"}, {q: "Лампа", a: "lampe"}, {q: "Ковер", a: "tapis"}, {q: "Стена", a: "mur"},
    {q: "Пол", a: "sol"}, {q: "Потолок", a: "plafond"}, {q: "Ключ", a: "clé"}, {q: "Телевизор", a: "téléviseur"}, {q: "Компьютер", a: "ordinateur"},
    {q: "Холодильник", a: "frigo"}, {q: "Плита", a: "cuisinière"}, {q: "Тарелка", a: "assiette"}, {q: "Ложка", a: "cuillère"}, {q: "Вилка", a: "fourchette"},
    {q: "Нож", a: "couteau"}, {q: "Стакан", a: "verre"}, {q: "Чашка", a: "tasse"}, {q: "Мыло", a: "savon"}, {q: "Полотенце", a: "serviette"},
    {q: "Зубная щетка", a: "brosse à dents"}, {q: "Сумка", a: "sac"}, {q: "Картина", a: "tableau"}, {q: "Бумага", a: "papier"}, {q: "Карандаш", a: "crayon"},
    {q: "Ручка", a: "stylo"}, {q: "Тетрадь", a: "cahier"}, {q: "Словарь", a: "dictionnaire"}, {q: "Кошелек", a: "portefeuille"}, {q: "Зонт", a: "parapluie"},
    {q: "Почта", a: "poste"}, {q: "Письмо", a: "lettre"}, {q: "Посылка", a: "colis"}, {q: "Этаж", a: "étage"}, {q: "Лифт", a: "ascenseur"},
    {q: "Сосед", a: "voisin"}, {q: "Квартира", a: "appartement"}, {q: "Замок", a: ["château","serrure"]}, {q: "Сад", a: "jardin"}, {q: "Балкон", a: "balcon"},

    // --- VÊTEMENTS ET COULEURS (35) ---
    {q: "Одежда", a: "vêtements"}, {q: "Рубашка", a: "chemise"}, {q: "Брюки", a: "pantalon"}, {q: "Платье", a: "robe"}, {q: "Юбка", a: "jupe"},
    {q: "Пальто", a: "manteau"}, {q: "Обувь", a: "chaussures"}, {q: "Носки", a: "chaussettes"}, {q: "Шапка", a: "bonnet"}, {q: "Шарф", a: "écharpe"},
    {q: "Перчатки", a: "gants"}, {q: "Кольцо", a: "bague"}, {q: "Часы", a: "montre"}, {q: "Цвет", a: "couleur"}, {q: "Белый", a: "blanc"},
    {q: "Черный", a: "noir"}, {q: "Красный", a: "rouge"}, {q: "Синий", a: "bleu (foncé)"}, {q: "Голубой", a: "bleu (clair)"}, {q: "Зеленый", a: "vert"},
    {q: "Желтый", a: "jaune"}, {q: "Оранжевый", a: "orange"}, {q: "Фиолетовый", a: "violet"}, {q: "Коричневый", a: "marron"}, {q: "Серый", a: "gris"},
    {q: "Розовый", a: "rose"}, {q: "Золотой", a: "doré"}, {q: "Темный", a: "foncé"}, {q: "Светлый", a: "clair"}, {q: "Куртка", a: "veste"},
    {q: "Костюм", a: "costume"}, {q: "Карман", a: "poche"}, {q: "Ремень", a: "ceinture"}, {q: "Шелк", a: "soie"}, {q: "Хлопок", a: "coton"},

    // --- TRAVAIL ET ÉDUCATION (35) ---
    {q: "Директор", a: "directeur"}, {q: "Сотрудник", a: "employé"}, {q: "Инженер", a: "ingénieur"}, {q: "Юрист", a: ["juriste","avocat"]}, {q: "Ученик", a: "élève"},
    {q: "Студент", a: "étudiant"}, {q: "Университет", a: "université"}, {q: "Класс", a: "classe"}, {q: "Урок", a: "leçon"}, {q: "Экзамен", a: "examen"},
    {q: "Диплом", a: "diplôme"}, {q: "Наука", a: "science"}, {q: "История", a: "histoire"}, {q: "Математика", a: "maths"}, {q: "Язык", a: "langue"},
    {q: "Компания", a: "entreprise"}, {q: "Встреча", a: ["rendez-vous","réunion"]}, {q: "Отчет", a: "rapport"}, {q: "Проект", a: "projet"}, {q: "Успех", a: "succès"},
    {q: "Ошибка", a: "erreur"}, {q: "Опыт", a: "expérience"}, {q: "Навык", a: "compétence"}, {q: "Зарплата", a: "salaire"}, {q: "Библиотека", a: "bibliothèque"},
    {q: "Вопрос", a: "question"}, {q: "Ответ", a: "réponse"}, {q: "Тема", a: "sujet"}, {q: "Идея", a: "idée"}, {q: "Знание", a: "connaissance"},
    {q: "Пример", a: "exemple"}, {q: "Группа", a: "groupe"}, {q: "Помощь", a: "aide"}, {q: "Офис", a: "bureau"}, {q: "Завод", a: "usine"},

    // --- TEMPS ET CALENDRIER (35) ---
    {q: "Секунда", a: "seconde"}, {q: "Момент", a: "moment"}, {q: "Утро", a: "matin"}, {q: "Полдень", a: "midi"}, {q: "Вечер", a: "soir"},
    {q: "Ночь", a: "nuit"}, {q: "Рассвет", a: "aube"}, {q: "Свидание", a: "rendez-vous (galant)"}, {q: "Отпуск", a: "vacances (travail)"}, {q: "Каникулы", a: "vacances (scolaires)"},
    {q: "Понедельник", a: "lundi"}, {q: "Вторник", a: "mardi"}, {q: "Среда", a: "mercredi"}, {q: "Четверг", a: "jeudi"}, {q: "Пятница", a: "vendredi"},
    {q: "Суббота", a: "samedi"}, {q: "Воскресенье", a: "dimanche"}, {q: "Время года", a: "saison"}, {q: "Весна", a: "printemps"}, {q: "Лето", a: "été"},
    {q: "Осень", a: "automne"}, {q: "Зима", a: "hiver"}, {q: "День рождения", a: "anniversaire"}, {q: "Будущее", a: "futur"}, {q: "Прошлое", a: "passé"},
    {q: "Настоящее", a: "présent"}, {q: "Всегда", a: "toujours"}, {q: "Иногда", a: "parfois"}, {q: "Никогда", a: "jamais"}, {q: "Часто", a: "souvent"},
    {q: "Рано", a: "tôt"}, {q: "Поздно", a: "tard"}, {q: "Скоро", a: "bientôt"}, {q: "Снова", a: ["encore","à nouveau"]}, {q: "Вечность", a: "éternité"},

    // --- ÉMOTIONS ET ÉTATS (40) ---
    {q: "Счастливый", a: "heureux"}, {q: "Грустный", a: "triste"}, {q: "Злой", a: ["méchant","en colère"]}, {q: "Страх", a: "peur"}, {q: "Радость", a: "joie"},
    {q: "Удивление", a: "surprise"}, {q: "Смешной", a: "drôle"}, {q: "Скука", a: "ennui"}, {q: "Любовь", a: "amour"}, {q: "Ненависть", a: "haine"},
    {q: "Надежда", a: "espoir"}, {q: "Терпение", a: "patience"}, {q: "Умный", a: "intelligent"}, {q: "Честный", a: "honnête"}, {q: "Смелый", a: "courageux"},
    {q: "Добрый", a: ["gentil","bon"]}, {q: "Тихий", a: ["calme","silencieux"]}, {q: "Громкий", a: "bruyant"}, {q: "Важный", a: "important"}, {q: "Нужный", a: "nécessaire"},
    {q: "Невозможный", a: "impossible"}, {q: "Возможный", a: "possible"}, {q: "Правда", a: "vérité"}, {q: "Ложь", a: "mensonge"}, {q: "Странный", a: "étrange"},
    {q: "Известный", a: "célèbre"}, {q: "Свободный", a: "libre"}, {q: "Занятый", a: "occupé"}, {q: "Готовый", a: "prêt"}, {q: "Опасный", a: "dangereux"},
    {q: "Безопасный", a: ["sûr","en sécurité"]}, {q: "Дорогой", a: "cher"}, {q: "Дешевый", a: "bon marché"}, {q: "Интересный", a: "intéressant"}, {q: "Тяжелый", a: ["lourd","difficile"]},
    {q: "Легкий", a: ["léger","facile"]}, {q: "Чистый", a: "propre"}, {q: "Грязный", a: "sale"}, {q: "Мягкий", a: ["mou","doux"]}, {q: "Твердый", a: "dur"},

    // --- LOISIRS ET VOYAGES (30) ---
    {q: "Путешествие", a: "voyage"}, {q: "Туризм", a: "tourisme"}, {q: "Отель", a: "hôtel"}, {q: "Паспорт", a: "passeport"}, {q: "Билет", a: "billet"},
    {q: "Самолет", a: "avion"}, {q: "Аэропорт", a: "aéroport"}, {q: "Музей", a: "musée"}, {q: "Парк", a: "parc"}, {q: "Кафе", a: "café (lieu)"},
    {q: "Ресторан", a: "restaurant"}, {q: "Кино", a: "cinéma"}, {q: "Музыка", a: "musique"}, {q: "Спорт", a: "sport"}, {q: "Футбол", a: "football"},
    {q: "Плавание", a: "natation"}, {q: "Танцы", a: "danse"}, {q: "Рисование", a: "dessin"}, {q: "Игра", a: "jeu"}, {q: "Корабль", a: "bateau"},
    {q: "Велосипед", a: "vélo"}, {q: "Дорога", a: "route"}, {q: "Экскурсия", a: "excursion"}, {q: "Хобби", a: "hobby"}, {q: "Фотография", a: "photo"},
    {q: "Песня", a: "chanson"}, {q: "Гитара", a: "guitare"}, {q: "Театр", a: "théâtre"}, {q: "Памятник", a: "monument"}, {q: "Центр", a: "centre"},

    // --- VERBES D'ACTION (60) ---
    {q: "Понимать", a: "comprendre"}, {q: "Знать", a: "savoir"}, {q: "Учить", a: ["apprendre","enseigner"]}, {q: "Искать", a: "chercher"}, {q: "Найти", a: "trouver"},
    {q: "Давать", a: "donner"}, {q: "Брать", a: "prendre"}, {q: "Положить", a: ["poser","mettre"]}, {q: "Нести", a: "porter"}, {q: "Открыть", a: "ouvrir"},
    {q: "Закрыть", a: "fermer"}, {q: "Начинать", a: "commencer"}, {q: "Кончать", a: "finir"}, {q: "Работать", a: "travailler"}, {q: "Играть", a: "jouer"},
    {q: "Помогать", a: "aider"}, {q: "Спрашивать", a: "demander"}, {q: "Отвечать", a: "répondre"}, {q: "Помнить", a: "se souvenir"}, {q: "Забыть", a: "oublier"},
    {q: "Хотеть", a: "vouloir"}, {q: "Мочь", a: "pouvoir"}, {q: "Думать", a: "penser"}, {q: "Чувствовать", a: "ressentir"}, {q: "Смеяться", a: "rire"},
    {q: "Плакать", a: "pleurer"}, {q: "Ждать", a: "attendre"}, {q: "Пробовать", a: "essayer"}, {q: "Использовать", a: "utiliser"}, {q: "Ехать", a: "aller (véhicule)"},
    {q: "Бежать", a: "courir"}, {q: "Прыгать", a: "sauter"}, {q: "Сидеть", a: "être assis"}, {q: "Стоять", a: "être debout"}, {q: "Готовить", a: ["cuisiner","préparer"]},
    {q: "Мыть", a: "laver"}, {q: "Чистить", a: "nettoyer"}, {q: "Строить", a: "construire"}, {q: "Ломать", a: "casser"}, {q: "Чинить", a: "réparer"},
    {q: "Продавать", a: "vendre"}, {q: "Платить", a: "payer"}, {q: "Выигрывать", a: "gagner"}, {q: "Проигрывать", a: "perdre (jeu)"}, {q: "Объяснять", a: "expliquer"},
    {q: "Обещать", a: "promettre"}, {q: "Встречать", a: "rencontrer"}, {q: "Звонить", a: ["appeler","sonner"]}, {q: "Посылать", a: "envoyer"}, {q: "Получать", a: "recevoir"},
    {q: "Менять", a: "changer"}, {q: "Решать", a: ["décider","résoudre"]}, {q: "Любить", a: "aimer"}, {q: "Жить", a: "vivre"}, {q: "Умирать", a: "mourir"},
    {q: "Петь", a: "chanter"}, {q: "Танцевать", a: "danser"}, {q: "Рисовать", a: "dessiner"}, {q: "Верить", a: "croire"}, {q: "Надеяться", a: "espérer"},

    // --- ADVERBES ET CONNECTEURS (50) ---
    {q: "Тоже", a: "aussi"}, {q: "Очень", a: "très"}, {q: "Вместе", a: "ensemble"}, {q: "Только", a: "seulement"}, {q: "Без", a: "sans"},
    {q: "Между", a: "entre"}, {q: "Под", a: "sous"}, {q: "Над", a: "au-dessus"}, {q: "Перед", a: "devant"}, {q: "За", a: "derrière"},
    {q: "Внутри", a: "dedans"}, {q: "Снаружи", a: "dehors"}, {q: "Здесь", a: "ici"}, {q: "Там", a: "là-bas"}, {q: "До", a: ["avant","jusqu'à"]},
    {q: "После", a: "après"}, {q: "Около", a: "près de"}, {q: "Сначала", a: "d'abord"}, {q: "Наконец", a: "enfin"}, {q: "Но", a: "mais"},
    {q: "Потому что", a: "parce que"}, {q: "Поэтому", a: "c'est pourquoi"}, {q: "Если", a: "si"}, {q: "Каждый", a: "chaque"},
    {q: "Некоторый", a: "certain"}, {q: "Что-то", a: "quelque chose"}, {q: "Кто-то", a: "quelqu'un"}, {q: "Никто", a: "personne"}, {q: "Опять", a: "encore"},
    {q: "Конечно", a: "bien sûr"}, {q: "Действительно", a: "vraiment"}, {q: "Почти", a: "presque"}, {q: "Хорошо", a: "bien (adv)"}, {q: "Плохо", a: "mal (adv)"},
    {q: "Больше", a: "plus"}, {q: "Меньше", a: "moins"}, {q: "Совсем", a: "tout à fait"}, {q: "Медленно", a: "lentement"}, {q: "Быстро", a: "vite"},
    {q: "Тихо", a: ["doucement","silencieusement"]}, {q: "Легко", a: "facilement"}, {q: "Трудно", a: "difficilement"}, {q: "Сразу", a: "tout de suite"}, {q: "Особенно", a: "surtout"},
    {q: "Для", a: "pour"}, {q: "С", a: "avec"}, {q: "О", a: "à propos de"}, {q: "От", a: ["de","depuis"]}, {q: "К", a: ["vers","chez"]},
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
    {q: "Atzo", a: "hier"}, {q: "Bihar", a: "demain"},
    {q: "Ordua", a: "heure"}, {q: "Minutua", a: "minute"},
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
    {q: "Berria", a: "nouveau"}, {q: "Zaharra", a: "vieux"},

    // --- LE CORPS ET LA SANTÉ (35) ---
    {q: "Burua", a: "tête"}, {q: "Begia", a: "œil"}, {q: "Sudurra", a: "nez"}, {q: "Ahoa", a: "bouche"}, {q: "Belarria", a: "oreille"},
    {q: "Aurpegia", a: "visage"}, {q: "Eskua", a: "main"}, {q: "Oina", a: "pied"}, {q: "Besoa", a: "bras"}, {q: "Hankaren", a: "jambe"},
    {q: "Bizkarra", a: "dos"}, {q: "Bihotza", a: "cœur"}, {q: "Odola", a: "sang"}, {q: "Gorputza", a: "corps"}, {q: "Gaixoa", a: "malade"},
    {q: "Botika", a: "médicament"}, {q: "Mina", a: "douleur"}, {q: "Farmazia", a: "pharmacie"}, {q: "Hortza", a: "dent"}, {q: "Ilea", a: "cheveux"},
    {q: "Argala", a: "mince"}, {q: "Potoloa", a: "gros"}, {q: "Polita", a: "joli"}, {q: "Indartsua", a: "fort"}, {q: "Ahula", a: "faible"},
    {q: "Nekatuta", a: "fatigué"}, {q: "Atseden", a: "repos"}, {q: "Loa", a: "sommeil"}, {q: "Erizaina", a: "infirmier"}, {q: "Irribarrea", a: "sourire"},
    {q: "Betaurrekoak", a: "lunettes"}, {q: "Eztarria", a: "gorge"}, {q: "Atzamarra", a: "doigt"}, {q: "Hezurra", a: "os"}, {q: "Azala", a: "peau"},

    // --- NATURE ET MÉTÉO (40) ---
    {q: "Zerua", a: "ciel"}, {q: "Eguzkia", a: "soleil"}, {q: "Ilargia", a: "lune"}, {q: "Izarra", a: "étoile"}, {q: "Hodeia", a: "nuage"},
    {q: "Euria", a: "pluie"}, {q: "Elurra", a: "neige"}, {q: "Haizea", a: "vent"}, {q: "Itsasoa", a: "mer"}, {q: "Ibaia", a: "rivière"},
    {q: "Mendia", a: "montagne"}, {q: "Zuhaitza", a: "arbre"}, {q: "Florea", a: "fleur"}, {q: "Basoa", a: "forêt"}, {q: "Lurra", a: "terre"},
    {q: "Aintzira", a: "lac"}, {q: "Natura", a: "nature"}, {q: "Animalia", a: "animal"}, {q: "Txakurra", a: "chien"}, {q: "Katua", a: "chat"},
    {q: "Txoria", a: "oiseau"}, {q: "Arraina", a: "poisson"}, {q: "Zaldia", a: "cheval"}, {q: "Hartza", a: "ours"}, {q: "Eguraldia", a: "météo"},
    {q: "Beroa", a: "chaud"}, {q: "Hotza", a: "froid"}, {q: "Airea", a: "air"}, {q: "Mundua", a: "monde"},
    {q: "Uhartea", a: "île"}, {q: "Harria", a: "pierre"}, {q: "Belarra", a: "herbe"}, {q: "Sua", a: "feu"}, {q: "Itsasertza", a: "côte"},
    {q: "Oihana", a: "jungle"}, {q: "Zelaia", a: "champ"}, {q: "Lorezaintza", a: "jardinage"}, {q: "Eguzkitsua", a: "ensoleillé"}, {q: "Hezea", a: "humide"},

    // --- MAISON ET QUOTIDIEN (45) ---
    {q: "Gela", a: ["chambre","pièce","classe"]}, {q: "Atea", a: "porte"}, {q: "Leihoa", a: "fenêtre"}, {q: "Ohea", a: "lit"}, {q: "Aulkia", a: "chaise"},
    {q: "Armairua", a: "armoire"}, {q: "Ispilua", a: "miroir"}, {q: "Lanpara", a: "lampe"}, {q: "Alfonbra", a: "tapis"}, {q: "Hormea", a: "mur"},
    {q: "Lurzorua", a: "sol"}, {q: "Sabai", a: "plafond"}, {q: "Giltza", a: "clé"}, {q: "Telebista", a: "télévision"}, {q: "Ordenagailua", a: "ordinateur"},
    {q: "Hozkailua", a: "frigo"}, {q: "Labea", a: "four"}, {q: "Platera", a: "assiette"}, {q: "Koilara", a: "cuillère"}, {q: "Sardexka", a: "fourchette"},
    {q: "Labana", a: "couteau"}, {q: "Edontzia", a: "verre"}, {q: "Kopa", a: "tasse"}, {q: "Xaboia", a: "savon"}, {q: "Toaila", a: "serviette"},
    {q: "Hortz-eskuila", a: "brosse à dents"}, {q: "Poltsa", a: "sac"}, {q: "Margolana", a: "tableau"}, {q: "Papera", a: "papier"}, {q: "Lapitza", a: "crayon"},
    {q: "Boligrafoa", a: "stylo"}, {q: "Koadernoa", a: "cahier"}, {q: "Hiztegia", a: "dictionnaire"}, {q: "Diru-zorroa", a: "portefeuille"}, {q: "Euritarakoa", a: "parapluie"},
    {q: "Posta", a: "poste"}, {q: "Gutuna", a: "lettre"}, {q: "Solairua", a: "étage"}, {q: "Igogailua", a: "ascenseur"}, {q: "Auzokoa", a: "voisin"},
    {q: "Etxebizitza", a: "appartement"}, {q: "Lorategia", a: "jardin"}, {q: "Balkoia", a: "balcon"}, {q: "Teilatua", a: "toit"}, {q: "Pasabidea", a: "couloir"},

    // --- VÊTEMENTS ET COULEURS (35) ---
    {q: "Arropa", a: "vêtement"}, {q: "Kamiseta", a: "t-shirt"}, {q: "Haltza", a: "chemise"}, {q: "Galtzak", a: "pantalon"}, {q: "Gona", a: "jupe"},
    {q: "Jantzia", a: "robe"}, {q: "Aburua", a: "manteau"}, {q: "Oinetakoak", a: "chaussures"}, {q: "Galtzerdiak", a: "chaussettes"}, {q: "Txapela", a: ["béret","bonnet"]},
    {q: "Bufanda", a: "écharpe"}, {q: "Eskularruak", a: "gants"}, {q: "Eraztuna", a: "bague"}, {q: "Erlojua", a: "montre"}, {q: "Kolorea", a: "couleur"},
    {q: "Zuria", a: "blanc"}, {q: "Beltza", a: "noir"}, {q: "Gorria", a: "rouge"}, {q: "Urdina", a: "bleu"}, {q: "Berdea", a: "vert"},
    {q: "Horia", a: "jaune"}, {q: "Laranja", a: "orange"}, {q: "Morea", a: "violet"}, {q: "Marroia", a: "marron"}, {q: "Grisa", a: "gris"},
    {q: "Arrosa", a: "rose"}, {q: "Urre-kolorea", a: "doré"}, {q: "Iluna", a: "foncé"}, {q: "Argia", a: ["clair","lumière","intelligent"]}, {q: "Jaka", a: "veste"},
    {q: "Gerrikoa", a: "ceinture"}, {q: "Zapi", a: "mouchoir"}, {q: "Zeta", a: "soie"}, {q: "Kotoia", a: "coton"}, {q: "Artilea", a: "laine"},

    // --- TRAVAIL ET ÉDUCATION (35) ---
    {q: "Zuzendaria", a: "directeur"}, {q: "Langilea", a: "employé"}, {q: "Ingeniaria", a: "ingénieur"}, {q: "Abokatua", a: "avocat"}, {q: "Ikaslea", a: "élève"},
    {q: "Unibertsitatea", a: "université"}, {q: "Ikasgaia", a: "leçon"}, {q: "Azterketa", a: "examen"}, {q: "Diploma", a: "diplôme"},
    {q: "Zientzia", a: "science"}, {q: "Historia", a: "histoire"}, {q: "Matematika", a: "maths"}, {q: "Hizkuntza", a: "langue"}, {q: "Enpresa", a: "entreprise"},
    {q: "Bilerak", a: "réunion"}, {q: "Txostena", a: "rapport"}, {q: "Proiektua", a: "projet"}, {q: "Arrakasta", a: "succès"}, {q: "Akatsa", a: "erreur"},
    {q: "Esperientzia", a: "expérience"}, {q: "Trebetasuna", a: "compétence"}, {q: "Soldata", a: "salaire"}, {q: "Liburutegia", a: "bibliothèque"}, {q: "Galdera", a: "question"},
    {q: "Erantzuna", a: "réponse"}, {q: "Gaia", a: "sujet"}, {q: "Ideia", a: "idée"}, {q: "Ezagutza", a: "connaissance"}, {q: "Adibidea", a: "exemple"},
    {q: "Taldea", a: "groupe"}, {q: "Laguntza", a: "aide"}, {q: "Bulegoa", a: "bureau"}, {q: "Lantegia", a: "usine"}, {q: "Idazkaria", a: "secrétaire"},

    // --- TEMPS ET CALENDRIER (40) ---
    {q: "Segundoa", a: "seconde"}, {q: "Une", a: "moment"}, {q: "Goiza", a: "matin"}, {q: "Eguerdia", a: "midi"}, {q: "Arratsaldea", a: "après-midi"},
    {q: "Ilunabarra", a: "soir"}, {q: "Gaua", a: "nuit"}, {q: "Eguna", a: "jour"}, {q: "Oporrak", a: "vacances"}, {q: "Asteburua", a: "week-end"},
    {q: "Astelehena", a: "lundi"}, {q: "Asteartea", a: "mardi"}, {q: "Asteazkena", a: "mercredi"}, {q: "Osteguna", a: "jeudi"}, {q: "Ostirala", a: "vendredi"},
    {q: "Larunbata", a: "samedi"}, {q: "Igandea", a: "dimanche"}, {q: "Urtaroa", a: "saison"}, {q: "Udaberria", a: "printemps"}, {q: "Uda", a: "été"},
    {q: "Udazkena", a: "automne"}, {q: "Negua", a: "hiver"}, {q: "Urtebetetzea", a: "anniversaire"}, {q: "Etorkizuna", a: "futur"}, {q: "Iragana", a: "passé"},
    {q: "Orain", a: ["présent","maintenant"]}, {q: "Beti", a: "toujours"}, {q: "Inoiz ez", a: "jamais"}, {q: "Maiz", a: "souvent"},
    {q: "Goiz", a: "tôt"}, {q: "Berandu", a: "tard"}, {q: "Laster", a: "bientôt"}, {q: "Berriro", a: "encore"}, {q: "Behin", a: "une fois"},
    {q: "Duela", a: "il y a"}, {q: "Gero", a: "après"}, {q: "Lehen", a: "avant"}, {q: "Bitartean", a: "pendant"}, {q: "Gaur egun", a: "de nos jours"},

    // --- ÉMOTIONS ET ÉTATS (40) ---
    {q: "Pozik", a: "heureux"}, {q: "Triste", a: "triste"}, {q: "Haserre", a: "en colère"}, {q: "Beldurra", a: "peur"}, {q: "Poza", a: "joie"},
    {q: "Harrituta", a: "surpris"}, {q: "Dibertigarria", a: "drôle"}, {q: "Aspertuta", a: "ennuyé"}, {q: "Maitasuna", a: "amour"}, {q: "Gorrotatu", a: "haine"},
    {q: "Itxaropena", a: "espoir"}, {q: "Pazientzia", a: "patience"}, {q: "Zintzoa", a: "honnête"}, {q: "Ausarta", a: "courageux"},
    {q: "Atsegina", a: "gentil"}, {q: "Isila", a: "silencieux"}, {q: "Zaratatsua", a: "bruyant"}, {q: "Garrantzitsua", a: "important"}, {q: "Beharrezkoa", a: "nécessaire"},
    {q: "Ezinezkoa", a: "impossible"}, {q: "Posiblea", a: "possible"}, {q: "Egia", a: "vérité"}, {q: "Geurrak", a: "mensonge"}, {q: "Mila", a: "étrange"},
    {q: "Ospetsua", a: "célèbre"}, {q: "Librea", a: "libre"}, {q: "Lanpetuta", a: "occupé"}, {q: "Prest", a: "prêt"}, {q: "Arriskutsua", a: "dangereux"},
    {q: "Segurua", a: "sûr"}, {q: "Garestia", a: "cher"}, {q: "Merkea", a: "bon marché"}, {q: "Interesgarria", a: "intéressant"}, {q: "Astuna", a: "lourd"},
    {q: "Arina", a: "léger"}, {q: "Garbia", a: "propre"}, {q: "Zikina", a: "sale"}, {q: "Biguna", a: "mou"}, {q: "Gogorra", a: "dur"},

    // --- LOISIRS ET VOYAGES (30) ---
    {q: "Bidaia", a: "voyage"}, {q: "Turismoa", a: "tourisme"}, {q: "Hotela", a: "hôtel"}, {q: "Pasaportea", a: "passeport"}, {q: "Txartela", a: "billet"},
    {q: "Hegazkina", a: "avion"}, {q: "Aireportua", a: "aéroport"}, {q: "Museoa", a: "musée"}, {q: "Parkea", a: "parc"}, {q: "Kafetegia", a: "café (lieu)"},
    {q: "Jatetxea", a: "restaurant"}, {q: "Zinema", a: "cinéma"}, {q: "Musika", a: "musique"}, {q: "Kirola", a: "sport"}, {q: "Futbola", a: "football"},
    {q: "Igeriketa", a: "natation"}, {q: "Dantza", a: "danse"}, {q: "Marrazketa", a: "dessin"}, {q: "Jolasa", a: "jeu"}, {q: "Itsasontzia", a: "bateau"},
    {q: "Bizikleta", a: "vélo"}, {q: "Bidea", a: "route"}, {q: "Irteera", a: "excursion"}, {q: "Zaletasuna", a: "hobby"}, {q: "Argazkia", a: "photo"},
    {q: "Abestia", a: "chanson"}, {q: "Gitarra", a: "guitare"}, {q: "Antzerkia", a: "théâtre"}, {q: "Monumentua", a: "monument"}, {q: "Zentroa", a: "centre"},

    // --- VERBES D'ACTION (60) ---
    {q: "Ulertu", a: "comprendre"}, {q: "Jakin", a: "savoir"}, {q: "Ikasi", a: "apprendre"}, {q: "Bilatu", a: "chercher"}, {q: "Aurkitu", a: "trouver"},
    {q: "Eman", a: "donner"}, {q: "Hartu", a: "prendre"}, {q: "Jarri", a: "mettre"}, {q: "Eraman", a: "porter"}, {q: "Iriki", a: "ouvrir"},
    {q: "Itxi", a: "fermer"}, {q: "Hasi", a: "commencer"}, {q: "Amaitu", a: "finir"}, {q: "Lan egin", a: "travailler"}, {q: "Jolastu", a: "jouer"},
    {q: "Lagundu", a: "aider"}, {q: "Galdetu", a: "demander"}, {q: "Erantzun", a: "répondre"}, {q: "Gogoratu", a: "se souvenir"}, {q: "Ahaztu", a: "oublier"},
    {q: "Nahi izan", a: "vouloir"}, {q: "Ahal izan", a: "pouvoir"}, {q: "Pentsatu", a: "penser"}, {q: "Sentitu", a: "ressentir"}, {q: "Barre egin", a: "rire"},
    {q: "Nidatu", a: "pleurer"}, {q: "Itxaron", a: ["attendre","espérer"]}, {q: "Saiatu", a: "essayer"}, {q: "Erabili", a: "utiliser"}, {q: "Gidatu", a: "conduire"},
    {q: "Korrika egin", a: "courir"}, {q: "Salto egin", a: "sauter"}, {q: "Eseri", a: "s'asseoir"}, {q: "Zutik egon", a: "être debout"}, {q: "Sukaldatu", a: "cuisiner"},
    {q: "Garbitu", a: "laver"}, {q: "Txukundu", a: ["nettoyer","ranger"]}, {q: "Eraiki", a: "construire"}, {q: "Hautsi", a: "casser"}, {q: "Konpondu", a: "réparer"},
    {q: "Saldu", a: "vendre"}, {q: "Ordaindu", a: "payer"}, {q: "Irabazi", a: "gagner"}, {q: "Galdu", a: "perdre"}, {q: "Azaldu", a: "expliquer"},
    {q: "Agindu", a: "promettre"}, {q: "Ezagutu", a: ["rencontrer","connaître"]}, {q: "Deitu", a: "appeler"}, {q: "Bidali", a: "envoyer"}, {q: "Jaso", a: "recevoir"},
    {q: "Aldatu", a: "changer"}, {q: "Erabaki", a: "décider"}, {q: "Maite izan", a: "aimer"}, {q: "Bizi izan", a: "vivre"}, {q: "Hil", a: "mourir"},
    {q: "Abestu", a: "chanter"}, {q: "Dantzatu", a: "danser"}, {q: "Marraztu", a: "dessiner"}, {q: "Sinetsi", a: "croire"},

    // --- ADVERBES ET CONNECTEURS (50) ---
    {q: "Era berean", a: "aussi"}, {q: "Oso", a: "très"}, {q: "Elkarrekin", a: "ensemble"}, {q: "Bakarrik", a: "seulement"}, {q: "Gabe", a: "sans"},
    {q: "Artean", a: "entre"}, {q: "Azpian", a: "sous"}, {q: "Gainean", a: "sur"}, {q: "Aurrean", a: "devant"}, {q: "Atzean", a: "derrière"},
    {q: "Barruan", a: "dedans"}, {q: "Kanpoan", a: "dehors"}, {q: "Hemen", a: "ici"}, {q: "Han", a: "là-bas"}, {q: "Arte", a: "jusqu'à"},
    {q: "Ondoren", a: "après"}, {q: "Hurbil", a: "près"}, {q: "Lehenik", a: "d'abord"}, {q: "Azkenean", a: "enfin"}, {q: "Baina", a: "mais"},
    {q: "Zeren", a: "parce que"}, {q: "Beraz", a: "donc"}, {q: "Ba-", a: "si (condition)"}, {q: "Bezala", a: "comme"}, {q: "Bakoitzak", a: "chaque"},
    {q: "Batzuetan", a: "parfois"}, {q: "Zerbait", a: "quelque chose"}, {q: "Norbaitek", a: "quelqu'un"}, {q: "Inor ez", a: "personne"}, {q: "Berriz", a: "de nouveau"},
    {q: "Noski", a: "bien sûr"}, {q: "Benetan", a: "vraiment"}, {q: "Ia", a: "presque"}, {q: "Ondo", a: "bien"}, {q: "Txarto", a: "mal"},
    {q: "Gehiago", a: "plus"}, {q: "Gutxiago", a: "moins"}, {q: "Guztiz", a: "complètement"}, {q: "Poliki", a: "lentement"}, {q: "Azkar", a: "vite"},
    {q: "Isilik", a: "silencieusement"}, {q: "Erraz", a: "facilement"}, {q: "Zail", a: "difficilement"}, {q: "Berehala", a: "tout de suite"}, {q: "Batez ere", a: "surtout"},
    {q: "Horregatik", a: "c'est pourquoi"}, {q: "Nahiz eta", a: "malgré"}, {q: "Hala ere", a: "pourtant"}, {q: "Geroago", a: "plus tard"}, {q: "Lehenago", a: "plus tôt"}
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
    {q: "Αργός", a: "lent"}, {q: "Λίγο", a: "peu"},
    {q: "Νέος", a: "nouveau"}, {q: "Παλαιός", a: "vieux"},

    // --- LE CORPS ET LA SANTÉ (35) ---
    {q: "Κεφάλι", a: "tête"}, {q: "Μάτι", a: "œil"}, {q: "Μύτη", a: "nez"}, {q: "Στόμα", a: "bouche"}, {q: "Αυτί", a: "oreille"},
    {q: "Πρόσωπο", a: "visage"}, {q: "Χέρι", a: ["main","bras"]}, {q: "Πόδι", a: ["jambe","pied"]}, {q: "Πλάτη", a: "dos"}, {q: "Στομάχι", a: "estomac"},
    {q: "Καρδιά", a: "cœur"}, {q: "Αίμα", a: "sang"}, {q: "Σώμα", a: "corps"}, {q: "Υγεία", a: "santé"}, {q: "Άρρωστος", a: "malade"},
    {q: "Φάρμακο", a: "médicament"}, {q: "Πόνος", a: "douleur"}, {q: "Φαρμακείο", a: "pharmacie"}, {q: "Δόντι", a: "dent"}, {q: "Μαλλιά", a: "cheveux"},
    {q: "Ψηλός", a: "grand (taille)"}, {q: "Κοντός", a: "petit (taille)"}, {q: "Παχύς", a: "gros"}, {q: "Όμορφος", a: "beau"},
    {q: "Δυνατός", a: "fort"}, {q: "Αδύναμος", a: "faible"}, {q: "Κούραση", a: "fatigue"}, {q: "Ξεκούραση", a: "repos"}, {q: "Ύπνος", a: "sommeil"},
    {q: "Νοσοκόμα", a: "infirmière"}, {q: "Χαμόγελο", a: "sourire"}, {q: "Γυαλιά", a: "lunettes"}, {q: "Λαιμός", a: ["cou","gorge"]}, {q: "Δάχτυλο", a: "doigt"},

    // --- NATURE ET MÉTÉO (40) ---
    {q: "Ουρανός", a: "ciel"}, {q: "Ήλιος", a: "soleil"}, {q: "Φεγγάρι", a: "lune"}, {q: "Αστέρι", a: "étoile"}, {q: "Σύννεφο", a: "nuage"},
    {q: "Βροχή", a: "pluie"}, {q: "Χιόνι", a: "neige"}, {q: "Άνεμος", a: "vent"}, {q: "Θάλασσα", a: "mer"}, {q: "Ποτάμι", a: "rivière"},
    {q: "Βουνό", a: "montagne"}, {q: "Δέντρο", a: "arbre"}, {q: "Λουλούδι", a: "fleur"}, {q: "Δάσος", a: "forêt"}, {q: "Γη", a: "terre"},
    {q: "Λίμνη", a: "lac"}, {q: "Φύση", a: "nature"}, {q: "Ζώο", a: "animal"}, {q: "Σκύλος", a: "chien"}, {q: "Γάτα", a: "chat"},
    {q: "Πουλί", a: "oiseau"}, {q: "Ψάρι", a: "poisson"}, {q: "Άλογο", a: "cheval"}, {q: "Καιρός", a: "météo"}, {q: "Ζέστη", a: "chaud"},
    {q: "Κρύο", a: "froid"}, {q: "Φως", a: "lumière"}, {q: "Αέρας", a: "air"}, {q: "Κόσμος", a: "monde"}, {q: "Νησί", a: "île"},
    {q: "Πέτρα", a: "pierre"}, {q: "Χόρτο", a: "herbe"}, {q: "Φωτιά", a: "feu"}, {q: "Άμμος", a: "sable"}, {q: "Κύμα", a: "vague"},
    {q: "Περιβάλλον", a: "environnement"}, {q: "κήπος", a: "jardin"}, {q: "Πλανήτης", a: "planète"}, {q: "Αστραπή", a: "éclair"}, {q: "Πεδιάδα", a: "plaine"},

    // --- MAISON ET QUOTIDIEN (45) ---
    {q: "Δωμάτιο", a: ["chambre","pièce"]}, {q: "Πόρτα", a: "porte"}, {q: "Παράθυρο", a: "fenêtre"}, {q: "Κρεβάτι", a: "lit"}, {q: "Καρέκλα", a: "chaise"},
    {q: "Ντουλάπα", a: "armoire"}, {q: "Καθρέφτης", a: "miroir"}, {q: "Λάμπα", a: "lampe"}, {q: "Χαλί", a: "tapis"}, {q: "Τοίχος", a: "mur"},
    {q: "Πάτωμα", a: "sol"}, {q: "Ταβάνι", a: "plafond"}, {q: "Κλειδί", a: "clé"}, {q: "Τηλεόραση", a: "téléviseur"}, {q: "Υπολογιστής", a: "ordinateur"},
    {q: "Ψυγείο", a: "frigo"}, {q: "Φούρνος", a: "four"}, {q: "Πιάτο", a: "assiette"}, {q: "Κουτάλι", a: "cuillère"}, {q: "Πιρούνι", a: "fourchette"},
    {q: "Μαχαίρι", a: "couteau"}, {q: "Ποτήρι", a: "verre"}, {q: "Φλιτζάνι", a: "tasse"}, {q: "Σαπούνι", a: "savon"}, {q: "Πετσέτα", a: "serviette"},
    {q: "Οδοντόβουρτσα", a: "brosse à dents"}, {q: "Τσάντα", a: "sac"}, {q: "Πίνακας", a: "tableau"}, {q: "Χαρτί", a: "papier"}, {q: "Μολύβι", a: "crayon"},
    {q: "Στυλό", a: "stylo"}, {q: "Τετράδιο", a: "cahier"}, {q: "Λεξικό", a: "dictionnaire"}, {q: "Πορτοφόλι", a: "portefeuille"}, {q: "Ομπρέλα", a: "parapluie"},
    {q: "Ταχυδρομείο", a: "poste"}, {q: "Γράμμα", a: "lettre"}, {q: "Όροφος", a: "étage"}, {q: "Ασανσέρ", a: "ascenseur"}, {q: "Γείτονας", a: "voisin"},
    {q: "Διαμέρισμα", a: "appartement"}, {q: "Στέγη", a: "toit"}, {q: "Μπαλκόνι", a: "balcon"}, {q: "Σκάλα", a: "escalier"}, {q: "Αυλή", a: "cour"},

    // --- VÊTEMENTS ET COULEURS (35) ---
    {q: "Ρούχα", a: "vêtements"}, {q: "Πουκάμισο", a: "chemise"}, {q: "Παντελόνι", a: "pantalon"}, {q: "Φόρεμα", a: "robe"}, {q: "Φούστα", a: "jupe"},
    {q: "Παλτό", a: "manteau"}, {q: "Παπούτσια", a: "chaussures"}, {q: "Κάλτσες", a: "chaussettes"}, {q: "Καπέλο", a: "chapeau"}, {q: "Κασκόλ", a: "écharpe"},
    {q: "Γάντια", a: "gants"}, {q: "Δαχτυλίδι", a: "bague"}, {q: "Ρολόι", a: "montre"}, {q: "Χρώμα", a: "couleur"}, {q: "Άσπρο", a: "blanc"},
    {q: "Μαύρο", a: "noir"}, {q: "Κόκκινο", a: "rouge"}, {q: "Μπλε", a: "bleu"}, {q: "Πράσινο", a: "vert"}, {q: "Κίτρινο", a: "jaune"},
    {q: "Πορτοκαλί", a: "orange"}, {q: "Μοβ", a: "violet"}, {q: "Καφέ", a: "marron"}, {q: "Γκρι", a: "gris"}, {q: "Ροζ", a: "rose"},
    {q: "Χρυσό", a: "doré"}, {q: "Ασημί", a: "argenté"}, {q: "Σκούρο", a: "foncé"}, {q: "Ανοιχτό", a: "clair"}, {q: "Μπουφάν", a: "veste"},
    {q: "Ζώνη", a: "ceinture"}, {q: "Μετάξι", a: "soie"}, {q: "Βαμβάκι", a: "coton"}, {q: "Μαλλί", a: "laine"}, {q: "Κοστούμι", a: "costume"},

    // --- TRAVAIL ET ÉDUCATION (35) ---
    {q: "Διευθυντής", a: "directeur"}, {q: "Υπάλληλος", a: "employé"}, {q: "Μηχανικός", a: "ingénieur"}, {q: "Δικηγόρος", a: "avocat"}, {q: "Μαθητής", a: "élève"},
    {q: "Φοιτητής", a: "étudiant"}, {q: "Πανεπιστήμιο", a: "université"}, {q: "Τάξη", a: "classe"}, {q: "Μάθημα", a: "leçon"}, {q: "Εξέταση", a: "examen"},
    {q: "Πτυχίο", a: "diplôme"}, {q: "Επιστήμη", a: "science"}, {q: "Ιστορία", a: "histoire"}, {q: "Μαθηματικά", a: "maths"}, {q: "Γλώσσα", a: "langue"},
    {q: "Εταιρεία", a: "entreprise"}, {q: "Συνάντηση", a: "réunion"}, {q: "Αναφορά", a: "rapport"}, {q: "Έργο", a: "projet"}, {q: "Επιτυχία", a: "succès"},
    {q: "Λάθος", a: "erreur"}, {q: "Εμπειρία", a: "expérience"}, {q: "Δεξιότητα", a: "compétence"}, {q: "Μισθός", a: "salaire"}, {q: "Βιβλιοθήκη", a: "bibliothèque"},
    {q: "Ερώτηση", a: "question"}, {q: "Απάντηση", a: "réponse"}, {q: "Θέμα", a: "sujet"}, {q: "Ιδέα", a: "idée"}, {q: "Γνώση", a: "connaissance"},
    {q: "Παράδειγμα", a: "exemple"}, {q: "Ομάδα", a: "groupe"}, {q: "Βοήθεια", a: "aide"}, {q: "Γραφείο", a: "bureau"}, {q: "Εργοστάσιο", a: "usine"},

    // --- TEMPS ET CALENDRIER (40) ---
    {q: "Δευτερόλεπτο", a: "seconde"}, {q: "Στιγμή", a: "moment"}, {q: "Πρωί", a: "matin"}, {q: "Μεσημέρι", a: "midi"}, {q: "Απόγευμα", a: "après-midi"},
    {q: "Βράδυ", a: "soir"}, {q: "Νύχτα", a: "nuit"}, {q: "Χαραυγή", a: "aube"}, {q: "Ραντεβού", a: "rendez-vous"}, {q: "Διακοπές", a: "vacances"},
    {q: "Δευτέρα", a: "lundi"}, {q: "Τρίτη", a: "mardi"}, {q: "Τετάρτη", a: "mercredi"}, {q: "Πέμπτη", a: "jeudi"}, {q: "Παρασκευή", a: "vendredi"},
    {q: "Σάββατο", a: "samedi"}, {q: "Κυριακή", a: "dimanche"}, {q: "Εποχή", a: "saison"}, {q: "Άνοιξη", a: "printemps"}, {q: "Καλοκαίρι", a: "été"},
    {q: "Φθινόπωρο", a: "automne"}, {q: "Χειμώνας", a: "hiver"}, {q: "Γενέθλια", a: "anniversaire"}, {q: "Μέλλον", a: "futur"}, {q: "Παρελθόν", a: "passé"},
    {q: "Παρόν", a: "présent"}, {q: "Πάντα", a: "toujours"}, {q: "Καμιά φορά", a: "parfois"}, {q: "Ποτέ", a: "jamais"}, {q: "Συχνά", a: "souvent"},
    {q: "Νωρίς", a: "tôt"}, {q: "Αργά", a: "tard"}, {q: "Σύντομα", a: "bientôt"}, {q: "Πάλι", a: "encore"}, {q: "Αιώνια", a: "éternité"},
    {q: "Πριν", a: "avant"}, {q: "Μετά", a: "après"}, {q: "Κατά τη διάρκεια", a: "pendant"}, {q: "Τέλος", a: "fin"}, {q: "Αρχή", a: "début"},

    // --- ÉMOTIONS ET ÉTATS (40) ---
    {q: "Ευτυχισμένος", a: "heureux"}, {q: "Λυπημένος", a: "triste"}, {q: "Θυμωμένος", a: "en colère"}, {q: "Φόβος", a: "peur"}, {q: "Χαρά", a: "joie"},
    {q: "Έκπληξη", a: "surprise"}, {q: "Αστείος", a: "drôle"}, {q: "Βαρεμάρα", a: "ennui"}, {q: "Αγάπη", a: "amour"}, {q: "Μίσος", a: "haine"},
    {q: "Ελπίδα", a: "espoir"}, {q: "Υπομονή", a: "patience"}, {q: "Έξυπνος", a: "intelligent"}, {q: "Ειλικρινής", a: "honnête"}, {q: "Γενναίος", a: "courageux"},
    {q: "Ευγενικός", a: "gentil"}, {q: "Ήσυχος", a: "calme"}, {q: "Δυνατός (ήχος)", a: "bruyant"}, {q: "Σημαντικός", a: "important"}, {q: "Απαραίτητος", a: "nécessaire"},
    {q: "Αδύνατος", a: ["impossible","mince"]}, {q: "Πιθανός", a: "possible"}, {q: "Αλήθεια", a: "vérité"}, {q: "Ψέμα", a: "mensonge"}, {q: "Περίεργος", a: "étrange"},
    {q: "Διάσημος", a: "célèbre"}, {q: "Ελεύθερος", a: "libre"}, {q: "Απασχολημένος", a: "occupé"}, {q: "Έτοιμος", a: "prêt"}, {q: "Επικίνδυνος", a: "dangereux"},
    {q: "Ασφαλής", a: "sûr"}, {q: "Ακριβός", a: "cher"}, {q: "Φτηνός", a: "bon marché"}, {q: "Ενδιαφέρων", a: "intéressant"}, {q: "Βαρύς", a: "lourd"},
    {q: "Ελαφρύς", a: "léger"}, {q: "Καθαρός", a: "propre"}, {q: "Βρώμικος", a: "sale"}, {q: "Μαλακός", a: "mou"}, {q: "Σκληρός", a: "dur"},

    // --- LOISIRS ET VOYAGES (30) ---
    {q: "Ταξίδι", a: "voyage"}, {q: "Τουρισμός", a: "tourisme"}, {q: "Ξενοδοχείο", a: "hôtel"}, {q: "Διαβατήριο", a: "passeport"}, {q: "Εισιτήριο", a: "billet"},
    {q: "Αεροπλάνο", a: "avion"}, {q: "Αεροδρόμιο", a: "aéroport"}, {q: "Μουσείο", a: "musée"}, {q: "Πάρκο", a: "parc"}, {q: "Καφετέρια", a: "café (lieu)"},
    {q: "Εστιατόριο", a: "restaurant"}, {q: "Κινηματογράφος", a: "cinéma"}, {q: "Μουσική", a: "musique"}, {q: "Αθλητισμός", a: "sport"}, {q: "Ποδόσφαιρο", a: "football"},
    {q: "Κολύμπι", a: "natation"}, {q: "Χορός", a: "danse"}, {q: "Ζωγραφική", a: "dessin"}, {q: "Παιχνίδι", a: "jeu"}, {q: "Πλοίο", a: "bateau"},
    {q: "Ποδήλατο", a: "vélo"}, {q: "Εκδρομή", a: "excursion"}, {q: "Χόμπι", a: "hobby"}, {q: "Φωτογραφία", a: "photo"}, {q: "Τραγούδι", a: "chanson"},
    {q: "Κιθάρα", a: "guitare"}, {q: "Θέατρο", a: "théâtre"}, {q: "Μνημείο", a: "monument"}, {q: "Κέντρο", a: "centre"}, {q: "Χάρτης", a: "carte"},

    // --- VERBES D'ACTION (60) ---
    {q: "Καταλαβαίνω", a: "comprendre"}, {q: "Ξέρω", a: "savoir"}, {q: "Μαθαίνω", a: "apprendre"}, {q: "Ψάχνω", a: "chercher"}, {q: "Βρίσκω", a: "trouver"},
    {q: "Δίνω", a: "donner"}, {q: "Παίρνω", a: "prendre"}, {q: "Βάζω", a: "mettre"}, {q: "Μεταφέρω", a: "porter"}, {q: "Ανοίγω", a: "ouvrir"},
    {q: "Κλείνω", a: "fermer"}, {q: "Αρχίζω", a: "commencer"}, {q: "Τελειώνω", a: "finir"}, {q: "Δουλεύω", a: "travailler"}, {q: "Παίζω", a: "jouer"},
    {q: "Βοηθάω", a: "aider"}, {q: "Ρωτάω", a: "demander"}, {q: "Απαντάω", a: "répondre"}, {q: "Θυμάμαι", a: "se souvenir"}, {q: "Ξεχνάω", a: "oublier"},
    {q: "Θέλω", a: "vouloir"}, {q: "Μπορώ", a: "pouvoir"}, {q: "Σκέφτομαι", a: "penser"}, {q: "Νιώθω", a: "ressentir"}, {q: "Γελάω", a: "rire"},
    {q: "Κλαίω", a: "pleurer"}, {q: "Περιμένω", a: "attendre"}, {q: "Δοκιμάζω", a: "essayer"}, {q: "Χρησιμοποιώ", a: "utiliser"}, {q: "Οδηγώ", a: "conduire"},
    {q: "Τρέχω", a: "courir"}, {q: "Πηδάω", a: "sauter"}, {q: "Κάθομαι", a: "s'asseoir"}, {q: "Στέκομαι", a: "être debout"}, {q: "Μαγειρεύω", a: "cuisiner"},
    {q: "Πλένω", a: "laver"}, {q: "Καθαρίζω", a: "nettoyer"}, {q: "Χτίζω", a: "construire"}, {q: "Σπάω", a: "casser"}, {q: "Διορθώνω", a: "réparer"},
    {q: "Πουλάω", a: "vendre"}, {q: "Πληρώνω", a: "payer"}, {q: "Κερδίζω", a: "gagner"}, {q: "Χάνω", a: "perdre"}, {q: "Εξηγώ", a: "expliquer"},
    {q: "Υπόσχομαι", a: "promettre"}, {q: "Συναντώ", a: "rencontrer"}, {q: "Τηλεφωνώ", a: "appeler"}, {q: "Στέλνω", a: "envoyer"}, {q: "Λαμβάνω", a: "recevoir"},
    {q: "Αλλάζω", a: "changer"}, {q: "Αποφασίζω", a: "décider"}, {q: "Αγαπώ", a: "aimer"}, {q: "Ζω", a: "vivre"}, {q: "Πεθαίνω", a: "mourir"},
    {q: "Τραγουδάω", a: "chanter"}, {q: "Χορεύω", a: "danser"}, {q: "Ζωγραφίζω", a: "dessiner"}, {q: "Πιστεύω", a: "croire"}, {q: "Ελπίζω", a: "espérer"},

    // --- ADVERBES ET CONNECTEURS (45) ---
    {q: "Επίσης", a: "aussi"}, {q: "Πολύ", a: ["très","beaucoup"]}, {q: "Μαζί", a: "ensemble"}, {q: "Μόνο", a: "seulement"}, {q: "Χωρίς", a: "sans"},
    {q: "Μεταξύ", a: "entre"}, {q: "Κάτω από", a: "sous"}, {q: "Πάνω από", a: "au-dessus"}, {q: "Μπροστά", a: "devant"}, {q: "Πίσω", a: "derrière"},
    {q: "Μέσα", a: "dedans"}, {q: "Έξω", a: "dehors"}, {q: "Εδώ", a: "ici"}, {q: "Εκεί", a: "là-bas"}, {q: "Μέχρι", a: "jusqu'à"},
    {q: "Αλλά", a: "mais"}, {q: "Επειδή", a: "parce que"}, {q: "Επομένως", a: "donc"}, {q: "Αν", a: "si"}, {q: "Όπως", a: "comme"},
    {q: "Κάθε", a: "chaque"}, {q: "Κάτι", a: "quelque chose"}, {q: "Κάποιος", a: "quelqu'un"}, {q: "Κανείς", a: "personne"}, {q: "Φυσικά", a: "bien sûr"},
    {q: "Πραγματικά", a: "vraiment"}, {q: "Σχεδόν", a: "presque"}, {q: "Καλά", a: "bien"}, {q: "Άσχημα", a: "mal"}, {q: "Περισσότερο", a: "plus"},
    {q: "Λιγότερο", a: "moins"}, {q: "Εντελώς", a: "complètement"}, {q: "Σιγά", a: "lentement"}, {q: "Γρήγορα", a: "vite"}, {q: "Αμέσως", a: "immédiatement"},
    {q: "Για", a: "pour"}, {q: "Με", a: "avec"}, {q: "Σχετικά με", a: "à propos de"}, {q: "Από", a: ["de","depuis"]}, {q: "Προς", a: "vers"},
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
    {q: "सड़क", a: ["rue","route"]}, {q: "गाड़ी", a: "voiture"}, {q: "बस", a: "bus"},
    {q: "ट्रेन", a: "train"}, {q: "स्टेशन", a: "gare"}, {q: "दुकान", a: "magasin"},
    {q: "अस्पताल", a: "hôpital"}, {q: "शौचालय", a: "toilettes"}, {q: "किताब", a: "livre"},
    {q: "फ़ोन", a: "téléphone"}, {q: "पैसा", a: "argent"}, {q: "समुद्र तट", a: "plage"},

    // --- VERBES ET ADJECTIFS (20) ---
    {q: "जाना", a: "aller"}, {q: "आना", a: "venir"}, {q: "देखना", a: "voir"},
    {q: "सुनना", a: "entendre"}, {q: "बोलना", a: "parler"}, {q: "करना", a: "faire"},
    {q: "खरीदना", a: "acheter"}, {q: "सोना", a: "dormir"}, {q: "लिखना", a: "écrire"},
    {q: "पढ़ना", a: "lire"}, {q: "बड़ा", a: "grand"}, {q: "छोटा", a: "petit"},
    {q: "अच्छा", a: "bon"}, {q: "बुरा", a: "mauvais"}, {q: "तेज़", a: "rapide"},
    {q: "धीरे", a: "lent"}, {q: "बहुत", a: "beaucoup"}, {q: "कम", a: ["peu","moins"]},
    {q: "नया", a: "nouveau"}, {q: "पुराना", a: "vieux"},

    // --- LE CORPS ET LA SANTÉ (35) ---
    {q: "सिर", a: "tête"}, {q: "आँख", a: "œil"}, {q: "नाक", a: "nez"}, {q: "मुँह", a: "bouche"}, {q: "कान", a: "oreille"},
    {q: "चेहरा", a: "visage"}, {q: "हाथ", a: ["main","bras"]}, {q: "पैर", a: ["pied","jambe"]}, {q: "पीठ", a: "dos"}, {q: "पेट", a: "ventre"},
    {q: "दिल", a: "cœur"}, {q: "खून", a: "sang"}, {q: "शरीर", a: "corps"}, {q: "स्वास्थ्य", a: "santé"}, {q: "बीमार", a: "malade"},
    {q: "दवा", a: "médicament"}, {q: "दर्द", a: "douleur"}, {q: "दवाखाना", a: "pharmacie"}, {q: "दाँत", a: "dent"}, {q: "बाल", a: "cheveux"},
    {q: "लंबा", a: "grand (taille)"}, {q: "नाटा", a: "petit (taille)"}, {q: "दुबला", a: "mince"}, {q: "मोटा", a: "gros"}, {q: "सुंदर", a: "beau"},
    {q: "मजबूत", a: "fort"}, {q: "कमजोर", a: "faible"}, {q: "थकान", a: "fatigue"}, {q: "आराम", a: "repos"}, {q: "नींद", a: "sommeil"},
    {q: "नर्स", a: "infirmière"}, {q: "मुस्कान", a: "sourire"}, {q: "चश्मा", a: "lunettes"}, {q: "गला", a: ["cou","gorge"]}, {q: "अंगुली", a: "doigt"},

    // --- NATURE ET MÉTÉO (40) ---
    {q: "आसमान", a: "ciel"}, {q: "सूरज", a: "soleil"}, {q: "चाँद", a: "lune"}, {q: "तारा", a: "étoile"}, {q: "बादल", a: "nuage"},
    {q: "बारिश", a: "pluie"}, {q: "बर्फ", a: ["neige","glace"]}, {q: "हवा", a: ["vent","air"]}, {q: "समुद्र", a: "mer"}, {q: "नदी", a: "rivière"},
    {q: "पहाड़", a: "montagne"}, {q: "पेड़", a: "arbre"}, {q: "फूल", a: "fleur"}, {q: "जंगल", a: "forêt"}, {q: "पृथ्वी", a: "terre (planète)"},
    {q: "झील", a: "lac"}, {q: "प्रकृति", a: "nature"}, {q: "जानवर", a: "animal"}, {q: "कुत्ता", a: "chien"}, {q: "बिल्ली", a: "chat"},
    {q: "पक्षी", a: "oiseau"}, {q: "मछली", a: "poisson"}, {q: "घोड़ा", a: "cheval"}, {q: "मौसम", a: "météo"}, {q: "गर्मी", a: ["chaud","été"]},
    {q: "ठंड", a: "froid"}, {q: "रोशनी", a: "lumière"}, {q: "दुनिया", a: "monde"}, {q: "द्वीप", a: "île"}, {q: "पत्थर", a: "pierre"},
    {q: "घास", a: "herbe"}, {q: "आग", a: "feu"}, {q: "रेत", a: "sable"}, {q: "लहर", a: "vague"}, {q: "बागीचा", a: "jardin"},
    {q: "पौधा", a: "plante"}, {q: "गाय", a: "vache"}, {q: "हाथी", a: "éléphant"}, {q: "शेर", a: "lion"}, {q: "धुआँ", a: "fumée"},

    // --- MAISON ET QUOTIDIEN (45) ---
    {q: "कमरा", a: ["chambre","pièce"]}, {q: "दरवाजा", a: "porte"}, {q: "खिड़की", a: "fenêtre"}, {q: "बिस्तर", a: "lit"}, {q: "कुर्सी", a: "chaise"},
    {q: "अलमारी", a: "armoire"}, {q: "आईना", a: "miroir"}, {q: "बत्ती", a: ["lampe","lumière"]}, {q: "कालीन", a: "tapis"}, {q: "दीवार", a: "mur"},
    {q: "फर्श", a: "sol"}, {q: "छत", a: ["plafond","toit"]}, {q: "चाबी", a: "clé"}, {q: "पर्दा", a: "rideau"}, {q: "कंप्यूटर", a: "ordinateur"},
    {q: "फ्रिज", a: "frigo"}, {q: "चूल्हा", a: "cuisinière"}, {q: "थाली", a: "assiette"}, {q: "चम्मच", a: "cuillère"}, {q: "काँटा", a: "fourchette"},
    {q: "चाकू", a: "couteau"}, {q: "गिलास", a: "verre"}, {q: "कप", a: "tasse"}, {q: "साबुन", a: "savon"}, {q: "तौलिया", a: "serviette"},
    {q: "टूथब्रश", a: "brosse à dents"}, {q: "बस्ता", a: "sac"}, {q: "चित्र", a: ["tableau","image"]}, {q: "कागज", a: "papier"}, {q: "पेन", a: "stylo"},
    {q: "पेंसिल", a: "crayon"}, {q: "कॉपी", a: "cahier"}, {q: "शब्दकोश", a: "dictionnaire"}, {q: "बटुआ", a: "portefeuille"}, {q: "छाता", a: "parapluie"},
    {q: "डाकघर", a: "poste"}, {q: "चिठ्ठी", a: "lettre"}, {q: "मंजिल", a: "étage"}, {q: "लिफ्ट", a: "ascenseur"}, {q: "पड़ोसी", a: "voisin"},
    {q: "फ्लैट", a: "appartement"}, {q: "ताला", a: "serrure"}, {q: "बालकनी", a: "balcon"}, {q: "सीढ़ी", a: "escalier"}, {q: "घड़ी", a: ["horloge","montre"]},

    // --- VÊTEMENTS ET COULEURS (35) ---
    {q: "कपड़े", a: "vêtements"}, {q: "कमीज", a: "chemise"}, {q: "पतलून", a: "pantalon"}, {q: "साड़ी", a: "sari"}, {q: "कोट", a: "manteau"},
    {q: "जूते", a: "chaussures"}, {q: "मोजे", a: "chaussettes"}, {q: "टोपी", a: "chapeau"}, {q: "स्कार्फ", a: "écharpe"}, {q: "दस्ताने", a: "gants"},
    {q: "अंगूठी", a: "bague"}, {q: "जेवर", a: "bijoux"}, {q: "रंग", a: "couleur"}, {q: "सफेद", a: "blanc"}, {q: "काला", a: "noir"},
    {q: "लाल", a: "rouge"}, {q: "नीला", a: "bleu"}, {q: "हरा", a: "vert"}, {q: "पीला", a: "jaune"}, {q: "नारंगी", a: "orange"},
    {q: "बैंगनी", a: "violet"}, {q: "भूरा", a: "marron"}, {q: "स्लेटी", a: "gris"}, {q: "गुलाबी", a: "rose"}, {q: "सुनहरा", a: "doré"},
    {q: "चाँदी जैसा", a: "argenté"}, {q: "गहरा", a: "foncé"}, {q: "हल्का", a: ["clair","léger"]}, {q: "रेशम", a: "soie"}, {q: "सूती", a: "coton"},
    {q: "ऊन", a: "laine"}, {q: "जेब", a: "poche"}, {q: "बेल्ट", a: "ceinture"}, {q: "धागा", a: "fil"},

    // --- TRAVAIL ET ÉDUCATION (35) ---
    {q: "प्रबंधक", a: "manager"}, {q: "कर्मचारी", a: "employé"}, {q: "इंजीनियर", a: "ingénieur"}, {q: "वकील", a: "avocat"}, {q: "छात्र", a: ["élève","étudiant"]},
    {q: "विश्वविद्यालय", a: "université"}, {q: "कक्षा", a: "classe"}, {q: "पाठ", a: "leçon"}, {q: "परीक्षा", a: "examen"}, {q: "डिग्री", a: "diplôme"},
    {q: "विज्ञान", a: "science"}, {q: "इतिहास", a: "histoire"}, {q: "गणित", a: "maths"}, {q: "भाषा", a: "langue"}, {q: "कंपनी", a: "entreprise"},
    {q: "बैठक", a: "réunion"}, {q: "रिपोर्ट", a: "rapport"}, {q: "परियोजना", a: "projet"}, {q: "सफलता", a: "succès"}, {q: "गलती", a: "erreur"},
    {q: "अनुभव", a: "expérience"}, {q: "कौशल", a: "compétence"}, {q: "वेतन", a: "salaire"}, {q: "पुस्तकालय", a: "bibliothèque"}, {q: "सवाल", a: "question"},
    {q: "जवाब", a: "réponse"}, {q: "विषय", a: "sujet"}, {q: "विचार", a: "idée"}, {q: "ज्ञान", a: "connaissance"}, {q: "उदाहरण", a: "exemple"},
    {q: "समूह", a: "groupe"}, {q: "मदद", a: "aide"}, {q: "कार्यालय", a: "bureau"}, {q: "कारखाना", a: "usine"}, {q: "व्यापार", a: "commerce"},

    // --- TEMPS ET CALENDRIER (40) ---
    {q: "सेकंड", a: "seconde"}, {q: "पल", a: "moment"}, {q: "सुबह", a: "matin"}, {q: "दोपहर", a: ["midi","après-midi"]}, {q: "शाम", a: "soir"},
    {q: "रात", a: "nuit"}, {q: "सवेरा", a: "aube"}, {q: "छुट्टियाँ", a: "vacances"}, {q: "सप्ताहांत", a: "week-end"}, {q: "सोमवार", a: "lundi"},
    {q: "मंगलवार", a: "mardi"}, {q: "बुधवार", a: "mercredi"}, {q: "गुरुवार", a: "jeudi"}, {q: "शुक्रवार", a: "vendredi"}, {q: "शनिवार", a: "samedi"},
    {q: "रविवार", a: "dimanche"}, {q: "ऋतु", a: "saison"}, {q: "वसंत", a: "printemps"}, {q: "पतझड़", a: "automne"},
    {q: "सर्दी", a: "hiver"}, {q: "जन्मदिन", a: "anniversaire"}, {q: "भविष्य", a: "futur"}, {q: "अतीत", a: "passé"}, {q: "वर्तमान", a: "présent"},
    {q: "हमेशा", a: "toujours"}, {q: "कभी-कभी", a: "parfois"}, {q: "कभी नहीं", a: "jamais"}, {q: "अक्सर", a: "souvent"}, {q: "जल्दी", a: "tôt"},
    {q: "देर", a: "tard"}, {q: "जल्द ही", a: "bientôt"}, {q: "फिर से", a: ["encore","à nouveau"]}, {q: "शुरुआत", a: "début"}, {q: "अंत", a: "fin"},
    {q: "पहले", a: "avant"}, {q: "बाद में", a: "après"}, {q: "दौरान", a: "pendant"}, {q: "तारीख", a: "date"}, {q: "समय", a: ["temps","heure"]},

    // --- ÉMOTIONS ET ÉTATS (40) ---
    {q: "खुश", a: "heureux"}, {q: "दुखी", a: "triste"}, {q: "गुस्सा", a: "en colère"}, {q: "डर", a: "peur"}, {q: "खुशी", a: "joie"},
    {q: "आश्चर्य", a: "surprise"}, {q: "मजेदार", a: "drôle"}, {q: "उबाऊ", a: "ennuyeux"}, {q: "प्यार", a: "amour"}, {q: "नफरत", a: "haine"},
    {q: "आशा", a: "espoir"}, {q: "धैर्य", a: "patience"}, {q: "बुद्धिमान", a: "intelligent"}, {q: "ईमानदार", a: "honnête"}, {q: "साहसी", a: "courageux"},
    {q: "दयालु", a: "gentil"}, {q: "शांत", a: "calme"}, {q: "शोर", a: "bruyant"}, {q: "महत्वपूर्ण", a: "important"}, {q: "जरूरी", a: "nécessaire"},
    {q: "असंभव", a: "impossible"}, {q: "संभव", a: "possible"}, {q: "सच", a: "vérité"}, {q: "झूठ", a: "mensonge"}, {q: "अजीब", a: "étrange"},
    {q: "प्रसिद्ध", a: "célèbre"}, {q: "आजाद", a: "libre"}, {q: "व्यस्त", a: "occupé"}, {q: "तैयार", a: "prêt"}, {q: "खतरनाक", a: "dangereux"},
    {q: "सुरक्षित", a: "sûr"}, {q: "महंगा", a: "cher"}, {q: "सस्ता", a: "bon marché"}, {q: "दिलचस्प", a: "intéressant"}, {q: "भारी", a: "lourd"},
    {q: "साफ", a: "propre"}, {q: "गंदा", a: "sale"}, {q: "मुलायम", a: ["mou","doux"]}, {q: "कठोर", a: "dur"},

    // --- LOISIRS ET VOYAGES (30) ---
    {q: "यात्रा", a: "voyage"}, {q: "पर्यटन", a: "tourisme"}, {q: "होटल", a: "hôtel"}, {q: "पासपोर्ट", a: "passeport"}, {q: "टिकट", a: "billet"},
    {q: "हवाई जहाज", a: "avion"}, {q: "हवाई अड्डा", a: "aéroport"}, {q: "संग्रहालय", a: "musée"}, {q: "पार्क", a: "parc"}, {q: "रेस्तरां", a: "restaurant"},
    {q: "सिनेमा", a: "cinéma"}, {q: "संगीत", a: "musique"}, {q: "खेल", a: ["sport","jeu"]}, {q: "क्रिकेट", a: "cricket"}, {q: "तैरना", a: "natation"},
    {q: "नृत्य", a: "danse"}, {q: "चित्रकारी", a: "dessin"}, {q: "नाव", a: "bateau"}, {q: "साइकिल", a: "vélo"},
    {q: "भ्रमण", a: "excursion"}, {q: "शौक", a: "hobby"}, {q: "फोटो", a: "photo"}, {q: "गाना", a: ["chanson","chanter"]}, {q: "गिटार", a: "guitare"},
    {q: "नाटक", a: "théâtre"}, {q: "नक्शा", a: "carte"}, {q: "झोला", a: "sac à dos"}, {q: "पहाड़ की चोटी", a: "sommet"}, {q: "बाजार", a: "marché"},

    // --- VERBES D'ACTION (60) ---
    {q: "समझना", a: "comprendre"}, {q: "जानना", a: "savoir"}, {q: "सीखना", a: "apprendre"}, {q: "ढूँढना", a: "chercher"}, {q: "मिलना", a: ["trouver","rencontrer"]},
    {q: "देना", a: "donner"}, {q: "लेना", a: "prendre"}, {q: "रखना", a: ["poser","garder"]}, {q: "लाना", a: "apporter"}, {q: "खोलना", a: "ouvrir"},
    {q: "बंद करना", a: "fermer"}, {q: "शुरू करना", a: "commencer"}, {q: "खत्म करना", a: "finir"}, {q: "काम करना", a: "travailler"}, {q: "खेलना", a: "jouer"},
    {q: "पूछना", a: "demander"}, {q: "बताना", a: ["dire","raconter"]}, {q: "याद करना", a: "se souvenir"}, {q: "भूलना", a: "oublier"}, {q: "चाहना", a: "vouloir"},
    {q: "सकना", a: "pouvoir"}, {q: "सोचना", a: "penser"}, {q: "महसूस करना", a: "ressentir"}, {q: "हँसना", a: "rire"}, {q: "रोना", a: "pleurer"},
    {q: "इंतजार करना", a: "attendre"}, {q: "कोशिश करना", a: "essayer"}, {q: "इस्तेमाल करना", a: "utiliser"}, {q: "चलाना", a: "conduire"}, {q: "दौड़ना", a: "courir"},
    {q: "कूदना", a: "sauter"}, {q: "बैठना", a: "s'asseoir"}, {q: "खड़े होना", a: "être debout"}, {q: "पकाना", a: "cuisiner"}, {q: "धोना", a: "laver"},
    {q: "साफ करना", a: "nettoyer"}, {q: "बनाना", a: ["faire","fabriquer"]}, {q: "बेचना", a: "vendre"}, {q: "पैसे देना", a: "payer"}, {q: "जीतना", a: "gagner"},
    {q: "हारना", a: "perdre"}, {q: "भेजना", a: "envoyer"}, {q: "पाना", a: "recevoir"}, {q: "बदलना", a: "changer"}, {q: "तय करना", a: "décider"},
    {q: "रहना", a: ["vivre","habiter"]}, {q: "मरना", a: "mourir"}, {q: "नाचना", a: "danser"},
    {q: "उठना", a: "se lever"}, {q: "चलना", a: "marcher"}, {q: "दिखाना", a: "montrer"}, {q: "बुलाना", a: "appeler"},

    // --- ADVERBES ET CONNECTEURS (50) ---
    {q: "भी", a: "aussi"}, {q: "और", a: "et"}, {q: "लेकिन", a: "mais"}, {q: "या", a: "ou"}, {q: "क्योंकि", a: "parce que"},
    {q: "इसलिए", a: ["donc","c'est pourquoi"]}, {q: "अगर", a: "si"}, {q: "जैसे", a: ["comme","par exemple"]}, {q: "बिल्कुल", a: "absolument"}, {q: "सिर्फ", a: "seulement"},
    {q: "बिना", a: "sans"}, {q: "के बीच", a: "entre"}, {q: "नीचे", a: ["sous","en bas"]}, {q: "ऊपर", a: ["sur","en haut"]}, {q: "सामने", a: "devant"},
    {q: "पीछे", a: "derrière"}, {q: "अंदर", a: "dedans"}, {q: "बाहर", a: "dehors"}, {q: "यहाँ", a: "ici"}, {q: "वहाँ", a: "là-bas"},
    {q: "तक", a: "jusqu'à"}, {q: "पास", a: "près"}, {q: "दूर", a: "loin"}, {q: "ज्यादा", a: "plus"},
    {q: "सचमुच", a: "vraiment"}, {q: "शायद ही", a: "presque pas"}, {q: "ठीक", a: ["bien","correct"]}, {q: "धीरे-धीरे", a: "lentement"}, {q: "तेजी से", a: "vite"},
    {q: "तुरंत", a: "immédiatement"}, {q: "खासकर", a: "surtout"}, {q: "के लिए", a: "pour"}, {q: "के साथ", a: "avec"}, {q: "बारे में", a: "à propos de"},
    {q: "से", a: ["de","par"]}, {q: "को", a: "à"}, {q: "पर", a: "sur"}, {q: "हर", a: "chaque"}, {q: "कुछ", a: ["quelque chose","quelques"]},
  ],
  egyptien: [
    // --- ÉLÉMENTS ET NATURE ---
    { q: "𓇳 (Râ)", a: "soleil"},
    { q: "𓇹 (Iah)", a: "lune" },
    { q: "𓈖 (Noun)", a: "eau" },
    { q: "𓇰 (Akhet)", a: "horizon" },
    { q: "𓇽 (Douat)", a: "monde souterrain" },
    
    // --- PERSONNES ---
    { q: "𓀀 (Zes)", a: "homme" },
    { q: "𓁐 (Set)", a: "femme" },
    { q: "𓊹 (Netjer)", a: "dieu" },
    { q: "𓋔 (Bit)", a: "roi" },
    { q: "𓀎 (Mesa)", a: "soldat" },

    // --- OBJETS ET LIEUX ---
    { q: "𓉐 (Per)", a: "maison" },
    { q: "layout (Het)", a: ["temple","château"] },
    { q: "𓂋 (Er)", a: "bouche" },
    { q: "𓌃 (Medou)", a: "parole" },
    { q: "𓏺 (Shesep)", a: "statue" },

    // --- SYMBOLES ET CONCEPTS ---
    { q: "𓋹 (Ankh)", a: "vie" },
    { q: "𓊽 (Djed)", a: "stabilité" },
    { q: "𓄣 (Ib)", a: "cœur" },
    { q: "𓆄 (Maât)", a: ["vérité","justice"] },
    { q: "𓅓 (Em)", a: ["dans","par"] }
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

/**
 * Vérifie les doublons dans l'objet DATA et renvoie mot + traduction
 */
/**
 * Vérifie les doublons et affiche les deux traductions pour comparaison
 */
function verifierDoublons(dataObj) {
    const rapport = { hasDuplicates: false, duplicatesFound: {} };

    for (const langue in dataObj) {
        const mots = dataObj[langue];
        const vus = new Map(); // Stocke "mot" -> "première traduction"
        const doublonsDansCetteLangue = [];

        mots.forEach(item => {
            if (vus.has(item.q)) {
                // On a trouvé un doublon ! 
                // On récupère la première traduction et on l'affiche à côté de la nouvelle
                doublonsDansCetteLangue.push({
                    mot: item.q,
                    traduction_1: vus.get(item.q), // La traduction déjà existante
                    traduction_2: item.a           // La nouvelle traduction trouvée
                });
            } else {
                vus.set(item.q, item.a);
            }
        });

        if (doublonsDansCetteLangue.length > 0) {
            rapport.hasDuplicates = true;
            rapport.duplicatesFound[langue] = doublonsDansCetteLangue;
        }
    }
    return rapport;
}

// Lancement de la vérification
const resultat = verifierDoublons(DATA);
if (resultat.hasDuplicates) {
    console.log("⚠️ COMPARAISON DES DOUBLONS :");
    console.log(JSON.stringify(resultat.duplicatesFound, null, 2));
} else {
    console.log("✅ Aucun doublon trouvé.");
}