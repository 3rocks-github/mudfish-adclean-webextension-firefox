
function mudfish_adclean_de430149ca365bd1ff4788b962b27d4d() {
  try {
    Sizzle(`table.table-stripped tr:has(.ad)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_de430149ca365bd1ff4788b962b27d4d = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_de430149ca365bd1ff4788b962b27d4d, function (items) {
  if (mudfish_adclean_g_conf_de430149ca365bd1ff4788b962b27d4d.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_de430149ca365bd1ff4788b962b27d4d();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
