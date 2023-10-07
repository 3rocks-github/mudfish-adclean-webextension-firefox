
function mudfish_adclean_2ebab1bdfffcaeb6af60d6967c56b249() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div.board_main > table > tbody tr.table_body.list_inner`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2ebab1bdfffcaeb6af60d6967c56b249();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2ebab1bdfffcaeb6af60d6967c56b249();
  });
}
