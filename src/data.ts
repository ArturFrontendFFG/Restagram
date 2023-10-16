export const enum Currency {
    RUB = "RUB",
    EUR = "EUR",
    USD = "USD"
}

export type Game = {
  id: number;
  name: string;
  description?: string;
  version?: string;
  price?: number;
  tags?: string[];
  forKids: boolean;
  currency: "RUB" | "EUR" | "USD";
};

export const GAMES: Game[] = [
  {
    id: 1,
    name: "Мортал Комбат",
    description: "Голые мужчины дерутся с другими голыми мужчинами",
    version: "X",
    price: 1000,
    tags: ["Бои", "Кровь"],
    forKids: false,
    currency: Currency.EUR,
  },
  {
    id: 2,
    name: "Гонки какие-то",
    price: 700,
    tags: ["Машины", "Драйв", "СтритРейсинг"],
    forKids: true,
    currency: Currency.RUB,
  },
  {
    id: 3,
    name: "FIFA",
    description: "Много человек бегает за мячиком по огромному полю",
    forKids: true,
    price: 124,
    currency: Currency.USD,
  },
];
