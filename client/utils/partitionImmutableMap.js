export default function(Map, size) {
    let i = -1;

    return Map.groupBy(() => {
        i++;
        return Math.floor(i / size);
    });
}
