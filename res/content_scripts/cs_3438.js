
function mudfish_adclean_8002c74bd51371dda05a90f0e240a926() {
  try {
    Sizzle(`#read_ok_desc_div + div[style^="text-align:"].bg1`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8002c74bd51371dda05a90f0e240a926 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8002c74bd51371dda05a90f0e240a926, function (items) {
  if (mudfish_adclean_g_conf_8002c74bd51371dda05a90f0e240a926.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8002c74bd51371dda05a90f0e240a926();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8002c74bd51371dda05a90f0e240a926();
    });
  }
});
