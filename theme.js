// Claude — Spicetify theme script
// https://github.com/joustingmatch/Spicetify-Claude

(function Claude() {
  if (!window.Spicetify?.Player?.addEventListener || !Spicetify.Platform?.History) {
    setTimeout(Claude, 300);
    return;
  }

  const SPARK =
    '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    Array.from({ length: 12 }, (_, i) => {
      const len = i % 2 ? 8.5 : 10.5;
      return `<rect x="11.1" y="${12 - len}" width="1.8" height="${len}" rx="0.9" transform="rotate(${i * 30} 12 12)"/>`;
    }).join("") +
    "</svg>";

  // Spark mark in the top bar
  function mountSpark() {
    if (document.querySelector(".cl-spark")) return;
    const host =
      document.querySelector(".main-globalNav-historyButtonsContainer") ||
      document.querySelector(".main-topBar-historyButtons") ||
      document.querySelector('#global-nav-bar [aria-label="Go back"]')?.parentElement;
    if (!host) return;
    const el = document.createElement("div");
    el.className = "cl-spark";
    el.title = "Claude";
    el.innerHTML = SPARK;
    host.prepend(el);
  }

  // Playback state drives the spark animation
  function syncPlaying() {
    document.body.classList.toggle("cl-playing", !Spicetify.Player.data?.isPaused && !!Spicetify.Player.data);
  }

  // Serif greeting on the home page
  function greetingText() {
    const h = new Date().getHours();
    const part = h < 5 ? "Up late" : h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
    const name = Spicetify.Platform?.UserAPI?._product_state_service?.productState?.["name"];
    return name ? `${part}, ${name}` : part;
  }

  function mountGreeting() {
    const onHome = Spicetify.Platform.History.location?.pathname === "/";
    const existing = document.querySelector(".cl-greeting");
    if (!onHome) {
      existing?.remove();
      return;
    }
    if (existing) return;
    const page = document.querySelector('[data-testid="home-page"]') || document.querySelector(".main-home-content");
    if (!page) return;
    const el = document.createElement("div");
    el.className = "cl-greeting";
    el.innerHTML = SPARK;
    el.append(document.createTextNode(greetingText()));
    page.prepend(el);
  }

  // Strip inline cover-art tints Spotify applies to page headers
  function stripTints(root = document) {
    root
      .querySelectorAll(".main-entityHeader-backgroundColor, .main-actionBarBackground-background, .main-home-homeHeader")
      .forEach((n) => {
        n.style.backgroundColor = "transparent";
        n.style.backgroundImage = "none";
      });
  }

  let queued = false;
  function refresh() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      mountSpark();
      mountGreeting();
      stripTints();
    });
  }

  Spicetify.Player.addEventListener("onplaypause", syncPlaying);
  Spicetify.Player.addEventListener("songchange", syncPlaying);
  Spicetify.Platform.History.listen(refresh);
  new MutationObserver(refresh).observe(document.body, { childList: true, subtree: true });

  syncPlaying();
  refresh();
})();
