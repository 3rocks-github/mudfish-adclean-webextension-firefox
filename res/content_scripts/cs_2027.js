
function mudfish_adclean_a0ae16baa4e73c5e26797715a524185b() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`a[href*="//wrd.appstory.co.kr/rd.flad?"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_a0ae16baa4e73c5e26797715a524185b();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_a0ae16baa4e73c5e26797715a524185b();
  });
}
