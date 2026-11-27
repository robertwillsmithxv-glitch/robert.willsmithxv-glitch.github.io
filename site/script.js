// Change this value to 1 for Online or 0 for Offline.
const online = 1;
const GITHUB_RELEASE_ASSET_URL = "https://github.com/YOUR-GITHUB-USERNAME/YOUR-REPOSITORY/releases/download/v1.0/eaglercraft-26.2-fe8f1237-d6714264.zip";

function setGitHubReleaseDownloadUrl() {
    const downloadLink = document.querySelector("[data-github-release-download]");
    if (downloadLink) {
        downloadLink.href = GITHUB_RELEASE_ASSET_URL;
    }
}

// --- TAB LOGIC ---
function openTab(evt, tabName) {
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openTabByName(tabName) {
    const tabButton = Array.from(document.getElementsByClassName("tablinks"))
        .find(button => button.getAttribute("onclick")?.includes(`'${tabName}'`));
    if (tabButton) {
        openTab({ currentTarget: tabButton }, tabName);
    }
}

function openJoinTab(evt, panelName) {
    const panels = document.getElementsByClassName("join-panel");
    for (let i = 0; i < panels.length; i++) {
        panels[i].style.display = "none";
    }

    const tabs = document.getElementsByClassName("join-tab");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }

    document.getElementById(panelName).style.display = "block";
    evt.currentTarget.className += " active";
}

// --- COPY IP LOGIC ---
function copyToClipboard(inputId, buttonId) {
    let copyText = document.getElementById(inputId);
    let copyBtn = document.getElementById(buttonId);

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    const showCopied = () => {
        let originalText = copyBtn.innerText;
        copyBtn.innerText = "Copied!";
        copyBtn.style.backgroundColor = "#5cbb63";

        setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.style.backgroundColor = "";
        }, 2000);
    };

    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(copyText.value).then(showCopied);
    } else {
        copyText.select();
        document.execCommand("copy");
        showCopied();
    }
}

// --- SERVER STATUS CHECKER ---
function checkServerStatus() {
    const statusDot = document.getElementById('statusDot');
    const statusText = document.getElementById('statusText');
    const isOnline = online === 1;
    statusDot.className = isOnline ? 'status-dot online' : 'status-dot offline';
    statusText.innerText = isOnline
        ? (currentLang === 'en' ? 'Online' : 'En ligne')
        : (currentLang === 'en' ? 'Server Offline' : 'Serveur hors ligne');
    statusText.style.color = isOnline ? '#7bd77f' : '#f05252';
}

