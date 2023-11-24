
function mudfish_adclean_7a69d39145fd3c736c84978e316dd872() {
  try {
    Sizzle(`.ent_wrapper.slide-vertical-effect .ent_navigation`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7a69d39145fd3c736c84978e316dd872 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7a69d39145fd3c736c84978e316dd872, function (items) {
  if (mudfish_adclean_g_conf_7a69d39145fd3c736c84978e316dd872.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7a69d39145fd3c736c84978e316dd872();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7a69d39145fd3c736c84978e316dd872();
    });
  }
});
