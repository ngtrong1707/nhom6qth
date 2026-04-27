const questions = [
  {
    id: "E1",
    level: "Dễ",
    points: 10,
    seconds: 30,
    source: "PDF trang 1",
    image: "drumstick.png",
    question: "Quản trị được hiểu là gì trong bối cảnh hiện đại?",
    options: [
      "Quá trình hoạch định, tổ chức, lãnh đạo và kiểm soát nguồn lực để đạt mục tiêu.",
      "Chỉ là việc giám sát hoạt động sản xuất của doanh nghiệp.",
      "Chỉ là quá trình kiểm soát tài chính và chi phí.",
      "Là hoạt động tự phát, không cần mục tiêu rõ ràng."
    ],
    answer: 0,
    explain: "Báo cáo nêu quản trị gồm hoạch định, tổ chức, lãnh đạo và kiểm soát nguồn lực nhằm đạt mục tiêu hiệu quả."
  },
  {
    id: "E2",
    level: "Dễ",
    points: 10,
    seconds: 30,
    source: "PDF trang 1",
    image: "fried-chicken-stack.png",
    question: "Điểm đặc thù trong hoạt động quản trị của Viettel là gì?",
    options: [
      "Kết hợp mục tiêu kinh doanh với nhiệm vụ quốc phòng - an ninh.",
      "Chỉ tập trung vào lợi nhuận ngắn hạn.",
      "Không chịu ảnh hưởng của môi trường bên ngoài.",
      "Hoạt động hoàn toàn độc lập với Nhà nước."
    ],
    answer: 0,
    explain: "Viettel vừa hoạt động theo cơ chế thị trường, vừa gắn với nhiệm vụ quốc phòng - an ninh."
  },
  {
    id: "E3",
    level: "Dễ",
    points: 10,
    seconds: 30,
    source: "PDF trang 4",
    image: "popcorn-chicken.png",
    question: "Doanh thu hợp nhất của Viettel năm 2024 đạt bao nhiêu?",
    options: [
      "51 nghìn tỷ đồng.",
      "42,6 nghìn tỷ đồng.",
      "190 nghìn tỷ đồng.",
      "103 nghìn tỷ đồng."
    ],
    answer: 2,
    explain: "Bảng chỉ tiêu năm 2024 ghi doanh thu hợp nhất của Viettel là 190 nghìn tỷ đồng."
  },
  {
    id: "M1",
    level: "Vừa",
    points: 20,
    seconds: 25,
    source: "PDF trang 6",
    image: "chicken-strips.png",
    question: "Chiến lược “Go Global” của Viettel nhằm mục tiêu chính nào?",
    options: [
      "Giảm hoàn toàn đầu tư công nghệ trong nước.",
      "Mở rộng thị trường quốc tế và đa dạng hóa hoạt động.",
      "Chỉ tập trung vào thị trường nội địa.",
      "Loại bỏ mọi đối thủ cạnh tranh trong nước."
    ],
    answer: 1,
    explain: "Go Global giúp Viettel mở rộng hoạt động ra quốc tế, đa dạng hóa thị trường nhưng cũng kéo theo yêu cầu quản trị rủi ro."
  },
  {
    id: "M2",
    level: "Vừa",
    points: 20,
    seconds: 25,
    source: "PDF trang 8",
    image: "fried-chicken-pieces.png",
    question: "Mô hình tổ chức chủ yếu của Viettel được mô tả là gì?",
    options: [
      "Mô hình công ty mẹ - công ty con.",
      "Mô hình hợp tác xã.",
      "Mô hình trực tuyến đơn giản.",
      "Mô hình phân quyền hoàn toàn, không có kiểm soát tập đoàn."
    ],
    answer: 0,
    explain: "Công ty mẹ giữ vai trò hoạch định chiến lược, quản trị vốn và kiểm soát toàn hệ thống; các công ty con chủ động theo chuyên môn."
  },
  {
    id: "M3",
    level: "Vừa",
    points: 20,
    seconds: 25,
    source: "PDF trang 8-9",
    image: "drumstick.png",
    question: "Phong cách lãnh đạo tại Viettel có đặc điểm nổi bật nào?",
    options: [
      "Tự do tuyệt đối, không cần kỷ luật.",
      "Chỉ chú trọng sáng tạo, không quan tâm kết quả.",
      "Quyết đoán, kỷ luật, trách nhiệm và mang dấu ấn quân đội.",
      "Phụ thuộc hoàn toàn vào ý kiến của nhân viên."
    ],
    answer: 2,
    explain: "Báo cáo nhấn mạnh tính quyết đoán, kỷ luật, trách nhiệm và khả năng tổ chức thực thi cao của Viettel."
  },
  {
    id: "H1",
    level: "Khó",
    points: 30,
    seconds: 20,
    source: "PDF trang 3",
    image: "fried-chicken-stack.png",
    question: "Trong hệ sinh thái y tế số của Viettel, số hồ sơ sức khỏe được nêu là bao nhiêu?",
    options: [
      "3,5 triệu hồ sơ.",
      "14 triệu hồ sơ.",
      "30 triệu hồ sơ.",
      "38 triệu hồ sơ."
    ],
    answer: 2,
    explain: "Bảng hệ sinh thái số ghi Viettel có 30 triệu hồ sơ sức khỏe trong hệ sinh thái."
  },
  {
    id: "H2",
    level: "Khó",
    points: 30,
    seconds: 20,
    source: "PDF trang 11",
    image: "popcorn-chicken.png",
    question: "Tổng số nhân viên trên toàn cầu của Viettel năm 2024 là bao nhiêu?",
    options: [
      "50.859 người.",
      "53.322 người.",
      "58.300 người.",
      "83.200 người."
    ],
    answer: 1,
    explain: "Bảng chỉ tiêu nguồn nhân lực ghi tổng số nhân viên toàn cầu năm 2024 là 53.322 người."
  },
  {
    id: "H3",
    level: "Khó",
    points: 30,
    seconds: 20,
    source: "PDF trang 12",
    image: "chicken-strips.png",
    question: "Hệ thống kiểm soát của Viettel gắn với nhóm chỉ tiêu nào?",
    options: [
      "Chỉ theo dõi số lượng nhân viên đi làm hằng ngày.",
      "Chỉ tập trung vào chi phí quảng cáo.",
      "Chất lượng mạng, thị phần, tài chính, hài lòng khách hàng và tiến độ dự án công nghệ.",
      "Chỉ đánh giá doanh thu mà không đo chất lượng dịch vụ."
    ],
    answer: 2,
    explain: "Hoạt động kiểm soát gắn với KPI về mạng lưới, thị phần, tài chính, khách hàng và dự án công nghệ mới."
  },
  {
    id: "H4",
    level: "Khó",
    points: 30,
    seconds: 20,
    source: "PDF trang 14",
    image: "fried-chicken-pieces.png",
    question: "Tổng số liệu tiết kiệm năng lượng và giảm phát thải năm 2024 của Viettel là gì?",
    options: [
      "84.438 MWh và 55.534 tCO2e.",
      "67.938 MWh và 45.967 tCO2e.",
      "4.294 MWh và 2.905 tCO2e.",
      "2.721 MWh và 1.841 tCO2e."
    ],
    answer: 0,
    explain: "Bảng kết quả ghi tổng năng lượng tiết kiệm là 84.438 MWh và phát thải KNK giảm là 55.534 tCO2e."
  }
];

