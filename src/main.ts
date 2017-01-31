/**
 * Created by Christophe on 31/01/2017.
 */
import {Shape} from "./shape/shape.class";
import {ShapeAttribute} from "./shape/shape-attribute.class";
import {Collection} from "./shape/types/collection.class";
import {Reference} from "./shape/types/reference.class";
import {ShapesSet} from "./shape/shapes-set.class";
import {spriteShape} from "./shapes";


/*var spriteShape = new Shape("Sprite");
spriteShape.pushAttribute(new ShapeAttribute<string>("name", "spritename"));
spriteShape.pushAttribute(new ShapeAttribute<number>("x", 0));
spriteShape.pushAttribute(new ShapeAttribute<number>("y", 0));
spriteShape.pushAttribute(new ShapeAttribute<number>("scale", 1));*/

var shapesSet:ShapesSet = new ShapesSet();
//shapesSet.push(spriteShape);

var spShape:Shape = new Shape();
spShape.fromObject(spriteShape);

console.log(spriteShape);
console.log(shapesSet);