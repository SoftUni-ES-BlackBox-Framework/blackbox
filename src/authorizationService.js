let _guestCredentials;
let _appCredentials;

class AuthorizationService {
	constructor(baseServiceUrl, appId, appSecret, guestUserCredentials) {
		this.baseServiceUrl = baseServiceUrl;
		this.appId = appId;
		this.appSecret = appSecret;
		_guestCredentials = guestUserCredentials;
		_appCredentials = btoa(appId + ":" + appSecret);
	}
	
	initAuthorizationType(authType) {
		this.authType = authType;
	}

	getCurrentUser() {
		return sessionStorage['currentUser'];
	}

	isLoggedIn() {
		return this.getCurrentUser !== undefined;
	}

	getAuthorizationHeaders(isGuest) {
		let headers = {};
		if (isLoggedIn) {
			headers = {
				'Authorization': this.authType + ' ' + this.getCurrentUser()._authToken
			};
		} else if (!isLoggedIn && isGuest) {
			headers = {
				'Authorization': this.authType + ' ' + _guestCredentials
			};
		} else if (!isLoggedIn && isGuest) {
			headers = {
				'Authorization': 'Basic' + ' ' + _appCredentials
			};
		}

		return headers;
	}
}