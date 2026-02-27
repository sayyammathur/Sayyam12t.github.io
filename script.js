// --- Helper ---
const $ = id => document.getElementById(id);

// --- 1. Element Declarations ---
const schoolName = $("schoolName");
const schoolAddress = $("schoolAddress");
const schoolFoundation = $("schoolFoundation");
const schoolCode = $("schoolCode");
const certTitle = $("certTitle");
const session = $("session");
const issueDate = $("issueDate");
const certText = $("certText");
const certTextBold = $("certTextBold");
const boldTitles = $("boldTitles");
const boldSession = $("boldSession");
const boldAddress = $("boldAddress");
const boldFoundation = $("boldFoundation");

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
const addressColor = $("addressColor");
const foundationColor = $("foundationColor");
const layoutOrder = $("layoutOrder");
const textAlign = $("textAlign");
const nameFontSize = $("nameFontSize");
const schoolFontSize = $("schoolFontSize");
const sessionFontSize = $("sessionFontSize");
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
const vSchoolAddress = $("vSchoolAddress");
const vSchoolFoundation = $("vSchoolFoundation");
const vSchoolCode = $("vSchoolCode");
const vCertTitle = $("vCertTitle");
const vSession = $("vSession");
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
    if (vSchoolAddress) {
        vSchoolAddress.textContent = schoolAddress.value.trim() || "";
        vSchoolAddress.style.fontWeight = boldAddress.checked ? "bold" : "500";
        vSchoolAddress.style.color = addressColor.value;
    }
    if (vSchoolFoundation) {
        vSchoolFoundation.textContent = schoolFoundation.value.trim() || "";
        vSchoolFoundation.style.fontWeight = boldFoundation.checked ? "bold" : "500";
        vSchoolFoundation.style.color = foundationColor.value;
    }
    if (vSchoolCode) vSchoolCode.textContent = schoolCode.value.trim() || "";
    if (vCertTitle) vCertTitle.textContent = (certTitle.value.trim() || "CERTIFICATE").toUpperCase();
    if (vSession) {
        vSession.textContent = session.value.trim() || "";
        vSession.style.fontWeight = boldSession.checked ? "bold" : "600";
    }

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
    
    // Update watermark if function exists
    if (typeof updateWatermark === 'function') {
        updateWatermark();
    }
}

