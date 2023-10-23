
function mudfish_adclean_b9a53c817fd587dcf4506d3acb5aa678() {
  try {
    Sizzle(`.nav_container .post_view > div[class^="view_top_"]`).forEach(element => {
      element.style.display = "none";
    });
  } catch (error) {
    console.log('[ERROR] mudfish_adclean rule error: ' + error);
  }
}

var mudfish_adclean_g_conf_b9a53c817fd587dcf4506d3acb5aa678 = {
  mudfish_adclean_filter_on: true
};
chrome.storage.local.get(mudfish_adclean_g_conf_b9a53c817fd587dcf4506d3acb5aa678, function (items) {
  if (mudfish_adclean_g_conf_b9a53c817fd587dcf4506d3acb5aa678.mudfish_adclean_filter_on) {
    const observer = new MutationObserver(() => {
      mudfish_adclean_b9a53c817fd587dcf4506d3acb5aa678();
    });
    observer.observe(document, { childList: true, subtree: true });
    window.addEventListener("load", (event) => {
      mudfish_adclean_b9a53c817fd587dcf4506d3acb5aa678();
    });
  }
});
