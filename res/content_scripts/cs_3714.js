
function mudfish_adclean_6a7196e69307f829e962bbb50579c4d5() {
  try {
    Sizzle(`article > div[style].banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6a7196e69307f829e962bbb50579c4d5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6a7196e69307f829e962bbb50579c4d5, function (items) {
  if (mudfish_adclean_g_conf_6a7196e69307f829e962bbb50579c4d5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6a7196e69307f829e962bbb50579c4d5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6a7196e69307f829e962bbb50579c4d5();
    });
  }
});
