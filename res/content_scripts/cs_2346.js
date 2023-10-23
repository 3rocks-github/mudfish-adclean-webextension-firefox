
function mudfish_adclean_07bb974c823d8a04ff4457622d461d03() {
  try {
    Sizzle(`#pnlContainer .con_b > .reply_b`).forEach(element => {
      element.style.margin = "0px auto !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_07bb974c823d8a04ff4457622d461d03 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_07bb974c823d8a04ff4457622d461d03, function (items) {
  if (mudfish_adclean_g_conf_07bb974c823d8a04ff4457622d461d03.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_07bb974c823d8a04ff4457622d461d03();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_07bb974c823d8a04ff4457622d461d03();
    });
  }
});
