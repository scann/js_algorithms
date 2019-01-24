//Queue

function createQueue() {
    const queue = [];

    return {
        //add item in front
        enqueue(item) {
            queue.unshift(item);
        },
        //remove item from tail
        dequeue() {
            return queue.pop();
        },
        //look at what's next to be removed
        peek() {
            return queue[queue.length - 1];
        },
        //getter
        get length() {
            return queue.length;
        },

        isEmpty() {
            return queue.length === 0;
        }

    }
}

const q = createQueue();
q.enqueue('Hello');
q.enqueue('my');
q.enqueue('friend');
console.log(q.peek()); //Hello

q.dequeue();
q.dequeue();
console.log(q.peek()); //friend
q.dequeue();
console.log(q.isEmpty()); //true