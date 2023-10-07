
function mudfish_adclean_0937d3fe287e30284a4acd3aba735c13() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`center a[href*="//mbong.kr/banner"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_0937d3fe287e30284a4acd3aba735c13();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_0937d3fe287e30284a4acd3aba735c13();
  });
}
