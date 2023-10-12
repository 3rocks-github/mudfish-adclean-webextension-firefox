
function mudfish_adclean_d5db257a8024982e63aca3cf8ceccdc8() {
  try {
    Sizzle(`img[src^="/img/"][src$=".gif"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d5db257a8024982e63aca3cf8ceccdc8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d5db257a8024982e63aca3cf8ceccdc8, function (items) {
  if (mudfish_adclean_g_conf_d5db257a8024982e63aca3cf8ceccdc8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d5db257a8024982e63aca3cf8ceccdc8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
