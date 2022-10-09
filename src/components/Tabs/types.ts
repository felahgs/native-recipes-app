export interface TabsProps {
  values: Array<{
    name: string;
    action: () => void;
  }>;
}
