
function mudfish_adclean_8e75d23b17108ca98fcc0653d9694dd6() {
  try {
    Sizzle(`#sponsorTab`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8e75d23b17108ca98fcc0653d9694dd6 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8e75d23b17108ca98fcc0653d9694dd6, function (items) {
  if (mudfish_adclean_g_conf_8e75d23b17108ca98fcc0653d9694dd6.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8e75d23b17108ca98fcc0653d9694dd6();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
