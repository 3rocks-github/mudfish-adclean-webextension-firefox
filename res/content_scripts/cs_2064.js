
function mudfish_adclean_0cd17f834a55b204e4112fb7ee67a912() {
  try {
    Sizzle(`#main_premium_spon_block`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0cd17f834a55b204e4112fb7ee67a912 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0cd17f834a55b204e4112fb7ee67a912, function (items) {
  if (mudfish_adclean_g_conf_0cd17f834a55b204e4112fb7ee67a912.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0cd17f834a55b204e4112fb7ee67a912();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0cd17f834a55b204e4112fb7ee67a912();
    });
  }
});
