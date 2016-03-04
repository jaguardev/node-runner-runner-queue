<a name="Queue"></a>
## Queue
Class representing a Queue

**Kind**: global class  

* [Queue](#Queue)
    * [.dequeue()](#Queue+dequeue) ⇒ <code>\*</code>
    * [.enqueue(object)](#Queue+enqueue)
    * [.peek()](#Queue+peek) ⇒ <code>\*</code>
    * [.clear()](#Queue+clear)
    * [.contains(object)](#Queue+contains)
    * [.size()](#Queue+size) ⇒ <code>Number</code>

<a name="Queue+dequeue"></a>
### queue.dequeue() ⇒ <code>\*</code>
Removes and returns an object from the head of the Queue

**Kind**: instance method of <code>[Queue](#Queue)</code>  
**Returns**: <code>\*</code> - object from the head of the Queue  
<a name="Queue+enqueue"></a>
### queue.enqueue(object)
Adds an object to the tail of the Queue

**Kind**: instance method of <code>[Queue](#Queue)</code>  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>\*</code> | to be added to the tail of the Queue |

<a name="Queue+peek"></a>
### queue.peek() ⇒ <code>\*</code>
Returns an object from the head of the Queue, but does not remove it

**Kind**: instance method of <code>[Queue](#Queue)</code>  
**Returns**: <code>\*</code> - object from the head of the Queue  
<a name="Queue+clear"></a>
### queue.clear()
Returns all objects from the Queue

**Kind**: instance method of <code>[Queue](#Queue)</code>  
<a name="Queue+contains"></a>
### queue.contains(object)
Tests if an object in the Queue

**Kind**: instance method of <code>[Queue](#Queue)</code>  

| Param | Type | Description |
| --- | --- | --- |
| object | <code>Boolean</code> | to look |

<a name="Queue+size"></a>
### queue.size() ⇒ <code>Number</code>
Return a size of the Queue

**Kind**: instance method of <code>[Queue](#Queue)</code>  
**Returns**: <code>Number</code> - size of the Queue  
