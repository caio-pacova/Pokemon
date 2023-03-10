function makeStruct(names) {
  var names = names.split(' ');
  var count = names.length;
  function constructor() {
    for (var i = 0; i < count; i++) {
      this[names[i]] = arguments[i];
    }
  }
  return constructor;
}

var Item = makeStruct("id name level personality type weakness atk def hp stage");
var row = new Item(1, 'john', 'au');
alert(row.speaker); 
