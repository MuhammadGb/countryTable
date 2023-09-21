import { Order } from ".";
import React from "react";

export interface Data {
  id: string;
  code: string;
  continent: string;
  nameUn: string;
  name: string;
  hasStates: boolean;
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  abbr: boolean;
}

export interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

export interface EnhancedTableToolbarProps {
  numSelected: number;
  order: string;
  handleRequestSort: (
    event: React.MouseEvent<unknown> | any,
    property: keyof Data,
  ) => void;
  setfilterVal: React.Dispatch<React.SetStateAction<string>>;
}

export interface Continents {
  name: string;
  abbr: string;
}
