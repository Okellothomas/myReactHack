import React from "react";
import Table from "@mui/material/Table"
import Checkbox from "@mui/material/Checkbox"
import { TableBody, TableCell, TableHead } from "@mui/material";
import "../style.css"


export default function Users() {
    return (
        <div className="products">
            <Table>
                <Checkbox />
                <TableHead>
                    <Checkbox /> 
                    <TableCell>Column 1</TableCell>
                    <TableCell>Column 2</TableCell>
                    <TableCell>Column 1</TableCell>
                    <TableCell>Column 2</TableCell>
                </TableHead>
                <hr/>
                <TableBody>
                    <Checkbox />
                    <TableCell>Column 1</TableCell>
                    <TableCell>Column 2</TableCell>
                    <TableCell>Column 1</TableCell>
                    <TableCell>Column 2</TableCell>
                </TableBody>
                <hr/>
                <TableBody>
                    <Checkbox />
                    <TableCell>Column 1</TableCell>
                    <TableCell>Column 2</TableCell>
                    <TableCell>Column 1</TableCell>
                    <TableCell>Column 2</TableCell>
                </TableBody>
                <hr/>
                <TableBody>
                    <Checkbox />
                    <TableCell>Column 1</TableCell>
                    <TableCell>Column 2</TableCell>
                    <TableCell>Column 1</TableCell>
                    <TableCell>Column 2</TableCell>
                </TableBody>
            </Table>
            <hr/>
        </div>
    )
}