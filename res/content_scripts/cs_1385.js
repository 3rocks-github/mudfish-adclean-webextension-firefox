
function mudfish_adclean_35df29a5d3b507f04bf5a0a62516c0e1() {
  try {
    Sizzle(`#article-view > .gray-bg`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_35df29a5d3b507f04bf5a0a62516c0e1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_35df29a5d3b507f04bf5a0a62516c0e1, function (items) {
  if (mudfish_adclean_g_conf_35df29a5d3b507f04bf5a0a62516c0e1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_35df29a5d3b507f04bf5a0a62516c0e1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_35df29a5d3b507f04bf5a0a62516c0e1();
    });
  }
});