// --- TRANSLATION LOGIC ---
const translations = {
    en: {
        gameName: "MINECRAFT 1.21.11",
        subtitle: "Random survival multiplayer for a world worth exploring.",
        checkingStatus: "Checking server status...",
        navHome: "Overview",
        navJoin: "How to Join",
        navPlugins: "Plugins",
        navAlternatives: "Alternative Links",
        navRules: "Rules",
        homeTitle: "Welcome to Da SMP!",
        homeDesc: "Welcome to our Minecraft 1.21.11 survival server.",
        serverAddress: "Server Address",
        copyDesc: "Save both of these addresses in Eaglercraft so you can use whichever one connects.",
        addressNote: "The connection has a monthly data limit, so the address may need to change around the middle of the month. Add both links to your server list. If one does not connect, try the other one.",
        serverLinkOne: "Link 1",
        serverLinkTwo: "Link 2",
        copyBtn: "Copy",
        eaglercraftLink: "Eaglercraft link",
        javaLink: "Java link",
        bedrockLink: "Bedrock link",
        bedrockPort: "Bedrock port",
        compatibilityTitle: "Client compatibility",
        compatibilityDesc: "Clients older than 1.16 can connect, but blocks below Y=0 will not render because negative coordinates are a newer world feature.",
        commandsKicker: "Essentials",
        commandsTitle: "Commands",
        commandRtp: "Teleport randomly in the world you are currently in.",
        commandWarp: "Teleport to the server spawn.",
        commandTpa: "Request to teleport to another player.",
        commandTpahere: "Ask another player to come to you.",
        commandTpaccept: "Accept a teleport request.",
        commandTpdeny: "Decline a teleport request.",
        commandSethome: "Set a named home. You can set up to three homes.",
        commandHome: "Teleport to one of your saved homes.",
        commandChestSort: "Configure chest sorting.",
        pluginsKicker: "Server features",
        pluginsTitle: "Plugins & commands",
        veinMinerTitle: "Vein miner",
        veinMinerDesc: "Crouch while mining an ore or chopping a tree and it breaks instantly.",
        quickKicker: "Quick start",
        quickTitle: "Ready to play?",
        quickDesc: "Connect to Da SMP on Minecraft 1.21.11, register your account, and jump into the world.",
        joinSteps: "View join steps",
        joinEaglercraft: "Eaglercraft",
        joinJava: "Java",
        joinBedrock: "Bedrock",
        clientTitle: "Client",
        clientLaunch: "You can launch Eaglercraft 26.2 online:",
        launchEaglercraft: "Launch Eaglercraft 26.2",
        clientDownload: "Or download the client to your computer:",
        downloadLabel: "Download",
        javaGuideTitle: "Join with Java Edition",
        javaStep1: "Open Minecraft Java Edition and select <strong>Multiplayer</strong>.",
        javaStep2: "Choose <strong>Add Server</strong>. Enter <strong>Da SMP</strong> as the server name and <code>wap-chit.tun.ply.gg</code> as the server address, then save.",
        javaStep3: "Select Da SMP and click <strong>Join Server</strong>.",
        bedrockGuideTitle: "Join with Bedrock Edition",
        bedrockStep1: "Open Minecraft Bedrock Edition, choose <strong>Play</strong>, then open the <strong>Servers</strong> tab.",
        bedrockStep2: "Choose <strong>Add Server</strong>. Enter <strong>Da SMP</strong> as the server name, <code>wap-brotherhood.tun.ply.gg</code> as the server address, and <code>19132</code> as the port.",
        bedrockStep3: "Save the server, select it, and join.",
        joinKicker: "Get connected",
        joinTitle: "How to join Da SMP",
        step1Title: "Add the server",
        step1Desc1: "Open Eaglercraft and go to <strong>Multiplayer</strong>, then click <strong>Add Server</strong>.",
        step1Desc2: 'Name the server "Da SMP".',
        step1Desc3: "Paste <strong>wss://server.brumby-tone.ts.net/play</strong> into the server address box.",
        step2Title: "Register and log in",
        step2Desc: "Use a password command to protect your account and saved inventory.",
        authFirstTime: "First time joining?",
        authFirstDesc: "You must register a password. Type the following command (entering your password twice to confirm):",
        authNote: "You will be logged in automatically after registering.",
        authReturn: "Returning player?",
        authReturnDesc: "Whenever you join the server again, you must log in to play:",
        rulesKicker: "Community",
        rulesTitle: "Server rules",
        rulesDesc: "Keep Da SMP fun and playable for everyone.",
        alternativeKicker: "Backup addresses",
        alternativeTitle: "Alternative links",
        alternativeIntro: "These links are fallbacks for Eaglercraft. The main server link is preferred and should always be tried first.",
        firstHalf: "First half of the month",
        alternativePrimary: "Primary backup",
        secondHalf: "Second half of the month",
        alternativeSecondary: "Secondary backup",
        fallbackKicker: "Last resort",
        fallbackTitle: "Occasional emergency link",
        fallbackDesc: "There is only a small chance this backup is running, so only try it if neither of the links above works.",
        alternativeWarning: "Alternative addresses are not guaranteed to be online and may become unavailable.",
        rule1Title: "No massive explosions",
        rule1Desc: "Please do not explode 10,000 TNT or otherwise overwhelm the Raspberry Pi.",
        rule2Title: "Respect builds",
        rule2Desc: "Griefing and stealing are allowed, but respect other players and the builds they invested in.",
        rule3Title: "No cheating",
        rule3Desc: "Modified clients such as X-Ray, KillAura, or fly hacks will result in a ban.",
        rule4Title: "Be respectful",
        rule4Desc: "Keep the chat friendly and avoid toxic behavior."
    },
    fr: {
        gameName: "MINECRAFT 1.21.11",
        subtitle: "Survie multijoueur aléatoire dans un monde à explorer.",
        checkingStatus: "Vérification du statut...",
        navHome: "Accueil",
        navJoin: "Comment Rejoindre",
        navPlugins: "Plugins",
        navAlternatives: "Liens alternatifs",
        navRules: "Règles",
        homeTitle: "Bienvenue sur Da SMP !",
        homeDesc: "Bienvenue sur notre serveur de survie Minecraft 1.21.11.",
        serverAddress: "Adresse du Serveur",
        copyDesc: "Enregistrez ces deux adresses dans Eaglercraft et utilisez celle qui fonctionne.",
        addressNote: "La connexion a une limite de données mensuelle, donc l'adresse peut devoir changer vers le milieu du mois. Ajoutez les deux liens à votre liste de serveurs. Si l'un ne fonctionne pas, essayez l'autre.",
        serverLinkOne: "Lien 1",
        serverLinkTwo: "Lien 2",
        copyBtn: "Copier",
        eaglercraftLink: "Lien Eaglercraft",
        javaLink: "Lien Java",
        bedrockLink: "Lien Bedrock",
        bedrockPort: "Port Bedrock",
        compatibilityTitle: "Compatibilité des clients",
        compatibilityDesc: "Les clients plus anciens que la 1.16 peuvent se connecter, mais les blocs sous Y=0 ne s'afficheront pas car les coordonnées négatives sont une fonctionnalité ajoutée dans les versions plus récentes.",
        commandsKicker: "Essentiels",
        commandsTitle: "Commandes",
        commandRtp: "Se téléporter aléatoirement dans le monde où vous vous trouvez actuellement.",
        commandWarp: "Se téléporter au point d'apparition du serveur.",
        commandTpa: "Demander à se téléporter auprès d'un autre joueur.",
        commandTpahere: "Demander à un autre joueur de venir auprès de vous.",
        commandTpaccept: "Accepter une demande de téléportation.",
        commandTpdeny: "Refuser une demande de téléportation.",
        commandSethome: "Définir un point de retour nommé. Vous pouvez en créer jusqu'à trois.",
        commandHome: "Se téléporter vers l'un de vos points de retour enregistrés.",
        commandChestSort: "Configurer le tri des coffres.",
        pluginsKicker: "Fonctionnalités du serveur",
        pluginsTitle: "Plugins et commandes",
        veinMinerTitle: "Vein miner",
        veinMinerDesc: "Accroupissez-vous en minant un minerai ou en coupant un arbre pour qu'il se casse instantanément.",
        quickKicker: "Démarrage rapide",
        quickTitle: "Prêt à jouer ?",
        quickDesc: "Connectez-vous à Da SMP sur Minecraft 1.21.11, créez votre compte et rejoignez le monde.",
        joinSteps: "Voir les étapes",
        joinEaglercraft: "Eaglercraft",
        joinJava: "Java",
        joinBedrock: "Bedrock",
        clientTitle: "Client",
        clientLaunch: "Vous pouvez lancer Eaglercraft 26.2 en ligne :",
        launchEaglercraft: "Lancer Eaglercraft 26.2",
        clientDownload: "Ou téléchargez le client sur votre ordinateur :",
        downloadLabel: "Télécharger",
        javaGuideTitle: "Rejoindre avec Java Edition",
        javaStep1: "Ouvrez Minecraft Java Edition et sélectionnez <strong>Multijoueur</strong>.",
        javaStep2: "Choisissez <strong>Ajouter un serveur</strong>. Saisissez <strong>Da SMP</strong> comme nom du serveur et <code>wap-chit.tun.ply.gg</code> comme adresse, puis enregistrez.",
        javaStep3: "Sélectionnez Da SMP et cliquez sur <strong>Rejoindre le serveur</strong>.",
        bedrockGuideTitle: "Rejoindre avec Bedrock Edition",
        bedrockStep1: "Ouvrez Minecraft Bedrock Edition, choisissez <strong>Jouer</strong>, puis ouvrez l'onglet <strong>Serveurs</strong>.",
        bedrockStep2: "Choisissez <strong>Ajouter un serveur</strong>. Saisissez <strong>Da SMP</strong> comme nom du serveur, <code>wap-brotherhood.tun.ply.gg</code> comme adresse et <code>19132</code> comme port.",
        bedrockStep3: "Enregistrez le serveur, sélectionnez-le et rejoignez-le.",
        joinKicker: "Se connecter",
        joinTitle: "Comment rejoindre Da SMP",
        step1Title: "Ajouter le serveur",
        step1Desc1: "Ouvrez Eaglercraft, allez dans <strong>Multijoueur</strong>, puis cliquez sur <strong>Ajouter un serveur</strong>.",
        step1Desc2: 'Nommez le serveur "Da SMP".',
        step1Desc3: "Collez <strong>wss://server.brumby-tone.ts.net/play</strong> dans la case Adresse du serveur.",
        step2Title: "S'enregistrer et se connecter",
        step2Desc: "Utilisez une commande avec mot de passe pour protéger votre compte et votre inventaire.",
        authFirstTime: "Première connexion ?",
        authFirstDesc: "Vous devez enregistrer un mot de passe. Tapez la commande suivante (en entrant votre mot de passe deux fois) :",
        authNote: "Vous serez connecté automatiquement après l'enregistrement.",
        authReturn: "Joueur de retour ?",
        authReturnDesc: "À chaque fois que vous rejoignez le serveur, vous devez vous connecter pour jouer :",
        rulesKicker: "Communauté",
        rulesTitle: "Règles du serveur",
        rulesDesc: "Gardez Da SMP amusant et jouable pour tout le monde.",
        alternativeKicker: "Adresses de secours",
        alternativeTitle: "Liens alternatifs",
        alternativeIntro: "Ces liens sont des solutions de secours pour Eaglercraft. Le lien principal est préférable et doit toujours être essayé en premier.",
        firstHalf: "Première moitié du mois",
        alternativePrimary: "Sauvegarde principale",
        secondHalf: "Deuxième moitié du mois",
        alternativeSecondary: "Sauvegarde secondaire",
        fallbackKicker: "Dernier recours",
        fallbackTitle: "Lien d'urgence occasionnel",
        fallbackDesc: "Ce lien a peu de chances d'être actif : ne l'essayez que si aucun des liens précédents ne fonctionne.",
        alternativeWarning: "Les adresses alternatives ne sont pas garanties disponibles et peuvent devenir inutilisables.",
        rule1Title: "Pas d'explosions massives",
        rule1Desc: "Évitez d'exploser 10 000 TNT ou de surcharger le Raspberry Pi.",
        rule2Title: "Respectez les constructions",
        rule2Desc: "Le grief et le vol sont autorisés, mais respectez les joueurs et les constructions auxquelles ils ont consacré du temps.",
        rule3Title: "Pas de triche",
        rule3Desc: "Les clients modifiés comme X-Ray, KillAura ou les hacks de vol entraînent un bannissement.",
        rule4Title: "Soyez respectueux",
        rule4Desc: "Gardez le chat convivial et évitez les comportements toxiques."
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    // Trigger status text update to match new language
    checkServerStatus(); 
}

setGitHubReleaseDownloadUrl();

// Initialize status check on page load
window.onload = checkServerStatus;