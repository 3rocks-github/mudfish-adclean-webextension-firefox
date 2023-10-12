
function mudfish_adclean_a7a1539416d3e5f2f4b819333357ab44() {
  try {
    Sizzle(`html[style*="background-image: url(//upload.tgd.kr/"].darkmode`).forEach(element => {
      element.style.backgroundImage = "none !important";
element.style.backgroundColor = "#151515 !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a7a1539416d3e5f2f4b819333357ab44 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a7a1539416d3e5f2f4b819333357ab44, function (items) {
  if (mudfish_adclean_g_conf_a7a1539416d3e5f2f4b819333357ab44.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a7a1539416d3e5f2f4b819333357ab44();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
