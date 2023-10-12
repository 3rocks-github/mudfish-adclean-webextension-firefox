
function mudfish_adclean_932fe9bf55fbb42448343bda0c9eb1d7() {
  try {
    Sizzle(`.container > section#id_section_deal_list ~ section[id][class]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_932fe9bf55fbb42448343bda0c9eb1d7 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_932fe9bf55fbb42448343bda0c9eb1d7, function (items) {
  if (mudfish_adclean_g_conf_932fe9bf55fbb42448343bda0c9eb1d7.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_932fe9bf55fbb42448343bda0c9eb1d7();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
