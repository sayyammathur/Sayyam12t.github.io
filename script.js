// --- Helper ---
const $ = id => document.getElementById(id);

// --- 1. Element Declarations ---
const schoolName = $("schoolName");
const schoolCode = $("schoolCode");
const certTitle = $("certTitle");
const session = $("session");
const issueDate = $("issueDate");
const certText = $("certText");
const certTextBold = $("certTextBold");
const boldTitles = $("boldTitles");

const principalName = $("principalName");
const principalDesignation = $("principalDesignation");
const teacherName = $("teacherName");
const teacherDesignation = $("teacherDesignation");

const studentName = $("studentName");
const studentClass = $("studentClass");
const photoUpload = $("photoUpload");
const logoUpload = $("logoUpload");

const theme = $("theme");
const fontStyle = $("fontStyle");
const customBgUpload = $("customBgUpload");
const nameColor = $("nameColor");
const accentColor = $("accentColor");
const layoutOrder = $("layoutOrder");
const textAlign = $("textAlign");
const nameFontSize = $("nameFontSize");
const schoolFontSize = $("schoolFontSize");
const bodyFontSize = $("bodyFontSize");
const verticalGap = $("verticalGap");
const photoWidth = $("photoWidth");

const excelUpload = $("excelUpload");
const bulkNamesInput = $("bulkNamesInput");
const bulkPhotoUpload = $("bulkPhotoUpload");
const bulkFilesUpload = $("bulkFilesUpload");
const bulkIncludeDate = $("bulkIncludeDate");
const bulkStatus = $("bulkStatus");

const tabSingle = $("tabSingle");
const tabBulk = $("tabBulk");
const panelSingle = $("panelSingle");
const panelBulk = $("panelBulk");
const singleContainer = $("singleContainer");
const bulkContainer = $("bulkContainer");
const certTemplate = $("certTemplate");
const certificate = $("certificate");

const btnGenerateBulk = $("btnGenerateBulk");
const btnClearBulk = $("btnClearBulk");
const printBulkBtn = $("printBulkBtn");
const printBtn = $("printBtn");

const toggleAiBtn = $("toggleAiBtn");
const aiPanel = $("aiPanel");
const aiCategory = $("aiCategory");
const aiTone = $("aiTone");
const btnAiGenerate = $("btnAiGenerate");
const btnAiMagicNames = $("btnAiMagicNames");

const toggleSmartFill = $("toggleSmartFill");
const smartFillPanel = $("smartFillPanel");
const smartFillPrompt = $("smartFillPrompt");
const btnApplySmartFill = $("btnApplySmartFill");

const vSchoolName = $("vSchoolName");
const vSchoolCode = $("vSchoolCode");
const vCertTitle = $("vCertTitle");
const vStudentName = $("vStudentName");
const vStudentClass = $("vStudentClass");
const vIssueDate = $("vIssueDate");
const vCertText = $("vCertText");
const vPrincipalName = $("vPrincipalName");
const vPrincipalDesignation = $("vPrincipalDesignation");
const vTeacherName = $("vTeacherName");
const vTeacherDesignation = $("vTeacherDesignation");

const logoImg = $("logoImg");
const photoImg = $("photoImg");
const logoPlaceholder = $("logoPlaceholder");
const startPhoto = $("startPhoto");

// --- 2. State & Data ---
let currentLogoData = null;
let currentPhotoData = null;
let bulkData = [];
let bulkImages = {};

