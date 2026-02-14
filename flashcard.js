// ==================== DATA KOSAKATA ======================
const vocabulary = {
    numbers: [
        { english: "One", indo: "Satu", iconFront: "fa-solid fa-1", iconBack: "fa-solid fa-1" },
        { english: "Two", indo: "Dua", iconFront: "fa-solid fa-2", iconBack: "fa-solid fa-2" },
        { english: "Three", indo: "Tiga", iconFront: "fa-solid fa-3", iconBack: "fa-solid fa-3" },
        { english: "Four", indo: "Empat", iconFront: "fa-solid fa-4", iconBack: "fa-solid fa-4" },
        { english: "Five", indo: "Lima", iconFront: "fa-solid fa-5", iconBack: "fa-solid fa-5" }
    ],
    colors: [
        { english: "Red", indo: "Merah", iconFront: "fa-solid fa-droplet", iconBack: "fa-solid fa-droplet" },
        { english: "Blue", indo: "Biru", iconFront: "fa-solid fa-water", iconBack: "fa-solid fa-water" },
        { english: "Green", indo: "Hijau", iconFront: "fa-solid fa-leaf", iconBack: "fa-solid fa-leaf" },
        { english: "Yellow", indo: "Kuning", iconFront: "fa-regular fa-sun", iconBack: "fa-regular fa-sun" },
        { english: "Black", indo: "Hitam", iconFront: "fa-solid fa-moon", iconBack: "fa-solid fa-moon" }
    ],
    animals: [
        { english: "Cat", indo: "Kucing", iconFront: "fa-solid fa-cat", iconBack: "fa-solid fa-cat" },
        { english: "Dog", indo: "Anjing", iconFront: "fa-solid fa-dog", iconBack: "fa-solid fa-dog" },
        { english: "Bird", indo: "Burung", iconFront: "fa-solid fa-dove", iconBack: "fa-solid fa-dove" },
        { english: "Fish", indo: "Ikan", iconFront: "fa-solid fa-fish", iconBack: "fa-solid fa-fish" },
        { english: "Elephant", indo: "Gajah", iconFront: "fa-solid fa-elephant", iconBack: "fa-solid fa-elephant" },
        { english: "Tiger", indo: "Harimau", iconFront: "fa-solid fa-tiger", iconBack: "fa-solid fa-tiger" },
        { english: "Lion", indo: "Singa", iconFront: "fa-solid fa-lion", iconBack: "fa-solid fa-lion" },
        { english: "Rabbit", indo: "Kelinci", iconFront: "fa-solid fa-rabbit", iconBack: "fa-solid fa-rabbit" },
        { english: "Monkey", indo: "Monyet", iconFront: "fa-solid fa-monkey", iconBack: "fa-solid fa-monkey" },
        { english: "Horse", indo: "Kuda", iconFront: "fa-solid fa-horse", iconBack: "fa-solid fa-horse" },
        { english: "Cow", indo: "Sapi", iconFront: "fa-solid fa-cow", iconBack: "fa-solid fa-cow" },
        { english: "Goat", indo: "Kambing", iconFront: "fa-solid fa-goat", iconBack: "fa-solid fa-goat" },
        { english: "Sheep", indo: "Domba", iconFront: "fa-solid fa-sheep", iconBack: "fa-solid fa-sheep" },
        { english: "Duck", indo: "Bebek", iconFront: "fa-solid fa-duck", iconBack: "fa-solid fa-duck" },
        { english: "Chicken", indo: "Ayam", iconFront: "fa-solid fa-chicken", iconBack: "fa-solid fa-chicken" },
        { english: "Frog", indo: "Katak", iconFront: "fa-solid fa-frog", iconBack: "fa-solid fa-frog" },
        { english: "Snake", indo: "Ular", iconFront: "fa-solid fa-snake", iconBack: "fa-solid fa-snake" },
        { english: "Bear", indo: "Beruang", iconFront: "fa-solid fa-bear", iconBack: "fa-solid fa-bear" },
        { english: "Deer", indo: "Rusa", iconFront: "fa-solid fa-deer", iconBack: "fa-solid fa-deer" },
        { english: "Mouse", indo: "Tikus", iconFront: "fa-solid fa-mouse", iconBack: "fa-solid fa-mouse" },
        { english: "Turtle", indo: "Kura-kura", iconFront: "fa-solid fa-turtle", iconBack: "fa-solid fa-turtle" },
        { english: "Whale", indo: "Paus", iconFront: "fa-solid fa-whale", iconBack: "fa-solid fa-whale" },
        { english: "Dolphin", indo: "Lumba-lumba", iconFront: "fa-solid fa-dolphin", iconBack: "fa-solid fa-dolphin" },
        { english: "Kangaroo", indo: "Kanguru", iconFront: "fa-solid fa-kangaroo", iconBack: "fa-solid fa-kangaroo" },
        { english: "Panda", indo: "Panda", iconFront: "fa-solid fa-panda", iconBack: "fa-solid fa-panda" },
        { english: "Zebra", indo: "Zebra", iconFront: "fa-solid fa-zebra", iconBack: "fa-solid fa-zebra" },
        { english: "Giraffe", indo: "Jerapah", iconFront: "fa-solid fa-giraffe", iconBack: "fa-solid fa-giraffe" },
        { english: "Ant", indo: "Semut", iconFront: "fa-solid fa-ant", iconBack: "fa-solid fa-ant" },
        { english: "Bee", indo: "Lebah", iconFront: "fa-solid fa-bee", iconBack: "fa-solid fa-bee" },
        { english: "Butterfly", indo: "Kupu-kupu", iconFront: "fa-solid fa-butterfly", iconBack: "fa-solid fa-butterfly" }
    ],
    school: [
        { english: "Book", indo: "Buku", iconFront: "fa-solid fa-book", iconBack: "fa-solid fa-book" },
        { english: "Pencil", indo: "Pensil", iconFront: "fa-solid fa-pencil", iconBack: "fa-solid fa-pencil" },
        { english: "Bag", indo: "Tas", iconFront: "fa-solid fa-bag-shopping", iconBack: "fa-solid fa-bag-shopping" },
        { english: "Chair", indo: "Kursi", iconFront: "fa-solid fa-chair", iconBack: "fa-solid fa-chair" },
        { english: "Table", indo: "Meja", iconFront: "fa-solid fa-table", iconBack: "fa-solid fa-table" },
        { english: "Eraser", indo: "Penghapus", iconFront: "fa-solid fa-eraser", iconBack: "fa-solid fa-eraser" },
        { english: "Ruler", indo: "Penggaris", iconFront: "fa-solid fa-ruler", iconBack: "fa-solid fa-ruler" },
        { english: "Pen", indo: "Pulpen", iconFront: "fa-solid fa-pen", iconBack: "fa-solid fa-pen" },
        { english: "Board", indo: "Papan tulis", iconFront: "fa-solid fa-chalkboard", iconBack: "fa-solid fa-chalkboard" },
        { english: "Notebook", indo: "Buku catatan", iconFront: "fa-solid fa-notebook", iconBack: "fa-solid fa-notebook" },
        { english: "Crayon", indo: "Krayon", iconFront: "fa-solid fa-crayon", iconBack: "fa-solid fa-crayon" },
        { english: "Marker", indo: "Spidol", iconFront: "fa-solid fa-marker", iconBack: "fa-solid fa-marker" },
        { english: "Chalk", indo: "Kapur", iconFront: "fa-solid fa-chalk", iconBack: "fa-solid fa-chalk" },
        { english: "Desk", indo: "Meja belajar", iconFront: "fa-solid fa-desk", iconBack: "fa-solid fa-desk" },
        { english: "Paper", indo: "Kertas", iconFront: "fa-solid fa-paper", iconBack: "fa-solid fa-paper" },
        { english: "Scissors", indo: "Gunting", iconFront: "fa-solid fa-scissors", iconBack: "fa-solid fa-scissors" },
        { english: "Glue", indo: "Lem", iconFront: "fa-solid fa-glue", iconBack: "fa-solid fa-glue" },
        { english: "Sharpener", indo: "Rautan", iconFront: "fa-solid fa-sharpener", iconBack: "fa-solid fa-sharpener" },
        { english: "Clock", indo: "Jam dinding", iconFront: "fa-solid fa-clock", iconBack: "fa-solid fa-clock" },
        { english: "Map", indo: "Peta", iconFront: "fa-solid fa-map", iconBack: "fa-solid fa-map" },
        { english: "Globe", indo: "Bola dunia", iconFront: "fa-solid fa-globe", iconBack: "fa-solid fa-globe" },
        { english: "Uniform", indo: "Seragam", iconFront: "fa-solid fa-uniform", iconBack: "fa-solid fa-uniform" },
        { english: "Teacher", indo: "Guru", iconFront: "fa-solid fa-teacher", iconBack: "fa-solid fa-teacher" },
        { english: "Student", indo: "Murid", iconFront: "fa-solid fa-student", iconBack: "fa-solid fa-student" },
        { english: "Classroom", indo: "Ruang kelas", iconFront: "fa-solid fa-classroom", iconBack: "fa-solid fa-classroom" },
        { english: "Bagpack", indo: "Ransel", iconFront: "fa-solid fa-bagpack", iconBack: "fa-solid fa-bagpack" },
        { english: "Calculator", indo: "Kalkulator", iconFront: "fa-solid fa-calculator", iconBack: "fa-solid fa-calculator" },
        { english: "Computer", indo: "Komputer", iconFront: "fa-solid fa-computer", iconBack: "fa-solid fa-computer" },
        { english: "Projector", indo: "Proyektor", iconFront: "fa-solid fa-projector", iconBack: "fa-solid fa-projector" },
        { english: "Whiteboard", indo: "Papan putih", iconFront: "fa-solid fa-whiteboard", iconBack: "fa-solid fa-whiteboard" }
    ],
    family: [
        { english: "Father", indo: "Ayah", iconFront: "fa-solid fa-user-tie", iconBack: "fa-solid fa-user-tie" },
        { english: "Mother", indo: "Ibu", iconFront: "fa-solid fa-user-nurse", iconBack: "fa-solid fa-user-nurse" },
        { english: "Brother", indo: "Saudara laki-laki", iconFront: "fa-solid fa-child", iconBack: "fa-solid fa-child" },
        { english: "Sister", indo: "Saudara perempuan", iconFront: "fa-solid fa-child-dress", iconBack: "fa-solid fa-child-dress" },
        { english: "Family", indo: "Keluarga", iconFront: "fa-solid fa-people-group", iconBack: "fa-solid fa-people-group" }
    ]
};

