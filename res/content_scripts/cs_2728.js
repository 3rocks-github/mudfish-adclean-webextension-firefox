
function mudfish_adclean_05cc0036a40cef291a1454ff120cdbb4() {
  try {
    Sizzle(`#aside #ol_before ~ div[style]:not(:has(.tbl_head_lt))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_05cc0036a40cef291a1454ff120cdbb4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_05cc0036a40cef291a1454ff120cdbb4, function (items) {
  if (mudfish_adclean_g_conf_05cc0036a40cef291a1454ff120cdbb4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_05cc0036a40cef291a1454ff120cdbb4();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
