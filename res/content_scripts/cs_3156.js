
function mudfish_adclean_189aad623220cc8c3163a94ef1e49578() {
  try {
    Sizzle(`a[href^="/adver-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_189aad623220cc8c3163a94ef1e49578 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_189aad623220cc8c3163a94ef1e49578, function (items) {
  if (mudfish_adclean_g_conf_189aad623220cc8c3163a94ef1e49578.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_189aad623220cc8c3163a94ef1e49578();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
