let LINE_WIDTH = 10,
	SHAPE_COUNT = 3,
	MAX_WEIGHT = 10,
	MIN_WEIGHT = 3;

export function BoxWeight(array) {
    return array.reduce((acc, item) => {
        return acc += item.weight * item.offset
    }, 0)
}

function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export function generateBlock () {
    const block = {};
    block.id = uuid();
    block.type = Math.floor(Math.random() * SHAPE_COUNT);
    block.weight = Math.floor(Math.random() * MAX_WEIGHT) + MIN_WEIGHT;
    block.offset = Math.floor(Math.random() * LINE_WIDTH / 2) + 1;
    block.height = block.weight * 8;
    return block;
}
