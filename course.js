let currentActivityIndex = 0;
let userAnswers = {};

const activityContainer = document.getElementById('activity-container');
const feedbackElement = document.getElementById('feedback');
const progressBar = document.getElementById('progress-bar');
const btnCheck = document.getElementById('btn-check');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function initCourse() {
    shuffleArray(courseData.activities);
    renderActivity(currentActivityIndex);
    updateProgress();
    xAPIHelper.sendStatement("initialized", "http://uns.edu.ar/courses/conservacion-suelos", "Inició la Trivia de Conservación y Física de Suelos");
}

function renderActivity(index) {
    const activity = courseData.activities[index];
    document.getElementById('activity-title').innerText = activity.title;
    document.getElementById('activity-objective').innerText = activity.objective;
    
    // Año y Sábado indicator
    const timeElem = document.getElementById('activity-time');
    if (activity.year && activity.week) {
        timeElem.innerText = `Año ${activity.year} - Sábado ${activity.week}`;
        timeElem.style.display = 'block';
    } else {
        timeElem.style.display = 'none';
    }

    // Media
    const mediaContainer = document.getElementById('media-container');
    mediaContainer.innerHTML = '';
    mediaContainer.style.display = 'none';

    if (activity.video || activity.youtube) {
        const videoId = activity.video || activity.youtube; // Support both keys
        mediaContainer.innerHTML = `<div class="video-wrapper">
            <iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
        </div>`;
        mediaContainer.style.display = 'block';
    } else if (activity.image) {
        const img = document.createElement('img');
        img.src = activity.image;
        img.className = 'activity-image';
        img.alt = activity.title;
        mediaContainer.appendChild(img);
        mediaContainer.style.display = 'block';
    }
    
    activityContainer.innerHTML = '';
    feedbackElement.className = 'feedback';
    feedbackElement.innerText = '';
    feedbackElement.style.display = 'none';
    btnNext.disabled = true;

    switch(activity.type) {
        case 'choice':
            renderChoice(activity);
            break;
        case 'sequencing':
            renderSequencing(activity);
            break;
        case 'multiple-choice':
            renderMultipleChoice(activity);
            break;
        case 'boolean':
            renderBoolean(activity);
            break;
        case 'fill-in':
            renderFillIn(activity);
            break;
        case 'matching':
            renderMatching(activity);
            break;
    }
}

function renderChoice(activity) {
    const question = document.createElement('p');
    question.innerText = activity.question;
    question.style.fontWeight = "bold";
    activityContainer.appendChild(question);

    const grid = document.createElement('div');
    grid.className = 'options-grid';
    activity.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (userAnswers[activity.id] === opt.id) btn.classList.add('selected');
        btn.innerText = opt.text;
        btn.onclick = () => {
            document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            userAnswers[activity.id] = opt.id;
        };
        grid.appendChild(btn);
    });
    activityContainer.appendChild(grid);
}

function renderBoolean(activity) {
    const question = document.createElement('p');
    question.innerText = activity.question;
    question.style.fontWeight = "bold";
    activityContainer.appendChild(question);

    const grid = document.createElement('div');
    grid.className = 'options-grid';
    [true, false].forEach(val => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (userAnswers[activity.id] === val) btn.classList.add('selected');
        btn.innerText = val ? "Verdadero" : "Falso";
        btn.onclick = () => {
            document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            userAnswers[activity.id] = val;
        };
        grid.appendChild(btn);
    });
    activityContainer.appendChild(grid);
}

function renderSequencing(activity) {
    const info = document.createElement('p');
    info.innerText = activity.content || "Ordena los elementos arrastrándolos:";
    activityContainer.appendChild(info);

    const list = document.createElement('div');
    list.className = 'sortable-list';
    list.id = 'sortable-list';
    
    // Si ya hay respuesta previa, usarla, sino barajar
    let items = userAnswers[activity.id] || [...activity.options].sort(() => Math.random() - 0.5);
    
    items.forEach(text => {
        const item = document.createElement('div');
        item.className = 'sortable-item';
        item.innerText = text;
        item.draggable = true;
        
        item.addEventListener('dragstart', () => item.classList.add('dragging'));
        item.addEventListener('dragend', () => item.classList.remove('dragging'));
        list.appendChild(item);
    });

    list.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(list, e.clientY);
        const dragging = document.querySelector('.dragging');
        if (afterElement == null) {
            list.appendChild(dragging);
        } else {
            list.insertBefore(dragging, afterElement);
        }
    });

    activityContainer.appendChild(list);
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.sortable-item:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function renderMultipleChoice(activity) {
    const info = document.createElement('p');
    info.innerText = activity.question;
    activityContainer.appendChild(info);

    const grid = document.createElement('div');
    grid.className = 'options-grid';
    activity.options.forEach(text => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        if (userAnswers[activity.id] && userAnswers[activity.id].includes(text)) btn.classList.add('selected');
        btn.innerText = text;
        btn.onclick = () => {
            btn.classList.toggle('selected');
            if(!userAnswers[activity.id]) userAnswers[activity.id] = [];
            const idx = userAnswers[activity.id].indexOf(text);
            if(idx > -1) userAnswers[activity.id].splice(idx, 1);
            else userAnswers[activity.id].push(text);
        };
        grid.appendChild(btn);
    });
    activityContainer.appendChild(grid);
}

