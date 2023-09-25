import { fabric } from "fabric";

export interface CustomRectOptions extends fabric.IRectOptions {
  originalFill?: string;
  squareValue?: number;
  squareLayers?: Layer[]; 
  gridX: number;
  gridY: number;
  yOffset: number;
  stage: number;
}

export interface Layer {
  owner: string;
  color: string;
}

export interface Cell {
  baseValue: bigint; 
  layers: Layer[];
}

export interface Stage {
  isEnabled: boolean;
  cells: Cell[][];
}
