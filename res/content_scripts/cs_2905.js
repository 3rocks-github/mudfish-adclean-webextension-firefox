
function mudfish_adclean_857fe7f66353e9082db12274ed95d38a() {
  try {
    Sizzle(`div[class^="Layout-module_"] #newsstand`).forEach(element => {
      element.style.marginTop = "0px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_857fe7f66353e9082db12274ed95d38a = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_857fe7f66353e9082db12274ed95d38a, function (items) {
  if (mudfish_adclean_g_conf_857fe7f66353e9082db12274ed95d38a.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_857fe7f66353e9082db12274ed95d38a();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_857fe7f66353e9082db12274ed95d38a();
    });
  }
});
