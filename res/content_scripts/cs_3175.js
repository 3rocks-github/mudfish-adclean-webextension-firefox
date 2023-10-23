
function mudfish_adclean_6bc29d341bb1efff7091f2213c9fb72b() {
  try {
    Sizzle(`a[href^="/go/"][target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6bc29d341bb1efff7091f2213c9fb72b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6bc29d341bb1efff7091f2213c9fb72b, function (items) {
  if (mudfish_adclean_g_conf_6bc29d341bb1efff7091f2213c9fb72b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6bc29d341bb1efff7091f2213c9fb72b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_6bc29d341bb1efff7091f2213c9fb72b();
    });
  }
});
