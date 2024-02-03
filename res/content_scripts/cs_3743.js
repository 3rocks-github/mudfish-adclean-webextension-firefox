
function mudfish_adclean_d0afa9c2da815ac8348f244953aa1475() {
  try {
    Sizzle(`section[class$="_ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d0afa9c2da815ac8348f244953aa1475 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d0afa9c2da815ac8348f244953aa1475, function (items) {
  if (mudfish_adclean_g_conf_d0afa9c2da815ac8348f244953aa1475.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d0afa9c2da815ac8348f244953aa1475();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_d0afa9c2da815ac8348f244953aa1475();
    });
  }
});
