const btn = document.querySelector(".btn")

const printHello = ({
    method_name = "printHello",
    return_type = "string",
    parameter_types = null,
    arguments = null
} = {}) => {
    Module.ccall(
        method_name,
        return_type,
        parameter_types,
        arguments
    )
}

const calcSum = (a = 0, b = 0) => {
    const result = Module.ccall(
        "calcSum",
        "number",
        ["number", "number"],
        [a, b]
    )

    return result
}

btn.addEventListener("click", () => {
    printHello()

    console.log(calcSum(20, 30))
})
