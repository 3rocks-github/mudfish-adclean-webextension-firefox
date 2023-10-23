
function mudfish_adclean_c4d53cc89f94f4f97373dede511169ba() {
  try {
    Sizzle(`#bottom_sit_handmade`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c4d53cc89f94f4f97373dede511169ba = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c4d53cc89f94f4f97373dede511169ba, function (items) {
  if (mudfish_adclean_g_conf_c4d53cc89f94f4f97373dede511169ba.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c4d53cc89f94f4f97373dede511169ba();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c4d53cc89f94f4f97373dede511169ba();
    });
  }
});
