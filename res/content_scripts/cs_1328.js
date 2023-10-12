
function mudfish_adclean_2ffc0b0e7fc788ab40f21cfe87032a04() {
  try {
    Sizzle(`div[class*="_main_ban"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2ffc0b0e7fc788ab40f21cfe87032a04 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2ffc0b0e7fc788ab40f21cfe87032a04, function (items) {
  if (mudfish_adclean_g_conf_2ffc0b0e7fc788ab40f21cfe87032a04.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2ffc0b0e7fc788ab40f21cfe87032a04();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
