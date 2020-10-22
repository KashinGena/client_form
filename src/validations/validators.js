export const alpha = (val) => /^[а-яё]*$/i.test(val);
// const number = (val) => /7\(\d{3}\)?\d{3}[-]\d{4}$/g.test(val);
export const phone = (val) => /7\d{10}$/g.test(val);
export const validDate = (val) => new Date(val)<new Date();
export const number = (val) => /^$|^\d{6}$/g.test(val);
export const seriesPassport = (val) => /^$|^\d{4}$/g.test(val)
export const house = (val) => /^$|^\d{1,}[\/]{0,1}[а-я1-9]{0,1}$/.test(val)
export const seriesDrivLicence = (val) => /^$|^\d{2}[A-Z0-9А-Я]{2}$/.test(val)
export const seriesBirthSertificate = (val) => /^$|^(M{0,3})(D?C{0,3}|C[DM])(L?X{0,3}|X[LC])(V?I{0,3}|I[VX])(?<!^)-[А-Я]{2}$/.test(val)