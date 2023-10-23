
function mudfish_adclean_9848ed779557adef0d4b13422e5b0e3f() {
  try {
    Sizzle(`#Article > .Line_gray ~ div[style]:not([class]):not([id])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9848ed779557adef0d4b13422e5b0e3f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9848ed779557adef0d4b13422e5b0e3f, function (items) {
  if (mudfish_adclean_g_conf_9848ed779557adef0d4b13422e5b0e3f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9848ed779557adef0d4b13422e5b0e3f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_9848ed779557adef0d4b13422e5b0e3f();
    });
  }
});
