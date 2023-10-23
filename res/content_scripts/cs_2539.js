
function mudfish_adclean_99b55a93154bb6ceeee41890fdc2d334() {
  try {
    Sizzle(`#content div[class^="basicList_list_"] div:has(div[class^="adProduct_item_"]):has(~ div)`).forEach(element => {
      element.style.height = "1px !important";
element.style.visibility = "hidden !important";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_99b55a93154bb6ceeee41890fdc2d334 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_99b55a93154bb6ceeee41890fdc2d334, function (items) {
  if (mudfish_adclean_g_conf_99b55a93154bb6ceeee41890fdc2d334.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_99b55a93154bb6ceeee41890fdc2d334();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_99b55a93154bb6ceeee41890fdc2d334();
    });
  }
});
