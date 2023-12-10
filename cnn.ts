import { convolute1d, convolute2d, convolute3d } from "./base";
import { Layer } from "./types";

export class ConvLayer1D extends Layer
{
    parameters: number[] = [];

    constructor(size = 15)
    {
        super();
        this.parameters = new Array(size).fill(0).map(Math.random.bind(Math));
    };

    run(input: number[]): number[]
    {
        return convolute1d(input, this.parameters);
    };
};

export class ConvLayer2D extends Layer
{
    parameters: number[][] = [];

    constructor(size = [15, 15])
    {
        super();
        this.parameters = new Array(size[0]).fill(0).map(v => new Array(size[1]).fill(0).map(Math.random.bind(Math)));
    };

    run(input: number[][]): number[][]
    {
        return convolute2d(input, this.parameters);
    };
};

export class ConvLayer3D extends Layer
{
    parameters: number[][][] = [];

    constructor(size = [15, 15, 15])
    {
        super();
        this.parameters = new Array(size[0]).fill(0).map(v => new Array(size[1]).fill(0).map(v => new Array(size[2]).fill(0).map(Math.random.bind(Math))));
    };

    run(input: number[][][]): number[][][]
    {
        return convolute3d(input, this.parameters);
    };
};