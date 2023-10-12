
function mudfish_adclean_d025377e48dd94a4e16ca13805bf50ba() {
  try {
    Sizzle(`#wrapper div[class$="contents_box"]:has(ins.adsbygoogle)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d025377e48dd94a4e16ca13805bf50ba = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d025377e48dd94a4e16ca13805bf50ba, function (items) {
  if (mudfish_adclean_g_conf_d025377e48dd94a4e16ca13805bf50ba.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d025377e48dd94a4e16ca13805bf50ba();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
