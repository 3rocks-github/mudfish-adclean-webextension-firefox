
function mudfish_adclean_99b55a93154bb6ceeee41890fdc2d334() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`#content div[class^="basicList_list_"] div:has(div[class^="adProduct_item_"]):has(~ div)`).forEach(element => {
        element.style.height = "1px !important";
element.style.visibility = "hidden !important";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_99b55a93154bb6ceeee41890fdc2d334();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_99b55a93154bb6ceeee41890fdc2d334();
  });
}
