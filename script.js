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
    sortDate: "2026-07-12",
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
    sortDate: "2026-07-26",
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
    sortDate: "2026-08-05",
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
    sortDate: "2026-09-13",
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
    sortDate: "2026-10-03",
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
    sortDate: "2026-11-29",
    start: "20261129T100000",
    end: "20261129T120000"
  }
];

const scheduleList = document.querySelector("#schedule-list");

function injectScheduleStyles() {
  const style = document.createElement("style");
  style.textContent = `
    .schedule-grid {
      display: grid;
      grid-template-columns: minmax(320px, .9fr) minmax(420px, 1.1fr);
      gap: 22px;
      align-items: start;
    }
    .event-label {
      display: inline-flex;
      align-self: flex-start;
      margin-bottom: 18px;
      padding: 7px 15px;
      border-radius: 999px;
      background: var(--yellow);
      font-size: 13px;
      font-weight: 800;
    }
    .next-event {
      min-height: 480px;
      border: 0;
      background: linear-gradient(145deg, #fffef9, #fff5e8);
    }
    .next-event .event-date { font-size: 34px; }
    .event-list {
      display: grid;
      gap: 12px;
      padding: 22px;
      border-radius: 28px;
      background: rgba(255, 255, 255, .6);
    }
    .event-list-heading {
      margin-bottom: 4px;
      color: #4b9795;
      font-size: 13px;
      font-weight: 800;
      letter-spacing: .12em;
    }
    .event-row {
      display: grid;
      grid-template-columns: 155px 1fr auto;
      gap: 18px;
      align-items: center;
      padding: 20px;
      border-radius: 20px;
      background: white;
      box-shadow: 0 12px 34px rgba(73, 108, 96, .06);
    }
    .event-row.online { background: #fff8f0; }
    .event-row-date span {
      display: block;
      font-family: "Kiwi Maru", serif;
      font-size: 21px;
      line-height: 1.4;
    }
    .event-row-date strong {
      display: block;
      margin-top: 4px;
      color: #4b9795;
      font-size: 13px;
    }
    .event-row .event-meta { margin-bottom: 6px; }
    .event-row h3 { margin: 0 0 4px; font-size: 19px; }
    .event-row p { margin: 0; color: var(--muted); font-size: 14px; }
    .event-row-actions { display: flex; gap: 8px; }
    .event-row-actions a {
      min-width: 58px;
      padding: 9px 12px;
      border-radius: 12px;
      background: var(--coral);
      color: white;
      text-align: center;
      text-decoration: none;
      font-size: 12px;
      font-weight: 800;
    }
    .event-row-actions a.calendar { background: #edf3f2; color: var(--ink); }
    .empty-schedule {
      grid-column: 1 / -1;
      padding: 54px;
      border-radius: 28px;
      background: white;
      text-align: center;
      box-shadow: 0 16px 45px rgba(73, 108, 96, .08);
    }
    @media (max-width: 900px) {
      .schedule-grid { grid-template-columns: 1fr; }
      .event-row { grid-template-columns: 1fr; gap: 12px; }
      .event-row-actions { justify-content: stretch; }
      .event-row-actions a { flex: 1; }
    }
    @media (max-width: 560px) {
      .event-list { padding: 14px; }
      .event-row { padding: 18px; }
    }
  `;
  document.head.appendChild(style);
}

function todayInJapan() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).formatToParts(new Date());

  const values = Object.fromEntries(parts.map(part => [part.type, part.value]));
  return `${values.year}-${values.month}-${values.day}`;
}

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
  const today = todayInJapan();
  const visibleEvents = events
    .filter(event => event.sortDate >= today)
    .filter(event => filter === "all" || event.type === filter)
    .sort((a, b) => a.sortDate.localeCompare(b.sortDate));

  if (visibleEvents.length === 0) {
    scheduleList.innerHTML = `
      <div class="empty-schedule">
        <h3>次の予定は準備中です</h3>
        <p>新しい日程が決まり次第、SNSでもお知らせします。</p>
      </div>
    `;
    return;
  }

  const [nextEvent, ...laterEvents] = visibleEvents;
  scheduleList.innerHTML = `
    <article class="event-card next-event ${nextEvent.type === "online" ? "online" : ""}">
      <div class="event-label">次回の学び場</div>
      <div class="event-meta"><span class="tag ${nextEvent.type === "online" ? "online" : ""}">${nextEvent.typeLabel}</span><span class="tag">開催予定</span></div>
      <div class="event-date">${nextEvent.date}</div>
      <div class="event-time">${nextEvent.time}</div>
      <h3>${nextEvent.title}</h3>
      <p>${nextEvent.description}</p>
      <p class="event-place">場所：${nextEvent.place}</p>
      <div class="event-actions">
        <a href="${formUrl}" target="_blank" rel="noopener">ちょっと参加してみる</a>
        <a class="calendar" href="${calendarUrl(nextEvent)}" target="_blank" rel="noopener">予定に入れる</a>
      </div>
    </article>
    <div class="event-list" aria-label="今後の日程">
      <div class="event-list-heading">このあとの予定</div>
      ${laterEvents.map(event => `
        <article class="event-row ${event.type === "online" ? "online" : ""}">
          <div class="event-row-date">
            <span>${event.date}</span>
            <strong>${event.time}</strong>
          </div>
          <div class="event-row-body">
            <div class="event-meta"><span class="tag ${event.type === "online" ? "online" : ""}">${event.typeLabel}</span></div>
            <h3>${event.title}</h3>
            <p>場所：${event.place}</p>
          </div>
          <div class="event-row-actions">
            <a href="${formUrl}" target="_blank" rel="noopener">参加</a>
            <a class="calendar" href="${calendarUrl(event)}" target="_blank" rel="noopener">予定</a>
          </div>
        </article>
      `).join("")}
    </div>
  `;
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

injectScheduleStyles();
renderEvents();
