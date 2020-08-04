export const map = (obj, valuePredicate, valueMap) => (
    Object.fromEntries(Object.entries(obj)
        .map(([k, v]) => {
            return valuePredicate(v) ? [k,{...v,...valueMap(v)}] : [k,v]}))
)
