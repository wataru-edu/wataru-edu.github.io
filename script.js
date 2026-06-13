const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScvncrsPWhLEg5DI2l5FDQgg_6iiPtkjN5qQMBLTD3Er6Qicg/viewform";

const events = [
  {
    type: "in-person",
    typeLabel: "対面",
    date: "6月28日（日）",
    time: "10:00〜13:00",
    title: "学び場 対面の会",
    description: "悩み相談や模擬授業。話したいことを持ち寄って、ゆっくり考えます。",
    place: "ONVO SALON URAWA",
    calendar: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=%E3%80%90%E3%81%84%E3%82%8D%E3%81%A9%E3%82%8A%E5%85%88%E7%94%9F%E3%81%AE%E5%AD%A6%E3%81%B3%E5%A0%B4%E3%80%91%E5%AD%A6%E3%81%B3%E5%A0%B4%E5%AF%BE%E9%9D%A2%E5%AD%A6%E7%BF%92%E4%BC%9A&dates=20260628T100000/20260628T130000&ctz=Asia/Tokyo&location=ONVO%20SALON%20URAWA"
  },
  {
    type: "in-person",
    typeLabel: "対面",
    date: "7月12日（日）",
    time: "10:00〜13:00",
    title: "学び場 対面の会",
    description: "日々の教室で気になっていることを、学校を越えて話してみる時間です。",
    place: "ONVO SALON URAWA",
    calendar: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=%E3%80%90%E3%81%84%E3%82%8D%E3%81%A9%E3%82%8A%E5%85%88%E7%94%9F%E3%81%AE%E5%AD%A6%E3%81%B3%E5%A0%B4%E3%80%91%E5%AD%A6%E3%81%B3%E5%A0%B4%E5%AF%BE%E9%9D%A2%E5%AD%A6%E7%BF%92%E4%BC%9A&dates=20260712T100000/20260712T130000&ctz=Asia/Tokyo&location=ONVO%20SALON%20URAWA"
  },
  {
    type: "online",
    typeLabel: "オンライン",
    date: "7月26日（日）",
    time: "20:00〜20:40",
    title: "学び場 オンラインの会",
    description: "一日の終わりに、ちょっと話して、明日のヒントをひとつ持ち帰ります。",
    place: "Zoom",
    calendar: "https://calendar.google.com/calendar/render?action=TEMPLATE&text=%E3%80%90%E3%81%84%E3%82%8D%E3%81%A9%E3%82%8A%E5%85%88%E7%94%9F%E3%81%AE%E5%AD%A6%E3%81%B3%E5%A0%B4%E3%80%91%E5%AD%A6%E3%81%B3%E5%A0%B4%E3%82%AA%E3%83%B3%E3%83%A9%E3%82%A4%E3%83%B3%E5%AD%A6%E7%BF%92%E4%BC%9A&dates=20260726T200000/20260726T204000&ctz=Asia/Tokyo&location=Zoom"
  }
];

const scheduleList = document.querySelector("#schedule-list");

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
        <a class="calendar" href="${event.calendar}" target="_blank" rel="noopener">予定に入れる</a>
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
