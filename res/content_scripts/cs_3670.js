
function mudfish_adclean_7b9dd576b67655344e3c9a44c5b4e937() {
  try {
    Sizzle(`div[id*="-ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7b9dd576b67655344e3c9a44c5b4e937 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7b9dd576b67655344e3c9a44c5b4e937, function (items) {
  if (mudfish_adclean_g_conf_7b9dd576b67655344e3c9a44c5b4e937.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7b9dd576b67655344e3c9a44c5b4e937();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_7b9dd576b67655344e3c9a44c5b4e937();
    });
  }
});
