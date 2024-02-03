
function mudfish_adclean_0f695173970b72e449604a76d7119c72() {
  try {
    Sizzle(`.board-tail-banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_0f695173970b72e449604a76d7119c72 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_0f695173970b72e449604a76d7119c72, function (items) {
  if (mudfish_adclean_g_conf_0f695173970b72e449604a76d7119c72.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_0f695173970b72e449604a76d7119c72();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_0f695173970b72e449604a76d7119c72();
    });
  }
});
