
function mudfish_adclean_8a6196732b344477dd7cf0bb58671dfc() {
  try {
    Sizzle(`div:is(._pl_section, ._bz_section).ad_section`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8a6196732b344477dd7cf0bb58671dfc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8a6196732b344477dd7cf0bb58671dfc, function (items) {
  if (mudfish_adclean_g_conf_8a6196732b344477dd7cf0bb58671dfc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8a6196732b344477dd7cf0bb58671dfc();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8a6196732b344477dd7cf0bb58671dfc();
    });
  }
});
