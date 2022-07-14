import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import './index.css'

const Info = () => {
    return (
        <Card sx={{minWidth: 300}} className={'info-card'}>
            <CardContent>
                <Typography variant="h6" component="div">
                    111
                </Typography>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    sss
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Info;