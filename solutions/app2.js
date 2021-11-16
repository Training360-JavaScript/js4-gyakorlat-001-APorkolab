const sorterPromise = (getArr = []) => {
	return new Promise((resolve, reject) => {
		const typeofArr = getArr.every(i => (typeof i === "string"));
		if (typeofArr) {
			try {
				resolve(getArr.sort());
			} catch (error) {
				reject('Error: Not all elements are string type!');
			}
		}
		reject('Error: Not all elements are string type!');
	});
};

export default sorterPromise;