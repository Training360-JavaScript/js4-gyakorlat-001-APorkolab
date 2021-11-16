const converterPromise = (getArr = []) => {
	return new Promise((resolve, reject) => {
		try {
			const setArr = getArr.map(item => item.toUpperCase());
			resolve(setArr);
		} catch {
			reject('Error: Not all elements are string type!');
		}
	});
};

export default converterPromise;