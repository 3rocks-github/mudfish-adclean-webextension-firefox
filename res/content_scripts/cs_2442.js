
function mudfish_adclean_86a68356b69239793b713ae10613f1eb() {
  try {
    Sizzle(`#welcomeMainBanner_welcome_tab li[id]:has(img[src*="/img/banner/flash/welcome/nav/"]:not([src*="/nav/181010_"]))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_86a68356b69239793b713ae10613f1eb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_86a68356b69239793b713ae10613f1eb, function (items) {
  if (mudfish_adclean_g_conf_86a68356b69239793b713ae10613f1eb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_86a68356b69239793b713ae10613f1eb();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_86a68356b69239793b713ae10613f1eb();
    });
  }
});