const essayQuestions = [
  {
    id: "TL1",
    source: "PDF trang 6",
    image: "chicken-mascot.png",
    question: "Theo bạn, vì sao chiến lược chuyển dịch từ Telco sang Techco lại quan trọng đối với Viettel trong giai đoạn chuyển đổi số?",
    hint: "Gợi ý trình bày: áp lực cạnh tranh công nghệ, hạ tầng số, AI, dữ liệu, an ninh mạng và lợi thế dài hạn."
  },
  {
    id: "TL2",
    source: "PDF trang 8-9",
    image: "fried-chicken-bucket.png",
    question: "Phân tích ưu điểm và hạn chế của phong cách lãnh đạo mang dấu ấn quân đội tại Viettel.",
    hint: "Gợi ý trình bày: kỷ luật, tốc độ thực thi, trách nhiệm, đổi mới sáng tạo và áp lực đối với nhân sự."
  },
  {
    id: "TL3",
    source: "PDF trang 14-15",
    image: "fried-chicken-pieces.png",
    question: "Nếu là nhà quản trị, bạn sẽ đề xuất gì để Viettel cân bằng giữa KPI ngắn hạn và giá trị phát triển bền vững dài hạn?",
    hint: "Gợi ý trình bày: chỉ tiêu tài chính, trải nghiệm khách hàng, nhân sự, môi trường, dữ liệu và quản trị rủi ro."
  }
];

