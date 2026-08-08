import {
  Award,
  Palette,
  Truck,
  Handshake,
} from "lucide-react";


export type FeatureKey =
  | "quality"
  | "design"
  | "delivery"
  | "trust";


export const features = [
  {
    id: 1,
    key: "quality" as FeatureKey,
    icon: <Award />,
  },

  {
    id: 2,
    key: "design" as FeatureKey,
    icon: <Palette />,
  },

  {
    id: 3,
    key: "delivery" as FeatureKey,
    icon: <Truck />,
  },

  {
    id: 4,
    key: "trust" as FeatureKey,
    icon: <Handshake />,
  },
];