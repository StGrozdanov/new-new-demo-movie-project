export function capitalizatorUtil(input) {
    return input.map(data => data[0].toUpperCase() + data.substring(1, data.length));
}