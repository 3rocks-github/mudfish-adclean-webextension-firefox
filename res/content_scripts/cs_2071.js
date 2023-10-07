
function mudfish_adclean_8e1ba4171c97194f48f996897e6f70d0() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`ul.board_list > li.subject.ad_subject`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_8e1ba4171c97194f48f996897e6f70d0();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_8e1ba4171c97194f48f996897e6f70d0();
  });
}
