(function () {
  /*
   * @Date: 2021-05-07 22:01:57
   */

  const _nums: number[] = [3, 4,5,2];
  const _target: number = 6;

  /**
   * 暴力枚举
   * @param nums
   * @param target
   * @returns
   */

  const twoSum = (nums: number[], target: number): number[] => {
    console.time("_sNums");
    let _get: Boolean = false;
    let _index: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      if (_get) break;
      const _num = nums[i];
      for (let j = 0; j < nums.length; j++) {
        const _num1 = nums[j];
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

  let _sNums = twoSum(_nums, _target);

  console.log("_sNums", _sNums);

  /**
   * 哈希表
   * @param nums
   * @param target
   * @returns
   */

  interface Obj {
    [key: string]: number;
  }

  const twoSum1 = (nums: number[], target: number): number[] => {
    console.time("_sNums1");
    let _get: Boolean = false;
    let _index: number[] = [];
    /** 建立哈希表 */
    let _index_info: Obj = {};
    for (let i = 0; i < nums.length ; i++) {
      _index_info[nums[i]] = i + 1;
    }
    console.log(_index_info)
    for (let i = 0; i < nums.length ; i++) {
      if (_get) break;
      const _num = target - nums[i];
      const __index = _index_info[_num] 
      if (__index && __index !== i + 1) {
        _index = [i, __index - 1];
        _get = true;
      }
    }

    console.timeEnd("_sNums1");
    return _index;
  };

  let _sNums1 = twoSum1(_nums, _target);

  console.log("_sNums1", _sNums1);
})();
