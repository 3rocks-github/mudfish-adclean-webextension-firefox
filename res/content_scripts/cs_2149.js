
function mudfish_adclean_3424cebd823dd42f32e77079c4a68563() {
  try {
    Sizzle(`td[valign="top"] ~ td[width][valign][bgcolor][align] table[width][height][border][cellpadding]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3424cebd823dd42f32e77079c4a68563 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3424cebd823dd42f32e77079c4a68563, function (items) {
  if (mudfish_adclean_g_conf_3424cebd823dd42f32e77079c4a68563.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3424cebd823dd42f32e77079c4a68563();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3424cebd823dd42f32e77079c4a68563();
    });
  }
});