const levelMeta = {
  "Dễ": { accent: "#008b5f", label: "3 câu - 10 điểm/câu" },
  "Vừa": { accent: "#f39b17", label: "3 câu - 20 điểm/câu" },
  "Khó": { accent: "#d71920", label: "4 câu - 30 điểm/câu" },
  "Tự luận": { accent: "#6a2ca0", label: "3 câu - chỉ chiếu lên" }
};

const state = {
  order: [...questions],
  active: null,
  answered: new Map(),
  misses: new Map(),
  seenEssays: new Set(),
  score: 0,
  correct: 0,
  streak: 0,
  timerId: null,
  secondsLeft: 0
};

const board = document.querySelector("#board");
const scoreEl = document.querySelector("#score");
const correctEl = document.querySelector("#correctCount");
const streakEl = document.querySelector("#streak");
const progressEl = document.querySelector("#progressText");
const questionDialog = document.querySelector("#questionDialog");
const questionCard = document.querySelector(".question-card");
const finalDialog = document.querySelector("#finalDialog");
const questionLevel = document.querySelector("#questionLevel");
const questionSource = document.querySelector("#questionSource");
const questionText = document.querySelector("#questionText");
const answers = document.querySelector("#answers");
const timerBadge = document.querySelector(".timer");
const timerValue = document.querySelector("#timerValue");
const resultPanel = document.querySelector("#resultPanel");
const resultIcon = document.querySelector("#resultIcon");
const resultTitle = document.querySelector("#resultTitle");
const resultExplain = document.querySelector("#resultExplain");
const nextBtn = document.querySelector("#nextBtn");
const retryBtn = document.querySelector("#retryBtn");

document.querySelector("#startBtn").addEventListener("click", () => {
  document.querySelector(".board").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#shuffleBtn").addEventListener("click", () => {
  shuffleBoard();
  renderBoard();
});

document.querySelector("#restartBtn").addEventListener("click", restartGame);
document.querySelector("#closeDialog").addEventListener("click", closeQuestion);
nextBtn.addEventListener("click", closeQuestion);
retryBtn.addEventListener("click", retryCurrentQuestion);

questionDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeQuestion();
});

finalDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  finalDialog.close();
});

function renderBoard() {
  board.innerHTML = "";

  for (const level of ["Dễ", "Vừa", "Khó"]) {
    const section = document.createElement("section");
    section.className = "level-section";

    const heading = document.createElement("div");
    heading.className = "level-heading";
    heading.innerHTML = `<h2>${level}</h2><span>${levelMeta[level].label}</span>`;

    const grid = document.createElement("div");
    grid.className = "tile-grid";

    state.order
      .filter((item) => item.level === level)
      .forEach((item, index) => grid.appendChild(createTile(item, index)));

    section.append(heading, grid);
    board.appendChild(section);
  }

  board.appendChild(createEssaySection());
}

function createTile(item, index) {
  const result = state.answered.get(item.id);
  const misses = state.misses.get(item.id) || 0;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "question-tile";
  button.style.setProperty("--accent", levelMeta[item.level].accent);
  button.style.setProperty("--tile-color", tileBackground(item.level));
  button.disabled = Boolean(result);
  button.dataset.id = item.id;

  if (result) {
    button.classList.add(result.correct ? "correct" : "wrong");
  } else if (misses) {
    button.classList.add("retrying");
  }

  button.innerHTML = `
    <span class="tile-top">
      <span>${item.id}</span>
      <span>${item.points} điểm</span>
    </span>
    <img class="tile-image" src="./assets/${item.image}" alt="" />
    <span class="tile-title">Miếng gà ${index + 1}</span>
    <span class="tile-status">${getTileStatus(result, misses)}</span>
  `;

  button.addEventListener("click", () => openQuestion(item.id));
  return button;
}

function getTileStatus(result, misses) {
  if (result?.correct) return "Đã đúng";
  if (misses) return `Sai ${misses} lần - thử lại`;
  return "Chưa mở";
}

function createEssaySection() {
  const section = document.createElement("section");
  section.className = "level-section essay-section";

  const heading = document.createElement("div");
  heading.className = "level-heading";
  heading.innerHTML = `<h2>Tự luận</h2><span>${levelMeta["Tự luận"].label}</span>`;

  const grid = document.createElement("div");
  grid.className = "tile-grid essay-grid";

  essayQuestions.forEach((item, index) => grid.appendChild(createEssayTile(item, index)));

  section.append(heading, grid);
  return section;
}

