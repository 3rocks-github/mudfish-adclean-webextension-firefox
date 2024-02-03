
function mudfish_adclean_4e4d38900d9bf6bb0644129d588dace1() {
  try {
    Sizzle(`.menu-ul > .menu-li:has(> a:contains(보증토토))`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_4e4d38900d9bf6bb0644129d588dace1 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_4e4d38900d9bf6bb0644129d588dace1, function (items) {
  if (mudfish_adclean_g_conf_4e4d38900d9bf6bb0644129d588dace1.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_4e4d38900d9bf6bb0644129d588dace1();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_4e4d38900d9bf6bb0644129d588dace1();
    });
  }
});
