
function mudfish_adclean_4c82c5819d8c562ff3d0d3586c508c74() {
  try {
    Sizzle(`#container_right > div[id^="slot"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4c82c5819d8c562ff3d0d3586c508c74 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4c82c5819d8c562ff3d0d3586c508c74, function (items) {
  if (mudfish_adclean_g_conf_4c82c5819d8c562ff3d0d3586c508c74.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4c82c5819d8c562ff3d0d3586c508c74();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
