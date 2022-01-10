import { writable } from "svelte/store";

function createPriceStore() {
  const { subscribe, set, update } = writable(0);

  return {
    subscribe,
    pluse: (type) =>
      update((p) => {
        type == "salad" && (p += 0.2);
        type == "cheese" && (p += 0.3);
        type == "meat" && (p += 0.5);
        return Math.round(p * 10) / 10;
      }),
    minus: (type) =>
      update((p) => {
        type == "salad" && (p -= 0.2);
        type == "cheese" && (p -= 0.3);
        type == "meat" && (p -= 0.5);
        return Math.round(p * 10) / 10;
      }),
    reset: () => set(0),
  };
}

export const price = createPriceStore();
