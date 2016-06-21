class Requester {
    constructor(authorizationService) {
        this.authorizationService = authorizationService;
    }

    get(url, successCallback, errorCallback) {
        let requestHeaders = this._getHeaders(true);
        this._makeRequest('GET', url, null, requestHeaders, successCallback, errorCallback);
    }

    post(url, data, successCallback, errorCallback) {
        let requestHeaders = this._getHeaders(false);
        this._makeRequest('POST', url, data, requestHeaders, successCallback, errorCallback);
    }

    put(url, data, successCallback, errorCallback) {
        let requestHeaders = this._getHeaders(false);
        this._makeRequest('PUT', url, data, requestHeaders, successCallback, errorCallback);
    }

    delete(url, data, successCallback, errorCallback) {
        let requestHeaders = this._getHeaders(false);
        this._makeRequest('DELETE', url, data, requestHeaders, successCallback, errorCallback);
    }

    _makeRequest(method, url, data, headers, successCallBack, errorCallBack) {
        $.ajax({
            method: method,
            url: url,
            headers: headers,
            data: JSON.stringify(data) || null,
            success: successCallBack,
            error: errorCallBack
        });
    }

    _getHeaders(isGuest) {
        var headers = this.authorizationService.getAuthorizationHeaders(isGuest);
        return headers;
    }
}