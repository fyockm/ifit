function tripleThreat(a) {

  var found = false;
  for (var i = 0; i < a.length - 1; i++) {
    var e = a[i];
    found = found || (a.indexOf(e + 1) > 0 && a.indexOf(e + 2) > 0)
  }
  return found;
}
