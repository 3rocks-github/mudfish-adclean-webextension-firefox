
function mudfish_adclean_da9c307a0cd729f45eea2cfb9f8210f7() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`div[class*=" "] > div[class*=" "][class*="_"] ~ div[class$="fright"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_da9c307a0cd729f45eea2cfb9f8210f7();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_da9c307a0cd729f45eea2cfb9f8210f7();
  });
}
