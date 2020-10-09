module.exports = function check(str, bracketsConfig) {
    let arr = str.split('');
    let arr2 = [];

        for (let i = 0; i < bracketsConfig.length; i++) {
            let elementLeft = bracketsConfig[i][0];
            let elementRight = bracketsConfig[i][1];
            
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] === elementLeft && arr[j + 1] === elementRight) {
                    arr.splice(j, 2);
                }
            }
            if (arr2.length !== arr.length) {
                arr2 = arr.slice();
                i = -1;
            }
            
        }
    
    if(arr2.length === arr.length) {
        return arr.length === 0;
    }
}
