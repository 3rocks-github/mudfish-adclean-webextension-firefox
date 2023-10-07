
function mudfish_adclean_07bb974c823d8a04ff4457622d461d03() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#pnlContainer .con_b > .reply_b`).forEach(element => {
        element.style.margin = "0px auto !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_07bb974c823d8a04ff4457622d461d03();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_07bb974c823d8a04ff4457622d461d03();
  });
}
