document.addEventListener("DOMContentLoaded", () => {
    const memes = document.querySelectorAll(".meme");
    memes.forEach((meme, i) => {
      setTimeout(() => {
        meme.classList.remove("hidden");
        meme.classList.add("show");
      }, 500 + i * 500);
    });
  
    const status = document.getElementById("status");
    const statuses = [
      "💬 'у меня дома живёт лыси коти!'",
      "👾 'skript.js — это  сложно('",
      "🌈 ' Мой лыси коти строил перамиды в Египте'",
      "🔥 'кушайте торт напалеон,он вкусный'",
    ];
    let index = 0;
  
    status.addEventListener("click", () => {
      index = (index + 1) % statuses.length;
      status.textContent = statuses[index];
    });
  
    // 💡 Модальное окно
    const interestInfo = {
      "🎮 Игры": "блок баст и роблокс  просто топ",
      "🎧 Музыка": "я меломан. Если надо,то мне понравится даже сигма бой.",
      "🎨 Арт": "я рисую своим друзьям арты,правда не всегда получается",
      "💻 Веб-дизайн": "обожаю делать красивые сайты"
    };
  
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-description");
    const closeModal = document.getElementById("closeModal");
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const title = card.textContent.trim();
        modalTitle.textContent = title;
        modalDesc.textContent = interestInfo[title] || "Информация скоро появится.";
        modal.style.display = "flex";
      });
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  