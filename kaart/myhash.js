L.MyHash = function(map, options) {
  L.Hash.call(this, map, options);
};

L.MyHash.prototype = L.Util.create(L.Hash.prototype);
L.MyHash.prototype.constructor = L.MyHash;

L.Util.extend(L.MyHash.prototype, {
  parseHash: function(hash) {
    console.log('parseHash: ' + hash);
    var parsed = L.Hash.prototype.parseHash.call(this, hash);
    console.log('parseHash: ' + JSON.stringify(parsed));
    return parsed;
  },

  formatHash: function(map) {
    var formatted = L.Hash.prototype.formatHash.call(this, map);
    console.log('formatHash: ' + formatted);
    return formatted;
  },

  update: function() {
    L.Hash.prototype.update.call(this);
    console.log('update');
  }
});

L.myHash = function(map, options) {
  return new L.MyHash(map, options);
};
