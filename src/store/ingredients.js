import { writable } from "svelte/store";

function createIngredientStore() {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    pluse: (type) => {
      update((ings) => [...ings, { id: new Date().getTime(), type }]);
    },
    minus: (type) => {
      update((ings) => {
        let sameTypeIngs = ings.filter((ing) => ing.type == type);
        if (sameTypeIngs.length)
          ings = ings.filter(
            (ing) => ing.id != sameTypeIngs[sameTypeIngs.length - 1].id
          );
        return ings;
      });
    },
    reset: () => set([]),
  };
}

export const ingredients = createIngredientStore();