function applyDesignStyles(target) {
    if (!target) return;
    target.style.setProperty('--c-accent', accentColor.value);
    target.style.setProperty('--c-name', nameColor.value);
    target.style.setProperty('--n-size', nameFontSize.value + 'pt');
    target.style.setProperty('--s-size', schoolFontSize.value + 'pt');
    target.style.setProperty('--session-size', sessionFontSize.value + 'pt');
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
    certificate.classList.remove('theme-classic', 'theme-gold', 'theme-blue', 'theme-red', 'theme-playful', 'theme-space', 'theme-sea', 'theme-royal', 'theme-modern', 'theme-elegant', 'theme-nature', 'theme-sunset', 'theme-professional', 'theme-rainbow', 'theme-cartoon', 'theme-stars', 'theme-animals', 'theme-superhero', 'theme-princess', 'theme-dinosaur', 'theme-underwater', 'theme-circus');
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
    schoolName, schoolAddress, schoolFoundation, schoolCode, certTitle, session, issueDate, certText,
    principalName, principalDesignation, teacherName, teacherDesignation,
    studentName, studentClass, certTextBold, boldTitles, boldSession, boldAddress, boldFoundation,
    nameFontSize, schoolFontSize, sessionFontSize, bodyFontSize, verticalGap,
    accentColor, nameColor, addressColor, foundationColor, layoutOrder, textAlign, photoWidth
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
    
    // Clear previous images to avoid conflicts
    // Comment this out if you want to accumulate photos across multiple uploads
    // bulkImages = {};
    
    for (let f of files) {
        const fileName = f.name.toLowerCase().trim();
        const fileNameWithoutExt = fileName.replace(/\.(jpg|jpeg|png|gif|webp)$/i, '');
        
        // Store with multiple keys for better matching
        const url = URL.createObjectURL(f);
        bulkImages[fileName] = url; // Full filename with extension
        bulkImages[fileNameWithoutExt] = url; // Filename without extension
        
        // Also store with spaces replaced by underscores
        const normalizedName = fileNameWithoutExt.replace(/\s+/g, '_');
        bulkImages[normalizedName] = url;
        
        // Also store with no spaces
        const compactName = fileNameWithoutExt.replace(/\s+/g, '');
        bulkImages[compactName] = url;
        
        console.log(`Stored photo: ${fileName} with keys:`, [fileName, fileNameWithoutExt, normalizedName, compactName]);
    }
    
    const count = files.length;
    bulkStatus.textContent = `Library: ${count} photos uploaded successfully.`;
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
        art.classList.remove('theme-classic', 'theme-gold', 'theme-blue', 'theme-red', 'theme-playful', 'theme-space', 'theme-sea', 'theme-royal', 'theme-modern', 'theme-elegant', 'theme-nature', 'theme-sunset', 'theme-professional', 'theme-rainbow', 'theme-cartoon', 'theme-stars', 'theme-animals', 'theme-superhero', 'theme-princess', 'theme-dinosaur', 'theme-underwater', 'theme-circus', 'font-serif', 'font-sans', 'font-script', 'font-classic', 'font-kids', 'font-hand', 'font-pop', 'font-bold');
        art.classList.add(`theme-${curTheme}`);

        if (fVal !== 'default') art.classList.add(`font-${fVal}`);
        if (boldTitles && boldTitles.checked) art.classList.add('bold-titles');

        applyDesignStyles(art);

        const sName = row['Name'] || row['Student Name'] || row['NAME'] || row['Full Name'] || row['Student'] || "Unknown";
        clone.querySelector('.tpl-name').textContent = sName;
        clone.querySelector('.tpl-class').textContent = row['Class'] || row['CLASS'] || studentClass.value;
        clone.querySelector('.tpl-school').textContent = schoolName.value;
        clone.querySelector('.tpl-address').textContent = schoolAddress.value;
        clone.querySelector('.tpl-foundation').textContent = schoolFoundation.value;
        clone.querySelector('.tpl-code').textContent = schoolCode.value;
        clone.querySelector('.tpl-session').textContent = session.value;
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
            
            // Direct exact match
            if (bulkImages[q]) {
                console.log(`Found photo for "${sName}" using key: ${q}`);
                return bulkImages[q];
            }
            
            // Try with common extensions
            const exts = ['.jpg', '.png', '.jpeg', '.webp', '.gif'];
            for (let ext of exts) {
                if (bulkImages[q + ext]) {
                    console.log(`Found photo for "${sName}" using key: ${q + ext}`);
                    return bulkImages[q + ext];
                }
            }
            
            // Try removing extension if present
            const qWithoutExt = q.replace(/\.(jpg|jpeg|png|gif|webp)$/i, '');
            if (qWithoutExt !== q && bulkImages[qWithoutExt]) {
                console.log(`Found photo for "${sName}" using key without extension: ${qWithoutExt}`);
                return bulkImages[qWithoutExt];
            }
            
            return null;
        }

        // Search order:
        // A. Specific column from Excel
        if (pCol) {
            pUrl = findInLibrary(pCol);
        }

        // B. Smart Name Matches
        if (!pUrl) pUrl = findInLibrary(cleanSName);
        if (!pUrl) pUrl = findInLibrary(normalizedName);
        if (!pUrl) pUrl = findInLibrary(simpleName);

        // 3. GLOBAL FALLBACK: Use the main photo from the Single Entry section
        if (!pUrl && currentPhotoData) {
            pUrl = currentPhotoData;
            console.log(`Using fallback photo for "${sName}"`);
        }

        if (pUrl && cImg) {
            cImg.src = pUrl;
            cImg.style.display = "block";
            if (cPH) cPH.style.display = "none";
        } else {
            console.warn(`No photo found for "${sName}"`);
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


// ===== GEMINI AI INTEGRATION =====
const GEMINI_API_KEY = 'AIzaSyB7shFC2kgmPZqeRLI4nmLzqvncIB2EmnY';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

const btnGeminiGenerate = $("btnGeminiGenerate");
const geminiPrompt = $("geminiPrompt");
const geminiStatus = $("geminiStatus");

if (btnGeminiGenerate) {
    btnGeminiGenerate.addEventListener("click", async () => {
        const prompt = geminiPrompt.value.trim();
        
        if (!prompt) {
            geminiStatus.textContent = "⚠️ Please enter a prompt";
            geminiStatus.style.color = "#e74c3c";
            return;
        }
        
        // Show loading state
        btnGeminiGenerate.disabled = true;
        btnGeminiGenerate.textContent = "⏳ Generating...";
        geminiStatus.textContent = "🤖 Gemini AI is thinking...";
        geminiStatus.style.color = "#3498db";
        
        try {
            const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [{
                        parts: [{
                            text: `You are a professional certificate text writer. Write a short, meaningful certificate message (2-4 sentences) for: ${prompt}. Make it warm, encouraging, and suitable for a certificate. Do not include any titles or headers, just the body text.`
                        }]
                    }],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 200,
                    }
                })
            });
            
            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }
            
            const data = await response.json();
            
            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                const generatedText = data.candidates[0].content.parts[0].text;
                
                // Update the certificate text
                certText.value = generatedText.trim();
                bindText();
                
                // Success feedback
                geminiStatus.textContent = "✅ Generated successfully!";
                geminiStatus.style.color = "#27ae60";
                btnGeminiGenerate.textContent = "✨ Generate with Gemini";
                
                // Flash the textarea to show it updated
                certText.style.background = "#d4edda";
                setTimeout(() => {
                    certText.style.background = "";
                }, 1000);
                
            } else {
                throw new Error("No content generated");
            }
            
        } catch (error) {
            console.error("Gemini AI Error:", error);
            geminiStatus.textContent = "❌ Error: " + error.message;
            geminiStatus.style.color = "#e74c3c";
            btnGeminiGenerate.textContent = "✨ Generate with Gemini";
        } finally {
            btnGeminiGenerate.disabled = false;
        }
    });
}

// Add Enter key support for Gemini prompt
if (geminiPrompt) {
    geminiPrompt.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            btnGeminiGenerate.click();
        }
    });
}

// Auto-scale text function for better display
function autoScaleText() {
    const certTextEl = $("vCertText");
    if (!certTextEl) return;
    
    const textLength = certTextEl.textContent.length;
    if (textLength > 300) {
        certTextEl.style.fontSize = "calc(var(--b-size) - 2pt)";
    } else if (textLength > 200) {
        certTextEl.style.fontSize = "calc(var(--b-size) - 1pt)";
    } else {
        certTextEl.style.fontSize = "var(--b-size)";
    }
}

// Call auto-scale when text changes
if (certText) {
    certText.addEventListener("input", autoScaleText);
}


