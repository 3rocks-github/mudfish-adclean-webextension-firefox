
function mudfish_adclean_8ceedc365220a4d3dde05ef13ba56b93() {
  try {
    Sizzle(`div[id$="Banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8ceedc365220a4d3dde05ef13ba56b93 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8ceedc365220a4d3dde05ef13ba56b93, function (items) {
  if (mudfish_adclean_g_conf_8ceedc365220a4d3dde05ef13ba56b93.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8ceedc365220a4d3dde05ef13ba56b93();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8ceedc365220a4d3dde05ef13ba56b93();
    });
  }
});
