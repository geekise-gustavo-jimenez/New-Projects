(function functionName() {
  getReq("env.json", init);
 // getReq("http://api.github.com/users/geekise-gustavo-jimenez", getUser);
}());

function getReq(url, callback) {
  var req = new XMLHttpRequest();
  req.open('GET', url);
  req.onload = function() {
    if (req.readyState === 4 && req.status === 200) {
      callback( JSON.parse(req.responseText) );

    }else {
      console.log('error', req.statusText);
    }
  };
  req.send(null);
}

function init(vars) {
  const ROOT_URL = 'http://api.github.com/';
  const CLIENT_ID = vars.client_id;
  const CLIENT_SECRET = vars.client_secret;

  var main = document.querySelector('main');
  var searchInput = document.querySelector('form input[type="search"]');
  var searchSubmit = document.querySelector('form input[type="submit"]');

  searchSubmit.addEventListener('click', function(evt) {
    main.innerHTML = '';
    evt.preventDefault();
    getReq( ROOT_URL + 'search/users?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&q=' + searchInput.value, getUser);
  });
}

function getUser(user) {
  var main = document.querySelector('main');
  var ul = document.createElement('ul'), li, img;
  main.appendChild(ul);
  console.log(user.items);
  user.items.forEach(function(e, i) {
    li = document.createElement('li'),
    h1 = document.createElement('h1'),
    img = document.createElement('img');

    h1.textContent = e.login;

    img.src = e.avatar_url;
    li.appendChild(h1);
    li.appendChild(img);
    ul.appendChild(li);
  });

//   var img = document.createElement('img');
//   var h1 = document.createElement('h1');
//
//   h1.textContent = user.login;
//   img.src = user.avatar_url;
//   main.append(h1, img);
}
