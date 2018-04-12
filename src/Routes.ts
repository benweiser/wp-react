interface RoutableItem {
  readonly name: string;
  readonly path: string;
}

type Routes = ReadonlyArray<RoutableItem>;

export const ROUTES: Routes = [
  { name: "Test", path: "test" },
  { name: "Blog", path: "blog" },
  { name: "404", path: "not-found" }
];
