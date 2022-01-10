import { writable } from "svelte/store";

export const contactData = writable({
  name: "",
  street: "",
  postalCode: "",
  delivaryMethod: "",
});
