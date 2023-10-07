
function mudfish_adclean_932fe9bf55fbb42448343bda0c9eb1d7() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.container > section#id_section_deal_list ~ section[id][class]`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_932fe9bf55fbb42448343bda0c9eb1d7();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_932fe9bf55fbb42448343bda0c9eb1d7();
  });
}
