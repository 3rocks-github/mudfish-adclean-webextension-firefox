
function mudfish_adclean_2413ca580f12384b69753be94bb4c674() {
  try {
    Sizzle(`a[target="_blank"][href][onclick][class*="Banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2413ca580f12384b69753be94bb4c674 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2413ca580f12384b69753be94bb4c674, function (items) {
  if (mudfish_adclean_g_conf_2413ca580f12384b69753be94bb4c674.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2413ca580f12384b69753be94bb4c674();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
