
function mudfish_adclean_8a4efa162fac99b3e567b6be393606be() {
  try {
    Sizzle(`div[id^="banner"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8a4efa162fac99b3e567b6be393606be = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8a4efa162fac99b3e567b6be393606be, function (items) {
  if (mudfish_adclean_g_conf_8a4efa162fac99b3e567b6be393606be.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8a4efa162fac99b3e567b6be393606be();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
