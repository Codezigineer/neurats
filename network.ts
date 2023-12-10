import { Layer, Tensor } from "./types";

export class Net
{
    layers: Layer[] = [];

    push(...layers: Layer[]): Net
    {
        this.layers.push(...layers);
        return this;
    };

    run(input: Tensor): Tensor
    {
        var res = input;
        for(const layer of this.layers) res = layer.run(res);
        return res;
    };
};