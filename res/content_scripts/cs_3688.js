
function mudfish_adclean_0cbbdca3c730f2fe9aca34b4c8309629() {
  try {
    Sizzle(`div[style] > ul[class^="AD"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0cbbdca3c730f2fe9aca34b4c8309629 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0cbbdca3c730f2fe9aca34b4c8309629, function (items) {
  if (mudfish_adclean_g_conf_0cbbdca3c730f2fe9aca34b4c8309629.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0cbbdca3c730f2fe9aca34b4c8309629();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0cbbdca3c730f2fe9aca34b4c8309629();
    });
  }
});
