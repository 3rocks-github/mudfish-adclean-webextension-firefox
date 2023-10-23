
function mudfish_adclean_02d0dd3f7ad6e69d51fcb9265dff2227() {
  try {
    Sizzle(`div[class^="premium-lawyer"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_02d0dd3f7ad6e69d51fcb9265dff2227 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_02d0dd3f7ad6e69d51fcb9265dff2227, function (items) {
  if (mudfish_adclean_g_conf_02d0dd3f7ad6e69d51fcb9265dff2227.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_02d0dd3f7ad6e69d51fcb9265dff2227();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_02d0dd3f7ad6e69d51fcb9265dff2227();
    });
  }
});
