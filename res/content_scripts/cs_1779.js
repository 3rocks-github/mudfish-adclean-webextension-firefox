
function mudfish_adclean_f38c4f71f4ead719557461f9cc8045b2() {
  try {
    Sizzle(`iframe[src^="/banner/banner_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f38c4f71f4ead719557461f9cc8045b2 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f38c4f71f4ead719557461f9cc8045b2, function (items) {
  if (mudfish_adclean_g_conf_f38c4f71f4ead719557461f9cc8045b2.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f38c4f71f4ead719557461f9cc8045b2();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f38c4f71f4ead719557461f9cc8045b2();
    });
  }
});
