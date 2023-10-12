
function mudfish_adclean_619d4dac3f7c96958282b711ddbd6564() {
  try {
    Sizzle(`tbody > tr[bgcolor] ~ tr:has(ins.adsbygoogle)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_619d4dac3f7c96958282b711ddbd6564 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_619d4dac3f7c96958282b711ddbd6564, function (items) {
  if (mudfish_adclean_g_conf_619d4dac3f7c96958282b711ddbd6564.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_619d4dac3f7c96958282b711ddbd6564();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
