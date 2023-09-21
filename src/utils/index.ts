import { Data, Continents } from "./interfaces";
import countryData from "./countryData.json";

export const createData = (
  id: string,
  name: string,
  nameUn: string,
  code: string,
  continent: string,
  hasStates: boolean,
): Data => {
  return {
    id,
    name,
    nameUn,
    code,
    continent,
    hasStates,
  };
};

export const allCountryData = countryData?.countries.map((country: Data) =>
  createData(
    country.id,
    country.name,
    country.nameUn,
    country.code,
    country.continent,
    country.hasStates,
  ),
);

export const descendingComparator = <T>(a: T, b: T, orderBy: keyof T) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

export type Order = "asc" | "desc";

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: string | boolean },
  b: { [key in Key]: string | boolean },
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

export function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number,
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export const filterCountries = (countryArr: Data[], continent: string) => {
  if (continent === "none") return countryArr;
  return countryArr.filter((cntry: Data) => cntry.continent === continent);
};

export const continents: Continents[] = [
  { abbr: "AF", name: "Africa" },
  { abbr: "AS", name: "Asia" },
  { abbr: "EU", name: "Europe" },
  { abbr: "NA", name: "North America" },
  { abbr: "SA", name: "South America" },
  { abbr: "OC", name: "Oceania" },
  { abbr: "AN", name: "Antartica" },
  { abbr: "No Filter", name: "No Filter" },
];
