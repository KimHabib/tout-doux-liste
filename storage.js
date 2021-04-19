const storageKey = "tout-doux-liste";

function getList() {
  let list = window.localStorage.getItem(storageKey);
  list = list ? JSON.parse(list) : {};
  return list;
}

function setList(list) {
  window.localStorage.setItem(storageKey, JSON.stringify(list));
}

function addItemToStorage(item) {
  const list = getList();
  const key = "item-" + Math.floor(Math.random() * 2 ** 20);
  list[key] = item;
  // seems wrong to call this file then the other again
  createItemAsListItem(key, item);
  setList(list);
}

function updateItemInStorage(key, props) {
  const list = getList();
  // take the item as-is, and override any given props
  list[key] = { ...list[key], ...props };
  console.log("updating", list[key]);
  setList(list);
}

function deleteItemFromStorage(key) {
  const list = getList();
  console.log("deleting", list[key]);
  // delete the item
  delete list[key];
  setList(list);
}

function loadFromStorage() {
  const list = getList();

  if (Object.keys(list).length > 0) {
    // if we have items, run the special effects
    specialEffects();
  }

  Object.keys(list).forEach((key) => {
    const listItem = list[key];
    console.log("creating item", { key, listItem });
    createItemAsListItem(key, listItem);
  });
}

const hideCookieMessageKey = "is-cookie-message-dismissed";

function isCookieMessageDismissed() {
  return window.localStorage.getItem(hideCookieMessageKey);
}

function setCookieMessageDismissed() {
  window.localStorage.setItem(hideCookieMessageKey, true);
}

const cookieMessage = document.querySelector("#cookie-message");
const hideCookieMessageButton = document.querySelector("#hide-cookie-message");
function hideLocalStorageMessage() {
  setCookieMessageDismissed();
  cookieMessage.classList.add("hide");
}
hideCookieMessageButton.addEventListener("click", hideLocalStorageMessage);

function hideCookieMessageIfAccepted() {
  if (isCookieMessageDismissed()) {
    hideLocalStorageMessage();
  }
}

hideCookieMessageIfAccepted();
loadFromStorage();