// ==================== STATE ======================
let currentTheme = 'numbers';
let currentIndex = 0;
let isFlipped = false;

// Elemen DOM
const flashcard = document.getElementById('flashcard');
const englishWord = document.getElementById('englishWord');
const indonesiaWord = document.getElementById('indonesiaWord');
const frontIcon = document.getElementById('frontIcon');
const backIcon = document.getElementById('backIcon');
const counterSpan = document.getElementById('counter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const themeBtns = document.querySelectorAll('.theme-btn');

// ==================== FUNGSI ======================
function updateCard() {
    const data = vocabulary[currentTheme][currentIndex];
    englishWord.textContent = data.english;
    indonesiaWord.textContent = data.indo;
    frontIcon.className = data.iconFront;
    backIcon.className = data.iconBack;
    counterSpan.textContent = `${currentIndex+1} / ${vocabulary[currentTheme].length}`;

    if (isFlipped) {
        flashcard.classList.remove('flipped');
        isFlipped = false;
    }
    updateNavButtons();
}

function updateNavButtons() {
    prevBtn.disabled = (currentIndex === 0);
    nextBtn.disabled = (currentIndex === vocabulary[currentTheme].length - 1);
}

window.flipCard = function() {
    flashcard.classList.toggle('flipped');
    isFlipped = !isFlipped;
};

window.nextCard = function() {
    if (currentIndex < vocabulary[currentTheme].length - 1) {
        currentIndex++;
        updateCard();
    }
};

window.prevCard = function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCard();
    }
};

function switchTheme(theme) {
    currentTheme = theme;
    currentIndex = 0;
    updateCard();

    themeBtns.forEach(btn => {
        const btnTheme = btn.getAttribute('data-theme');
        if (btnTheme === theme) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// ==================== EVENT LISTENER ======================
themeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const theme = e.currentTarget.getAttribute('data-theme');
        switchTheme(theme);
    });
});

// Mencegah flip saat klik tombol
document.querySelectorAll('.nav-btn, .theme-btn').forEach(el => {
    el.addEventListener('click', (e) => e.stopPropagation());
});

// Inisialisasi
updateCard();