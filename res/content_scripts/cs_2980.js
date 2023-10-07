
function mudfish_adclean_c249a3100c0413c49b32d3eee910ac55() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`iframe[src*="//adreal.dt.co.kr/"]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_c249a3100c0413c49b32d3eee910ac55();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_c249a3100c0413c49b32d3eee910ac55();
  });
}
