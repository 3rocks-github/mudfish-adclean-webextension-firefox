
function mudfish_adclean_43e349e3838a643c78b17a99f5511e91() {
  try {
    Sizzle(`section[data-product="shoppingBox"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_43e349e3838a643c78b17a99f5511e91 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_43e349e3838a643c78b17a99f5511e91, function (items) {
  if (mudfish_adclean_g_conf_43e349e3838a643c78b17a99f5511e91.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_43e349e3838a643c78b17a99f5511e91();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_43e349e3838a643c78b17a99f5511e91();
    });
  }
});
