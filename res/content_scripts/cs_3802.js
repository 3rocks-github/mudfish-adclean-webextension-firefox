
function mudfish_adclean_b8b0ffd495aa927cc8fc2224672c0d44() {
  try {
    Sizzle(`a[href*="/ad/"][target="_blank"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b8b0ffd495aa927cc8fc2224672c0d44 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b8b0ffd495aa927cc8fc2224672c0d44, function (items) {
  if (mudfish_adclean_g_conf_b8b0ffd495aa927cc8fc2224672c0d44.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b8b0ffd495aa927cc8fc2224672c0d44();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b8b0ffd495aa927cc8fc2224672c0d44();
    });
  }
});
