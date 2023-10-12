
function mudfish_adclean_88c1d3313dac175b6e280d267b45e801() {
  try {
    Sizzle(`#mbnRoll_yNow > .mbnRollUnit > .pagen_3`).forEach(element => {
      element.style.width = "363px !important";
element.style.left = "726px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_88c1d3313dac175b6e280d267b45e801 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_88c1d3313dac175b6e280d267b45e801, function (items) {
  if (mudfish_adclean_g_conf_88c1d3313dac175b6e280d267b45e801.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_88c1d3313dac175b6e280d267b45e801();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
