export interface Donor {
  name: string;
  village: string;
  residence: string;
  amount: number;
}

export const donors: Donor[] = [
  {
    name: "Modibo Keita",
    village: "Kourouninkoto",
    residence: "Bamako",
    amount: 50000,
  },
  {
    name: "Fatoumata Traoré",
    village: "Seroume",
    residence: "Kayes",
    amount: 20000,
  },
  {
    name: "Boubacar Camara",
    village: "Guemoucouraba",
    residence: "Bamako",
    amount: 15000,
  },
];
