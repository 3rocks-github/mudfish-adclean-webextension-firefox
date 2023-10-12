
function mudfish_adclean_2f66bfde2ed073afcd34c2fbf76f5144() {
  try {
    Sizzle(`.td_sub_read_contents > div[style]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2f66bfde2ed073afcd34c2fbf76f5144 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2f66bfde2ed073afcd34c2fbf76f5144, function (items) {
  if (mudfish_adclean_g_conf_2f66bfde2ed073afcd34c2fbf76f5144.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2f66bfde2ed073afcd34c2fbf76f5144();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
