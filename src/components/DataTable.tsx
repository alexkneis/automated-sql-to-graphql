import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';
import {useAuthorsBooksQuery} from 'src/generated/graphql-frontend';

const DataTable = () => {
    const {loading, data} = useAuthorsBooksQuery();
    return (
        <>
            {loading ? (
                <LinearProgress />
            ) : (
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Lastname</TableCell>
                                <TableCell>Firstname</TableCell>
                                <TableCell>Booktitle</TableCell>
                            </TableRow>
                        </TableHead>
                        {data && (
                            <TableBody>
                                {data.author.map((row) => (
                                    <TableRow key={row.id}>
                                        <TableCell>{row.lastname}</TableCell>
                                        <TableCell>{row.firstname}</TableCell>
                                        <TableCell>
                                            {row.book.map((b) =>
                                                row.book.indexOf(b) > 0 ? b.title + ' | ' : b.title
                                            )}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        )}
                    </Table>
                </TableContainer>
            )}
        </>
    );
};

export default DataTable;
