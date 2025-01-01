# JavaScript Function Returning Null for Null Input Parameters

This repository contains a simple JavaScript function that demonstrates an unusual bug when dealing with null parameters.

## Bug Description

The function `foo` checks if the input parameters `a` and `b` are null using strict equality (`===`). If either is null, the function returns null. However, this can lead to unexpected behavior depending on the expected input types.

## Bug Solution

The bug can be solved by modifying the conditional check to handle null parameters separately based on the expected data type. This may involve adding type checking or using loose equality (==) instead of strict equality. 