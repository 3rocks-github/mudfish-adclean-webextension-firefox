
function mudfish_adclean_494cd3995c5a14b101f985ab2c80c0ca() {
  try {
    Sizzle(`div[class^="ad_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_494cd3995c5a14b101f985ab2c80c0ca = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_494cd3995c5a14b101f985ab2c80c0ca, function (items) {
  if (mudfish_adclean_g_conf_494cd3995c5a14b101f985ab2c80c0ca.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_494cd3995c5a14b101f985ab2c80c0ca();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_494cd3995c5a14b101f985ab2c80c0ca();
    });
  }
});
