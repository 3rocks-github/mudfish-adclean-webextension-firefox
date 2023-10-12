
function mudfish_adclean_8800c796358acecf465a1f2fd95068e7() {
  try {
    Sizzle(`ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8800c796358acecf465a1f2fd95068e7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8800c796358acecf465a1f2fd95068e7, function (items) {
  if (mudfish_adclean_g_conf_8800c796358acecf465a1f2fd95068e7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8800c796358acecf465a1f2fd95068e7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
