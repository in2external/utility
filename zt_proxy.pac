function FindProxyForURL(url, host) {
    // use proxy for specific domains
    if (shExpMatch(host, "*.triglav.pri"))
        return "PROXY 172.16.201.89:1234";
    // by default use no proxy
    return "DIRECT";
}