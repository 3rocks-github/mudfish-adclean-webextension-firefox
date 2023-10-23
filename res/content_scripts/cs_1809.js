
function mudfish_adclean_f53c3e38245753315351076d2f83087f() {
  try {
    Sizzle(`#content > #start_mainslide.cpz_mainslide`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f53c3e38245753315351076d2f83087f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f53c3e38245753315351076d2f83087f, function (items) {
  if (mudfish_adclean_g_conf_f53c3e38245753315351076d2f83087f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f53c3e38245753315351076d2f83087f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f53c3e38245753315351076d2f83087f();
    });
  }
});
