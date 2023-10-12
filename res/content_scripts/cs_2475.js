
function mudfish_adclean_aa03a0beaacb16e771e1a13cec42f8cd() {
  try {
    Sizzle(`body.nate .section_cont [disp-attr]:has(> div:matches-css(display: none))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_aa03a0beaacb16e771e1a13cec42f8cd = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_aa03a0beaacb16e771e1a13cec42f8cd, function (items) {
  if (mudfish_adclean_g_conf_aa03a0beaacb16e771e1a13cec42f8cd.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_aa03a0beaacb16e771e1a13cec42f8cd();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
