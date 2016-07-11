/// <reference path="chai-things.d.ts" />

import chai = require('chai');
import chaiThings = require('chai-things');
let expect = chai.expect;

chai.use(chaiThings);

function test_somethingSyntax() {
    [].should.not.include.something();
    expect([]).not.to.include.something();

    [].should.not.include.something.that.equals(1);
    expect([]).not.to.include.something.that.equals(1);

    var array = [{ a: 1 }, { b: 2 }];
    array.should.include.something();
    expect(array).to.include.something();

    array.should.include.something.that.deep.equals({ b: 2 });
    expect(Array).to.include.something.that.deep.equals({ b: 2 });

    array.should.include.something.that.not.deep.equals({ b: 2 });
    expect(Array).to.include.something.that.not.deep.equals({ b: 2 });

    array.should.not.include.something.that.deep.equals({ c: 3 });
    expect(Array).to.not.include.something.that.deep.equals({ c: 3 });

    array.should.include.something.that.not.deep.equals({ c: 3 });
    expect(array).to.include.something.that.not.deep.equals({ c: 3 });

    array.should.include.something.with.property('b', 2);
    expect(array).to.include.something.with.property('b', 2);

    array.should.not.include.something.with.property('b', 3);
    expect(array).to.not.include.something.with.property('b', 3);

    var array2 = [{ a: 'b' }, { a: 'b' }];
    array2.should.include.something.that.have.property("a");
    expect(array2).to.include.something.that.have.property("a");

    array2.should.include.something.that.have.property("a").not.equal("d");
    expect(array2).to.include.something.that.have.property("a").not.equal("d");
}

function test_somethingVariantsSyntax() {
    [].should.not.include.any();
    expect([]).to.not.include.any();

    [].should.not.include.any.that.deep.equal({ b: 2 });
    expect([]).to.not.include.any.that.deep.equal({ b: 2 });

    var array = [{ a: 1 }, { b: 2 }];
    array.should.include.a.thing();
    expect(array).to.include.a.thing();

    array.should.include.a.thing.that.deep.equals({ b: 2 });
    expect(array).to.include.a.thing.that.deep.equals({ b: 2 });

    array.should.include.an.item();
    expect(array).to.include.an.item();

    array.should.include.an.item.that.deep.equals({ b: 2 });
    expect(Array).to.include.an.item.that.deep.equals({ b: 2 });

    array.should.include.one.that.deep.equals({ b: 2 });
    expect(array).to.include.one.that.deep.equals({ b: 2 });

    array.should.include.some();
    expect(array).to.include.some();

    array.should.include.some.that.deep.equal({ b: 2 });
    expect(array).to.include.some.that.deep.equal({ b: 2 });
}

function test_allSyntax() {
    [].should.all.equal(1);
    expect([]).to.all.equal(1);

    [].should.all.not.equal(1);
    expect([]).to.all.not.equal(1);

    var array = [1, 1];
    array.should.all.equal(1);
    expect(array).to.all.equal(1);

    array.should.all.not.equal(2);
    expect(array).to.all.not.equal(2);

    array.should.not.all.equal(2);
    expect(array).not.to.all.equal(2);

    array.should.not.all.not.equal(1);
    expect(array).to.not.all.not.equal(1);;

    var array2 = [1, 2];
    array2.should.not.all.equal(1);
    expect(array2).to.not.all.equal(1);

    array2.should.not.all.equal(2);
    expect(array2).to.not.all.equal(2);

    array2.should.not.all.not.equal(1);
    expect(array2).to.not.all.not.equal(1);

    array2.should.not.all.not.equal(2);
    expect(array2).to.not.all.not.equal(2);

    var array3 = [{ a: 'b' }, { a: 'c' }];
    array3.should.all.have.property("a");
    expect(array3).to.all.have.property("a");

    array3.should.all.have.property("a").not.equal("d");
    expect(array3).to.all.have.property("a").not.equal("d");
}