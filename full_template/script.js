// --- Section Model ---
// Mirrors the real NMAT demo: every section (even the one-item Reminders,
// Break, and End screens) shares the exact same chrome: dropdown, pagination,
// Attempted counter, grid button, and Previous/Next controls.
const SECTIONS = [
    { key: 'reminders', label: '1. Important Reminders', kind: 'info', total: 1 },
    { key: 'part1', label: '2. Part 1', kind: 'test', total: 160, get timer() { return this.total * 63; } },
    { key: 'break',     label: '3. Test Break',           kind: 'break', total: 1, timer: 10 * 60 },
    { key: 'part2', label: '4. Part 2', kind: 'test', total: 200, get timer() { return this.total * 45; } },
    { key: 'end',       label: '5. End Test Page',        kind: 'end', total: 1 }
];

// --- Question Bank ---
// Keyed by `${sectionKey}_${itemNumber}` (e.g. 'part1_1', 'part2_101').
// Any item placed here is rendered with its real stem/choices and is graded
// on the End of Test "View Score and Mistakes" report. Any item NOT listed
// here falls back to a generic placeholder and is excluded from scoring.
//
// Shape of each entry:
// 'part1_81': {
//     subject: 'Quantitative',
//     stem: 'Question text goes here?',
//     choices: { A: '...', B: '...', C: '...', D: '...' },
//     correct: 'A'
// }
const QUESTION_BANK = {
};

const AppState = {
    sectionIndex: 0,
    currentItem: 1,
    answers: {},     // { 'part1_3': 'B' }
    revisited: {},   // { 'part1_3': true }
    gridFilter: 'all',
    timerInterval: null,
    timeLeft: 0
};

function getSection() {
    return SECTIONS[AppState.sectionIndex];
}

function itemKey(item) {
    return `${getSection().key}_${item}`;
}

// --- Subject lookup for Part 1 / Part 2 placeholder content ---
function getSubjectLabel(sectionKey, qNum) {
    if (sectionKey === 'part1') {
        if (qNum <= 40) return { title: 'TEST A. VERBAL', sub: 'Analogies' };
        if (qNum <= 80) return { title: 'TEST B. INDUCTIVE REASONING', sub: 'Pattern Recognition' };
        if (qNum <= 120) return { title: 'TEST C. QUANTITATIVE', sub: 'Problem Solving' };
        return { title: 'TEST D. PERCEPTUAL ACUITY', sub: 'Hidden Figures' };
    }
    if (sectionKey === 'part2') {
        if (qNum <= 50) return { title: 'TEST E. BIOLOGY', sub: '' };
        if (qNum <= 100) return { title: 'TEST F. PHYSICS', sub: '' };
        if (qNum <= 150) return { title: 'TEST G. SOCIAL SCIENCE', sub: '' };
        return { title: 'TEST H. CHEMISTRY', sub: '' };
    }
    return { title: '', sub: '' };
}

// --- Rendering ---

function renderAll() {
    renderDropdown();
    renderBody();
    renderPagination();
    renderAttemptedCounter();
    renderNavButtons();
}

function renderDropdown() {
    document.getElementById('section-dropdown').value = getSection().key;
}

