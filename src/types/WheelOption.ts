import { v4 as uuidV4 } from 'uuid';

import Color from './Color';

class WheelOption {
  private _id: string;
  public label: string;
  public color: Color;

  constructor(label: string, color: Color) {
    this._id = uuidV4();
    this.label = label;
    this.color = color;
  }

  get id(): string {
    return this._id;
  }

}
