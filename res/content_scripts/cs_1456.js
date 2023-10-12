
function mudfish_adclean_2bb63c4763e332b90e99688579cae392() {
  try {
    Sizzle(`form[id][name] ~ div[id][style^="min-height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2bb63c4763e332b90e99688579cae392 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2bb63c4763e332b90e99688579cae392, function (items) {
  if (mudfish_adclean_g_conf_2bb63c4763e332b90e99688579cae392.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2bb63c4763e332b90e99688579cae392();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
