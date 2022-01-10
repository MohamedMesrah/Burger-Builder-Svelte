import { writable } from "svelte/store";

function createOrdersStore() {
  let { subscribe, set, update } = writable([
    {
      name: "Mosaad",
      street: "Elsalakhana",
      postalCode: "11223",
      delivaryMethod: "Fastest",
      ingredients: [
        { id: 1641235291430, type: "salad" },
        { id: 1641235291431, type: "cheese" },
        { id: 1641235291432, type: "cheese" },
        { id: 1641235291433, type: "meat" },
      ],
      price: 0.3,
      time: "2022-01-03 18:41:43",
    },
  ]);

  return {
    subscribe,
    add: (ordarData) => update((orders) => [...orders, { ...ordarData }]),
    remove: (time) => update((orders) => orders.filter((o) => o.time != time)),
    reset: () => set([]),
  };
}

export const orders = createOrdersStore();
