
function mudfish_adclean_aa25d7fc04b1295a58eda7d7ea17a06e() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#board_read .board_main_top .member_reward_wrapper`).forEach(element => {
        element.style.marginTop = "20px !important";
element.style.float = "right !important";
element.style.marginRight = "20px !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_aa25d7fc04b1295a58eda7d7ea17a06e();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_aa25d7fc04b1295a58eda7d7ea17a06e();
  });
}
