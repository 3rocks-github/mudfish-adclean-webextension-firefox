
function mudfish_adclean_5baaaeb45f336b04bfd2cc0b5238c7d8() {
  try {
    Sizzle(`.review_list_element > .c_review_recommend`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_5baaaeb45f336b04bfd2cc0b5238c7d8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_5baaaeb45f336b04bfd2cc0b5238c7d8, function (items) {
  if (mudfish_adclean_g_conf_5baaaeb45f336b04bfd2cc0b5238c7d8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_5baaaeb45f336b04bfd2cc0b5238c7d8();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
