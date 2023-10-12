
function mudfish_adclean_878621918f959c088c3dbe84eb6c3bbc() {
  try {
    Sizzle(`table[align] table[align] td[valign] table[cellspacing] tr > td[colspan][height][bgcolor]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_878621918f959c088c3dbe84eb6c3bbc = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_878621918f959c088c3dbe84eb6c3bbc, function (items) {
  if (mudfish_adclean_g_conf_878621918f959c088c3dbe84eb6c3bbc.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_878621918f959c088c3dbe84eb6c3bbc();
    });
    observer.observe(document, { childList: true, subtree: true });
  }
});
