#include <stdio.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
int printHello(int a, int b)
{
    printf("Hello From C++\n");

    return 0;
}

EMSCRIPTEN_KEEPALIVE
int calcSum(int a, int b)
{
    return a + b;
}
