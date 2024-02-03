
function mudfish_adclean_75103fb9f29c43f8448bf3dd78c98299() {
  try {
    Sizzle(`div[id*="_ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_75103fb9f29c43f8448bf3dd78c98299 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_75103fb9f29c43f8448bf3dd78c98299, function (items) {
  if (mudfish_adclean_g_conf_75103fb9f29c43f8448bf3dd78c98299.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_75103fb9f29c43f8448bf3dd78c98299();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_75103fb9f29c43f8448bf3dd78c98299();
    });
  }
});
