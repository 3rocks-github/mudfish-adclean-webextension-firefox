
function mudfish_adclean_29c1c2edd15330d1d04e5947b04d5628() {
  try {
    Sizzle(`div[id].col-15`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_29c1c2edd15330d1d04e5947b04d5628 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_29c1c2edd15330d1d04e5947b04d5628, function (items) {
  if (mudfish_adclean_g_conf_29c1c2edd15330d1d04e5947b04d5628.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_29c1c2edd15330d1d04e5947b04d5628();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_29c1c2edd15330d1d04e5947b04d5628();
    });
  }
});