const smartFillScenarios = {
    science: {
        school: "NATIONAL ACADEMY OF SCIENCES",
        title: "SCIENCE EXCELLENCE AWARD",
        text: "In recognition of your exceptional curiosity and investigative skills demonstrated during the Annual Science Fair. Your innovative project and scientific inquiry have set a brilliant example for all students!",
        accent: "#0984e3",
        tone: "inspiring",
        bg: "sunny_school.png",
        order: "row",
        theme: "playful",
        font: "pop"
    },
    kids: {
        school: "LITTLE ANGELS KINDERGARTEN",
        title: "SUPER STAR AWARD",
        text: "For showing great courage, kindness, and curiosity in our classroom. You fill our school with joy and laughter every day. We are so proud of the little explorer you are becoming!",
        accent: "#ff7675",
        tone: "playful",
        bg: "playful_background.png",
        order: "row",
        theme: "playful",
        font: "kids"
    },
    math: {
        school: "ELITE MATHEMATICS INSTITUTE",
        title: "MATH WIZARD CERTIFICATE",
        text: "Awarded for outstanding speed and accuracy in numerical problem-solving. Your logic and mathematical intuition are truly remarkable! Keep exploring the infinite world of numbers.",
        accent: "#6c5ce7",
        tone: "formal",
        bg: "none",
        order: "row",
        theme: "classic",
        font: "bold"
    },
    attendance: {
        school: "DELHI WORLD PUBLIC SCHOOL, ASHTA",
        title: "100% ATTENDANCE AWARD",
        text: "Congratulations on your perfect attendance! Your commitment to being present every day and your enthusiasm for learning make our school a better place. You are a true role model!",
        accent: "#00b894",
        tone: "playful",
        bg: "rainbow_garden.png",
        order: "row-reverse",
        theme: "playful",
        font: "kids"
    },
    art: {
        school: "ACADEMY OF CREATIVE ARTS",
        title: "CREATIVE GENIUS AWARD",
        text: "For filling our classroom with color and imagination! Your unique artistic vision and creative spirit are a joy to behold. Never stop creating your beautiful masterpieces!",
        accent: "#fd79a8",
        tone: "playful",
        bg: "rainbow_garden.png",
        order: "row-reverse",
        theme: "playful",
        font: "hand"
    },
    sports: {
        school: "CHAMPIONS SPORTS ACADEMY",
        title: "ATHLETIC SUPERSTAR AWARD",
        text: "In recognition of your incredible energy, speed, and sportsmanship. You played with heart and showed everyone what teamwork really means. Keep running toward your dreams!",
        accent: "#d63031",
        tone: "inspiring",
        bg: "playful_background.png",
        order: "row",
        theme: "playful",
        font: "bold"
    },
    space: {
        school: "INTERGALACTIC SPACE AGENCY",
        title: "SPACE EXPLORER AWARD",
        text: "For demonstrating an out-of-this-world curiosity about the cosmos! Your stellar performance and cosmic curiosity make you a shining star in our galactic family. Keep reaching for the stars!",
        accent: "#a29bfe",
        tone: "inspiring",
        bg: "none",
        order: "row",
        theme: "space",
        font: "pop"
    },
    sea: {
        school: "OCEANIC DISCOVERY CENTER",
        title: "DEEP SEA DISCOVERY AWARD",
        text: "Awarded for diving deep into your studies and making a splash! Your thirst for knowledge is as deep as the ocean itself. Keep exploring the wonders of our world!",
        accent: "#00d2ff",
        tone: "inspiring",
        bg: "none",
        order: "row-reverse",
        theme: "sea",
        font: "serif"
    },
    default: {
        school: "EXCELLENCE INTERNATIONAL SCHOOL",
        title: "CERTIFICATE OF ACHIEVEMENT",
        text: "This certificate is awarded for showing great progress and effort in your daily activities. Your hard work and positive attitude are truly appreciated. Well done!",
        accent: "#116a4c",
        tone: "formal",
        bg: "none",
        order: "row",
        theme: "classic",
        font: "default"
    }
};

const aiPatterns = {
    graduation: {
        formal: "This certificate is awarded in recognition of the successful completion of graduation requirements. Your dedication and hard work have laid a strong foundation for your future academic pursuits.",
        playful: "Hip-hip-hooray! You've finished your big graduation day! We are so proud of the little star you've become. Keep shining bright and reaching for the moon!",
        inspiring: "The world is waiting for your light. As you graduate today, remember that every big dream begins with a small step. Your journey has only just begun."
    },
    sports: {
        formal: "Recognized for exceptional athletic performance and sportsmanship. Your commitment to teamwork and physical excellence serves as an inspiration to your peers.",
        playful: "Zoom! Fast as a cheetah and strong as a lion! You were a superstar on the field today. Great job being a champion and a great friend!",
        inspiring: "Strength doesn't just come from winning; it comes from never giving up. You showed the heart of a true champion today. Keep running toward your goals!"
    },
    academic: {
        formal: "Awarded for outstanding academic achievement and a demonstrated commitment to learning. Your curiosity and intellect have set a high standard of excellence.",
        playful: "Wow! You are one smart cookie! You worked so hard on your lessons and learned so many new things. You make learning look like fun!",
        inspiring: "Knowledge is a superpower, and you are becoming a hero! Your love for learning is your greatest gift. Keep asking questions and exploring the world."
    },
    art: {
        formal: "In recognition of your creative vision and artistic talents. Your work reflects a unique perspective and a high level of technical skill.",
        playful: "Splash! You turned a blank page into a world of color! Your drawings are magical and make everyone smile. Keep painting your dreams!",
        inspiring: "Creativity is the soul expressing itself. Your art brings beauty into our lives. Never stop creating, for your imagination has no limits."
    },
    behavior: {
        formal: "Commended for exemplary behavior, kindness, and leadership. Your positive attitude and respect for others contribute significantly to our community.",
        playful: "You have a heart of gold! Thank you for being such a wonderful friend, sharing your toys, and always having a big smile. You are a true sunshine student!",
        inspiring: "Kindness is the greatest wisdom. By being a good person, you make the world a better place every single day. Your character is your true strength."
    }
};

