
function mudfish_adclean_647a987fa8181c59a6a21c66ad0b3df5() {
  try {
    Sizzle(`#cont_warp table[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_647a987fa8181c59a6a21c66ad0b3df5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_647a987fa8181c59a6a21c66ad0b3df5, function (items) {
  if (mudfish_adclean_g_conf_647a987fa8181c59a6a21c66ad0b3df5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_647a987fa8181c59a6a21c66ad0b3df5();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
