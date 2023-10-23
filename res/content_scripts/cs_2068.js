
function mudfish_adclean_b73acc9e8a890e09fff280fb114d82e5() {
  try {
    Sizzle(`div[class*="naver_power"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b73acc9e8a890e09fff280fb114d82e5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b73acc9e8a890e09fff280fb114d82e5, function (items) {
  if (mudfish_adclean_g_conf_b73acc9e8a890e09fff280fb114d82e5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b73acc9e8a890e09fff280fb114d82e5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b73acc9e8a890e09fff280fb114d82e5();
    });
  }
});
