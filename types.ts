export type Tensor = number[] | Tensor[];

export abstract class Layer
{
    parameters: Tensor = [];

    abstract run(input: Tensor): Tensor;
};

export abstract class UntrainableLayer extends Layer
{};

export abstract class ActivationLayer extends UntrainableLayer
{};

export abstract class ResizeLayer extends UntrainableLayer
{};

export abstract class Optimizer
{
    abstract optimize(input: Tensor, output: Tensor, learningRate: number, parameters: Tensor): Tensor;
};