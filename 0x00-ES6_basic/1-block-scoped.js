/* eslint-disable */
export default function taskBlock(trueorFalse) {
    const task = false;
    const task2 = true;

    if (trueorFalse) {
        const task = true;
        const task2 = false;
        if (task && task2) {
            return [task, task2];
        }
    }

    return [task, task2];
}