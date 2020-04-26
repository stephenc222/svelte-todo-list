// quick, "good enough" random id generator
export const createId = () => `a${Math.floor( 1000 + Math.random() * 10000000) }b`