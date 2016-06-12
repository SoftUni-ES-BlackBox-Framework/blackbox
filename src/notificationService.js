class NotificationService {
	constructor() {

	}

	showPopup(type, text) {
		switch (type) {
		case 'success':
			this._showSuccessPopup(text);
			break;
		case 'info':
			this._showInfoPopup(text);
			break;
		case 'warning':
			this._showWarningPopup(text);
			break;
		case 'error':
			this._showErrorPopup(text);
			break;
		}
	}

	_showSuccessPopup(text) {
		noty({
			text: text,
			timeout: 2000,
			layout: 'top',
			type: 'success'
		});
	}

	_showInfoPopup(text) {
		noty({
			text: text,
			timeout: 2000,
			layout: 'top',
			type: 'information'
		});
	}

	_showWarningPopup(text) {
		noty({
			text: text,
			timeout: 2000,
			layout: 'top',
			type: 'warning'
		});
	}

	_showErrorPopup(text) {
		noty({
			text: text,
			timeout: 2000,
			layout: 'top',
			type: 'error'
		});
	}
}