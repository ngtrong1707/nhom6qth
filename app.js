// ══════════════════════════════════════════════════
//  CHICKEN QUIZ GAME  –  Game Logic
// ══════════════════════════════════════════════════

const questions = [
    {
        title: "Câu 1",
        q: "Quản trị được hiểu là gì trong bối cảnh hiện đại?",
        opts: [
            "Là quá trình hoạch định, tổ chức, lãnh đạo và kiểm soát nguồn lực để đạt mục tiêu",
            "Chỉ là việc điều hành công việc thông qua nhân viên",
            "Là quá trình kiểm soát tài chính của doanh nghiệp",
            "Là việc giám sát hoạt động sản xuất"
        ],
        correct: 0
    },
    {
        title: "Câu 2",
        q: "Điểm đặc thù trong hoạt động quản trị của Viettel là gì?",
        opts: [
            "Chỉ tập trung vào lợi nhuận",
            "Kết hợp giữa mục tiêu kinh doanh và nhiệm vụ quốc phòng",
            "Không chịu ảnh hưởng của môi trường bên ngoài",
            "Hoạt động hoàn toàn độc lập với Nhà nước"
        ],
        correct: 1
    },
    {
        title: "Câu 3",
        q: "Chiến lược \u201cGo Global\u201d của Viettel nhằm mục tiêu gì?",
        opts: [
            "Giảm chi phí sản xuất trong nước",
            "Tập trung hoàn toàn vào thị trường nội địa",
            "Loại bỏ các đối thủ cạnh tranh trong nước",
            "Mở rộng thị trường quốc tế và đa dạng hóa hoạt động"
        ],
        correct: 3
    },
    {
        title: "Câu 4",
        q: "Phong cách lãnh đạo tại Viettel có đặc điểm nổi bật nào?",
        opts: [
            "Tự do, không có kỷ luật",
            "Chỉ tập trung vào sáng tạo, không chú trọng kết quả",
            "Quyết đoán, kỷ luật và mang dấu ấn quân đội",
            "Phụ thuộc hoàn toàn vào ý kiến nhân viên"
        ],
        correct: 2
    },
    {
        title: "Câu 5",
        q: "Kết quả doanh thu hợp nhất của Viettel trong năm 2024 đạt được là bao nhiêu?",
        opts: [
            "190 nghìn tỷ đồng",
            "51 nghìn tỷ đồng",
            "42,6 nghìn tỷ đồng",
            "103 nghìn tỷ đồng"
        ],
        correct: 0
    },
    {
        title: "Câu 6",
        q: "Mô hình tổ chức của Viettel chủ yếu là gì?",
        opts: [
            "Mô hình trực tuyến đơn giản",
            "Mô hình hợp tác xã",
            "Mô hình phân quyền hoàn toàn",
            "Mô hình công ty mẹ – công ty con"
        ],
        correct: 3
    }
];

// Map of "lit up" chicken images from the PPT (brighter / highlight versions)
// Using image20 which is the large background version and may be a glowing chicken
// For now we'll do a CSS golden glow + scale animation per solved chicken
const CHICKEN_IMAGES = [
    'media/image16.png',
    'media/image17.png',
    'media/image18.png',
    'media/image19.png',
    'media/image21.png',
    'media/image22.png'
];

// Track which chickens have been correctly answered
let solvedQuestions = Array(6).fill(false);
let currentQIndex   = -1;
let isAnswered      = false;

// DOM refs
const homeScreen     = document.getElementById('home-screen');
const questionScreen = document.getElementById('question-screen');
const chickenBtns    = document.querySelectorAll('.chicken-btn');
const backBtn        = document.getElementById('back-btn');
const qTitle         = document.getElementById('q-title');
const qText          = document.getElementById('q-text');
const ansBtns        = document.querySelectorAll('.answer-btn');
const modal          = document.getElementById('feedback-modal');
const feedbackTitle  = document.getElementById('feedback-title');
const feedbackSub    = document.getElementById('feedback-sub');
const modalIcon      = document.getElementById('modal-icon');
const nextBtn        = document.getElementById('next-btn');
const correctSound   = document.getElementById('audio-correct');
const wrongSound     = document.getElementById('audio-wrong');

