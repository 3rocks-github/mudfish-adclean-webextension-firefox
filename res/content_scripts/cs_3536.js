
function mudfish_adclean_5bc9955325762631e9a0285344e2cfdb() {
  try {
    Sizzle(`.txt table#bodyMainImg tr:has(> td[style^="margin:"][style*=";padding:"] > table)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5bc9955325762631e9a0285344e2cfdb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5bc9955325762631e9a0285344e2cfdb, function (items) {
  if (mudfish_adclean_g_conf_5bc9955325762631e9a0285344e2cfdb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5bc9955325762631e9a0285344e2cfdb();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_5bc9955325762631e9a0285344e2cfdb();
    });
  }
});
