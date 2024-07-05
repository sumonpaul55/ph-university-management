import { ReactNode } from "react";

type TRoute = {
  path: string;
  element: ReactNode;
};

type TRoutesPaths = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TRoutesPaths[];
};

export const routesGenerato = (routeItems: TRoutesPaths[]) => {
  const routes = routeItems.reduce((acc: TRoute[], items) => {
    if (items.path && items.element) {
      acc.push({
        path: items.path,
        element: items.element,
      });
    }
    if (items.children) {
      items.children.forEach((child: TRoutesPaths) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }

    return acc;
  }, []);
  return routes;
};
