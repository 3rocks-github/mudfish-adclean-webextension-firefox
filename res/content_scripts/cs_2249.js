
function mudfish_adclean_fd52d6ca09e457eb4f75cb7adede7354() {
  try {
    Sizzle(`#body > .hp_allkill`).forEach(element => {
      element.style.marginTop = "375px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_fd52d6ca09e457eb4f75cb7adede7354 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_fd52d6ca09e457eb4f75cb7adede7354, function (items) {
  if (mudfish_adclean_g_conf_fd52d6ca09e457eb4f75cb7adede7354.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_fd52d6ca09e457eb4f75cb7adede7354();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_fd52d6ca09e457eb4f75cb7adede7354();
    });
  }
});
