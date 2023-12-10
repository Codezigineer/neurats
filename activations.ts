import { ActivationLayer, Tensor } from "./types";

export class ReLU extends ActivationLayer
{
    run(input: Tensor): Tensor 
    {
        return input.map(function map(v: any)
        {
            if(v instanceof Array) return v.map(map);
            else return Math.max(v, 0);
        });
    };
};

export class Sigmoid extends ActivationLayer
{
    run(input: Tensor): Tensor 
    {
        return input.map(function map(v: any)
        {
            if(v instanceof Array) return v.map(map);
            else return 1/(1+Math.exp(-v));
        });
    };
};

export class Tanh extends ActivationLayer
{
    run(input: Tensor): Tensor 
    {
        return input.map(function map(v: any)
        {
            if(v instanceof Array) return v.map(map);
            else return Math.tanh(v);
        });
    };
};