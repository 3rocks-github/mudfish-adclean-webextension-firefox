
function mudfish_adclean_8a6a4f0757cf0cb7ab040f2e09e56fb7() {
  try {
    Sizzle(`#SirenDiv`).forEach(element => {
      element.style.display = "block !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8a6a4f0757cf0cb7ab040f2e09e56fb7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8a6a4f0757cf0cb7ab040f2e09e56fb7, function (items) {
  if (mudfish_adclean_g_conf_8a6a4f0757cf0cb7ab040f2e09e56fb7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8a6a4f0757cf0cb7ab040f2e09e56fb7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8a6a4f0757cf0cb7ab040f2e09e56fb7();
    });
  }
});
