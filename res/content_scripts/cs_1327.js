
function mudfish_adclean_9dcc805edb160c47a8aae25b7c85d0ae() {
  try {
    Sizzle(`.bg-gray-5 > .list-group-flush`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_9dcc805edb160c47a8aae25b7c85d0ae = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_9dcc805edb160c47a8aae25b7c85d0ae, function (items) {
  if (mudfish_adclean_g_conf_9dcc805edb160c47a8aae25b7c85d0ae.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_9dcc805edb160c47a8aae25b7c85d0ae();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
