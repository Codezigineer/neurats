import { Layer } from "./types";

export class DenseLayer extends Layer
{
    parameters: number[][] = [];

    runNeuron(input: number[], neuron: number): number
    {
        var sum = this.parameters[neuron][0];
        for(var i = 0; i != this.parameters[neuron].length-1; i++)
            sum += input[i] * this.parameters[neuron][i+1];
        return sum;
    };

    run(input: number[]): number[] 
    {
        const this_ = this;
        return this.parameters.map((_, i) => this_.runNeuron(input, i));
    };
};