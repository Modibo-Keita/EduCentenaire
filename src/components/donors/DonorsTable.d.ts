declare module "@/components/donors/DonorsTable" {
  interface Donor {
    name: string;
    village: string;
    residence: string;
    amount: number;
  }

  interface DonorsTableProps {
    donors: Donor[];
  }

  const DonorsTable: React.FC<DonorsTableProps>;
  export default DonorsTable;
}
