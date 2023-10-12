
function mudfish_adclean_2a7237300c46af152033ecbc929218ab() {
  try {
    Sizzle(`span[class$="Ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2a7237300c46af152033ecbc929218ab = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2a7237300c46af152033ecbc929218ab, function (items) {
  if (mudfish_adclean_g_conf_2a7237300c46af152033ecbc929218ab.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2a7237300c46af152033ecbc929218ab();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
