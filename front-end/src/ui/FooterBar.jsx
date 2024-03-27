import React from "react";
import { Toolbar, Typography } from "@mui/material";
import CoffeeIcon from '@mui/icons-material/Coffee';


export default function FooterBar() {
    return (
        <Toolbar
        variant="dense"
        component="footer"
        sx={{
            position: 'fixed',
            bottom: 0,
            justifyContent:'center',
            width: '100vw',
            backgroundColor: 'action.disabledBackground'

        }}
        >
            
            <Typography variant="caption"
            sx={{
                '& a': {
                    color: 'secondary.light'
                }
            }}
            >
                Desenvolvido com <CoffeeIcon fontSize="small"/> por
                <a href="mailto:adriano@rodrigues.com.br "> Adriano Rodrigues </a>,
                2024

            </Typography>
        </Toolbar>
    )
}