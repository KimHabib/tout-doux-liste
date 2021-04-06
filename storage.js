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
  const key = "item-" + Math.random() * 2 ** 10;
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

loadFromStorage();
