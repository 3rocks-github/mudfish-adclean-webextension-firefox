
function mudfish_adclean_66679bdb0a8b18600859dee10bd80255() {
  try {
    Sizzle(`a[href^="/b/c/NPM"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_66679bdb0a8b18600859dee10bd80255 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_66679bdb0a8b18600859dee10bd80255, function (items) {
  if (mudfish_adclean_g_conf_66679bdb0a8b18600859dee10bd80255.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_66679bdb0a8b18600859dee10bd80255();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_66679bdb0a8b18600859dee10bd80255();
    });
  }
});
