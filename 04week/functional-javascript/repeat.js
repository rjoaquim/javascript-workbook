    function repeat(arr, val) {
	  if(!arr.length) return 0;
	  return (arr[0] === val) + repeat(arr.slice(1), val);
    }
    repeat(split("test"),8)
    // Do not remove the line below
    module.exports = repeat