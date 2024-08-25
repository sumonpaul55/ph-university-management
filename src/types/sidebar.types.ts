import { ReactNode } from "react";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TRoutesPaths = {
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TRoutesPaths[];
};

export type TSidebarItems = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TSidebarItems[];
};

export type TsidebarElements =
  | {
      key: string;
      label: ReactNode;
      children?: TsidebarElements[];
    }
  | undefined;
