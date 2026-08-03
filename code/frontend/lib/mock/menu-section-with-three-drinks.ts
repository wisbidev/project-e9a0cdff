/**
 * Mock data for the Menu Section story.
 * This file is the API contract: shape it exactly as the backend must return it.
 * To switch to real data, replace this module — never scatter imports across components.
 */

export interface Drink {
  name: string;
  price: string; // exact verbatim string, e.g. "45k", "55k", "60k"
}

export interface MenuResponse {
  drinks: Drink[];
}

export const mockMenuData: MenuResponse = {
  drinks: [
    { name: "Espresso", price: "45k" },
    { name: "Latte", price: "55k" },
    { name: "Cold Brew", price: "60k" },
  ],
};
