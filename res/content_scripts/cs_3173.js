
function mudfish_adclean_5eb0f09dc5b25fbb85b8082e03ff07d0() {
  try {
    Sizzle(`#body_text > .at-main.at-col[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5eb0f09dc5b25fbb85b8082e03ff07d0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5eb0f09dc5b25fbb85b8082e03ff07d0, function (items) {
  if (mudfish_adclean_g_conf_5eb0f09dc5b25fbb85b8082e03ff07d0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5eb0f09dc5b25fbb85b8082e03ff07d0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5eb0f09dc5b25fbb85b8082e03ff07d0();
    });
  }
});
