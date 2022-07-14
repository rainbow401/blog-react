import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './index.css'


const User = ( e: { name: string, detail: string }) => {
    return (
        <Card sx={{minWidth: 300, minHeight: 200}} className={'user-card'}>
            <CardContent>
                <Typography variant="h6" component="div">
                    {e.name}
                </Typography>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    {e.detail}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default User;