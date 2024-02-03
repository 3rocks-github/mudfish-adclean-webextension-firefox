
function mudfish_adclean_33b22fa05de40d7cfb9635cffe222fb3() {
  try {
    Sizzle(`#user-wrap.mobile ~ div[style^="height:"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_33b22fa05de40d7cfb9635cffe222fb3 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_33b22fa05de40d7cfb9635cffe222fb3, function (items) {
  if (mudfish_adclean_g_conf_33b22fa05de40d7cfb9635cffe222fb3.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_33b22fa05de40d7cfb9635cffe222fb3();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_33b22fa05de40d7cfb9635cffe222fb3();
    });
  }
});
