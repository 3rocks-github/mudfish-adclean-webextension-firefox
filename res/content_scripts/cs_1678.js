
function mudfish_adclean_775e7455cd24b888b80ecc5ff04da409() {
  try {
    Sizzle(`table .list-notice-alarm-sponsor-tr`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_775e7455cd24b888b80ecc5ff04da409 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_775e7455cd24b888b80ecc5ff04da409, function (items) {
  if (mudfish_adclean_g_conf_775e7455cd24b888b80ecc5ff04da409.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_775e7455cd24b888b80ecc5ff04da409();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_775e7455cd24b888b80ecc5ff04da409();
    });
  }
});
