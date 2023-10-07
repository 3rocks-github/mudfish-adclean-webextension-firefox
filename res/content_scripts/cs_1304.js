
function mudfish_adclean_2f66bfde2ed073afcd34c2fbf76f5144() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.td_sub_read_contents > div[style]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_2f66bfde2ed073afcd34c2fbf76f5144();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_2f66bfde2ed073afcd34c2fbf76f5144();
  });
}
