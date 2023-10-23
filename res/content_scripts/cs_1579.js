
function mudfish_adclean_07d1f30b1ae97d03d8dd3425cf5f1917() {
  try {
    Sizzle(`div[class$="-ad"] ~ .section.naver`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_07d1f30b1ae97d03d8dd3425cf5f1917 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_07d1f30b1ae97d03d8dd3425cf5f1917, function (items) {
  if (mudfish_adclean_g_conf_07d1f30b1ae97d03d8dd3425cf5f1917.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_07d1f30b1ae97d03d8dd3425cf5f1917();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_07d1f30b1ae97d03d8dd3425cf5f1917();
    });
  }
});
