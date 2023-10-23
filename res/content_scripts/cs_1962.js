
function mudfish_adclean_84a0aea93ca7b9f0f532a75f5fa80305() {
  try {
    Sizzle(`div[id^="sdp-"][id$="-banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_84a0aea93ca7b9f0f532a75f5fa80305 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_84a0aea93ca7b9f0f532a75f5fa80305, function (items) {
  if (mudfish_adclean_g_conf_84a0aea93ca7b9f0f532a75f5fa80305.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_84a0aea93ca7b9f0f532a75f5fa80305();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_84a0aea93ca7b9f0f532a75f5fa80305();
    });
  }
});
