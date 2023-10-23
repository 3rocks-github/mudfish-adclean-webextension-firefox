
function mudfish_adclean_201ceaf16c7c39d41377b3b340f8656f() {
  try {
    Sizzle(`#mbnRoll_yNow > .mbnRollUnit > .pagen_2`).forEach(element => {
      element.style.width = "363px !important";
element.style.left = "363px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_201ceaf16c7c39d41377b3b340f8656f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_201ceaf16c7c39d41377b3b340f8656f, function (items) {
  if (mudfish_adclean_g_conf_201ceaf16c7c39d41377b3b340f8656f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_201ceaf16c7c39d41377b3b340f8656f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_201ceaf16c7c39d41377b3b340f8656f();
    });
  }
});
