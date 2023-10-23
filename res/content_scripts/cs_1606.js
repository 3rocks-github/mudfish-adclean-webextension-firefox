
function mudfish_adclean_6846e2e7bdd600e83d116ba5fd26953c() {
  try {
    Sizzle(`ul > a[href*="/0ad"].visittag`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6846e2e7bdd600e83d116ba5fd26953c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6846e2e7bdd600e83d116ba5fd26953c, function (items) {
  if (mudfish_adclean_g_conf_6846e2e7bdd600e83d116ba5fd26953c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6846e2e7bdd600e83d116ba5fd26953c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6846e2e7bdd600e83d116ba5fd26953c();
    });
  }
});
