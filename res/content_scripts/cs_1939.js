
function mudfish_adclean_26c3c00122a060045d6c222f78feb95c() {
  try {
    Sizzle(`div[class$="_ad_wrap"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_26c3c00122a060045d6c222f78feb95c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_26c3c00122a060045d6c222f78feb95c, function (items) {
  if (mudfish_adclean_g_conf_26c3c00122a060045d6c222f78feb95c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_26c3c00122a060045d6c222f78feb95c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_26c3c00122a060045d6c222f78feb95c();
    });
  }
});