function createEssayTile(item, index) {
  const wasSeen = state.seenEssays.has(item.id);
  const button = document.createElement("button");
  button.type = "button";
  button.className = "question-tile essay-tile";
  button.style.setProperty("--accent", levelMeta["Tự luận"].accent);
  button.style.setProperty("--tile-color", "linear-gradient(180deg, rgba(106,44,160,.14), transparent)");
  button.dataset.id = item.id;

  if (wasSeen) {
    button.classList.add("seen");
  }

  button.innerHTML = `
    <span class="tile-top">
      <span>${item.id}</span>
      <span>Chiếu lên</span>
    </span>
    <img class="tile-image" src="./assets/${item.image}" alt="" />
    <span class="tile-title">Câu tự luận ${index + 1}</span>
    <span class="tile-status">${wasSeen ? "Đã chiếu" : "Chưa chiếu"}</span>
  `;

  button.addEventListener("click", () => openEssay(item.id));
  return button;
}

function tileBackground(level) {
  if (level === "Dễ") return "linear-gradient(180deg, rgba(0,139,95,.12), transparent)";
  if (level === "Vừa") return "linear-gradient(180deg, rgba(249,178,51,.18), transparent)";
  return "linear-gradient(180deg, rgba(215,25,32,.12), transparent)";
}

function openQuestion(id) {
  const item = questions.find((q) => q.id === id);
  if (!item || state.answered.has(id)) return;

  state.active = item;
  questionCard.classList.remove("essay-mode");
  timerBadge.hidden = false;
  questionLevel.textContent = `${item.level} - ${item.points} điểm`;
  questionLevel.style.background = levelMeta[item.level].accent;
  questionSource.textContent = item.source;
  questionText.textContent = item.question;
  answers.innerHTML = "";
  resultPanel.hidden = true;
  retryBtn.hidden = true;
  nextBtn.hidden = true;
  nextBtn.textContent = "Câu khác";

  item.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-btn";
    button.innerHTML = `
      <span class="answer-letter">${String.fromCharCode(65 + index)}</span>
      <span>${option}</span>
    `;
    button.addEventListener("click", () => answerQuestion(index));
    answers.appendChild(button);
  });

  questionDialog.showModal();
  startTimer(item.seconds);
}

function openEssay(id) {
  const item = essayQuestions.find((q) => q.id === id);
  if (!item) return;

  clearInterval(state.timerId);
  state.active = { ...item, type: "essay" };
  state.seenEssays.add(item.id);
  questionCard.classList.add("essay-mode");
  timerBadge.hidden = true;
  questionLevel.textContent = "Tự luận";
  questionLevel.style.background = levelMeta["Tự luận"].accent;
  questionSource.textContent = item.source;
  questionText.textContent = item.question;
  answers.innerHTML = `
    <section class="essay-display">
      <span class="essay-label">Câu hỏi thảo luận</span>
      <p>${item.hint}</p>
    </section>
  `;
  resultPanel.hidden = true;
  retryBtn.hidden = true;
  nextBtn.hidden = false;
  nextBtn.textContent = "Đóng";

  renderBoard();
  questionDialog.showModal();
}

function startTimer(seconds) {
  clearInterval(state.timerId);
  state.secondsLeft = seconds;
  timerValue.textContent = state.secondsLeft;

  state.timerId = setInterval(() => {
    state.secondsLeft -= 1;
    timerValue.textContent = state.secondsLeft;

    if (state.secondsLeft <= 0) {
      answerQuestion(-1);
    }
  }, 1000);
}

