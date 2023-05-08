// Create the button and add it to the left sidebar
var tokenListButton = document.createElement('button');
tokenListButton.innerHTML = 'Token List';
tokenListButton.className = 'btn btn-secondary';
document.getElementsByClassName('sidebar__section__3y8wo')[0].appendChild(tokenListButton);

// Create the token list container and add it to the left sidebar
var tokenListContainer = document.createElement('div');
tokenListContainer.innerHTML = '<h3>Token List</h3><ul></ul>';
tokenListContainer.style.display = 'none';
document.getElementsByClassName('sidebar__section__3y8wo')[0].appendChild(tokenListContainer);

// Get the token list and add event listeners
var tokenList = tokenListContainer.getElementsByTagName('ul')[0];
tokenListButton.addEventListener('click', toggleTokenList);
tokenList.addEventListener('click', handleTokenListClick);

// Toggle the visibility of the token list container
function toggleTokenList() {
  if (tokenListContainer.style.display === 'none') {
    tokenListContainer.style.display = 'block';
  } else {
    tokenListContainer.style.display = 'none';
  }
}

// Handle clicks on the token list
function handleTokenListClick(event) {
  if (event.target.tagName === 'LI') {
    var token = event.target.textContent;
    addToken(token);
  } else if (event.target.className === 'remove-token') {
    var token = event.target.parentNode.textContent;
    removeToken(token);
  }
}

// Add a token to the token list
function addToken(token) {
  var li = document.createElement('li');
  li.textContent = token;
  var removeButton = document.createElement('button');
  removeButton.textContent = 'x';
  removeButton.className = 'remove-token';
  li.appendChild(removeButton);
  tokenList.appendChild(li);
}

// Remove a token from the token list
function removeToken(token) {
  var lis = tokenList.getElementsByTagName('li');
  for (var i = 0; i < lis.length; i++) {
    if (lis[i].textContent === token) {
      lis[i].parentNode.removeChild(lis[i]);
      break;
    }
  }
}
