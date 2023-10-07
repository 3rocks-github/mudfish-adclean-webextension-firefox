
function mudfish_adclean_bf267fde60cbcc6acd340301ec0f8fc1() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`table[width] table[width] tr:has(> td[colspan] td[width][height] > img[alt="스폰서광고"])`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_bf267fde60cbcc6acd340301ec0f8fc1();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_bf267fde60cbcc6acd340301ec0f8fc1();
  });
}
