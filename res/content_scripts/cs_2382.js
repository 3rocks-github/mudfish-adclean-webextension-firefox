
function mudfish_adclean_2696cc937bf9cffb22efe4b292e7a68c() {
  try {
    Sizzle(`header .row[style]`).forEach(element => {
      element.style.marginBottom = "35px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2696cc937bf9cffb22efe4b292e7a68c = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2696cc937bf9cffb22efe4b292e7a68c, function (items) {
  if (mudfish_adclean_g_conf_2696cc937bf9cffb22efe4b292e7a68c.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2696cc937bf9cffb22efe4b292e7a68c();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
