const FAV_KEY = 'btstripes_saved';

function getSaved() {
  try {
    var s = localStorage.getItem(FAV_KEY);
    return s ? JSON.parse(s) : [];
  } catch (_) {
    return [];
  }
}

function toggleSaved(id) {
  var ids = getSaved();
  var i = ids.indexOf(id);
  if (i >= 0) ids.splice(i, 1);
  else ids.push(id);
  try { localStorage.setItem(FAV_KEY, JSON.stringify(ids)); } catch (_) {}
  return ids.indexOf(id) >= 0;
}

function isSaved(id) {
  return getSaved().indexOf(id) >= 0;
}
