
function mudfish_adclean_75bb79c608058ad5a0a69ed38e105fa1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`[style="margin-bottom: 20px;"].row.row-15`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_75bb79c608058ad5a0a69ed38e105fa1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_75bb79c608058ad5a0a69ed38e105fa1();
  });
}