// ===== AI BACKGROUND IMAGE GENERATOR =====
const btnGenerateAiImage = $("btnGenerateAiImage");
const aiImagePrompt = $("aiImagePrompt");
const aiImageStatus = $("aiImageStatus");

if (btnGenerateAiImage) {
    btnGenerateAiImage.addEventListener("click", async () => {
        const prompt = aiImagePrompt.value.trim();
        
        if (!prompt) {
            aiImageStatus.textContent = "⚠️ Please enter a description";
            return;
        }
        
        // Show loading state
        btnGenerateAiImage.disabled = true;
        btnGenerateAiImage.textContent = "⏳ Generating...";
        aiImageStatus.textContent = "🎨 Creating your background...";
        
        try {
            let finalPrompt = prompt;
            
            // Try to enhance with Gemini (optional, fallback to original if fails)
            try {
                aiImageStatus.textContent = "🤖 Enhancing with AI...";
                const geminiResponse = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        contents: [{
                            parts: [{
                                text: `Create a detailed image prompt for: "${prompt}". Make it vivid and suitable for a certificate background. Keep it under 50 words. Return only the prompt.`
                            }]
                        }],
                        generationConfig: {
                            temperature: 0.7,
                            maxOutputTokens: 80,
                        }
                    })
                });
                
                if (geminiResponse.ok) {
                    const geminiData = await geminiResponse.json();
                    if (geminiData.candidates && geminiData.candidates[0]) {
                        finalPrompt = geminiData.candidates[0].content.parts[0].text.trim();
                    }
                }
            } catch (geminiError) {
                console.log("Gemini enhancement skipped, using original prompt");
                // Continue with original prompt
            }
            
            aiImageStatus.textContent = "🖼️ Generating image...";
            
            // Generate image using Pollinations AI (free, no API key needed)
            const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(finalPrompt)}?width=1200&height=800&nologo=true&enhance=true&model=flux`;
            
            // Create a new image element to test if it loads
            const testImg = new Image();
            testImg.crossOrigin = "anonymous";
            
            testImg.onload = () => {
                // Apply the generated image as background
                certificate.style.setProperty('--bg-dynamic', `url("${imageUrl}")`);
                
                // Success feedback
                aiImageStatus.textContent = "✅ Background applied!";
                btnGenerateAiImage.textContent = "✨ Generate AI Background";
                btnGenerateAiImage.disabled = false;
                
                // Flash effect
                certificate.style.transition = "opacity 0.3s";
                certificate.style.opacity = "0.7";
                setTimeout(() => {
                    certificate.style.opacity = "1";
                }, 300);
            };
            
            testImg.onerror = () => {
                throw new Error("Image failed to load");
            };
            
            testImg.src = imageUrl;
            
        } catch (error) {
            console.error("AI Image Generation Error:", error);
            aiImageStatus.textContent = "❌ " + error.message;
            btnGenerateAiImage.textContent = "✨ Generate AI Background";
            btnGenerateAiImage.disabled = false;
        }
    });
}

// Add Enter key support for AI image prompt
if (aiImagePrompt) {
    aiImagePrompt.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            btnGenerateAiImage.click();
        }
    });
}

// ===== AI-POWERED THEME SUGGESTIONS =====
// Add AI suggestions to each Magic AI Theme
const aiThemeSuggestions = {
    playground: "Colorful playground with swings, slides, and happy children playing",
    rainbow: "Beautiful rainbow arching over a garden with flowers and butterflies",
    sunny: "Bright sunny day at school with blue sky and white clouds",
    space: "Cosmic space scene with stars, planets, and nebulas",
    sea: "Underwater ocean scene with coral reefs and tropical fish",
    royal: "Elegant royal palace with gold decorations and ornate patterns",
    superhero: "Comic book style cityscape with bold colors and action effects",
    princess: "Magical fairy tale castle with pink clouds and sparkles",
    dinosaur: "Prehistoric jungle with friendly dinosaurs and lush vegetation",
    underwater: "Vibrant underwater world with colorful fish and sea creatures",
    circus: "Festive circus tent with colorful stripes and carnival atmosphere"
};

// Function to generate AI background for a specific theme
async function generateThemeBackground(themeName) {
    if (!aiThemeSuggestions[themeName]) return;
    
    const prompt = aiThemeSuggestions[themeName];
    aiImagePrompt.value = prompt;
    btnGenerateAiImage.click();
}

// Add quick AI generation buttons to theme gallery (optional enhancement)
function addAiGenerationToThemes() {
    const themeItems = document.querySelectorAll('.ai-theme-item');
    themeItems.forEach((item, index) => {
        const themeName = Object.keys(aiThemeSuggestions)[index];
        if (themeName) {
            item.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                generateThemeBackground(themeName);
            });
            item.title = "Click to apply theme | Right-click to generate AI background";
        }
    });
}

// Initialize AI theme enhancements
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addAiGenerationToThemes);
} else {
    addAiGenerationToThemes();
}


// ===== TASK 15.3: PDF EXPORT, WATERMARK, REAL-TIME PREVIEW, UNDO/REDO =====

// --- PDF Generator Class ---
class PDFGenerator {
    static async generateSinglePDF(certificateElement, studentName) {
        try {
            // Render certificate to canvas
            const canvas = await html2canvas(certificateElement, {
                scale: 2,
                useCORS: true,
                allowTaint: true,
                backgroundColor: '#ffffff',
                logging: false
            });
            
            // Create PDF
            const { jsPDF } = window.jspdf;
            const pdf = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: 'a4'
            });
            
            const imgData = canvas.toDataURL('image/jpeg', 0.95);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            
            pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
            
            return pdf.output('blob');
        } catch (error) {
            console.error('PDF generation error:', error);
            throw error;
        }
    }
    
    static downloadPDF(blob, filename) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    
    static generateFilename(studentName, includeDate = true) {
        const sanitized = studentName.replace(/[^a-z0-9]/gi, '_');
        const date = includeDate ? `_${new Date().toISOString().split('T')[0]}` : '';
        return `Certificate_${sanitized}${date}.pdf`;
    }
}

// --- Watermark Manager Class ---
class WatermarkManager {
    static currentWatermarkData = null;
    
    static applyWatermark(certificateElement, watermarkConfig) {
        // Remove existing watermark
        const existing = certificateElement.querySelector('.watermark');
        if (existing) {
            existing.remove();
        }
        
        if (!watermarkConfig.enabled) {
            return;
        }
        
        const watermark = document.createElement('div');
        watermark.className = 'watermark';
        watermark.style.opacity = watermarkConfig.opacity / 100;
        
        // Set position class
        watermark.classList.add(`position-${watermarkConfig.position}`);
        
        // Set content
        if (watermarkConfig.type === 'image' && watermarkConfig.imageData) {
            const img = document.createElement('img');
            img.src = watermarkConfig.imageData;
            watermark.appendChild(img);
        } else if (watermarkConfig.type === 'text') {
            watermark.classList.add('text-watermark');
            watermark.textContent = watermarkConfig.text || 'DRAFT';
        }
        
        // Ensure certificate has relative positioning
        if (getComputedStyle(certificateElement).position === 'static') {
            certificateElement.style.position = 'relative';
        }
        
        certificateElement.appendChild(watermark);
    }
    
    static getWatermarkConfig() {
        const enabled = $('watermarkEnabled')?.checked || false;
        const type = $('watermarkType')?.value || 'text';
        const text = $('watermarkText')?.value || 'DRAFT';
        const opacity = parseInt($('watermarkOpacity')?.value || '30');
        const position = $('watermarkPosition')?.value || 'center';
        
        return {
            enabled,
            type,
            text,
            opacity,
            position,
            imageData: this.currentWatermarkData
        };
    }
}

// --- Undo/Redo Manager Class ---
class UndoRedoManager {
    constructor(maxHistory = 20) {
        this.maxHistory = maxHistory;
        this.history = [];
        this.currentIndex = -1;
    }
    
    pushState(state) {
        // Remove any states after current index
        this.history = this.history.slice(0, this.currentIndex + 1);
        
        // Add new state
        this.history.push(this.cloneState(state));
        
        // Limit history size
        if (this.history.length > this.maxHistory) {
            this.history.shift();
        } else {
            this.currentIndex++;
        }
        
        this.updateButtons();
    }
    
    undo() {
        if (!this.canUndo()) {
            return null;
        }
        
        this.currentIndex--;
        this.updateButtons();
        return this.cloneState(this.history[this.currentIndex]);
    }
    
    redo() {
        if (!this.canRedo()) {
            return null;
        }
        
        this.currentIndex++;
        this.updateButtons();
        return this.cloneState(this.history[this.currentIndex]);
    }
    
    canUndo() {
        return this.currentIndex > 0;
    }
    
    canRedo() {
        return this.currentIndex < this.history.length - 1;
    }
    
    cloneState(state) {
        return JSON.parse(JSON.stringify(state));
    }
    
    updateButtons() {
        const undoBtn = $('undoBtn');
        const redoBtn = $('redoBtn');
        
        if (undoBtn) {
            undoBtn.disabled = !this.canUndo();
        }
        if (redoBtn) {
            redoBtn.disabled = !this.canRedo();
        }
    }
}

// --- State Management ---
const undoRedoManager = new UndoRedoManager();
let isRestoringState = false;

function getCurrentState() {
    return {
        schoolName: schoolName?.value || '',
        schoolCode: schoolCode?.value || '',
        certTitle: certTitle?.value || '',
        session: session?.value || '',
        issueDate: issueDate?.value || '',
        certText: certText?.value || '',
        certTextBold: certTextBold?.checked || false,
        boldTitles: boldTitles?.checked || false,
        principalName: principalName?.value || '',
        principalDesignation: principalDesignation?.value || '',
        teacherName: teacherName?.value || '',
        teacherDesignation: teacherDesignation?.value || '',
        studentName: studentName?.value || '',
        studentClass: studentClass?.value || '',
        theme: theme?.value || 'classic',
        fontStyle: fontStyle?.value || 'default',
        nameColor: nameColor?.value || '#000000',
        accentColor: accentColor?.value || '#116a4c',
        layoutOrder: layoutOrder?.value || 'row',
        textAlign: textAlign?.value || 'center',
        nameFontSize: nameFontSize?.value || '34',
        schoolFontSize: schoolFontSize?.value || '30',
        bodyFontSize: bodyFontSize?.value || '12',
        verticalGap: verticalGap?.value || '5',
        photoWidth: photoWidth?.value || '45',
        watermarkEnabled: $('watermarkEnabled')?.checked || false,
        watermarkType: $('watermarkType')?.value || 'text',
        watermarkText: $('watermarkText')?.value || 'DRAFT',
        watermarkOpacity: $('watermarkOpacity')?.value || '30',
        watermarkPosition: $('watermarkPosition')?.value || 'center'
    };
}

function restoreState(state) {
    if (!state) return;
    
    isRestoringState = true;
    
    if (schoolName) schoolName.value = state.schoolName;
    if (schoolCode) schoolCode.value = state.schoolCode;
    if (certTitle) certTitle.value = state.certTitle;
    if (session) session.value = state.session;
    if (issueDate) issueDate.value = state.issueDate;
    if (certText) certText.value = state.certText;
    if (certTextBold) certTextBold.checked = state.certTextBold;
    if (boldTitles) boldTitles.checked = state.boldTitles;
    if (principalName) principalName.value = state.principalName;
    if (principalDesignation) principalDesignation.value = state.principalDesignation;
    if (teacherName) teacherName.value = state.teacherName;
    if (teacherDesignation) teacherDesignation.value = state.teacherDesignation;
    if (studentName) studentName.value = state.studentName;
    if (studentClass) studentClass.value = state.studentClass;
    if (theme) theme.value = state.theme;
    if (fontStyle) fontStyle.value = state.fontStyle;
    if (nameColor) nameColor.value = state.nameColor;
    if (accentColor) accentColor.value = state.accentColor;
    if (layoutOrder) layoutOrder.value = state.layoutOrder;
    if (textAlign) textAlign.value = state.textAlign;
    if (nameFontSize) nameFontSize.value = state.nameFontSize;
    if (schoolFontSize) schoolFontSize.value = state.schoolFontSize;
    if (bodyFontSize) bodyFontSize.value = state.bodyFontSize;
    if (verticalGap) verticalGap.value = state.verticalGap;
    if (photoWidth) photoWidth.value = state.photoWidth;
    
    const watermarkEnabledEl = $('watermarkEnabled');
    const watermarkTypeEl = $('watermarkType');
    const watermarkTextEl = $('watermarkText');
    const watermarkOpacityEl = $('watermarkOpacity');
    const watermarkPositionEl = $('watermarkPosition');
    
    if (watermarkEnabledEl) watermarkEnabledEl.checked = state.watermarkEnabled;
    if (watermarkTypeEl) watermarkTypeEl.value = state.watermarkType;
    if (watermarkTextEl) watermarkTextEl.value = state.watermarkText;
    if (watermarkOpacityEl) watermarkOpacityEl.value = state.watermarkOpacity;
    if (watermarkPositionEl) watermarkPositionEl.value = state.watermarkPosition;
    
    // Update UI
    setTheme();
    setFontStyle();
    bindText();
    updateWatermark();
    
    isRestoringState = false;
}

// --- Debounced Preview Update ---
let previewUpdateTimeout = null;

function debouncedPreviewUpdate() {
    if (previewUpdateTimeout) {
        clearTimeout(previewUpdateTimeout);
    }
    
    previewUpdateTimeout = setTimeout(() => {
        bindText();
        updateWatermark();
    }, 100);
}

function debouncedThemeUpdate() {
    if (previewUpdateTimeout) {
        clearTimeout(previewUpdateTimeout);
    }
    
    previewUpdateTimeout = setTimeout(() => {
        setTheme();
        setFontStyle();
        bindText();
        updateWatermark();
    }, 200);
}

// --- Watermark Update Function ---
function updateWatermark() {
    const config = WatermarkManager.getWatermarkConfig();
    WatermarkManager.applyWatermark(certificate, config);
}

// --- Event Listeners for New Features ---

// PDF Export Button
const downloadPdfBtn = $('downloadPdfBtn');
if (downloadPdfBtn) {
    downloadPdfBtn.addEventListener('click', async () => {
        try {
            downloadPdfBtn.disabled = true;
            downloadPdfBtn.textContent = '⏳ Generating PDF...';
            
            const sName = studentName?.value || 'Student';
            const blob = await PDFGenerator.generateSinglePDF(certificate, sName);
            const filename = PDFGenerator.generateFilename(sName);
            
            PDFGenerator.downloadPDF(blob, filename);
            
            downloadPdfBtn.textContent = '✅ Downloaded!';
            setTimeout(() => {
                downloadPdfBtn.textContent = '📄 Download as PDF';
                downloadPdfBtn.disabled = false;
            }, 2000);
        } catch (error) {
            alert('Error generating PDF: ' + error.message);
            downloadPdfBtn.textContent = '📄 Download as PDF';
            downloadPdfBtn.disabled = false;
        }
    });
}

// Undo Button
const undoBtn = $('undoBtn');
if (undoBtn) {
    undoBtn.addEventListener('click', () => {
        const previousState = undoRedoManager.undo();
        if (previousState) {
            restoreState(previousState);
        }
    });
}

// Redo Button
const redoBtn = $('redoBtn');
if (redoBtn) {
    redoBtn.addEventListener('click', () => {
        const nextState = undoRedoManager.redo();
        if (nextState) {
            restoreState(nextState);
        }
    });
}

// Keyboard Shortcuts for Undo/Redo
document.addEventListener('keydown', (e) => {
    // Ctrl+Z or Cmd+Z for Undo
    if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
        e.preventDefault();
        const previousState = undoRedoManager.undo();
        if (previousState) {
            restoreState(previousState);
        }
    }
    
    // Ctrl+Y or Cmd+Shift+Z for Redo
    if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.key === 'z' && e.shiftKey))) {
        e.preventDefault();
        const nextState = undoRedoManager.redo();
        if (nextState) {
            restoreState(nextState);
        }
    }
});

// Watermark Controls
const watermarkEnabledEl = $('watermarkEnabled');
const watermarkTypeEl = $('watermarkType');
const watermarkTextEl = $('watermarkText');
const watermarkOpacityEl = $('watermarkOpacity');
const watermarkPositionEl = $('watermarkPosition');
const watermarkImageUpload = $('watermarkImageUpload');
const watermarkOpacityValue = $('watermarkOpacityValue');

if (watermarkEnabledEl) {
    watermarkEnabledEl.addEventListener('change', () => {
        updateWatermark();
        if (!isRestoringState) {
            undoRedoManager.pushState(getCurrentState());
        }
    });
}

if (watermarkTypeEl) {
    watermarkTypeEl.addEventListener('change', () => {
        const textGroup = $('watermarkTextGroup');
        const imageGroup = $('watermarkImageGroup');
        
        if (watermarkTypeEl.value === 'text') {
            if (textGroup) textGroup.style.display = 'block';
            if (imageGroup) imageGroup.style.display = 'none';
        } else {
            if (textGroup) textGroup.style.display = 'none';
            if (imageGroup) imageGroup.style.display = 'block';
        }
        
        updateWatermark();
        if (!isRestoringState) {
            undoRedoManager.pushState(getCurrentState());
        }
    });
}

if (watermarkTextEl) {
    watermarkTextEl.addEventListener('input', () => {
        updateWatermark();
        if (!isRestoringState) {
            undoRedoManager.pushState(getCurrentState());
        }
    });
}

if (watermarkOpacityEl) {
    watermarkOpacityEl.addEventListener('input', () => {
        if (watermarkOpacityValue) {
            watermarkOpacityValue.textContent = watermarkOpacityEl.value + '%';
        }
        updateWatermark();
    });
    
    watermarkOpacityEl.addEventListener('change', () => {
        if (!isRestoringState) {
            undoRedoManager.pushState(getCurrentState());
        }
    });
}

if (watermarkPositionEl) {
    watermarkPositionEl.addEventListener('change', () => {
        updateWatermark();
        if (!isRestoringState) {
            undoRedoManager.pushState(getCurrentState());
        }
    });
}

if (watermarkImageUpload) {
    watermarkImageUpload.addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (file) {
            readImage(file, (data) => {
                WatermarkManager.currentWatermarkData = data;
                updateWatermark();
                if (!isRestoringState) {
                    undoRedoManager.pushState(getCurrentState());
                }
            });
        }
    });
}

// Update existing input listeners to use debounced preview and track state
// Add state tracking to existing inputs without breaking current functionality
const stateTrackingInputs = [
    'schoolName', 'schoolCode', 'certTitle', 'session', 'issueDate', 'certText',
    'principalName', 'principalDesignation', 'teacherName', 'teacherDesignation',
    'studentName', 'studentClass', 'nameColor', 'accentColor',
    'nameFontSize', 'schoolFontSize', 'bodyFontSize', 'verticalGap', 'photoWidth'
];

stateTrackingInputs.forEach(id => {
    const el = $(id);
    if (el) {
        // Add change listener for state tracking
        el.addEventListener('change', () => {
            if (!isRestoringState) {
                undoRedoManager.pushState(getCurrentState());
            }
        });
    }
});

// Add state tracking to theme and font
if (theme) {
    theme.addEventListener('change', () => {
        if (!isRestoringState) {
            undoRedoManager.pushState(getCurrentState());
        }
    });
}

if (fontStyle) {
    fontStyle.addEventListener('change', () => {
        if (!isRestoringState) {
            undoRedoManager.pushState(getCurrentState());
        }
    });
}

// Add state tracking to checkboxes
const checkboxIds = ['certTextBold', 'boldTitles'];
checkboxIds.forEach(id => {
    const el = $(id);
    if (el) {
        el.addEventListener('change', () => {
            if (!isRestoringState) {
                undoRedoManager.pushState(getCurrentState());
            }
        });
    }
});

// Add state tracking to selects
const selectIds = ['layoutOrder', 'textAlign'];
selectIds.forEach(id => {
    const el = $(id);
    if (el) {
        el.addEventListener('change', () => {
            if (!isRestoringState) {
                undoRedoManager.pushState(getCurrentState());
            }
        });
    }
});

// Initialize with first state
setTimeout(() => {
    undoRedoManager.pushState(getCurrentState());
}, 100);

// Initialize watermark on load
updateWatermark();


// ===== EXCEL FORMAT EXAMPLE BUTTON =====
const btnShowExcelExample = $("btnShowExcelExample");

if (btnShowExcelExample) {
    console.log("Excel example button found!");
    btnShowExcelExample.addEventListener("click", () => {
        console.log("Excel example button clicked!");
        const exampleHTML = `
            <div style="background: white; padding: 20px; border-radius: 8px; max-width: 600px;">
                <h3 style="color: #9b59b6; margin-top: 0;">📋 Excel Format Example</h3>
                <p style="font-size: 13px; color: #666; margin-bottom: 15px;">
                    Your Excel file should have these columns:
                </p>
                
                <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 12px;">
                    <thead>
                        <tr style="background: #f0f0f0;">
                            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Name</th>
                            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Class</th>
                            <th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Photo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px;">John Doe</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">Grade 5</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">IMG_001.jpg</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px;">Jane Smith</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">Grade 5</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">photo_jane.png</td>
                        </tr>
                        <tr>
                            <td style="border: 1px solid #ddd; padding: 8px;">Mike Johnson</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">Grade 5</td>
                            <td style="border: 1px solid #ddd; padding: 8px;">DSC_0123.jpg</td>
                        </tr>
                    </tbody>
                </table>
                
                <div style="background: #f8f9fa; padding: 12px; border-radius: 6px; border-left: 4px solid #9b59b6;">
                    <strong style="color: #9b59b6;">Important Notes:</strong>
                    <ul style="margin: 8px 0 0 0; padding-left: 20px; font-size: 12px; color: #555;">
                        <li><strong>"Name"</strong> column is required</li>
                        <li><strong>"Class"</strong> column is optional</li>
                        <li><strong>"Photo"</strong> column is optional - use it when photo filenames don't match student names</li>
                        <li>Photo filenames in the "Photo" column should match the actual uploaded photo files</li>
                        <li>If no "Photo" column, the system will try to match photos by student name</li>
                    </ul>
                </div>
                
                <button onclick="this.parentElement.parentElement.remove()" 
                    style="margin-top: 15px; background: #9b59b6; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-weight: bold;">
                    Got it! ✓
                </button>
            </div>
        `;
        
        // Create modal overlay
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            padding: 20px;
        `;
        modal.innerHTML = exampleHTML;
        
        // Close on backdrop click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
        
        document.body.appendChild(modal);
    });
} else {
    console.error("Excel example button NOT found!");
}


