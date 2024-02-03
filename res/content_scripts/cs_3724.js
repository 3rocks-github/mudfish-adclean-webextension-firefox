
function mudfish_adclean_bb87b90241ce5ae9b51c9fb141d8cbf4() {
  try {
    Sizzle(`#m_main_attendance_wrap ~ a[href^="../../plugin/mobile/board.php?bo_table=market_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_bb87b90241ce5ae9b51c9fb141d8cbf4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_bb87b90241ce5ae9b51c9fb141d8cbf4, function (items) {
  if (mudfish_adclean_g_conf_bb87b90241ce5ae9b51c9fb141d8cbf4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_bb87b90241ce5ae9b51c9fb141d8cbf4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_bb87b90241ce5ae9b51c9fb141d8cbf4();
    });
  }
});