function answerQuestion(choiceIndex) {
  const item = state.active;
  if (!item || item.type === "essay" || state.answered.has(item.id)) return;

  clearInterval(state.timerId);
  const isCorrect = choiceIndex === item.answer;

  if (isCorrect) {
    state.answered.set(item.id, { correct: true, choiceIndex });
    state.misses.delete(item.id);
    state.score += item.points;
    state.correct += 1;
    state.streak += 1;
    burstConfetti(42);
  } else {
    state.misses.set(item.id, (state.misses.get(item.id) || 0) + 1);
    state.streak = 0;
  }

  [...answers.children].forEach((button, index) => {
    button.disabled = true;
    if (isCorrect && index === item.answer) button.classList.add("correct");
    if (!isCorrect && index === choiceIndex) button.classList.add("wrong");
  });

  resultIcon.src = isCorrect ? "./assets/check.png" : "./assets/wrong.png";
  resultTitle.textContent = getResultTitle(isCorrect, item, choiceIndex);
  resultExplain.textContent = isCorrect
    ? item.explain
    : "Câu này chưa bị khóa và chưa tính vào tiến độ. Bấm “Trả lời lại” để chọn đáp án khác.";
  resultPanel.hidden = false;
  retryBtn.hidden = isCorrect;
  nextBtn.hidden = false;
  nextBtn.textContent = isCorrect ? "Câu khác" : "Để sau";

  updateScore();
  renderBoard();

  if (state.answered.size === questions.length) {
    setTimeout(showFinal, 900);
  }
}

function getResultTitle(isCorrect, item, choiceIndex) {
  if (isCorrect) return `Chính xác +${item.points} điểm`;
  if (choiceIndex === -1) return "Hết giờ";
  return "Chưa đúng";
}

function retryCurrentQuestion() {
  const item = state.active;
  if (!item || item.type === "essay" || state.answered.has(item.id)) return;

  [...answers.children].forEach((button) => {
    button.disabled = false;
    button.classList.remove("wrong", "correct");
  });

  resultPanel.hidden = true;
  retryBtn.hidden = true;
  nextBtn.hidden = true;
  startTimer(item.seconds);
}

function closeQuestion() {
  clearInterval(state.timerId);
  if (questionDialog.open) questionDialog.close();
  questionCard.classList.remove("essay-mode");
  timerBadge.hidden = false;
  state.active = null;
}

function updateScore() {
  const progress = Math.round((state.answered.size / questions.length) * 100);
  scoreEl.textContent = state.score;
  correctEl.textContent = `${state.correct}/${questions.length}`;
  streakEl.textContent = state.streak;
  progressEl.textContent = `${progress}%`;
}

function showFinal() {
  closeQuestion();
  const total = questions.reduce((sum, item) => sum + item.points, 0);
  document.querySelector("#finalTitle").textContent = `${state.score}/${total} điểm`;
  document.querySelector("#finalText").textContent =
    `Bạn trả lời đúng ${state.correct}/${questions.length} câu trắc nghiệm. Bộ câu hỏi gồm 3 câu dễ, 3 câu vừa, 4 câu khó và 3 câu tự luận để chiếu thảo luận.`;
  finalDialog.showModal();
  burstConfetti(120);
}

function restartGame() {
  state.active = null;
  state.answered.clear();
  state.misses.clear();
  state.seenEssays.clear();
  state.score = 0;
  state.correct = 0;
  state.streak = 0;
  clearInterval(state.timerId);
  if (finalDialog.open) finalDialog.close();
  updateScore();
  renderBoard();
}

function shuffleBoard() {
  const groups = ["Dễ", "Vừa", "Khó"].flatMap((level) => {
    const items = state.order.filter((item) => item.level === level);
    return shuffle(items);
  });
  state.order = groups;
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const canvas = document.querySelector("#confettiCanvas");
const ctx = canvas.getContext("2d");
let confetti = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function burstConfetti(amount) {
  resizeCanvas();
  const colors = ["#d71920", "#f9b233", "#008b5f", "#0b7a82", "#171717"];

  for (let i = 0; i < amount; i += 1) {
    confetti.push({
      x: window.innerWidth / 2 + (Math.random() - 0.5) * 180,
      y: window.innerHeight * 0.18 + Math.random() * 80,
      vx: (Math.random() - 0.5) * 9,
      vy: Math.random() * -8 - 2,
      size: Math.random() * 8 + 5,
      rotation: Math.random() * Math.PI,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 90
    });
  }

  requestAnimationFrame(drawConfetti);
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti = confetti.filter((piece) => piece.life > 0);

  confetti.forEach((piece) => {
    piece.x += piece.vx;
    piece.y += piece.vy;
    piece.vy += 0.22;
    piece.rotation += 0.18;
    piece.life -= 1;

    ctx.save();
    ctx.translate(piece.x, piece.y);
    ctx.rotate(piece.rotation);
    ctx.fillStyle = piece.color;
    ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.58);
    ctx.restore();
  });

  if (confetti.length) {
    requestAnimationFrame(drawConfetti);
  }
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
renderBoard();
updateScore();