// --- Functions ---

function bindText() {
    if (vSchoolName) vSchoolName.textContent = schoolName.value.trim() || "SCHOOL NAME";
    if (vSchoolCode) vSchoolCode.textContent = schoolCode.value.trim() || "";
    if (vCertTitle) vCertTitle.textContent = (certTitle.value.trim() || "CERTIFICATE").toUpperCase();

    if (vStudentName) vStudentName.textContent = studentName.value.trim() || "STUDENT NAME";
    if (vStudentClass) vStudentClass.textContent = studentClass.value.trim() || "CLASS";
    if (vIssueDate) vIssueDate.textContent = issueDate.value.trim() || "";
    if (vCertText) {
        vCertText.innerHTML = certText.value.trim().replace(/\n/g, '<br>') || "";
        vCertText.style.fontWeight = certTextBold.checked ? "bold" : "normal";
    }
    applyDesignStyles(certificate);

    // Global Signatures
    if (vPrincipalName) vPrincipalName.textContent = principalName.value.trim();
    if (vPrincipalDesignation) vPrincipalDesignation.textContent = principalDesignation.value.trim();

    if (vTeacherName) vTeacherName.textContent = teacherName.value.trim();
    if (vTeacherDesignation) vTeacherDesignation.textContent = teacherDesignation.value.trim();
}

function applyDesignStyles(target) {
    if (!target) return;
    target.style.setProperty('--c-accent', accentColor.value);
    target.style.setProperty('--c-name', nameColor.value);
    target.style.setProperty('--n-size', nameFontSize.value + 'pt');
    target.style.setProperty('--s-size', schoolFontSize.value + 'pt');
    target.style.setProperty('--b-size', bodyFontSize.value + 'pt');
    target.style.setProperty('--v-gap', verticalGap.value + 'mm');
    target.style.setProperty('--p-width', photoWidth.value + 'mm');

    target.classList.remove('layout-normal', 'layout-reverse', 'align-left', 'align-center');
    target.classList.add(layoutOrder.value === 'row-reverse' ? 'layout-reverse' : 'layout-normal');
    target.classList.add(`align-${textAlign.value}`);
}

function setFontStyle() {
    certificate.classList.remove('font-serif', 'font-sans', 'font-script', 'font-classic', 'font-kids', 'font-hand', 'font-pop', 'font-bold');
    const fVal = fontStyle.value;
    if (fVal !== 'default') certificate.classList.add(`font-${fVal}`);
}

function setTheme() {
    const val = theme.value;
    certificate.classList.remove('theme-classic', 'theme-gold', 'theme-blue', 'theme-red', 'theme-playful');
    certificate.classList.add(`theme-${val}`);
}

function readImage(file, onLoad) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => onLoad(reader.result);
    reader.readAsDataURL(file);
}

function applyAiTheme(url, accent, order, themeVal = 'playful', fontVal = 'default') {
    certificate.style.setProperty('--bg-dynamic', url === 'none' ? 'none' : `url("${url}")`);
    accentColor.value = accent;
    layoutOrder.value = order;
    theme.value = themeVal;
    fontStyle.value = fontVal;

    setTheme();
    setFontStyle();
    bindText();
}

