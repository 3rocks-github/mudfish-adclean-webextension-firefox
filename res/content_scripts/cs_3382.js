
function mudfish_adclean_2cf01f286b1f2378b012c1132526652f() {
  try {
    Sizzle(`#hd_pop`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2cf01f286b1f2378b012c1132526652f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2cf01f286b1f2378b012c1132526652f, function (items) {
  if (mudfish_adclean_g_conf_2cf01f286b1f2378b012c1132526652f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2cf01f286b1f2378b012c1132526652f();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
