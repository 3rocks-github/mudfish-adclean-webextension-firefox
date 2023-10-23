
function mudfish_adclean_ef993c170e48dee6068b1b2ec9ef1cd5() {
  try {
    Sizzle(`#welcome_center > div:not([class]):not([style]):not([id])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ef993c170e48dee6068b1b2ec9ef1cd5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ef993c170e48dee6068b1b2ec9ef1cd5, function (items) {
  if (mudfish_adclean_g_conf_ef993c170e48dee6068b1b2ec9ef1cd5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ef993c170e48dee6068b1b2ec9ef1cd5();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_ef993c170e48dee6068b1b2ec9ef1cd5();
    });
  }
});