function renderFillIn(activity) {
    const info = document.createElement('p');
    info.innerText = activity.question;
    activityContainer.appendChild(info);

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'option-btn'; 
    input.style.width = '100%';
    input.value = userAnswers[activity.id] || "";
    input.oninput = (e) => userAnswers[activity.id] = e.target.value;
    activityContainer.appendChild(input);
}

function renderMatching(activity) {
    const info = document.createElement('p');
    info.innerText = activity.content || "Relaciones clave:";
    activityContainer.appendChild(info);
    
    const container = document.createElement('div');
    container.className = 'matching-container';
    activity.pairs.forEach(p => {
        const row = document.createElement('div');
        row.className = 'matching-row';
        row.innerHTML = `<div class="matching-key">${p.key}</div>
                         <div class="matching-val">${p.val}</div>`;
        container.appendChild(row);
    });
    activityContainer.appendChild(container);
    userAnswers[activity.id] = true; 
}

function checkAnswer() {
    const activity = courseData.activities[currentActivityIndex];
    let isCorrect = false;

    if (activity.type === 'choice') {
        isCorrect = (userAnswers[activity.id] === activity.correctId);
    } else if (activity.type === 'boolean') {
        isCorrect = (userAnswers[activity.id] === activity.correctAnswer);
    } else if (activity.type === 'multiple-choice') {
        const answer = userAnswers[activity.id] || [];
        isCorrect = activity.correctAnswers.every(a => answer.includes(a)) && answer.length === activity.correctAnswers.length;
    } else if (activity.type === 'fill-in') {
        const answer = userAnswers[activity.id] || "";
        isCorrect = (answer.toLowerCase().trim() === activity.correctAnswer.toLowerCase().trim());
    } else if (activity.type === 'sequencing') {
        const listItems = [...document.querySelectorAll('.sortable-item')].map(i => i.innerText);
        userAnswers[activity.id] = listItems;
        isCorrect = listItems.every((val, index) => val === activity.correctOrder[index]);
    } else {
        isCorrect = true; 
    }

    if (isCorrect) {
        feedbackElement.innerText = activity.feedback || "¡Correcto! Muy bien hecho.";
        feedbackElement.className = 'feedback correct';
        feedbackElement.style.display = 'block';
        btnNext.disabled = false;
    } else {
        feedbackElement.innerText = "Respuesta incorrecta. Volviendo a empezar...";
        feedbackElement.className = 'feedback incorrect';
        feedbackElement.style.display = 'block';
        setTimeout(() => {
            shuffleArray(courseData.activities);
            currentActivityIndex = 0;
            userAnswers = {};
            renderActivity(0);
            updateProgress();
        }, 1500);
    }

    xAPIHelper.sendStatement(
        activity.xapi.verb, 
        activity.xapi.objectId, 
        activity.title, 
        { success: isCorrect, response: JSON.stringify(userAnswers[activity.id]) }
    );
}

function nextActivity() {
    if (currentActivityIndex < courseData.activities.length - 1) {
        currentActivityIndex++;
        renderActivity(currentActivityIndex);
        updateProgress();
    } else {
        finishCourse();
    }
}

function prevActivity() {
    if (currentActivityIndex > 0) {
        currentActivityIndex--;
        renderActivity(currentActivityIndex);
        updateProgress();
    }
}

function updateProgress() {
    const progress = ((currentActivityIndex) / courseData.activities.length) * 100;
    progressBar.style.width = `${progress}%`;
    btnPrev.disabled = currentActivityIndex === 0;

    const activity = courseData.activities[currentActivityIndex];
    const counter = document.getElementById('activity-counter');
    if (activity.year && activity.week) {
        counter.innerText = `Año ${activity.year} - Sábado ${activity.week}`;
    } else {
        counter.innerText = `Actividad ${currentActivityIndex + 1} de ${courseData.activities.length}`;
    }
}

function finishCourse() {
    activityContainer.innerHTML = `
        <div style="text-align:center; padding: 2rem;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">🎉</div>
            <h1 style="color:#1a2e1a; font-size: 3.5rem; margin: 0.5rem 0;">¡Felicitaciones!</h1>
            <h2 style="color:#1a2e1a; font-size: 2rem;">¡Cuidemos el Suelo!</h2>
            <p style="font-size: 1.2rem;">Has completado exitosamente la Trivia de Conservación y Física de Suelos.</p>
            <p style="font-size: 1rem; color: #666; margin-top: 0.5rem;">Área de Suelos - Departamento de Agronomía<br>Universidad Nacional del Sur</p>
            <div style="margin: 2rem 0; font-size: 4rem;">🌱🌾🚜</div>
            <button class="primary" onclick="location.reload()" style="max-width: 300px;">Reiniciar Trivia</button>
        </div>
    `;
    progressBar.style.width = '100%';
    feedbackElement.style.display = 'none';
    btnCheck.style.display = 'none';
    btnNext.style.display = 'none';
    btnPrev.style.display = 'none';

    xAPIHelper.sendStatement("passed", "http://uns.edu.ar/courses/conservacion-suelos", "Completó exitosamente la trivia de suelos");
}

window.onload = initCourse;
