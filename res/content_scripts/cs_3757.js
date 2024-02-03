
function mudfish_adclean_8528a9cba8f7e6c30e061fc842965053() {
  try {
    Sizzle(`img[src^="/img/sp/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8528a9cba8f7e6c30e061fc842965053 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8528a9cba8f7e6c30e061fc842965053, function (items) {
  if (mudfish_adclean_g_conf_8528a9cba8f7e6c30e061fc842965053.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8528a9cba8f7e6c30e061fc842965053();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8528a9cba8f7e6c30e061fc842965053();
    });
  }
});
