function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    arr2.forEach(function(item, index, array) {
        var existed = false;
        var inc = item[0];
        var pos = -1;
        var itm = item[1];
        for (var i = 0; i < arr1.length; i++) {
            if (itm === arr1[i][1]) {
                existed = true;
                // inc = arr1[i][0];
                pos = i;
                break;
            }
        }
        if (existed) {
            arr1[pos][0] += inc;
            // return arr1;
        } else {
            arr1.push(item);
        }

    });
    
    arr1.sort(function(item1, item2) {
        var name1 = item1[1].toUpperCase();
        var name2 = item2[1].toUpperCase();
        if (name1 < name2) {
            return -1;
        }
        if (name1 > name2) {
            return 1;
        }
        return 0;
    });
    
    console.log(arr1);
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
