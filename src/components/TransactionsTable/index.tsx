import { useTransactions } from "../../Hooks/useTransactions";

import { Container } from "./Styles";


interface Transaction{
    title: string;
    amount: number;
    category: string;
    createdAt: string;
    type: string;
    id: number;
}
export function TransactionsTable(){
    const {transactions} = useTransactions();
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                    <th className="title">Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                {transactions.map(transaction => {
                    return(
                    <tr key={transaction.id}>
                        <td>{transaction.title}</td>
                        <td className=
                        {transaction.type}
                        >{new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        }).format(transaction.amount)}
                        </td>
                        
                        <td>{transaction.category}</td>

                        <td>
                            {new Intl.DateTimeFormat('pt-BR').format(
                                new Date(transaction.createdAt)
                            )}
                        </td>
                    </tr>);
                })
                }

                </tbody>
            </table>
        </Container>
    );
}