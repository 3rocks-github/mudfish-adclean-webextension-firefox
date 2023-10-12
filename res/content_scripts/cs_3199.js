
function mudfish_adclean_2121afc208d17621f573e64d344f9244() {
  try {
    Sizzle(`.td-pb-span8`).forEach(element => {
      element.style.width = "100% !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_2121afc208d17621f573e64d344f9244 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_2121afc208d17621f573e64d344f9244, function (items) {
  if (mudfish_adclean_g_conf_2121afc208d17621f573e64d344f9244.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_2121afc208d17621f573e64d344f9244();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
