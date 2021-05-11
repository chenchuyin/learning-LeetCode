"use strict";
(function () {
    /*
     * @Date: 2021-05-07 22:01:57
     */
    var _nums = [3, 4, 5, 2];
    var _target = 6;
    /**
     * 暴力枚举
     * @param nums
     * @param target
     * @returns
     */
    var twoSum = function (nums, target) {
        console.time("_sNums");
        var _get = false;
        var _index = [];
        for (var i = 0; i < nums.length; i++) {
            if (_get)
                break;
            var _num = nums[i];
            for (var j = 0; j < nums.length; j++) {
                var _num1 = nums[j];
                if (i !== j && target === _num + _num1) {
                    _index = [i, j];
                    _get = true;
                    break;
                }
            }
        }
        console.timeEnd("_sNums");
        return _index;
    };
    var _sNums = twoSum(_nums, _target);
    console.log("_sNums", _sNums);
    var twoSum1 = function (nums, target) {
        console.time("_sNums1");
        var _get = false;
        var _index = [];
        /** 建立哈希表 */
        var _index_info = {};
        for (var i = 0; i < nums.length; i++) {
            _index_info[nums[i]] = i + 1;
        }
        console.log(_index_info);
        for (var i = 0; i < nums.length; i++) {
            if (_get)
                break;
            var _num = target - nums[i];
            var __index = _index_info[_num];
            if (__index && __index !== i + 1) {
                _index = [i, __index - 1];
                _get = true;
            }
        }
        console.timeEnd("_sNums1");
        return _index;
    };
    var _sNums1 = twoSum1(_nums, _target);
    console.log("_sNums1", _sNums1);
})();
