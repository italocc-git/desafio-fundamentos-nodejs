import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number ;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO

    return this.transactions
  }

  public getBalance(): Balance {
    // TODO]

    const balance = this.transactions.reduce((accumulator : Balance , transaction : Transaction) => {
      switch (transaction.type) {
        case "income":
          accumulator.income += transaction.value;
          break;
        case "outcome":
          accumulator.outcome += transaction.value
          break;
        default:
          break;
      }
      accumulator.total = accumulator.income - accumulator.outcome;


      return accumulator

    }, {
      income: 0,
      outcome: 0,
      total: 0
    })
    return balance ;

    /* Before -
      const incomeTotal = this.transactions.filter(element => element.type === 'income')
      .reduce((accumulator, current) => accumulator + current.value, 0)

    const outcomeTotal = this.transactions.filter(element => element.type === 'outcome')
      .reduce((accumulator, current) => accumulator + current.value, 0)

    let total = (incomeTotal - outcomeTotal) */

  }

  public create({ title, type, value }: Transaction): Transaction {
    // TODO
    const transaction = new Transaction({ title, type, value })
    this.transactions.push(transaction)

    return transaction;

  }
}

export default TransactionsRepository;
