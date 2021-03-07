import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function Alunos({alunos}) {    
    return (
        <>
            <Typography variant="h3">Lista de alunos</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Cargo</TableCell>
                        <TableCell>E-mail</TableCell>
                        <TableCell>Phone</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        {alunos.map((aluno) => (
                            <TableRow hover key={aluno.nome}>
                                <TableCell>{ aluno.nome }</TableCell>
                                <TableCell>{ aluno.cargo }</TableCell>
                                <TableCell>{ aluno.email }</TableCell>
                                <TableCell>{ aluno.phone }</TableCell>
                            </TableRow>
                        )) }
                    </TableBody>
                </Table>
            </TableContainer>
        </>    
    )
}

export async function getStaticProps() {
    const resp = await fetch('http://192.168.15.11:8082/alunos')
    const alunos = await resp.json()

    return {
        props: {
            alunos
        },
        revalidate: 1
    }
}