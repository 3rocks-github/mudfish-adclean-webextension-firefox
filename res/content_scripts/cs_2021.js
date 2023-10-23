
function mudfish_adclean_1f0430608e5eab4a9ead72a7a0d0061a() {
  try {
    Sizzle(`#content > div.bd > div.bd_lst_wrp > center`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_1f0430608e5eab4a9ead72a7a0d0061a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_1f0430608e5eab4a9ead72a7a0d0061a, function (items) {
  if (mudfish_adclean_g_conf_1f0430608e5eab4a9ead72a7a0d0061a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_1f0430608e5eab4a9ead72a7a0d0061a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_1f0430608e5eab4a9ead72a7a0d0061a();
    });
  }
});
