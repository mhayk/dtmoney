import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface TransactionData {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: Date;
}

export function Transaction() {
    const [transactions, setTransactions] = useState<TransactionData[]>([]);
    useEffect(() => {
        api.get('transactions')
            .then(response => setTransactions(response.data))
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map(transaction => {
                            console.log(transaction.amount)
                            return (
                                <tr key={transaction.id}>
                                    <td>{transaction.title}</td>
                                    <td className="deposit">£{transaction.amount}</td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createdAt}</td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td>Let</td>
                        <td className="withdraw">- £1,725.00</td>
                        <td>House</td>
                        <td>01/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}