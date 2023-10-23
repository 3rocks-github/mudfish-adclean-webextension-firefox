
function mudfish_adclean_cb0553981c0d7295a47bb6a0bbb295a2() {
  try {
    Sizzle(`#contents > #EP_Rbnr, #contents > #EP_linebnr`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_cb0553981c0d7295a47bb6a0bbb295a2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_cb0553981c0d7295a47bb6a0bbb295a2, function (items) {
  if (mudfish_adclean_g_conf_cb0553981c0d7295a47bb6a0bbb295a2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_cb0553981c0d7295a47bb6a0bbb295a2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_cb0553981c0d7295a47bb6a0bbb295a2();
    });
  }
});
