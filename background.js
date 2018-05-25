chrome.contextMenus.removeAll();
chrome.contextMenus.create({
      title: "Incognito search '%s'",
      contexts: ["selection"],
      onclick: function(info, tab) {        
        chrome.storage.sync.get({'provider' : 'google'}, function(data) {
            search(data.provider, info.selectionText)
        });
      }
});

function search(provider, value) {
    let urls = {
        'google': 'https://www.google.com/search?q=',
        'duck-duck-go': 'https://duckduckgo.com/?q=',
        'bing': 'https://www.bing.com/search?q=',
        'yahoo': 'https://search.yahoo.com/search?p='
    };
    let url = urls[provider] + escapeHtml(value);
    chrome.windows.create({
        "url": url, 
        "incognito": true
    });
}

function escapeHtml(text) {
    let map = {
        '&': '"&amp"',
        '<': '"&lt"',
        '>': '"&gt"',
        '"': '"&quot"',
        "'": '"&#039"'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
}