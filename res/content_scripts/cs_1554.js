
function mudfish_adclean_bbd791d0669e15aadd56f26857c8901c() {
  try {
    Sizzle(`#article-view div[style].float-center .clearfix > center[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bbd791d0669e15aadd56f26857c8901c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bbd791d0669e15aadd56f26857c8901c, function (items) {
  if (mudfish_adclean_g_conf_bbd791d0669e15aadd56f26857c8901c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bbd791d0669e15aadd56f26857c8901c();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bbd791d0669e15aadd56f26857c8901c();
    });
  }
});
