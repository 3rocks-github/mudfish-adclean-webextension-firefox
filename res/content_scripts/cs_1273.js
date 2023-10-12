
function mudfish_adclean_7265696d44ed498ac8cca77a334750eb() {
  try {
    Sizzle(`#mnetplus-modal-root`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_7265696d44ed498ac8cca77a334750eb = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_7265696d44ed498ac8cca77a334750eb, function (items) {
  if (mudfish_adclean_g_conf_7265696d44ed498ac8cca77a334750eb.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_7265696d44ed498ac8cca77a334750eb();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
