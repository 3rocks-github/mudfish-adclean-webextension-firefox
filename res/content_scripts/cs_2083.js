
function mudfish_adclean_2ebab1bdfffcaeb6af60d6967c56b249() {
  try {
    Sizzle(`div.board_main > table > tbody tr.table_body.list_inner`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2ebab1bdfffcaeb6af60d6967c56b249 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2ebab1bdfffcaeb6af60d6967c56b249, function (items) {
  if (mudfish_adclean_g_conf_2ebab1bdfffcaeb6af60d6967c56b249.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2ebab1bdfffcaeb6af60d6967c56b249();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
