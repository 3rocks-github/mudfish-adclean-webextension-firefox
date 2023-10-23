
function mudfish_adclean_783b3f7a71bf83297567782ce8e1cc46() {
  try {
    Sizzle(`center > div[style*="margin:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_783b3f7a71bf83297567782ce8e1cc46 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_783b3f7a71bf83297567782ce8e1cc46, function (items) {
  if (mudfish_adclean_g_conf_783b3f7a71bf83297567782ce8e1cc46.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_783b3f7a71bf83297567782ce8e1cc46();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_783b3f7a71bf83297567782ce8e1cc46();
    });
  }
});
