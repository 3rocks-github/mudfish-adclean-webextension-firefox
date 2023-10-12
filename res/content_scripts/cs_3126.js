
function mudfish_adclean_575aca486657aba7dee194a9882d7b81() {
  try {
    Sizzle(`#custom_html-8`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_575aca486657aba7dee194a9882d7b81 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_575aca486657aba7dee194a9882d7b81, function (items) {
  if (mudfish_adclean_g_conf_575aca486657aba7dee194a9882d7b81.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_575aca486657aba7dee194a9882d7b81();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