// ── CHICKEN SELECTION ──────────────────────────────
chickenBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        // Always use currentTarget so clicking the <img> inside still works
        const index = parseInt(e.currentTarget.dataset.index);
        if (isNaN(index)) return;
        if (solvedQuestions[index]) return;    // already answered correctly → skip

        currentQIndex = index;
        openQuestion(index);
    });
});

backBtn.addEventListener('click', goHome);

// ── OPEN QUESTION ──────────────────────────────────
function openQuestion(index) {
    const qData = questions[index];
    qTitle.innerText = qData.title;
    qText.innerText  = qData.q;

    ansBtns.forEach((btn, i) => {
        btn.className = 'answer-btn';
        btn.querySelector('.text').innerText = qData.opts[i];
    });

    isAnswered = false;
    unlockAnswers();
    homeScreen.classList.remove('active');
    questionScreen.classList.add('active');
}

// ── ANSWER HANDLING ────────────────────────────────
ansBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        if (isAnswered) return;
        isAnswered = true;
        lockAnswers();

        const correctIdx = questions[currentQIndex].correct;

        if (i === correctIdx) {
            // ✅  CORRECT
            btn.classList.add('correct');
            playSfx(correctSound);

            // After 1s: go back home, show glow on chicken, open modal
            setTimeout(() => {
                markChickenSolved(currentQIndex);
                goHome();
                showModal(true, currentQIndex);
            }, 1000);

        } else {
            // ❌  WRONG – only show that THIS answer was wrong, do NOT reveal correct answer
            btn.classList.add('wrong');
            playSfx(wrongSound);

            // After 1.5s: reset so they can try again freely
            setTimeout(() => {
                btn.classList.remove('wrong');
                isAnswered = false;
                unlockAnswers();
            }, 1500);
        }
    });
});

// ── HELPERS ─────────────────────────────────────────
function lockAnswers() {
    ansBtns.forEach(b => { b.style.pointerEvents = 'none'; b.style.cursor = 'default'; });
}
function unlockAnswers() {
    ansBtns.forEach(b => { b.style.pointerEvents = ''; b.style.cursor = ''; });
}
function playSfx(el) {
    try { el.currentTime = 0; el.play(); } catch(e) {}
}

function goHome() {
    questionScreen.classList.remove('active');
    homeScreen.classList.add('active');
}

// Glow animation on the correctly-answered chicken button
function markChickenSolved(index) {
    solvedQuestions[index] = true;
    const btn = chickenBtns[index];
    btn.classList.add('solved-correct');   // glowing CSS class
    const lbl = btn.querySelector('span');
    if (lbl) lbl.innerText = '✔ Đã trả lời!';
}

function showModal(isCorrect, qIndex) {
    if (modalIcon)    modalIcon.innerText    = isCorrect ? '🎉' : '😢';
    if (feedbackTitle) feedbackTitle.innerText = isCorrect ? 'CHÍNH XÁC!' : 'SAI RỒI!';
    if (feedbackTitle) feedbackTitle.className = isCorrect ? 'win' : 'lose';
    if (feedbackSub)  feedbackSub.innerText   = isCorrect
        ? `Xuất sắc! Bạn đã mở được miếng đùi gà ${qIndex + 1}.`
        : '';
    modal.classList.add('active');
}

// ── MODAL CLOSE ────────────────────────────────────
nextBtn.addEventListener('click', () => {
    modal.classList.remove('active');

    if (solvedQuestions.every(v => v)) {
        setTimeout(() => {
            alert('🎉 Chúc mừng! Nhóm bạn đã chinh phục toàn bộ 6 miếng đùi gà xuất sắc!');
        }, 400);
    }
});
