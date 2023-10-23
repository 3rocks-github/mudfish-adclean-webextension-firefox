
function mudfish_adclean_beba7c10759f449fcedb9769ebbb7c87() {
  try {
    Sizzle(`div[class$="ad"][id$="ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_beba7c10759f449fcedb9769ebbb7c87 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_beba7c10759f449fcedb9769ebbb7c87, function (items) {
  if (mudfish_adclean_g_conf_beba7c10759f449fcedb9769ebbb7c87.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_beba7c10759f449fcedb9769ebbb7c87();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_beba7c10759f449fcedb9769ebbb7c87();
    });
  }
});
