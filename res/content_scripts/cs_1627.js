
function mudfish_adclean_d517c81c4eb9e29088cb1dbafb9867d1() {
  try {
    Sizzle(`.mtop_adfit`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_d517c81c4eb9e29088cb1dbafb9867d1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_d517c81c4eb9e29088cb1dbafb9867d1, function (items) {
  if (mudfish_adclean_g_conf_d517c81c4eb9e29088cb1dbafb9867d1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_d517c81c4eb9e29088cb1dbafb9867d1();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
