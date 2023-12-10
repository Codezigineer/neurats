import { flatten } from "./base";
import { ResizeLayer, Tensor, UntrainableLayer } from "./types";

export class Resize1D extends ResizeLayer
{
    parameters: Tensor = [];
    resizeScale: number = 1; // If this is 2, then the result is half the size. if this is 3, then the result 3 times smaller.

    run(input: number[]): number[]
    {
        var result: number[] = new Array(Math.floor(input.length/this.resizeScale)).fill(0, 0);
        for(var i = 0; i != input.length; i++)
            result[Math.floor((i/input.length) * result.length)] = input[i];
        return result;
    };

    setScale(r: number): Resize1D
    {
        this.resizeScale = r;
        return this;
    };
};

export class Resize2D extends ResizeLayer
{
    parameters: Tensor = [];
    resizeScale: [number, number] = [1, 1]; 

    run(input: number[][]): number[][]
    {
        var result: number[][] = new Array(Math.floor(input.length/this.resizeScale[0])).fill(0, 0).map(v => new Array(Math.floor(input[0].length/this.resizeScale[1])).fill(0, 0).map(v => 0));
        for(var i = 0; i != input.length; i++)
            for(var j = 0; j != input[0].length; j++)
                result[Math.floor((i/input.length) * result.length)][Math.floor((j/input[0].length) * result[0].length)] = input[i][j];
        return result;
    };

    setScale(r: [number, number]): Resize2D
    {
        this.resizeScale = r;
        return this;
    };
};

export class Resize3D extends ResizeLayer
{
    parameters: Tensor = [];
    resizeScale: [number, number, number] = [1, 1, 1]; 

    run(input: number[][][]): number[][][]
    {
        var result: number[][][] = new Array(Math.floor(input.length/this.resizeScale[0])).fill(0, 0).map(v => new Array(Math.floor(input[0].length/this.resizeScale[1])).fill(0, 0).map(v => new Array(Math.floor(input[0][0].length/this.resizeScale[2])).fill(0, 0)));
        for(var i = 0; i != input.length; i++)
            for(var j = 0; j != input[0].length; j++)
                for(var k = 0; k != input[0][0].length; k++)
                    result[Math.floor((i/input.length) * result.length)][Math.floor((j/input[0].length) * result[0].length)][Math.floor((k/input[0][0].length) * result[0][0].length)] = input[i][j][k];
        return result;
    };

    setScale(r: [number, number, number]): Resize3D
    {
        this.resizeScale = r;
        return this;
    };
};

export class Flatten extends UntrainableLayer
{
    parameters: Tensor = [];

    run(inputs: Tensor): number[]
    {
        return flatten(inputs);
    };
};