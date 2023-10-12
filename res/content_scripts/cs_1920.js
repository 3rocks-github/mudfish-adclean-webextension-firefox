
function mudfish_adclean_e2b98fea8287525223a4312124ff1b0e() {
  try {
    Sizzle(`.top_area > .wrap_sl_item > .slick-slider`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e2b98fea8287525223a4312124ff1b0e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e2b98fea8287525223a4312124ff1b0e, function (items) {
  if (mudfish_adclean_g_conf_e2b98fea8287525223a4312124ff1b0e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e2b98fea8287525223a4312124ff1b0e();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
