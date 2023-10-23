
function mudfish_adclean_f1e4ab2de48785a35653c1fd80eb18e8() {
  try {
    Sizzle(`.recipe_list > div[style*="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_f1e4ab2de48785a35653c1fd80eb18e8 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_f1e4ab2de48785a35653c1fd80eb18e8, function (items) {
  if (mudfish_adclean_g_conf_f1e4ab2de48785a35653c1fd80eb18e8.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_f1e4ab2de48785a35653c1fd80eb18e8();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_f1e4ab2de48785a35653c1fd80eb18e8();
    });
  }
});
