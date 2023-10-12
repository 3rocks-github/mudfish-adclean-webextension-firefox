
function mudfish_adclean_42eb8b60864fb603e8effa7130ee7678() {
  try {
    Sizzle(`#inven_reservation_box`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_42eb8b60864fb603e8effa7130ee7678 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_42eb8b60864fb603e8effa7130ee7678, function (items) {
  if (mudfish_adclean_g_conf_42eb8b60864fb603e8effa7130ee7678.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_42eb8b60864fb603e8effa7130ee7678();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