function renderBody() {
    const section = getSection();
    const qNum = AppState.currentItem;

    document.getElementById('q-number-display').innerText = `Question ${qNum}`;

    const revisitBtn = document.getElementById('revisit-btn');
    revisitBtn.classList.toggle('active', !!AppState.revisited[itemKey(qNum)]);

    const questionTextEl = document.getElementById('question-text');
    const choicesContainer = document.getElementById('choices-container');
    const responseBox = document.getElementById('response-box');
    const clearBtn = document.getElementById('clear-response-btn');
    const rightTitle = document.getElementById('right-panel-title');

    if (section.kind === 'test') {
        // Question + revisit live on the LEFT, choices live on the RIGHT.
        const bankEntry = QUESTION_BANK[itemKey(qNum)];
        const { title, sub } = getSubjectLabel(section.key, qNum);

        if (bankEntry) {
            questionTextEl.innerHTML = `<strong>${title}</strong>${sub ? `<br><em>${sub}</em>` : ''}<br><br>` +
                `${bankEntry.stem}`;
        } else {
            questionTextEl.innerHTML = `<strong>${title}</strong>${sub ? `<br><em>${sub}</em>` : ''}<br><br>` +
                `This is a placeholder for Question ${qNum}. Read the item at the right and select the best answer.`;
        }

        choicesContainer.classList.remove('hidden');
        responseBox.classList.add('hidden');
        clearBtn.classList.remove('hidden');
        rightTitle.innerText = 'Select an option';

        choicesContainer.innerHTML = '';
        ['A', 'B', 'C', 'D'].forEach(opt => {
            const label = document.createElement('label');
            label.className = 'choice-label';

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `question-${section.key}-${qNum}`;
            radio.value = opt;
            radio.checked = AppState.answers[itemKey(qNum)] === opt;

            radio.addEventListener('change', (e) => {
                AppState.answers[itemKey(AppState.currentItem)] = e.target.value;
                renderPagination();
                renderAttemptedCounter();
            });

            const optionText = bankEntry ? bankEntry.choices[opt] : `Option ${opt}`;
            label.appendChild(radio);
            label.appendChild(document.createTextNode(` (${opt}) ${optionText}`));
            choicesContainer.appendChild(label);
        });
    } else {
        // Reminders / Break / End: meta content on the LEFT, inert response box on the RIGHT.
        choicesContainer.classList.add('hidden');
        responseBox.classList.remove('hidden');
        clearBtn.classList.add('hidden');
        rightTitle.innerText = 'Enter your Response';
        responseBox.value = '';

        questionTextEl.innerHTML = getMetaScreenHTML(section.key);
        questionTextEl.className = 'meta-screen';
    }

    if (section.kind === 'test') {
        questionTextEl.className = '';
    }
}

function getMetaScreenHTML(sectionKey) {
    if (sectionKey === 'reminders') {
        return `
            <h2>IMPORTANT REMINDERS AND CERTIFYING STATEMENT</h2>
            <p>By proceeding, you certify that you are the registered examinee and that you will not use
            any prohibited materials (phones, reviewers, notes) during this simulation.</p>
            <p style="margin-top:12px;">Click <strong>Next</strong> to begin Part 1. Once the timer starts, it cannot be paused.</p>
        `;
    }
    if (sectionKey === 'break') {
        return `
            <h2>10-MINUTE BREAK</h2>
            <p>In the actual test, you will be monitored live by a human proctor even during the 10-minute
            break. You may stand, stretch, get refreshments or snacks, rest your eyes, or take a restroom
            break. Please send a message to your proctor before leaving the test area.</p>
            <p class="warn" style="margin-top:12px;">Do NOT use any prohibited item (cellphones, reviewers, etc.) during this break.</p>
            <div class="large-timer" id="break-large-timer">10:00</div>
            <p>After 10 minutes, click Next Section to proceed. There is no need to enter a response in the box at the right.</p>
        `;
    }
    if (sectionKey === 'end') {
        return `
            <h2>END OF TEST</h2>
            <p>You have completed the National Medical Admission Test (NMAT) simulation.</p>
            <p class="warn" style="margin-top:12px;">DO NOT CLICK Save and Close or Finish Test in the actual exam.</p>
            <p style="margin-top:12px;">In the actual test, you will NOT be able to return to any previous section once you submit.</p>
            <button class="nav-btn primary" id="btn-view-score" style="margin-top:20px;">View Score and Mistakes</button>
            <button class="nav-btn" id="btn-review-qa" style="margin-top:20px; background-color: #5bc0de; color: white;">Review Questions and Answers</button>
        `;
    }
    return '';
}

