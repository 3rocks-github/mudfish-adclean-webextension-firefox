
function mudfish_adclean_8c140c11888cfee44601129047a08306() {
  try {
    Sizzle(`center > div[style] ~ center ~ div[style^="margin-top:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8c140c11888cfee44601129047a08306 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8c140c11888cfee44601129047a08306, function (items) {
  if (mudfish_adclean_g_conf_8c140c11888cfee44601129047a08306.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8c140c11888cfee44601129047a08306();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8c140c11888cfee44601129047a08306();
    });
  }
});
