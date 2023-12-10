import { Tensor } from "./types";

export function convolute3d(array: number[][][], kernel: number[][][]): number[][][]
{
    if(kernel.length > array.length) return array;
    var res: number[][][] = array.map(v => v.map(i => i.map(j => Number(j))));

    for(var i = -Math.floor(-kernel.length/2); i != array.length-Math.floor(kernel.length/2); i++)
    {
        for(var j = -Math.floor(-kernel[0].length/2); j != array[0].length-Math.floor(kernel[0].length/2); j++)
        {
            for(var k = -Math.floor(-kernel[0][0].length/2); k != array[0][0].length-Math.floor(kernel[0][0].length/2); k++)
            {
                var amount = 0;

                for(var l = Math.floor(-kernel.length/2); l != Math.floor(kernel.length/2); l++)
                    for(var m = Math.floor(-kernel[0].length/2); m != Math.floor(kernel[0].length/2); m++)
                        for(var n = Math.floor(-kernel[0][0].length/2); n != Math.floor(kernel[0][0].length/2); n++)
                            amount += kernel[l][m][n] * array[i + l][j + m][k + n];
                
                res[i][j][k] = amount;
            };
        };
    };

    return res;
};

export function convolute2d(array: number[][], kernel: number[][]): number[][]
{
    return convolute3d([array], [kernel])[0];
};

export function convolute1d(array: number[], kernel: number[]): number[]
{
    return convolute2d([array], [kernel])[0];
};

export function flatten(tensor: Tensor): number[]
{
    return (tensor as any[]).flat(Infinity) as number[];
};