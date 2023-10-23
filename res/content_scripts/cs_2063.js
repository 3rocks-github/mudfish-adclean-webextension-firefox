
function mudfish_adclean_7ff173575cc3b9dafdf03a0aec4e164b() {
  try {
    Sizzle(`iframe[src*="//arca.live/static/ad/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7ff173575cc3b9dafdf03a0aec4e164b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7ff173575cc3b9dafdf03a0aec4e164b, function (items) {
  if (mudfish_adclean_g_conf_7ff173575cc3b9dafdf03a0aec4e164b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7ff173575cc3b9dafdf03a0aec4e164b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7ff173575cc3b9dafdf03a0aec4e164b();
    });
  }
});
