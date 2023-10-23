
function mudfish_adclean_b8c9da44513f74d0f53669758318024b() {
  try {
    Sizzle(`#goodsDetailSponLnkArea`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b8c9da44513f74d0f53669758318024b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b8c9da44513f74d0f53669758318024b, function (items) {
  if (mudfish_adclean_g_conf_b8c9da44513f74d0f53669758318024b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b8c9da44513f74d0f53669758318024b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b8c9da44513f74d0f53669758318024b();
    });
  }
});
