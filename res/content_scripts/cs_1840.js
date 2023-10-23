
function mudfish_adclean_3781925c7fe329d93af1ad563d51c56b() {
  try {
    Sizzle(`.con_banner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_3781925c7fe329d93af1ad563d51c56b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_3781925c7fe329d93af1ad563d51c56b, function (items) {
  if (mudfish_adclean_g_conf_3781925c7fe329d93af1ad563d51c56b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_3781925c7fe329d93af1ad563d51c56b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_3781925c7fe329d93af1ad563d51c56b();
    });
  }
});
