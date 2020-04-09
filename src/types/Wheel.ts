import { v4 as uuidV4 } from 'uuid';

import WheelOption from './WheelOption';
import AnimationType from './AnimationType';

class Wheel {
  id: string;
  name: string;
  _options: WheelOption[];
  animation: AnimationType;

  constructor(name: string, options: WheelOption[] = [], animation: AnimationType = AnimationType.Roulette) {
    this.id = uuidV4();
    this.name = name;
    this._options = options;
    this.animation = animation;
  }

  get options(): WhielOption[] {
    return this._options;
  }

  addOption(opt: WheelOption) {
    this._options.push(opt);
  }

  removeOption(id: string) {
    this._options = this.options.filter( (opt) => opt.id === id );
  }
}
