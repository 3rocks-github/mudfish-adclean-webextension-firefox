
function mudfish_adclean_b2ad95f8ca3bd13ea2edb6546596053b() {
  try {
    Sizzle(`#article-info > h2`).forEach(element => {
      element.style.overflow = "visible !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b2ad95f8ca3bd13ea2edb6546596053b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b2ad95f8ca3bd13ea2edb6546596053b, function (items) {
  if (mudfish_adclean_g_conf_b2ad95f8ca3bd13ea2edb6546596053b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b2ad95f8ca3bd13ea2edb6546596053b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b2ad95f8ca3bd13ea2edb6546596053b();
    });
  }
});
