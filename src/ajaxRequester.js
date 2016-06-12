class Requester {
	constructor(baseServiceUrl, authorizationService) {
		this.baseServiceUrl = baseServiceUrl;
		this.authorizationService = authorizationService;
	}

	get(url, successCallback, errorCallback) {
		var requestHeaders = this.getHeaders(true);
		this._makeRequest('GET', url, null, requestHeaders, successCallback, errorCallback);
	}

	post(url, data, successCallback, errorCallback) {
		var requestHeaders = this.getHeaders(false);
		this._makeRequest('POST', url, data, requestHeaders, successCallback, errorCallback);
	}

	put(url, data, successCallback, errorCallback) {
		var requestHeaders = this.getHeaders(false);
		this._makeRequest('PUT', url, data, requestHeaders, successCallback, errorCallback);
	}

	delete(url, data, successCallback, errorCallback) {
		var requestHeaders = this.getHeaders(false);
		this._makeRequest('DELETE', url, data, requestHeaders, successCallback, errorCallback);
	}

	_makeRequest(method, url, data, headers, successCallBack, errorCallBack) {
		$.ajax({
			method: method,
			url: url,
			headers: headers,
			data: data == null ? null : JSON.stringify(data),
			success: successCallBack,
			error: errorCallBack
		});
	}

	_getHeaders(isGuest) {
		var headers = this.authorizationService.getAuthorizationHeaders(isGuest);
		return headers;
	}
}