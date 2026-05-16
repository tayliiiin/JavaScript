/* Массив транзакций */

const transactions = [
    {
        transaction_id: 1,
        transaction_date: "2024-01-10",
        transaction_amount: 250,
        transaction_type: "debit",
        transaction_description: "Покупка продуктов",
        merchant_name: "Metro",
        card_type: "debit"
    },

    {
        transaction_id: 2,
        transaction_date: "2024-02-15",
        transaction_amount: 1200,
        transaction_type: "credit",
        transaction_description: "Зарплата",
        merchant_name: "Company",
        card_type: "credit"
    },

    {
        transaction_id: 3,
        transaction_date: "2024-03-01",
        transaction_amount: 400,
        transaction_type: "debit",
        transaction_description: "Покупка одежды",
        merchant_name: "H&M",
        card_type: "debit"
    },

    {
        transaction_id: 4,
        transaction_date: "2024-03-12",
        transaction_amount: 150,
        transaction_type: "debit",
        transaction_description: "Кофе",
        merchant_name: "Starbucks",
        card_type: "debit"
    }
];

/* Возвращает уникальные типы транзакций */
function getUniqueTransactionTypes(transactions) {
    return [...new Set(transactions.map(t => t.transaction_type))];
}

/* Считает общую сумму транзакций */
function calculateTotalAmount(transactions) {
    return transactions.reduce(
        (sum, t) => sum + t.transaction_amount,
        0
    );
}

/* Возвращает транзакции по типу */
function getTransactionByType(transactions, type) {
    return transactions.filter(
        t => t.transaction_type === type
    );
}

/* Возвращает транзакции в диапазоне дат */
function getTransactionsInDateRange(
    transactions,
    startDate,
    endDate
) {
    return transactions.filter(t => {
        const date = new Date(t.transaction_date);

        return (
            date >= new Date(startDate) &&
            date <= new Date(endDate)
        );
    });
}

/* Возвращает транзакции по магазину */
function getTransactionsByMerchant(
    transactions,
    merchantName
) {
    return transactions.filter(
        t => t.merchant_name === merchantName
    );
}

/* Считает среднюю сумму транзакций */
function calculateAverageTransactionAmount(
    transactions
) {
    if (transactions.length === 0) {
        return 0;
    }

    return (
        calculateTotalAmount(transactions) /
        transactions.length
    );
}

/* Возвращает транзакции в диапазоне сумм */
function getTransactionsByAmountRange(
    transactions,
    minAmount,
    maxAmount
) {
    return transactions.filter(t =>
        t.transaction_amount >= minAmount &&
        t.transaction_amount <= maxAmount
    );
}

/* Считает сумму дебетовых транзакций */
function calculateTotalDebitAmount(
    transactions
) {
    return transactions
        .filter(t => t.transaction_type === "debit")
        .reduce(
            (sum, t) => sum + t.transaction_amount,
            0
        );
}

/* Находит месяц с наибольшим количеством транзакций */
function findMostTransactionsMonth(
    transactions
) {
    const months = {};

    transactions.forEach(t => {
        const month = new Date(
            t.transaction_date
        ).getMonth() + 1;

        months[month] = (months[month] || 0) + 1;
    });

    let maxMonth = null;
    let maxCount = 0;

    for (let month in months) {
        if (months[month] > maxCount) {
            maxCount = months[month];
            maxMonth = month;
        }
    }

    return maxMonth;
}

/* Находит месяц с наибольшим количеством debit транзакций */
function findMostDebitTransactionMonth(
    transactions
) {
    const debitTransactions =
        transactions.filter(
            t => t.transaction_type === "debit"
        );

    return findMostTransactionsMonth(
        debitTransactions
    );
}

/* Определяет каких транзакций больше */
function mostTransactionTypes(transactions) {
    const debitCount =
        transactions.filter(
            t => t.transaction_type === "debit"
        ).length;

    const creditCount =
        transactions.filter(
            t => t.transaction_type === "credit"
        ).length;

    if (debitCount > creditCount) {
        return "debit";
    }

    if (creditCount > debitCount) {
        return "credit";
    }

    return "equal";
}

/* Возвращает транзакции до указанной даты */
function getTransactionsBeforeDate(
    transactions,
    date
) {
    return transactions.filter(
        t =>
            new Date(t.transaction_date) <
            new Date(date)
    );
}

/* Ищет транзакцию по ID */
function findTransactionById(
    transactions,
    id
) {
    return transactions.find(
        t => t.transaction_id === id
    );
}

/* Возвращает массив описаний транзакций */
function mapTransactionDescriptions(
    transactions
) {
    return transactions.map(
        t => t.transaction_description
    );
}

/* Тестирование функций */

console.log(
    "Уникальные типы:",
    getUniqueTransactionTypes(transactions)
);

console.log(
    "Общая сумма:",
    calculateTotalAmount(transactions)
);

console.log(
    "Debit транзакции:",
    getTransactionByType(
        transactions,
        "debit"
    )
);

console.log(
    "Транзакции по диапазону дат:",
    getTransactionsInDateRange(
        transactions,
        "2024-01-01",
        "2024-03-01"
    )
);

console.log(
    "Транзакции магазина H&M:",
    getTransactionsByMerchant(
        transactions,
        "H&M"
    )
);

console.log(
    "Средняя сумма:",
    calculateAverageTransactionAmount(
        transactions
    )
);

console.log(
    "Транзакции по диапазону сумм:",
    getTransactionsByAmountRange(
        transactions,
        100,
        500
    )
);

console.log(
    "Сумма debit:",
    calculateTotalDebitAmount(
        transactions
    )
);

console.log(
    "Месяц с большим количеством транзакций:",
    findMostTransactionsMonth(
        transactions
    )
);

console.log(
    "Месяц с большим количеством debit:",
    findMostDebitTransactionMonth(
        transactions
    )
);

console.log(
    "Каких транзакций больше:",
    mostTransactionTypes(transactions)
);

console.log(
    "Транзакции до даты:",
    getTransactionsBeforeDate(
        transactions,
        "2024-03-01"
    )
);

console.log(
    "Поиск по ID:",
    findTransactionById(
        transactions,
        2
    )
);

console.log(
    "Описания:",
    mapTransactionDescriptions(
        transactions
    )
);