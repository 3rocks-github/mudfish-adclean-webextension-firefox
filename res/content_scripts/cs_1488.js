
function mudfish_adclean_92c7251498d02eb5a29beffad76ad010() {
  try {
    Sizzle(`div[data-widget="recommend"].box`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_92c7251498d02eb5a29beffad76ad010 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_92c7251498d02eb5a29beffad76ad010, function (items) {
  if (mudfish_adclean_g_conf_92c7251498d02eb5a29beffad76ad010.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_92c7251498d02eb5a29beffad76ad010();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_92c7251498d02eb5a29beffad76ad010();
    });
  }
});
