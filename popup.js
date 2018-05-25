document.addEventListener('DOMContentLoaded', function () {
    main();

    document.getElementById('google').addEventListener('change', function() {
        changeProvider('google');
    }, false);

    document.getElementById('duck-duck-go').addEventListener('change', function() {
        changeProvider('duck-duck-go');
    }, false);

    document.getElementById('bing').addEventListener('change', function() {
        changeProvider('bing');
    }, false);

    document.getElementById('yahoo').addEventListener('change', function() {
        changeProvider('yahoo');
    }, false);
});

function changeProvider(provider) {
    chrome.storage.sync.set({ 'provider': provider });
}

function main() {
    chrome.storage.sync.get({'provider' : 'google'}, function(data) {
        document.getElementById(data.provider).checked = true;
    });
}