// ===== CANVA-STYLE CLICK-TO-EDIT MODE =====
let canvaModeActive = false;
let currentEditingElement = null;
let originalContent = null;
let originalStyles = {};

console.log("=== CANVA MODE SCRIPT LOADING ===");

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded, initializing Canva mode...");
    
    const toggleBtn = document.getElementById("toggleCanvaMode");
    const instructionsDiv = document.getElementById("canvaModeInstructions");
    const toolbar = document.getElementById("canvaToolbar");
    
    console.log("Toggle button:", toggleBtn ? "FOUND" : "NOT FOUND");
    console.log("Instructions div:", instructionsDiv ? "FOUND" : "NOT FOUND");
    console.log("Toolbar:", toolbar ? "FOUND" : "NOT FOUND");
    
    if (!toggleBtn || !instructionsDiv || !toolbar) {
        console.error("Missing required elements for Canva mode!");
        return;
    }
    
    // Editable elements selector
    const editableSelectors = [
        '.cert-school',
        '.cert-address',
        '.cert-foundation',
        '.cert-session',
        '.school-code',
        '.cert-title',
        '.student-name',
        '.class-name-large',
        '.cert-body-text',
        '.present-line',
        '.cert-text-small',
        '.sign-name',
        '.sign-role'
    ];
    
    // Toggle Canva Mode
    toggleBtn.addEventListener('click', () => {
        canvaModeActive = !canvaModeActive;
        console.log("Canva mode toggled:", canvaModeActive);
        
        if (canvaModeActive) {
            toggleBtn.textContent = '🎨 Disable Click-to-Edit Mode';
            toggleBtn.style.background = 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
            instructionsDiv.style.display = 'block';
            enableCanvaMode();
        } else {
            toggleBtn.textContent = '🎨 Enable Click-to-Edit Mode';
            toggleBtn.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            instructionsDiv.style.display = 'none';
            disableCanvaMode();
        }
    });
    
    function enableCanvaMode() {
        console.log("Enabling Canva mode...");
        const certificate = document.querySelector('.certificate');
        if (!certificate) {
            console.error("Certificate element not found!");
            return;
        }
        
        // Add hover effects to all editable elements
        editableSelectors.forEach(selector => {
            const elements = certificate.querySelectorAll(selector);
            console.log(`Found ${elements.length} elements for ${selector}`);
            
            elements.forEach(el => {
                // Store original styles
                el.dataset.originalCursor = el.style.cursor || '';
                el.dataset.originalOutline = el.style.outline || '';
                
                // Add hover effect
                el.addEventListener('mouseenter', handleHover);
                el.addEventListener('mouseleave', handleHoverOut);
                el.addEventListener('click', handleElementClick);
                
                // Visual indicator
                el.style.cursor = 'pointer';
                el.style.transition = 'all 0.2s ease';
            });
        });
    }
    
    function disableCanvaMode() {
        console.log("Disabling Canva mode...");
        const certificate = document.querySelector('.certificate');
        if (!certificate) return;
        
        // Remove all event listeners and restore styles
        editableSelectors.forEach(selector => {
            const elements = certificate.querySelectorAll(selector);
            elements.forEach(el => {
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleHoverOut);
                el.removeEventListener('click', handleElementClick);
                
                // Restore original styles
                el.style.cursor = el.dataset.originalCursor || '';
                el.style.outline = el.dataset.originalOutline || '';
            });
        });
        
        // Hide toolbar if visible
        toolbar.style.display = 'none';
        
        // Cancel any active editing
        if (currentEditingElement) {
            cancelEdit();
        }
    }
    
    function handleHover(e) {
        if (currentEditingElement !== e.target) {
            e.target.style.outline = '2px dashed #667eea';
            e.target.style.outlineOffset = '2px';
        }
    }
    
    function handleHoverOut(e) {
        if (currentEditingElement !== e.target) {
            e.target.style.outline = '';
            e.target.style.outlineOffset = '';
        }
    }
    
    function handleElementClick(e) {
        e.stopPropagation();
        console.log("Element clicked:", e.target);
        
        // If already editing another element, save it first
        if (currentEditingElement && currentEditingElement !== e.target) {
            saveEdit();
        }
        
        // Start editing this element
        startEdit(e.target);
    }
    
    function startEdit(element) {
        console.log("Starting edit on:", element);
        currentEditingElement = element;
        originalContent = element.textContent;
        
        // Store original styles
        originalStyles = {
            fontSize: window.getComputedStyle(element).fontSize,
            color: window.getComputedStyle(element).color,
            fontWeight: window.getComputedStyle(element).fontWeight,
            fontStyle: window.getComputedStyle(element).fontStyle
        };
        
        // Make element editable
        element.contentEditable = true;
        element.style.outline = '3px solid #667eea';
        element.style.outlineOffset = '2px';
        element.focus();
        
        // Show toolbar
        showToolbar(element);
        
        // Add click outside listener
        setTimeout(() => {
            document.addEventListener('click', handleClickOutside);
        }, 100);
    }
    
    function showToolbar(element) {
        const computedStyle = window.getComputedStyle(element);
        
        // Update toolbar controls with current values
        const fontSizeInput = toolbar.querySelector('#canvaFontSize');
        const colorInput = toolbar.querySelector('#canvaColor');
        const boldBtn = toolbar.querySelector('#canvaBold');
        const italicBtn = toolbar.querySelector('#canvaItalic');
        
        if (fontSizeInput) {
            fontSizeInput.value = parseInt(computedStyle.fontSize);
        }
        if (colorInput) {
            colorInput.value = rgbToHex(computedStyle.color);
        }
        if (boldBtn) {
            boldBtn.style.background = computedStyle.fontWeight >= 600 ? '#667eea' : '#f0f0f0';
            boldBtn.style.color = computedStyle.fontWeight >= 600 ? 'white' : '#333';
        }
        if (italicBtn) {
            italicBtn.style.background = computedStyle.fontStyle === 'italic' ? '#667eea' : '#f0f0f0';
            italicBtn.style.color = computedStyle.fontStyle === 'italic' ? 'white' : '#333';
        }
        
        toolbar.style.display = 'block';
    }
    
    function handleClickOutside(e) {
        if (currentEditingElement && 
            !currentEditingElement.contains(e.target) && 
            !toolbar.contains(e.target)) {
            saveEdit();
        }
    }
    
    function saveEdit() {
        if (!currentEditingElement) return;
        
        console.log("Saving edit...");
        currentEditingElement.contentEditable = false;
        currentEditingElement.style.outline = '';
        currentEditingElement.style.outlineOffset = '';
        
        document.removeEventListener('click', handleClickOutside);
        toolbar.style.display = 'none';
        currentEditingElement = null;
    }
    
    function cancelEdit() {
        if (!currentEditingElement) return;
        
        console.log("Canceling edit...");
        currentEditingElement.textContent = originalContent;
        currentEditingElement.style.fontSize = originalStyles.fontSize;
        currentEditingElement.style.color = originalStyles.color;
        currentEditingElement.style.fontWeight = originalStyles.fontWeight;
        currentEditingElement.style.fontStyle = originalStyles.fontStyle;
        
        currentEditingElement.contentEditable = false;
        currentEditingElement.style.outline = '';
        currentEditingElement.style.outlineOffset = '';
        
        document.removeEventListener('click', handleClickOutside);
        toolbar.style.display = 'none';
        currentEditingElement = null;
    }
    
    // Toolbar controls
    const fontSizeInput = toolbar.querySelector('#canvaFontSize');
    const colorInput = toolbar.querySelector('#canvaColor');
    const boldBtn = toolbar.querySelector('#canvaBold');
    const italicBtn = toolbar.querySelector('#canvaItalic');
    const saveBtn = toolbar.querySelector('#canvaSave');
    const cancelBtn = toolbar.querySelector('#canvaCancel');
    
    if (fontSizeInput) {
        fontSizeInput.addEventListener('input', (e) => {
            if (currentEditingElement) {
                currentEditingElement.style.fontSize = e.target.value + 'px';
            }
        });
    }
    
    if (colorInput) {
        colorInput.addEventListener('input', (e) => {
            if (currentEditingElement) {
                currentEditingElement.style.color = e.target.value;
            }
        });
    }
    
    if (boldBtn) {
        boldBtn.addEventListener('click', () => {
            if (currentEditingElement) {
                const currentWeight = window.getComputedStyle(currentEditingElement).fontWeight;
                const isBold = currentWeight >= 600;
                currentEditingElement.style.fontWeight = isBold ? 'normal' : 'bold';
                boldBtn.style.background = isBold ? '#f0f0f0' : '#667eea';
                boldBtn.style.color = isBold ? '#333' : 'white';
            }
        });
    }
    
    if (italicBtn) {
        italicBtn.addEventListener('click', () => {
            if (currentEditingElement) {
                const currentStyle = window.getComputedStyle(currentEditingElement).fontStyle;
                const isItalic = currentStyle === 'italic';
                currentEditingElement.style.fontStyle = isItalic ? 'normal' : 'italic';
                italicBtn.style.background = isItalic ? '#f0f0f0' : '#667eea';
                italicBtn.style.color = isItalic ? '#333' : 'white';
            }
        });
    }
    
    if (saveBtn) {
        saveBtn.addEventListener('click', saveEdit);
    }
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', cancelEdit);
    }
    
    // Helper function to convert RGB to Hex
    function rgbToHex(rgb) {
        const result = rgb.match(/\d+/g);
        if (!result) return '#000000';
        const r = parseInt(result[0]);
        const g = parseInt(result[1]);
        const b = parseInt(result[2]);
        return '#' + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('');
    }
    
    console.log("Canva mode initialized successfully!");
});

console.log("=== CANVA MODE SCRIPT LOADED ===");