function renderPagination() {
    const container = document.getElementById('pagination-container');
    container.innerHTML = '';

    const section = getSection();
    const total = section.total;
    const current = AppState.currentItem;

    let start = Math.max(1, current - 4);
    let end = Math.min(total, start + 9);
    if (end - start < 9) start = Math.max(1, end - 9);

    for (let i = start; i <= end; i++) {
        const btn = document.createElement('button');
        btn.className = 'page-btn';
        btn.innerText = i;

        if (i === current) btn.classList.add('active');
        else if (AppState.revisited[`${section.key}_${i}`]) btn.classList.add('revisited');
        else if (AppState.answers[`${section.key}_${i}`]) btn.classList.add('attempted');

        btn.addEventListener('click', () => {
            AppState.currentItem = i;
            renderAll();
        });

        container.appendChild(btn);
    }
}

function renderAttemptedCounter() {
    const section = getSection();
    let count = 0;
    for (let i = 1; i <= section.total; i++) {
        if (AppState.answers[`${section.key}_${i}`]) count++;
    }
    document.getElementById('attempted-display').innerText = `Attempted: ${count}/${section.total}`;
}

function renderNavButtons() {
    const section = getSection();
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');
    const isFirstItem = AppState.currentItem === 1;
    const isLastSection = AppState.sectionIndex === SECTIONS.length - 1;
    const isLastItem = AppState.currentItem === section.total;

    // Once you've left a section you can never return to it (matches the real
    // NMAT), so "Previous" simply has nothing to do at item 1 of a section.
    prevBtn.innerText = 'Previous';
    prevBtn.disabled = isFirstItem;

    nextBtn.innerText = isLastItem ? 'Next Section' : 'Next';
    nextBtn.disabled = isLastItem && isLastSection;
}

// --- Section / Item Navigation ---

function goToItem(delta) {
    const section = getSection();
    const target = AppState.currentItem + delta;

    if (target < 1) {
        // Crossing backward into a previous section is not allowed once you've moved on.
        return;
    }
    if (target > section.total) {
        requestNextSection();
        return;
    }
    AppState.currentItem = target;
    renderAll();
}

function requestNextSection() {
    if (AppState.sectionIndex >= SECTIONS.length - 1) return;

    const nextSection = SECTIONS[AppState.sectionIndex + 1];
    const nextLabel = nextSection.label.replace(/^\d+\.\s*/, '');
    document.getElementById('confirm-message').innerText =
        `Next section: ${nextLabel}. Are you sure you would like to proceed to the next section? ` +
        `You will not be able to go back to this section again.`;
    document.getElementById('confirm-modal').classList.remove('hidden');
}

function goToNextSection() {
    if (AppState.sectionIndex < SECTIONS.length - 1) {
        AppState.sectionIndex++;
        AppState.currentItem = 1;
        renderAll();
        startSectionTimerIfNeeded();
    }
}

// --- Timers (run silently in the background; only the Break screen surfaces one,
// matching the real demo where Part 1 / Part 2 show no visible countdown) ---

function formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function startSectionTimerIfNeeded() {
    clearInterval(AppState.timerInterval);
    const section = getSection();
    const mainTimerEl = document.getElementById('main-timer');

    if (!section.timer) {
        mainTimerEl.classList.add('hidden');
        return;
    }

    mainTimerEl.classList.remove('hidden');
    AppState.timeLeft = section.timer;
    updateTimerDisplay();

    AppState.timerInterval = setInterval(() => {
        AppState.timeLeft--;
        updateTimerDisplay();
        if (AppState.timeLeft <= 0) {
            clearInterval(AppState.timerInterval);
            goToNextSection();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const formatted = formatTime(AppState.timeLeft);
    document.getElementById('main-timer').innerText = formatted;

    if (getSection().key === 'break') {
        const el = document.getElementById('break-large-timer');
        if (el) el.innerText = formatted;
    }
}

// --- Grid Modal ---

function renderGrid() {
    const gridContainer = document.getElementById('grid-container');
    gridContainer.innerHTML = '';
    const section = getSection();

    for (let i = 1; i <= section.total; i++) {
        const key = `${section.key}_${i}`;
        if (AppState.gridFilter === 'attempted' && !AppState.answers[key]) continue;
        if (AppState.gridFilter === 'revisited' && !AppState.revisited[key]) continue;
        if (AppState.gridFilter === 'unattempted' && (AppState.answers[key] || AppState.revisited[key])) continue;

        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.innerText = i;

        if (i === AppState.currentItem) gridItem.classList.add('active');
        if (AppState.revisited[key]) gridItem.classList.add('revisited');
        else if (AppState.answers[key]) gridItem.classList.add('attempted');

        gridItem.addEventListener('click', () => {
            AppState.currentItem = i;
            document.getElementById('grid-modal').classList.add('hidden');
            renderAll();
        });

        gridContainer.appendChild(gridItem);
    }
}

// --- Event Wiring ---

document.getElementById('btn-start-test').addEventListener('click', () => {
    document.getElementById('start-view').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
    AppState.sectionIndex = 0;
    AppState.currentItem = 1;
    renderAll();
    startSectionTimerIfNeeded();
});

document.getElementById('btn-prev').addEventListener('click', () => goToItem(-1));
document.getElementById('btn-next').addEventListener('click', () => goToItem(1));
document.getElementById('nav-left').addEventListener('click', () => goToItem(-1));
document.getElementById('nav-right').addEventListener('click', () => goToItem(1));

document.getElementById('confirm-yes').addEventListener('click', () => {
    document.getElementById('confirm-modal').classList.add('hidden');
    goToNextSection();
});

document.getElementById('confirm-no').addEventListener('click', () => {
    document.getElementById('confirm-modal').classList.add('hidden');
});

document.getElementById('revisit-btn').addEventListener('click', () => {
    const key = itemKey(AppState.currentItem);
    if (AppState.revisited[key]) delete AppState.revisited[key];
    else AppState.revisited[key] = true;
    renderBody();
    renderPagination();
});

document.getElementById('clear-response-btn').addEventListener('click', () => {
    const key = itemKey(AppState.currentItem);
    if (AppState.answers[key]) {
        delete AppState.answers[key];
        renderBody();
        renderPagination();
        renderAttemptedCounter();
    }
});

document.getElementById('open-grid-btn').addEventListener('click', () => {
    AppState.gridFilter = 'all';
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector('.tab-btn[data-filter="all"]').classList.add('active');
    renderGrid();
    document.getElementById('grid-modal').classList.remove('hidden');
});

document.getElementById('close-grid-btn').addEventListener('click', () => {
    document.getElementById('grid-modal').classList.add('hidden');
});

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        AppState.gridFilter = e.target.dataset.filter;
        renderGrid();
    });
});

// --- Score & Mistakes Report ---
// Only items present in QUESTION_BANK are gradable; everything else is a
// placeholder and is excluded from scoring.

function buildResults() {
    const bySubject = {}; // { 'Quantitative': { correct: 0, total: 0, mistakes: [] } }

    Object.keys(QUESTION_BANK).forEach((key) => {
        const q = QUESTION_BANK[key];
        const given = AppState.answers[key];
        if (!bySubject[q.subject]) bySubject[q.subject] = { correct: 0, total: 0, mistakes: [] };
        bySubject[q.subject].total++;

        if (given && given === q.correct) {
            bySubject[q.subject].correct++;
        } else {
            bySubject[q.subject].mistakes.push({ key, q, given: given || null });
        }
    });

    return bySubject;
}

function formatMistakeForCopy(item) {
    const { q, given } = item;
    const lines = [];
    lines.push(q.stem);
    ['A', 'B', 'C', 'D'].forEach(opt => {
        let line = `${opt}. ${q.choices[opt]}`;
        if (opt === q.correct) line += ' (Correct Answer)';
        if (given && opt === given && given !== q.correct) line += ' (Your Answer)';
        lines.push(line);
    });
    if (!given) lines.push('(Not answered)');
    lines.push('Error tag: ');
    return lines.join('\n');
}

function copyText(text, feedbackEl) {
    const showFallback = () => {
        feedbackEl.classList.remove('hidden');
        feedbackEl.value = text;
        feedbackEl.select();
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(showFallback);
    } else {
        showFallback();
    }
}

