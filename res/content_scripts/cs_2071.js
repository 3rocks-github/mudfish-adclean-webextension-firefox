
function mudfish_adclean_8e1ba4171c97194f48f996897e6f70d0() {
  try {
    Sizzle(`ul.board_list > li.subject.ad_subject`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_8e1ba4171c97194f48f996897e6f70d0 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_8e1ba4171c97194f48f996897e6f70d0, function (items) {
  if (mudfish_adclean_g_conf_8e1ba4171c97194f48f996897e6f70d0.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_8e1ba4171c97194f48f996897e6f70d0();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_8e1ba4171c97194f48f996897e6f70d0();
    });
  }
});
