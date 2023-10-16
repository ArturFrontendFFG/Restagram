import { GAMES, Game, Currency } from "./data";

export function getGamesFromServer(): Promise<Game[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(GAMES);
    }, 1000);
  });
}

export function priceWithCurrency(price: number, currency:  string): string {
  return `${price} ${
    currency === Currency.EUR
      ? "Э"
      : currency === Currency.RUB
      ? "RUB"
      : currency === Currency.USD && "$"
  }.`;
}