function renderScoreReport() {
    const results = buildResults();
    const body = document.getElementById('score-report-body');
    body.innerHTML = '';

    let overallCorrect = 0;
    let overallTotal = 0;
    const allMistakeTexts = [];

    Object.keys(results).forEach((subject) => {
        const r = results[subject];
        overallCorrect += r.correct;
        overallTotal += r.total;

        const section = document.createElement('div');
        section.className = 'score-section';

        const heading = document.createElement('h3');
        heading.innerText = `${subject}: ${r.correct}/${r.total} correct`;
        section.appendChild(heading);

        if (r.mistakes.length === 0) {
            const p = document.createElement('p');
            p.innerText = 'No mistakes in this sample section.';
            section.appendChild(p);
        }

        r.mistakes.forEach((item, idx) => {
            const text = formatMistakeForCopy(item);
            allMistakeTexts.push(text);

            const card = document.createElement('div');
            card.className = 'mistake-card';

            const pre = document.createElement('pre');
            pre.innerText = text;

            const copyBtn = document.createElement('button');
            copyBtn.className = 'nav-btn';
            copyBtn.innerText = 'Copy';

            const fallback = document.createElement('textarea');
            fallback.className = 'copy-fallback hidden';
            fallback.readOnly = true;

            copyBtn.addEventListener('click', () => copyText(text, fallback));

            card.appendChild(pre);
            card.appendChild(copyBtn);
            card.appendChild(fallback);
            section.appendChild(card);
        });

        body.appendChild(section);
    });

    document.getElementById('score-overall').innerText =
        overallTotal > 0 ? `Overall (graded sample items): ${overallCorrect}/${overallTotal} correct` : 'No graded sample items answered yet.';

    const copyAllBtn = document.getElementById('copy-all-mistakes');
    const copyAllFallback = document.getElementById('copy-all-fallback');
    copyAllBtn.onclick = () => copyText(allMistakeTexts.join('\n\n'), copyAllFallback);
}

document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'btn-view-score') {
        renderScoreReport();
        document.getElementById('score-modal').classList.remove('hidden');
    }
});

document.getElementById('close-score-btn').addEventListener('click', () => {
    document.getElementById('score-modal').classList.add('hidden');
});

function renderReviewQA() {
    const mainContent = document.getElementById('main-content');
    let html = '<h2>Review Questions and Answers</h2><div class="review-container" style="text-align:left; padding: 20px; overflow-y:auto; max-height:80vh;">';

    // Group by section
    SECTIONS.forEach(sec => {
        if (sec.kind !== 'test') return;
        html += `<h3>${sec.label}</h3>`;

        let currentSubject = '';
        for (let i = 1; i <= sec.total; i++) {
            const key = `${sec.key}_${i}`;
            const q = QUESTION_BANK[key];
            if (!q) continue; // Skip unpopulated questions

            const subjLabel = getSubjectLabel(sec.key, i).title;
            if (subjLabel !== currentSubject) {
                html += `<h4>${subjLabel}</h4>`;
                currentSubject = subjLabel;
            }

            const userAns = AppState.answers[key];
            const correctAns = q.correct;

            html += `<div class="review-item" style="margin-bottom: 25px; padding-bottom: 15px; border-bottom: 1px solid #eee;">`;
            html += `<div><strong>Q${i}.</strong> ${q.stem}</div>`;
            html += `<div class="review-choices" style="margin-top: 10px;">`;

            Object.keys(q.choices).forEach(choiceKey => {
                const isCorrect = choiceKey === correctAns;
                const isUser = choiceKey === userAns;
                let colorStyle = '';

                if (isCorrect) {
                    colorStyle = 'color: #8db600; font-weight: bold;'; // apple-green
                } else if (isUser) {
                    colorStyle = 'color: #00ffff; font-weight: bold;'; // fluorescent blue
                }

                html += `<div style="${colorStyle}"><strong>${choiceKey}.</strong> ${q.choices[choiceKey]}</div>`;
            });

            html += `</div></div>`;
        }
    });

    html += '</div><button onclick="location.reload()" class="btn primary" style="margin-top: 15px;">Restart Test</button>';
    mainContent.innerHTML = html;

    const bottomNav = document.getElementById('bottom-nav');
    if (bottomNav) bottomNav.style.display = 'none';
}
