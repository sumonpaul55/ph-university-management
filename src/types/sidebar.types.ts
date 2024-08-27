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
  name?: string;
  path?: string;
  element?: ReactNode;
  children?: TSidebarItems[];
};

export type TsidebarElements =
  | {
      key: string | undefined;
      label: ReactNode;
      children?: TsidebarElements[];
    }
  | undefined;
