
function mudfish_adclean_a57dd82097e1891756e72d5fe24b2791() {
  try {
    Sizzle(`div[class^="m_ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_a57dd82097e1891756e72d5fe24b2791 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_a57dd82097e1891756e72d5fe24b2791, function (items) {
  if (mudfish_adclean_g_conf_a57dd82097e1891756e72d5fe24b2791.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_a57dd82097e1891756e72d5fe24b2791();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_a57dd82097e1891756e72d5fe24b2791();
    });
  }
});
