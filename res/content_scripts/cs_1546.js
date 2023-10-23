
function mudfish_adclean_c6332e5a6bdf6393d0b8a6ee987f4db7() {
  try {
    Sizzle(`ul.post-list > li[class^="post-"]:not([id]):not([data-post-id])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_c6332e5a6bdf6393d0b8a6ee987f4db7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_c6332e5a6bdf6393d0b8a6ee987f4db7, function (items) {
  if (mudfish_adclean_g_conf_c6332e5a6bdf6393d0b8a6ee987f4db7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_c6332e5a6bdf6393d0b8a6ee987f4db7();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_c6332e5a6bdf6393d0b8a6ee987f4db7();
    });
  }
});
