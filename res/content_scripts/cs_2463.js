
function mudfish_adclean_381126e936088f7aa06d714781859451() {
  try {
    Sizzle(`table[id][width] tr[bgcolor] ~ tr:not([bgcolor]):has(td > ins.adsbygoogle)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_381126e936088f7aa06d714781859451 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_381126e936088f7aa06d714781859451, function (items) {
  if (mudfish_adclean_g_conf_381126e936088f7aa06d714781859451.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_381126e936088f7aa06d714781859451();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_381126e936088f7aa06d714781859451();
    });
  }
});
