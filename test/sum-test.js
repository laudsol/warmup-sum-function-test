const sum = require('../sum.js');
const {expect,assert} = require('chai');

// Reference http://chaijs.com/ for questions

describe ('Sum', function() {

    it ('Should be a function', function() {
      expect(sum).to.be.a('function','sum is not a function');
      assert.isFunction(sum, 'sum is not a function');
    });

    it('Should return 0 if no arguments are passed in.', function() {
      expect(sum()).to.equal(0);
      assert.equal(sum(),0);
    });

    it('Should add positive numbers',function(){
      assert.equal(sum(1,2),3);
      assert.equal(sum(1,2,13),16);
    });

    it('Should add positive and negative numbers',function(){
      assert.equal(sum(1,-2),1);
      assert.equal(sum(1,2,-13),-10);
    });

    it('Should add numbers with decimals',function(){
      assert.equal(sum(1,3.5),4.5);
      assert.equal(sum(4,0.7),4.7);
    });

    it('Should return undefined if arguement is not a number', function(){
      assert.equal(sum(1,'a'),undefined);
      assert.equal(sum('2',2),undefined);
      assert.equal(sum([1],2),undefined);
      assert.equal(sum(5,true),undefined);
      assert.equal(sum(5,''),undefined);
    });

    it('Should return null is no arguement has been passed in',function(){
      assert.equal(sum(2),null);
      assert.equal(sum(3,null),null);
    });
});
