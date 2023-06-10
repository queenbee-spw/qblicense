    //<![CDATA[
(function() {
  var directURL = 'https://www.queenbee.biz.id';

  function getLiSensi() {
    return ['www.queenbee.biz.id'];
  }

  var liSensi = getLiSensi();

  if (typeof directURL === 'undefined' || typeof liSensi === 'undefined') {
    window.location.href = directURL;
  } else {
    var userDomain = window.location.hostname;
    var isValidLicense = false;

    for (var i = 0; i < liSensi.length; i++) {
      if (userDomain === liSensi[i]) {
        isValidLicense = true;
        break;
      }
    }

    if (!isValidLicense) {
      window.location.href = directURL;
    }
  }
})();

//]]>