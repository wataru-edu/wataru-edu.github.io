const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScvncrsPWhLEg5DI2l5FDQgg_6iiPtkjN5qQMBLTD3Er6Qicg/viewform";

const events = [
  {
    type: "in-person",
    typeLabel: "対面",
    date: "7月12日（日）",
    time: "10:00〜13:00",
    title: "先生たちの学び場",
    description: "先生同士で、日々の教室のことを話しながら学ぶ時間です。",
    place: "ONVO SALON URAWA",
    start: "20260712T100000",
    end: "20260712T130000"
  },
  {
    type: "online",
    typeLabel: "オンライン",
    date: "7月26日（日）",
    time: "20:00〜20:40",
    title: "先生たちの学び場Zoom",
    description: "Zoomで気軽に集まり、明日のヒントをひとつ持ち帰る時間です。",
    place: "Zoom",
    start: "20260726T200000",
    end: "20260726T204000"
  },
  {
    type: "in-person",
    typeLabel: "対面",
    date: "8月5日（水）",
    time: "10:00〜13:00",
    title: "先生たちの学び場",
    description: "先生同士で、日々の教室のことを話しながら学ぶ時間です。",
    place: "ONVO SALON URAWA",
    start: "20260805T100000",
    end: "20260805T130000"
  },
  {
    type: "in-person",
    typeLabel: "対面",
    date: "9月13日（日）",
    time: "10:00〜12:00",
    title: "先生たちの学び場",
    description: "先生同士で、日々の教室のことを話しながら学ぶ時間です。",
    place: "ONVO SALON URAWA",
    start: "20260913T100000",
    end: "20260913T120000"
  },
  {
    type: "in-person",
    typeLabel: "対面",
    date: "10月3日（土）",
    time: "10:00〜12:00",
    title: "先生たちの学び場",
    description: "先生同士で、日々の教室のことを話しながら学ぶ時間です。",
    place: "ONVO SALON URAWA",
    start: "20261003T100000",
    end: "20261003T120000"
  },
  {
    type: "in-person",
    typeLabel: "対面",
    date: "11月29日（日）",
    time: "10:00〜12:00",
    title: "先生たちの学び場",
    description: "先生同士で、日々の教室のことを話しながら学ぶ時間です。",
    place: "ONVO SALON URAWA",
    start: "20261129T100000",
    end: "20261129T120000"
  }
];

const scheduleList = document.querySelector("#schedule-list");

function calendarUrl(event) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: `【いろどり先生の学び場】${event.title}`,
    dates: `${event.start}/${event.end}`,
    ctz: "Asia/Tokyo",
    details: `${event.description}\n\n場所: ${event.place}\n申し込み: ${formUrl}`,
    location: event.place
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function renderEvents(filter = "all") {
  const visibleEvents = events.filter(event => filter === "all" || event.type === filter);
  scheduleList.innerHTML = visibleEvents.map(event => `
    <article class="event-card ${event.type === "online" ? "online" : ""}">
      <div class="event-meta"><span class="tag ${event.type === "online" ? "online" : ""}">${event.typeLabel}</span><span class="tag">開催予定</span></div>
      <div class="event-date">${event.date}</div>
      <div class="event-time">${event.time}</div>
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      <p class="event-place">場所：${event.place}</p>
      <div class="event-actions">
        <a href="${formUrl}" target="_blank" rel="noopener">ちょっと参加してみる</a>
        <a class="calendar" href="${calendarUrl(event)}" target="_blank" rel="noopener">予定に入れる</a>
      </div>
    </article>
  `).join("");
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderEvents(button.dataset.filter);
  });
});

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));

renderEvents();
