
function mudfish_adclean_d9a0ac09f2bce90927d05105f850a6c0() {
  try {
    Sizzle(`#naverPowerShoppingArea`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d9a0ac09f2bce90927d05105f850a6c0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d9a0ac09f2bce90927d05105f850a6c0, function (items) {
  if (mudfish_adclean_g_conf_d9a0ac09f2bce90927d05105f850a6c0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d9a0ac09f2bce90927d05105f850a6c0();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
