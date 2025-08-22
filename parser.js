importScripts("https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js");
self.onmessage = function(event) {
    const csvUrl = event.data.url;
    Papa.parse(csvUrl, {
        download: true,
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: function(results) {
            self.postMessage({
                success: true,
                data: results.data
            });
        },
        error: function(error) {
            self.postMessage({
                success: false,
                error: error.message
            });
        }
    });
};
