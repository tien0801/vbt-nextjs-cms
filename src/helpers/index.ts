export const formatCurrency = (price: number) => {
	let result: string | number = price;

	if (!isNaN(result))
		result = price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });

	return `${result}`;
};

export const copyText = (textToCopy: string) => {
	if (navigator.clipboard && window.isSecureContext) {
		return navigator.clipboard.writeText(textToCopy);
	} else {
		const textArea = document.createElement('textarea');
		textArea.value = textToCopy;
		textArea.style.position = 'fixed';
		textArea.style.left = '-999999px';
		textArea.style.top = '-999999px';
		document.body.appendChild(textArea);
		textArea.focus();
		textArea.select();
		return new Promise((res, rej) => {
			document.execCommand('copy') ? res('') : rej();
			textArea.remove();
		});
	}
};

export const getErrorMessage = (customText: string, error: any) => {
	const errors = (error as any)?.response?.data?.errors as any[];
	let errorsText = '';
	if (errors?.length > 0) {
		errors.forEach((error: any) => {
			errorsText += error.message + '\n';
		});
	}

	return `${customText} - Lỗi: ${errorsText}`;
};
