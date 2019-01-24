//Priority queue
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

function createPriorityQueue() {
    const lowPriorityQueue = createQueue();
    const highPriorityQueue = createQueue();

    return {
        enqueue (item, isHighPriority = false) {
            isHighPriority ? highPriorityQueue.enqueue(item) : lowPriorityQueue.enqueue(item)
        },

        dequeue() {
            if(!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.dequeue();
            }

            return lowPriorityQueue.dequeue();
        },

        peek() {
            if(!highPriorityQueue.isEmpty()) {
                return highPriorityQueue.peek();
            }

            return lowPriorityQueue.peek();
        },

        length() {
            return highPriorityQueue.length + lowPriorityQueue.length
        },

        isEmpty() {
            return (
                highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty()
            )
        },
    }
}

const q = createPriorityQueue();

q.enqueue('A fix here');
q.enqueue('A bug there');
q.enqueue('A new feature');

q.dequeue();
q.enqueue('Emergency task', true);
console.log(q.dequeue());
console.log(q.peek());
