
function mudfish_adclean_63e714b2a5d7384309e91d22139c3825() {
  try {
    Sizzle(`table[width][cellspacing][cellpadding][border] tr:not([height]) > td[width]:not([id]) ~ td[id]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_63e714b2a5d7384309e91d22139c3825 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_63e714b2a5d7384309e91d22139c3825, function (items) {
  if (mudfish_adclean_g_conf_63e714b2a5d7384309e91d22139c3825.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_63e714b2a5d7384309e91d22139c3825();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
