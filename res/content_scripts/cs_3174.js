
function mudfish_adclean_318f2079504bd6c0e7ed822a838f697f() {
  try {
    Sizzle(`a[href*="/ad/"][target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_318f2079504bd6c0e7ed822a838f697f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_318f2079504bd6c0e7ed822a838f697f, function (items) {
  if (mudfish_adclean_g_conf_318f2079504bd6c0e7ed822a838f697f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_318f2079504bd6c0e7ed822a838f697f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_318f2079504bd6c0e7ed822a838f697f();
    });
  }
});
