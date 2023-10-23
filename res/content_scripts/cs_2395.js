
function mudfish_adclean_e3227aa732a2a40e6c9f2f4aa9fb7c47() {
  try {
    Sizzle(`.board_main .user_view_target ~ .row:not(:has(.source_url))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e3227aa732a2a40e6c9f2f4aa9fb7c47 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e3227aa732a2a40e6c9f2f4aa9fb7c47, function (items) {
  if (mudfish_adclean_g_conf_e3227aa732a2a40e6c9f2f4aa9fb7c47.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e3227aa732a2a40e6c9f2f4aa9fb7c47();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e3227aa732a2a40e6c9f2f4aa9fb7c47();
    });
  }
});
