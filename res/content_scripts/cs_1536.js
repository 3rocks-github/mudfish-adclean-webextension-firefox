
function mudfish_adclean_880abbd668256c8bc4569d52c3cc8004() {
  try {
    Sizzle(`#divMemulRight > div:not([id]):not([class])`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_880abbd668256c8bc4569d52c3cc8004 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_880abbd668256c8bc4569d52c3cc8004, function (items) {
  if (mudfish_adclean_g_conf_880abbd668256c8bc4569d52c3cc8004.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_880abbd668256c8bc4569d52c3cc8004();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
