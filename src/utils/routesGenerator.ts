import { TRoute, TRoutesPaths } from "../types/sidebar.types";

export const routesGenerator = (routeItems: TRoutesPaths[]) => {
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
