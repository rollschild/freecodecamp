function permAlone(str) {
    function parseToArray(str) {
        var arr = [];
        for (var i = 0; i < str.length; i++) {
            arr.push(str[i]);
        }
        return arr;
    }

    var permutations = [];

    function permutate(arr, n) {
        if (n === 1) {
            for (var j = 0; j < arr.length - 1; j++) {
                if (arr[j] === arr[j + 1]) {
                    return;
                }
            }
            var str = arr.join('');
            permutations.push(str);
            return;
        }
        for (var i = 0; i < n; i++) {
            permutate(arr, n - 1);
            if (n % 2 === 1) {
                var tmp = arr[0];
                arr[0] = arr[n - 1];
                arr[n - 1] = tmp;
            } else {
                var tmp = arr[i];
                arr[i] = arr[n - 1];
                arr[n - 1] = tmp;
            }
        }
    }
    var arr = parseToArray(str);
    permutate(arr, arr.length);

    return permutations.length;
}

console.log(permAlone('aab'));
