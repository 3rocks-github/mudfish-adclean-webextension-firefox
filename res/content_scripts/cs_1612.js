
function mudfish_adclean_2cfd834e675ed34be6fb53cbd6e0e73b() {
  try {
    Sizzle(`body.nate .section_cont [disp-attr] > div[style*="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2cfd834e675ed34be6fb53cbd6e0e73b = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2cfd834e675ed34be6fb53cbd6e0e73b, function (items) {
  if (mudfish_adclean_g_conf_2cfd834e675ed34be6fb53cbd6e0e73b.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2cfd834e675ed34be6fb53cbd6e0e73b();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_2cfd834e675ed34be6fb53cbd6e0e73b();
    });
  }
});
