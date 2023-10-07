
function mudfish_adclean_635f65f30a935c6285adaab86f934564() {
  var g_conf = {
    mudfish_adclean_filter_on: true
  };
  chrome.storage.local.get(g_conf, function (items) {
    if (!g_conf.mudfish_adclean_filter_on) {
      return;
    }
    try {
      Sizzle(`.pdtl_cm_detail .md_software`).forEach(element => {
        element.style.display = "none";
      });
    } catch (error) {
      console.log('[ERROR] mudfish_adclean rule error: ' + error);
    }
  });
}

var mudfish_adclean_is_firefox = typeof InstallTrigger !== 'undefined';
if (mudfish_adclean_is_firefox) {
  mudfish_adclean_635f65f30a935c6285adaab86f934564();
} else {
  window.addEventListener("load", (event) => {
    mudfish_adclean_635f65f30a935c6285adaab86f934564();
  });
}
