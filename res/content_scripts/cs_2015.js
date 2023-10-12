
function mudfish_adclean_ab6748c7bf730dea5fcde34b6c2359d5() {
  try {
    Sizzle(`div.brick-vowel > div[data-block-code="AD-SMART-CHANNEL"].MM_DA_SMARTCHANNEL`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_ab6748c7bf730dea5fcde34b6c2359d5 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_ab6748c7bf730dea5fcde34b6c2359d5, function (items) {
  if (mudfish_adclean_g_conf_ab6748c7bf730dea5fcde34b6c2359d5.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_ab6748c7bf730dea5fcde34b6c2359d5();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
