
function mudfish_adclean_de6d9512cccdad24b33857f3d0ca90ca() {
  try {
    Sizzle(`div[class$="_banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_de6d9512cccdad24b33857f3d0ca90ca = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_de6d9512cccdad24b33857f3d0ca90ca, function (items) {
  if (mudfish_adclean_g_conf_de6d9512cccdad24b33857f3d0ca90ca.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_de6d9512cccdad24b33857f3d0ca90ca();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_de6d9512cccdad24b33857f3d0ca90ca();
    });
  }
});
