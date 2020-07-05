export const buyItem = (itemId, itemPrice) => ({
  type: "BUY_ITEM",
  payload: {
    itemPrice,
    itemId,
  },
});