// --- Listeners ---
const inputList = [
    schoolName, schoolCode, certTitle, session, issueDate, certText,
    principalName, principalDesignation, teacherName, teacherDesignation,
    studentName, studentClass, certTextBold, boldTitles,
    nameFontSize, schoolFontSize, bodyFontSize, verticalGap,
    accentColor, nameColor, layoutOrder, textAlign, photoWidth
];

inputList.forEach(el => {
    if (el) el.addEventListener("input", bindText);
    if (el && (el.type === 'checkbox' || el.tagName === 'SELECT')) el.addEventListener("change", bindText);
});

if (theme) theme.addEventListener("change", setTheme);
if (fontStyle) fontStyle.addEventListener("change", setFontStyle);
if (printBtn) printBtn.addEventListener("click", () => window.print());
if (printBulkBtn) printBulkBtn.addEventListener("click", () => window.print());

if (boldTitles) boldTitles.addEventListener("change", bindText);
if (certTextBold) certTextBold.addEventListener("change", bindText);

if (customBgUpload) {
    customBgUpload.addEventListener("change", function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (re) {
                certificate.style.setProperty('--bg-dynamic', `url(${re.target.result})`);
                // Also store it for bulk use if needed, but for now just single preview
            };
            reader.readAsDataURL(file);
        }
    });
}

if (printBulkBtn) printBulkBtn.addEventListener("click", () => window.print());

// AI Assistant Logic
if (toggleSmartFill) {
    toggleSmartFill.addEventListener("click", () => {
        smartFillPanel.style.display = smartFillPanel.style.display === 'none' ? 'block' : 'none';
        toggleSmartFill.textContent = smartFillPanel.style.display === 'none' ? '🪄 AI Smart Fill' : 'Close AI Magic ✖';
    });
}

if (btnApplySmartFill) {
    btnApplySmartFill.addEventListener("click", () => {
        const prompt = smartFillPrompt.value.toLowerCase();
        let scenario = smartFillScenarios.default;

        if (prompt.includes("science")) scenario = smartFillScenarios.science;
        else if (prompt.includes("kids") || prompt.includes("fun") || prompt.includes("kindergarten")) scenario = smartFillScenarios.kids;
        else if (prompt.includes("math") || prompt.includes("calculate")) scenario = smartFillScenarios.math;
        else if (prompt.includes("attendance") || prompt.includes("present")) scenario = smartFillScenarios.attendance;
        else if (prompt.includes("art") || prompt.includes("color") || prompt.includes("draw")) scenario = smartFillScenarios.art;
        else if (prompt.includes("sport") || prompt.includes("race") || prompt.includes("run")) scenario = smartFillScenarios.sports;
        else if (prompt.includes("space") || prompt.includes("galaxy") || prompt.includes("star")) scenario = smartFillScenarios.space;
        else if (prompt.includes("sea") || prompt.includes("ocean") || prompt.includes("fish")) scenario = smartFillScenarios.sea;

        // Apply!
        schoolName.value = scenario.school;
        certTitle.value = scenario.title;
        certText.value = scenario.text;
        accentColor.value = scenario.accent;
        layoutOrder.value = scenario.order;
        fontStyle.value = scenario.font;
        theme.value = scenario.theme;

        if (scenario.bg !== "none") {
            certificate.style.setProperty('--bg-dynamic', `url("${scenario.bg}")`);
        } else {
            certificate.style.setProperty('--bg-dynamic', 'none');
        }

        // Update UI state
        if (aiTone) aiTone.value = scenario.tone;

        setTheme();
        setFontStyle();
        bindText();
        autoScaleText();

        // Feedback
        btnApplySmartFill.textContent = "🚀 Design Synchronized!";
        setTimeout(() => { btnApplySmartFill.textContent = "Magic Fill ✨"; }, 2000);
        smartFillPanel.style.display = 'none';
        toggleSmartFill.textContent = '🪄 AI Smart Fill';
    });
}

if (toggleAiBtn) {
    toggleAiBtn.addEventListener("click", () => {
        aiPanel.style.display = aiPanel.style.display === 'none' ? 'block' : 'none';
    });
}

if (btnAiGenerate) {
    btnAiGenerate.addEventListener("click", () => {
        const cat = aiCategory.value;
        const tone = aiTone.value;
        const message = aiPatterns[cat][tone];
        if (message) {
            certText.value = message;
            bindText();
            // Subtle feedback
            btnAiGenerate.textContent = "✨ Message Generated!";
            setTimeout(() => { btnAiGenerate.textContent = "Generate Message"; }, 2000);
        }
    });
}

