
function mudfish_adclean_10f80b14f971cbca0d60922ff01082f4() {
  try {
    Sizzle(`div[id$="_div"][class] > div[id][class*=" "][style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_10f80b14f971cbca0d60922ff01082f4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_10f80b14f971cbca0d60922ff01082f4, function (items) {
  if (mudfish_adclean_g_conf_10f80b14f971cbca0d60922ff01082f4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_10f80b14f971cbca0d60922ff01082f4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_10f80b14f971cbca0d60922ff01082f4();
    });
  }
});
