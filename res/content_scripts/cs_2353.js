
function mudfish_adclean_aa25d7fc04b1295a58eda7d7ea17a06e() {
  try {
    Sizzle(`#board_read .board_main_top .member_reward_wrapper`).forEach(element => {
      element.style.marginTop = "20px !important";
element.style.float = "right !important";
element.style.marginRight = "20px !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_aa25d7fc04b1295a58eda7d7ea17a06e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_aa25d7fc04b1295a58eda7d7ea17a06e, function (items) {
  if (mudfish_adclean_g_conf_aa25d7fc04b1295a58eda7d7ea17a06e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_aa25d7fc04b1295a58eda7d7ea17a06e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
