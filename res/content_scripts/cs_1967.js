
function mudfish_adclean_86b208bf786535ddbaeda16c4047426e() {
  try {
    Sizzle(`div[id$="_AD"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_86b208bf786535ddbaeda16c4047426e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_86b208bf786535ddbaeda16c4047426e, function (items) {
  if (mudfish_adclean_g_conf_86b208bf786535ddbaeda16c4047426e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_86b208bf786535ddbaeda16c4047426e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
