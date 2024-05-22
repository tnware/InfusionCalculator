export interface Material {
    name: string;
    selected: boolean;
    imageUrl: string;
    weight: number;
    thc: number;
    cbd: number;
    cost: number;
}

export type Unit = 'ml' | 'oz' | 'cup' | 'l';


export type Process = {
    title: string;
    steps: string[];
  };
  
export type Processes = {
    [key: string]: Process;
  };