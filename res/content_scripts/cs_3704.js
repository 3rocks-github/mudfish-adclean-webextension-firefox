
function mudfish_adclean_968a85b7d2b73e714059e870c386327f() {
  try {
    Sizzle(`iframe[src*="/banner.html"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_968a85b7d2b73e714059e870c386327f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_968a85b7d2b73e714059e870c386327f, function (items) {
  if (mudfish_adclean_g_conf_968a85b7d2b73e714059e870c386327f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_968a85b7d2b73e714059e870c386327f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_968a85b7d2b73e714059e870c386327f();
    });
  }
});
