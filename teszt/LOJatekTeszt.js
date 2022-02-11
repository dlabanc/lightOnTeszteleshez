QUnit.module("ellenorzes()", function (j) {
  j.before(() => {
    this.lojatek = new LOJatek(4);
  });
  QUnit.test("létezik-e az ellenőrzés metódus?", (assert) => {
    assert.ok(this.lojatek.ellenorzes, "létezik");
  });

  QUnit.test("Az ellenőrzés függvény-e?", (assert) => {
    assert.ok(
      typeof this.lojatek.ellenorzes === "function",
      "Az ellenőrzés egy függvény"
    );
  });

  QUnit.test("Az ellenőrzés metódus minden elem felkapcsolva", (assert) => {
    lampak.forEach(function (elem) {
      elem.allapot = false;
    });

    assert.equal(this.lojatek.ellenorzes(), 0);
  });

  QUnit.test("Az ellenőrzés metódus minden elem lekapcsolva ", (assert) => {
    lampak.forEach(function (elem) {
      elem.allapot = true;
    });

    assert.equal(this.lojatek.ellenorzes(), lampak.length);
  });

  QUnit.test("Az ellenőrzés metódus alapértelmezett elemszámmal ", (assert) => {
    const lojatek = new LOJatek(5);
    assert.equal(lojatek.ellenorzes(), 5);
  });

  QUnit.test("Az ellenőrzés metódus alapérték ", (assert) => {
    lampak.forEach(function (elem) {
      elem.allapot = false;
    });

    lampak[0].allapot = true;

    assert.equal(this.lojatek.ellenorzes(), 1);
  });
});

QUnit.module("szomszedokValtoztatasa()", function (j) {
  
  QUnit.test("Középső elem kattintása", (assert) => {
    let j = new LOJatek(0);

    j.szomszedokValtoztatasa(4);
    kattintasAllapotEll([0,2,4,6,8],[1,3,5,7],assert)
  });

  QUnit.test("jobb felső sarok kattintás", (assert) => {
    let j = new LOJatek(0);

    j.szomszedokValtoztatasa(2);
    kattintasAllapotEll([0,2,3,4,6,7,8],[1,5],assert)
  });

  QUnit.test("bal felső sarok kattintás", (assert) => {
    let j = new LOJatek(0);
    j.szomszedokValtoztatasa(0);
    kattintasAllapotEll([0,2,4,5,6,7,8],[1,3],assert)
  });

  QUnit.test("jobb alsó sarok kattintás", (assert) => {
    let j = new LOJatek(0);
    j.szomszedokValtoztatasa(8);
    kattintasAllapotEll([0,1,2,3,4,6,8],[5,7],assert)
  });

  QUnit.test("bal alsó sarok kattintás", (assert) => {
    let j = new LOJatek(0);
    j.szomszedokValtoztatasa(6);
    kattintasAllapotEll([0,1,2,4,5,6,8],[3,7],assert)
  });


  function kattintasAllapotEll(tombFalse,tombTrue,assert){
    tombFalse.forEach((element) => {
      assert.equal(lampak[element].allapot, false);
    });

    tombTrue.forEach((element) => {
        assert.equal(lampak[element].allapot, true);
      });
    }
});
