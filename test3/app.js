var arr = [
    {
        'hole': 1,
        'index': 0
    },
    {
        'hole': 0,
        'index': 1
    },
    {
        'hole': 0,
        'index': 2
    },
    {
        'hole': 0,
        'index': 3
    },
    {
        'hole': 1,
        'index': 4
    },
    {
        'hole': 0,
        'index': 5
    },
    {
        'hole': 1,
        'index': 6
    },
    {
        'hole': 0,
        'index': 7
    },
    {
        'hole': 2,
        'index': 8
    },
    {
        'hole': 1,
        'index': 9
    }
];
var sortAndMap = function (arr) {
    if (arr === void 0) { arr = []; }
    var copy = arr.slice();
    var sorter = function (b, a) {
        return b['index'] - a['index'];
    };
    copy.sort(sorter);
    var res = copy.map(function (_a) {
        var hole = _a.hole, index = _a.index;
        if (hole === 0) {
            return 0;
        }
        else if (index === 8) {
            index = 9;
        }
        else if (index === 9) {
            index = 8;
        }
        return console.log(index);
    });
    return res;
};
sortAndMap(arr);
