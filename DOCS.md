# `Network`

A simple network class.

## `Network`#`constructor`

Creates a network.

## `Network`#`push`

Adds layers to the network.
The arguments are push(...layers), identical to an Array
Returns the network.

## `Network`#`run`

Takes in a tensor, and returns one.

# `Layer`

A layer ABC. All layers, including activation and resize ones, extend this.

## `Layer`.`parameters`

The layer's parameters (weights + biases). Empty for activation layers, resize layers, and the flatten layer.

## `Layer`#`run`

Takes in a tensor, and returns one. Same as Network.

# `ConvLayer`n`D`

A CNN layer, with n<4, that doesn't have a bias.

## `ConvLayer`n`D`#`constructor`

Creates a CNN layer. the only argument specifies size, in an array of numbers.

### Note: For layers with n=1, it's not an array; it's just a number.

# `DenseLayer`

Feedforward layer, only for 1D data.
The only way to put 2D data through it is through a Flatten transform.

# `Flatten`

Flattens input to 1D data.

# `Resize`n`D`

Resizes inputs by a scalar amount.
If the scalar amount is 2, the size is halved.
If it's 0.5, it's doubled.

# `Resize`n`D`.`resizeScale`

This is an array with `n` elements, unless n=1, in which case it's a number.
If you were to have a Resize2D layer with [2, 3] as this property, the width would be divided by 2, and the height divided by 3.

# `Resize`n`D`#`setScale`

Sets `resizeScale`. 

# `ReLU`

Layer that performs ReLU.

# `Sigmoid`

Layer that performs the logistic function.

# `Tanh`

Layer that performs the hyperbolic tangent.