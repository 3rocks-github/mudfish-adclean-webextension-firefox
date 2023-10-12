
function mudfish_adclean_d6166ee4924283c52116256ec46050da() {
  try {
    Sizzle(`#header-menu-left`).forEach(element => {
      element.style.borderRight = "none !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d6166ee4924283c52116256ec46050da = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d6166ee4924283c52116256ec46050da, function (items) {
  if (mudfish_adclean_g_conf_d6166ee4924283c52116256ec46050da.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d6166ee4924283c52116256ec46050da();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
