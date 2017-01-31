/**
 * Created by Christophe on 30/01/2017.
 */
import {Shape} from "./shape.class";

export class ShapesSet {
    
    private _shapesIndex:{[id:string]:Shape} = {};
    
    constructor(
        public shapes:Shape[] = []
    ) {
        for (let shape of shapes) {
            this._shapesIndex[shape.id] = shape;
        }
    }

    push(shape:Shape) {
        this.shapes.push(shape);
        this._shapesIndex[shape.id] = shape;
    }

    get(id):Shape {
        if (this._shapesIndex[id]) {
            return this._shapesIndex[id];
        }
    }
}