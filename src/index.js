module.exports = function check(str, bracketsConfig) {
  	var narray = bracketsConfig + '';
  	narray = narray.replace(/[,]/g, '');

  	for (let i = 0; i < str.length; i++) {
  		for (let j = 0; j < narray.length; j+=2) {
  			if (str[i] + str[i + 1] === narray[j] + narray[j + 1]) {
  				str = str.replace(str[i] + str[i + 1], '');
  				i = 0;
  			}
  		}
  	}
  	for (let j = 0; j < narray.length; j+=2) {
  		if (str === narray[j] + narray[j + 1]) {
  			str = str.replace(str, '');
  		}
  	}

  	return str === '';
 }