QUnit.module("LOView", function () {
  QUnit.test("Létrejön-e az elem?", function (assert) {
    lampak.forEach(element => {
      element.allapot=false;
    });
    let jatekter = new LampakJatekter($("#qunit-fixture"));
    let elem = $("#qunit-fixture div");
    for (let index = 0; index < $(elem).length; index++) {
      assert.ok(elem.eq(index), "Létrejött a " + index + ". indexű div elem");
      assert.equal(lampak[index].allapot, false, "Az elem értéke False");
      assert.equal(
        elem.eq(index).attr("dataid"),
        index,
        "Az elem id-ja " + index
      );

      if (lampak[index].allapot === false) {
        assert.equal(
          elem.attr("style"),
          "background-color: orange;",
          "A színe narancssárga"
        );
      } else {
        assert.equal(
          elem.attr("style"),
          "background-color: green;",
          "A színe zöld"
        );
      }
    }
  });

  QUnit.test("Kattintásra változik a színe?", function (assert) {
    let jatekter = new LampakJatekter($("#qunit-fixture"));
    let elem = $("#qunit-fixture div");
    for (let index = 0; index < elem.length; index++) {
      let eredetiSzin = elem.eq(index).attr("style");
      elem.eq(index).click();
      assert.notEqual(
        elem.eq(index).attr("style"),
        eredetiSzin,
        "A div színe kattintásra megváltozott"
      );
    }
  });

  QUnit.test("Változik-e a p tag a felkapcsoltak szerint?", function (assert) {
    lampak.splice(0, lampak.length);
    let jatekter = new LampakJatekter($("#qunit-fixture"));
    let elem = $("#qunit-fixture div");

for (let index = 0; index < elem.length; index++) {
  let felkapcsoltak = 0;
    elem.eq(index).click();

    lampak.forEach(lampa => {
      if (lampa.allapot == true) {
        felkapcsoltak++;
      }
    });

    assert.equal($(".infoSzoveg").text(), felkapcsoltak, "A(z) " + index + ".elem kattintás után: A felkapcsoltak értéke: " + felkapcsoltak + ", a kiírt p tag: " + $(".infoSzoveg").text());
}
    

  });

  QUnit.test("Megváltozik-e kattintásra a szomszéd elemek")
});
