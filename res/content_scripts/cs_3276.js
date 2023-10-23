
function mudfish_adclean_583a1e13cf2665677754fe4f6f2dddb2() {
  try {
    Sizzle(`html[style]`).forEach(element => {
      element.style.overflow = "auto !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_583a1e13cf2665677754fe4f6f2dddb2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_583a1e13cf2665677754fe4f6f2dddb2, function (items) {
  if (mudfish_adclean_g_conf_583a1e13cf2665677754fe4f6f2dddb2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_583a1e13cf2665677754fe4f6f2dddb2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_583a1e13cf2665677754fe4f6f2dddb2();
    });
  }
});
