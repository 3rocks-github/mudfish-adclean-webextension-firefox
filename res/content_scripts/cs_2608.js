
function mudfish_adclean_004845f2014a4ac1809073dbcf9caf98() {
  try {
    Sizzle(`.banner_ad`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_004845f2014a4ac1809073dbcf9caf98 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_004845f2014a4ac1809073dbcf9caf98, function (items) {
  if (mudfish_adclean_g_conf_004845f2014a4ac1809073dbcf9caf98.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_004845f2014a4ac1809073dbcf9caf98();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
