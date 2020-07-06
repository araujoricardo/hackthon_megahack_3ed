export const buyItem = (itemId, itemPrice) => ({
  type: "BUY_ITEM",
  payload: {
    itemPrice,
    itemId,
  },
});

export const addBalance = (value) => ({
  type: "ADD_BALANCE",
  payload: {
    value,
  },
});

export const unlockItem = (id) => ({
  type: "UNLOCK_ITEM",
  payload: {
    id,
  },
});