if (logoUpload) {
    logoUpload.addEventListener("change", (e) => {
        const file = e.target.files?.[0];
        readImage(file, (data) => {
            currentLogoData = data;
            logoImg.src = data;
            logoImg.style.display = "block";
            logoPlaceholder.style.display = "none";
        });
    });
}

if (photoUpload) {
    photoUpload.addEventListener("change", (e) => {
        const file = e.target.files?.[0];
        readImage(file, (data) => {
            currentPhotoData = data;
            photoImg.src = data;
            photoImg.style.display = "block";
            startPhoto.style.display = "none";
        });
    });
}

// Tabs
function switchTab(mode) {
    if (mode === 'single') {
        tabSingle.classList.add('active');
        tabBulk.classList.remove('active');
        panelSingle.style.display = 'block';
        panelBulk.style.display = 'none';
        singleContainer.style.display = 'block';
        bulkContainer.style.display = 'none';
        bindText();
    } else {
        tabSingle.classList.remove('active');
        tabBulk.classList.add('active');
        panelSingle.style.display = 'none';
        panelBulk.style.display = 'block';
        singleContainer.style.display = 'none';
        bulkContainer.style.display = 'block';
    }
}
tabSingle.addEventListener('click', () => switchTab('single'));
tabBulk.addEventListener('click', () => switchTab('bulk'));

// Excel
if (excelUpload) {
    excelUpload.addEventListener("change", (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (evt) => {
            const data = new Uint8Array(evt.target.result);
            const wb = XLSX.read(data, { type: 'array' });
            bulkData = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
            bulkStatus.textContent = `Loaded ${bulkData.length} records.`;
        };
        reader.readAsArrayBuffer(file);
    });
}

// --- AI Magic Names Logic ---

// ... (existing scenarios and patterns)

const sampleNames = [
    "Aarav Sharma", "Ananya Iyer", "Ishaan Gupta", "Saanvi Reddy",
    "Arjun Malhotra", "Diya Mistri", "Vivaan Kapoor", "Myra Joshi",
    "Aryan Verma", "Kiara Saxena", "Kabir Das", "Zoya Khan",
    "Reyansh Singh", "Advait Joshi", "Siddharth Nair", "Tanvi Bhatia"
];

if (btnAiMagicNames) {
    btnAiMagicNames.addEventListener("click", () => {
        bulkNamesInput.value = sampleNames.join('\n');
        btnAiMagicNames.textContent = "✨ Names Generated!";
        setTimeout(() => { btnAiMagicNames.textContent = "🪄 AI Magic Names"; }, 2000);
    });
}

// Bulk Photos (Folder)
if (bulkPhotoUpload) {
    bulkPhotoUpload.addEventListener("change", (e) => handlePhotoFiles(e.target.files));
}

// Bulk Photos (Individual Files)
if (bulkFilesUpload) {
    bulkFilesUpload.addEventListener("change", (e) => handlePhotoFiles(e.target.files));
}

function handlePhotoFiles(files) {
    if (!files || files.length === 0) return;
    for (let f of files) {
        bulkImages[f.name.toLowerCase().trim()] = URL.createObjectURL(f);
    }
    const count = Object.keys(bulkImages).length;
    bulkStatus.textContent = `Library: ${count} photos available.`;
    // Flash status
    bulkStatus.style.color = "#27ae60";
    setTimeout(() => bulkStatus.style.color = "", 1000);
}

