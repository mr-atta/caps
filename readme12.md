# LAB-12: Socket.io

## Repository

> `caps`

## branch

> `socket.io`

<br>

### Phase 2

> In Phase 2, we’ll be changing the underlying networking implementation of our CAPS system from using node events to using a library called `socket.io` so that we can do networked events. `Socket.io` manages the connection pool for us, makes broadcasting much easier to operate, and works well both on the terminal (between servers) and with web clients.

> connecting the pages (driver and the vendor) with caps page without event.js by using :namespace, io-client.

<br>

## github link :

[github](https://github.com/mr-atta/caps)

## pull request for that branch :

[pull request](https://github.com/mr-atta/caps/compare/Socket.io?expand=1)

<br>

### running the caps : on **node caps.js**

### running the vendor : on **node vendor.js**

### running the driver : on **node driver.js**

### testing the app : on **npm test** AND on the consle

## SetUp :

- create branch called `socket.io`
- npmi i for
  - supertest
  - faker
  - dotenv
  - jest
  - `socket.io`
  - `socket.io-client`

<br>

## UML Diagram :

![UML](./img12/w-lab-12.PNG)

<br>

## Output result :

- The last output result
  ![0](./img12/output-lab11-12.PNG)

<br>

- The current output result

### **node caps.js**

![1](./img12/lab12-1.PNG)

### **node vendor.js**

![2](./img12/lab12-2.PNG)

### **node driver.js**

![3](./img12/lab12-3.PNG)

<br>

- link: http://localhost:3020

- namespace: http://localhost:3020/caps
