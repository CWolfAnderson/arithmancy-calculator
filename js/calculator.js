$(function() {

  var letters = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 1,
    k: 2,
    l: 3,
    m: 4,
    n: 5,
    o: 6,
    p: 7,
    q: 8,
    r: 9,
    s: 1,
    t: 2,
    u: 3,
    v: 4,
    w: 5,
    x: 6,
    y: 7,
    z: 8
  };

  $("#submit").click(calculate);
  
 $(document).keypress(function(e) {
    if(e.which == 13) {
        calculate();
    }
});

  function calculate() {
    var nameArr = $("#name").val().toLowerCase().split(" ");
    var name = nameArr.join("");

    // calculate character number
    var sum = 0;
    for (var i = 0; i < name.length; i++) {
      var letter = name[i];
      sum += letters[letter];
    }

    // to reduce to a single digit
    while (sum > 9) {
      var sumArr = sum.toString().split("");
      sum = 0;
      for (i = 0; i < sumArr.length; i++) {
        sum += parseInt(sumArr[i]);
      }
    }

    console.log("Character Number: " + sum);

    // calculate heart number
    var vowelNumber = 0;

    for (i = 0; i < name.length; i++) {
      if (name[i] === 'a' || name[i] === 'e' || name[i] === 'i' || name[i] === 'o' || name[i] === 'u') {
        vowelNumber += letters[name[i]];
      }
    }

    // to reduce to a single digit
    while (vowelNumber > 9) {
      var vowelArr = vowelNumber.toString().split("");
      vowelNumber = 0;
      for (i = 0; i < vowelArr.length; i++) {
        vowelNumber += parseInt(vowelArr[i]);
      }
    }

    console.log("Heart Number: " + vowelNumber);

    // calculate social number
    var consonantNumber = 0;

    for (i = 0; i < name.length; i++) {
      if (name[i] != 'a' && name[i] != 'e' && name[i] != 'i' && name[i] != 'o' && name[i] != 'u') {
        consonantNumber += letters[name[i]];
      }
    }

    // to reduce to a single digit
    while (consonantNumber > 9) {
      var consonantArr = consonantNumber.toString().split("");
      consonantNumber = 0;
      for (i = 0; i < consonantArr.length; i++) {
        consonantNumber += parseInt(consonantArr[i]);
      }
    }

    console.log("Social Number: " + consonantNumber);

    $("#output").html("<p>Character Number: " + sum + "</p><p>Heart Number: " + vowelNumber + "</p><p>Social Number: " + consonantNumber);

  }

});