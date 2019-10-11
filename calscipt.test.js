QUnit.module('MAIN MODULE', {})  // group all these tests together

QUnit.test('CalMul', assert => {
  assert.equal(totalst(4,2,2), "16", "Total students count");
  assert.equal(totalst(4,4,8), "128", "Total students count");
  assert.equal(totalst(2,10,2), "40", "Total students count");
  assert.equal(totalst(5,20,2), "20", "Total students count");
  assert.equal(totalst(6,15,3), "270", "Total students count");
})


