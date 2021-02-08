const toDoList = [
    {
        phone: "0987654321",
        estTime: 10,
        status: "arrived",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
            {
                name: "Expresso",
                quantity: 1,
                price: 13000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 20,
        status: "arrived",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
            {
                name: "Expresso",
                quantity: 1,
                price: 12000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "arrived",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "arrived",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "arrived",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "acceptance",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "acceptance",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
            {
                name: "Expresso",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "acceptance",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
            {
                name: "Expresso",
                quantity: 1,
                price: 15000
            },
        ],
    },
];

const doingList = [
    {
        phone: "0987654321",
        estTime: 10,
        status: "preparation",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
            {
                name: "Expresso",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 20,
        status: "preparation",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
            {
                name: "Expresso",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "preparation",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "preparation",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "preparation",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "preparation",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "preparation",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
            {
                name: "Expresso",
                quantity: 1,
                price: 15000
            },
        ],
    },
    {
        phone: "0987654321",
        estTime: 30,
        status: "preparation",
        items: [
            {
                name: "Chocolate",
                quantity: 1,
                price: 15000
            },
            {
                name: "Expresso",
                quantity: 1,
                price: 15000
            },
        ],
    },
];

const initialState = {
    orderLists: [],
    filterToDoList: toDoList,
    filterDoingList: doingList,
    filterReadyList: toDoList
};

const ordersReducer = (state = initialState, action) => {
    return state;
}

export default ordersReducer;