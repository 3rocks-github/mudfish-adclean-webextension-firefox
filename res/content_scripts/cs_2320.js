
function mudfish_adclean_07f52efd3eec646edf3f2b3095d49d9e() {
  try {
    Sizzle(`header ~ header`).forEach(element => {
      element.style.marginTop = "50px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_07f52efd3eec646edf3f2b3095d49d9e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_07f52efd3eec646edf3f2b3095d49d9e, function (items) {
  if (mudfish_adclean_g_conf_07f52efd3eec646edf3f2b3095d49d9e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_07f52efd3eec646edf3f2b3095d49d9e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
