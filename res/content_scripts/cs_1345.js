
function mudfish_adclean_442cec1f7bca3d8bf722650e4477aaa4() {
  try {
    Sizzle(`div[class^="Ad"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_442cec1f7bca3d8bf722650e4477aaa4 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_442cec1f7bca3d8bf722650e4477aaa4, function (items) {
  if (mudfish_adclean_g_conf_442cec1f7bca3d8bf722650e4477aaa4.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_442cec1f7bca3d8bf722650e4477aaa4();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_442cec1f7bca3d8bf722650e4477aaa4();
    });
  }
});
