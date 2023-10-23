
function mudfish_adclean_51a58c4b0457f75257c94bef6cbd1150() {
  try {
    Sizzle(`img[src^="/images/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_51a58c4b0457f75257c94bef6cbd1150 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_51a58c4b0457f75257c94bef6cbd1150, function (items) {
  if (mudfish_adclean_g_conf_51a58c4b0457f75257c94bef6cbd1150.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_51a58c4b0457f75257c94bef6cbd1150();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_51a58c4b0457f75257c94bef6cbd1150();
    });
  }
});
