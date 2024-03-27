const stale: {
    never: number
    always: number
    fiveMin: number
    tenMin: number
} = {
    never: Infinity,
    always: 0,
    fiveMin: 5 * 60000,
    tenMin: 10 * 60000,
}

export default stale
