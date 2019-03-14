const client_id = 'x3hvw65v4uhyulzhd72aj1a72ltm1m';

const helix = axios.create({
    baseURL: 'https://api.twitch.tv/helix/',
    headers: { 'Client-ID': client_id }
});

const kraken = axios.create({
    baseURL: 'https://api.twitch.tv/kraken/',
    headers: { 'Client-ID': client_id }
});




helix.get('path/to/a/helix/endpoint')
    .then(function(response) {
        console.log(response);
    });

kraken.get('path/to/a/kraken/endpoint')
    .then(function(response) {
        console.log(response);
});