
function mudfish_adclean_e306bf056db6cf2c73221e3c02e0591e() {
  try {
    Sizzle(`div[style]#cenArea > h2[style]:contains(오늘의 책)`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_e306bf056db6cf2c73221e3c02e0591e = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_e306bf056db6cf2c73221e3c02e0591e, function (items) {
  if (mudfish_adclean_g_conf_e306bf056db6cf2c73221e3c02e0591e.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_e306bf056db6cf2c73221e3c02e0591e();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_e306bf056db6cf2c73221e3c02e0591e();
    });
  }
});