// Bulk Generation
btnGenerateBulk.addEventListener("click", () => {
    let finalRows = [];
    if (bulkData.length > 0) {
        finalRows = bulkData;
    } else {
        const raw = bulkNamesInput.value.trim();
        if (raw) finalRows = raw.split('\n').map(r => ({ Name: r.trim() }));
    }

    if (finalRows.length === 0) return alert("No data to process.");

    bulkContainer.innerHTML = '';
    const temp = certTemplate.content;
    const curTheme = theme.value;
    const fVal = fontStyle.value;

    finalRows.forEach(row => {
        const clone = document.importNode(temp, true);
        const art = clone.querySelector('article');
        art.classList.remove('theme-classic', 'theme-gold', 'theme-blue', 'theme-red', 'theme-playful', 'theme-space', 'theme-sea', 'theme-royal', 'font-serif', 'font-sans', 'font-script', 'font-classic', 'font-kids', 'font-hand', 'font-pop', 'font-bold');
        art.classList.add(`theme-${curTheme}`);

        if (fVal !== 'default') art.classList.add(`font-${fVal}`);
        if (boldTitles && boldTitles.checked) art.classList.add('bold-titles');

        applyDesignStyles(art);

        const sName = row['Name'] || row['Student Name'] || row['NAME'] || row['Full Name'] || row['Student'] || "Unknown";
        clone.querySelector('.tpl-name').textContent = sName;
        clone.querySelector('.tpl-class').textContent = row['Class'] || row['CLASS'] || studentClass.value;
        clone.querySelector('.tpl-school').textContent = schoolName.value;
        clone.querySelector('.tpl-code').textContent = schoolCode.value;
        clone.querySelector('.tpl-title').textContent = certTitle.value.toUpperCase();
        clone.querySelector('.tpl-date').textContent = bulkIncludeDate.checked ? issueDate.value : "";

        const tplBody = clone.querySelector('.tpl-body');
        tplBody.innerHTML = certText.value.replace(/\n/g, '<br>');
        tplBody.style.fontWeight = certTextBold.checked ? "bold" : "normal";

        // Signatures
        const pNameEl = clone.querySelector('.tpl-principal-name');
        const pRoleEl = clone.querySelector('.tpl-principal-role');
        const tNameEl = clone.querySelector('.tpl-teacher-name');
        const tRoleEl = clone.querySelector('.tpl-teacher-role');

        if (pNameEl) pNameEl.textContent = principalName.value;
        if (pRoleEl) pRoleEl.textContent = principalDesignation.value;
        if (tNameEl) tNameEl.textContent = teacherName.value;
        if (tRoleEl) tRoleEl.textContent = teacherDesignation.value;

        // Photo logic - ULTIMATE MATCHING
        const cImg = clone.querySelector('.tpl-photo');
        const cPH = clone.querySelector('.tpl-photo-ph');
        let pUrl = null;

        // 1. Try specific Photo column from Excel
        const pCol = (row['Photo'] || row['Image'] || row['PHOTO'] || "").toString().toLowerCase().trim();

        // 2. Normalize names for matching
        const cleanSName = sName.toLowerCase().trim();
        const normalizedName = cleanSName.replace(/\s+/g, '_');
        const simpleName = cleanSName.replace(/\s+/g, '');

        function findInLibrary(query) {
            if (!query) return null;
            const q = query.toLowerCase().trim();
            // Exact match
            if (bulkImages[q]) return bulkImages[q];
            // Match with common extensions
            const exts = ['.jpg', '.png', '.jpeg', '.webp'];
            for (let ext of exts) {
                if (bulkImages[q + ext]) return bulkImages[q + ext];
            }
            return null;
        }

        // Search order:
        // A. Specific column from Excel
        pUrl = findInLibrary(pCol);

        // B. Smart Name Matches
        if (!pUrl) pUrl = findInLibrary(cleanSName);
        if (!pUrl) pUrl = findInLibrary(normalizedName);
        if (!pUrl) pUrl = findInLibrary(simpleName);

        // 3. GLOBAL FALLBACK: Use the main photo from the Single Entry section
        if (!pUrl && currentPhotoData) {
            pUrl = currentPhotoData;
        }

        if (pUrl && cImg) {
            cImg.src = pUrl;
            cImg.style.display = "block";
            if (cPH) cPH.style.display = "none";
        }

        // Logo persistence - RESTORED
        const tplLogo = clone.querySelector('.tpl-logo');
        const tplLogoPH = clone.querySelector('.tpl-logo-ph');
        if (currentLogoData && tplLogo) {
            tplLogo.src = currentLogoData;
            tplLogo.style.display = "block";
            if (tplLogoPH) tplLogoPH.style.display = "none";
        }

        bulkContainer.appendChild(clone);
    });

    singleContainer.style.display = "none";
    bulkContainer.style.display = "block";
});

btnClearBulk.addEventListener('click', () => {
    bulkContainer.innerHTML = '';
    bulkData = [];
    bulkImages = {};
    bulkStatus.textContent = "Ready.";
    switchTab('single');
});

// Init
bindText();
setTheme();
