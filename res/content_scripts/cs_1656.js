
function mudfish_adclean_6384464ecea47d179028d382681a3c67() {
  try {
    Sizzle(`.flex-chain-wrapper[class*="-pad-top-"][class*="-margin-"][class*="-bg-grey-"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_6384464ecea47d179028d382681a3c67 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_6384464ecea47d179028d382681a3c67, function (items) {
  if (mudfish_adclean_g_conf_6384464ecea47d179028d382681a3c67.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_6384464ecea47d179028d382681a3c67();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
