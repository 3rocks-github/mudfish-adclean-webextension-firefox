
function mudfish_adclean_8dde3d2fefb2954d54b88db05d48882f() {
  try {
    Sizzle(`table[class^="ad-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8dde3d2fefb2954d54b88db05d48882f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8dde3d2fefb2954d54b88db05d48882f, function (items) {
  if (mudfish_adclean_g_conf_8dde3d2fefb2954d54b88db05d48882f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8dde3d2fefb2954d54b88db05d48882f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8dde3d2fefb2954d54b88db05d48882f();
    });
  }
});
