
function mudfish_adclean_db632d74083f0fcfbd8d03793ef9508f() {
  try {
    Sizzle(`#containerCol .at-content .contents > a[href][target] > img[src^="/bann/"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_db632d74083f0fcfbd8d03793ef9508f = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_db632d74083f0fcfbd8d03793ef9508f, function (items) {
  if (mudfish_adclean_g_conf_db632d74083f0fcfbd8d03793ef9508f.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_db632d74083f0fcfbd8d03793ef9508f();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_db632d74083f0fcfbd8d03793ef9508f();
    });
  }
});
