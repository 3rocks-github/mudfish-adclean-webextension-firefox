
function mudfish_adclean_5f2000f4cf1b027251f704515a6f50ba() {
  try {
    Sizzle(`div[id*="_wrap_"][id*="_comm_"].bg0`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5f2000f4cf1b027251f704515a6f50ba = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5f2000f4cf1b027251f704515a6f50ba, function (items) {
  if (mudfish_adclean_g_conf_5f2000f4cf1b027251f704515a6f50ba.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5f2000f4cf1b027251f704515a6f50ba();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5f2000f4cf1b027251f704515a6f50ba();
    });
  }
});
