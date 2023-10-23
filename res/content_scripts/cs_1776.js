
function mudfish_adclean_dbd9febde14173f4c5655c938bbd696b() {
  try {
    Sizzle(`form#head_search > li[style][class]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_dbd9febde14173f4c5655c938bbd696b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_dbd9febde14173f4c5655c938bbd696b, function (items) {
  if (mudfish_adclean_g_conf_dbd9febde14173f4c5655c938bbd696b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_dbd9febde14173f4c5655c938bbd696b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_dbd9febde14173f4c5655c938bbd696b();
    });
  }
});
