// Prints data size of the commits and issues from local storage
export const printData: () => void = () => {
    if (localStorage.getItem('commits') || localStorage.getItem('issues')) {
        // the code under shows size of local storage.
        // https://stackoverflow.com/questions/4391575/how-to-find-the-size-of-localstorage
        let _lsTotal = 0, _xLen, _x;
        for (_x in localStorage) {
            if (!localStorage.hasOwnProperty(_x)) {
                continue;
            }
            _xLen = ((localStorage[_x].length + _x.length) * 2);
            _lsTotal += _xLen;
            console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB")
        }
        console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
    } else {
        alert('Data not loaded.')
    }
  }