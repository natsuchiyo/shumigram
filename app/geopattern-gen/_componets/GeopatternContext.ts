import { createContext } from "react";
import { GeopatternContextValueType } from "../_types/_types";

export const GeopatternContext = createContext<GeopatternContextValueType>({} as any);