
function mudfish_adclean_1f0932b68cf71b43ab7c88ba2cfb9e48() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.nplr div[class=""] li:has(li:contains(AD))`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_1f0932b68cf71b43ab7c88ba2cfb9e48();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_1f0932b68cf71b43ab7c88ba2cfb9e48();
  });
}
