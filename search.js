const pages = [
  {
    title: "Home",
    url: "index.html",
    description: "Education For Empowerment, mission statement, and contact form.",
    keywords: "home education empowerment mission contact donate girls"
  },
  {
    title: "Follow us",
    url: "follow-us.html",
    description: "Email, Instagram, and TikTok links for Give To Girls.",
    keywords: "follow social email instagram tiktok updates"
  },
  {
    title: "Our Team",
    url: "our-team.html",
    description: "American university student volunteers, partners, and supporters.",
    keywords: "team american university students volunteers partners supporters outreach"
  },
  {
    title: "Statistics",
    url: "statistics.html",
    description: "Global education statistics about girls and out-of-school youth.",
    keywords: "statistics girls school education 122 129 36 unesco conflict"
  },
  {
    title: "Pilot Program",
    url: "pilot-program.html",
    description: "Virtual English lessons, conversation practice, and confidence building.",
    keywords: "pilot program virtual english lessons conversation vocabulary confidence speaking"
  },
  {
    title: "Join Our Mission",
    url: "contact-us.html",
    description: "Become a member of the Give To Girls international team.",
    keywords: "join mission member international team form volunteer donations awareness"
  },
  {
    title: "Events",
    url: "events.html",
    description: "Supply drives, awareness events, and fundraising efforts.",
    keywords: "events drives awareness fundraising supplies"
  }
];

const params = new URLSearchParams(window.location.search);
const query = (params.get("q") || "").trim();
const summary = document.getElementById("search-summary");
const results = document.getElementById("search-results");
const headerInput = document.querySelector(".search-input");

if (headerInput) {
  headerInput.value = query;
}

if (!query) {
  results.innerHTML = '<p class="search-empty">Try searching for “pilot,” “statistics,” “volunteer,” or “contact.”</p>';
} else {
  const normalized = query.toLowerCase();
  const matches = pages.filter((page) => {
    return `${page.title} ${page.description} ${page.keywords}`.toLowerCase().includes(normalized);
  });

  summary.textContent = matches.length
    ? `Search results for “${query}”`
    : `No results found for “${query}”`;

  results.innerHTML = matches.length
    ? matches.map((page) => `
        <a class="search-result" href="${page.url}">
          <strong>${page.title}</strong>
          <span>${page.description}</span>
        </a>
      `).join("")
    : '<p class="search-empty">Try another word, such as “pilot,” “English,” “team,” or “events.”</p>';
}
