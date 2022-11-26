import React from "react";
import Table from "@mui/material/Table"
import Checkbox from "@mui/material/Checkbox"
import { TableBody, TableCell, TableHead } from "@mui/material";
import "../style.css"


export default function Orders() {
    return (
        <div className="products">
            <Table>
                <Checkbox />
                <TableHead>
                    <Checkbox /> 
                    <TableCell>Column 1</TableCell>
                    <TableCell>Column 2</TableCell>
                </TableHead>
                <hr/>
                <TableBody>
                    <Checkbox />
                    <TableCell>Hello</TableCell>
                    <TableCell>World</TableCell>
                </TableBody>
                <hr/>
                <TableBody>
                    <Checkbox />
                    <TableCell>Diego </TableCell>
                    <TableCell>is Awesome</TableCell>
                </TableBody>
                <hr/>
                <TableBody>
                    <Checkbox />
                    <TableCell>Mui</TableCell>
                    <TableCell>is amazing</TableCell>
                </TableBody>
                <hr/>
            </Table>
        </div>
    )
}